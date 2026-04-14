import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import {
  buildInquiryMailMeta,
  getInquiryMailSetupError,
  sendInquiryAcknowledgmentEmail,
  sendInquiryInternalEmail,
} from '@/lib/inquiry-mailer'
import { type InquiryPayload, type InquiryResultStatus } from '@/lib/inquiry'

type DeliveryChannel = 'internal_email' | 'customer_receipt' | 'webhook' | 'file_backup'

type DeliveryResult = {
  status: InquiryResultStatus
  inquiryId: string
  channelsSucceeded: DeliveryChannel[]
  channelsFailed: DeliveryChannel[]
  message: string
  messageZh: string
  warning?: string
  backupStored?: boolean
}

type RateLimitStore = Map<string, number[]>

type SequenceState = {
  dateKey: string
  counter: number
  lock: Promise<void>
}

const INQUIRY_STORAGE_DIR = process.env.INQUIRY_STORAGE_DIR?.trim() || path.join(os.tmpdir(), 'onemind-inquiries')
const RATE_LIMIT_WINDOW_MS = Number(process.env.INQUIRY_RATE_LIMIT_WINDOW_MS || `${10 * 60 * 1000}`)
const RATE_LIMIT_MAX_ATTEMPTS = Number(process.env.INQUIRY_RATE_LIMIT_MAX_ATTEMPTS || '5')
const MIN_DWELL_TIME_MS = Number(process.env.INQUIRY_MIN_DWELL_TIME_MS || '2500')
const MAX_LINK_COUNT = Number(process.env.INQUIRY_MAX_LINK_COUNT || '4')

const rateLimitStore: RateLimitStore = globalThis.__onemindInquiryRateLimit ?? new Map<string, number[]>()
if (!globalThis.__onemindInquiryRateLimit) {
  globalThis.__onemindInquiryRateLimit = rateLimitStore
}

const sequenceState: SequenceState = globalThis.__onemindInquirySequence ?? {
  dateKey: '',
  counter: 0,
  lock: Promise.resolve(),
}
if (!globalThis.__onemindInquirySequence) {
  globalThis.__onemindInquirySequence = sequenceState
}

declare global {
  var __onemindInquiryRateLimit: RateLimitStore | undefined
  var __onemindInquirySequence: SequenceState | undefined
}

function getClientIp(headers: Headers) {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown'
  return headers.get('x-real-ip') || 'unknown'
}

function getUserAgent(headers: Headers) {
  return headers.get('user-agent') || 'unknown'
}

function getCounterFilePath(dateKey: string) {
  return path.join(INQUIRY_STORAGE_DIR, 'counters', `${dateKey}.txt`)
}

async function readPersistedDailyCounter(dateKey: string) {
  try {
    const value = await readFile(getCounterFilePath(dateKey), 'utf8')
    const parsed = Number.parseInt(value.trim(), 10)
    return Number.isFinite(parsed) ? parsed : 0
  } catch {
    return 0
  }
}

async function persistDailyCounter(dateKey: string, counter: number) {
  const counterFilePath = getCounterFilePath(dateKey)
  await mkdir(path.dirname(counterFilePath), { recursive: true })
  await writeFile(counterFilePath, String(counter), 'utf8')
}

function formatInquiryDateKey(value: string) {
  const date = new Date(value)
  const safeDate = Number.isFinite(date.getTime()) ? date : new Date()
  const year = safeDate.getUTCFullYear()
  const month = `${safeDate.getUTCMonth() + 1}`.padStart(2, '0')
  const day = `${safeDate.getUTCDate()}`.padStart(2, '0')
  return `${year}${month}${day}`
}

export async function generateInquiryId(submittedAt: string) {
  const dateKey = formatInquiryDateKey(submittedAt)
  let releaseLock = () => {}
  const previousLock = sequenceState.lock
  sequenceState.lock = new Promise<void>((resolve) => {
    releaseLock = resolve
  })

  await previousLock

  try {
    if (sequenceState.dateKey !== dateKey) {
      sequenceState.dateKey = dateKey
      sequenceState.counter = await readPersistedDailyCounter(dateKey)
    }

    sequenceState.counter += 1
    await persistDailyCounter(dateKey, sequenceState.counter)

    const digits = Math.max(3, String(sequenceState.counter).length)
    return `ONM-${dateKey}-${String(sequenceState.counter).padStart(digits, '0')}`
  } finally {
    releaseLock()
  }
}

export function checkInquiryRateLimit(ip: string) {
  const now = Date.now()
  const recent = (rateLimitStore.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)

  if (recent.length >= RATE_LIMIT_MAX_ATTEMPTS) {
    rateLimitStore.set(ip, recent)
    return false
  }

  recent.push(now)
  rateLimitStore.set(ip, recent)
  return true
}

export function detectInquirySpam(payload: InquiryPayload) {
  if (payload.website) return 'Suspicious submission detected.'

  if (payload.startedAt) {
    const startedAt = Date.parse(payload.startedAt)
    const submittedAt = Date.parse(payload.submittedAt)

    if (Number.isFinite(startedAt) && Number.isFinite(submittedAt)) {
      if (submittedAt - startedAt < MIN_DWELL_TIME_MS) {
        return 'Please take a moment to complete the form and try again.'
      }

      if (startedAt > submittedAt + 10_000) {
        return 'The form timing was invalid. Please refresh the page and try again.'
      }
    }
  }

  const linkCount = (payload.message.match(/https?:\/\/|www\./gi) || []).length
  if (linkCount > MAX_LINK_COUNT) {
    return 'Please remove excessive links and try again.'
  }

  return ''
}

async function persistInquiryBackup(record: Record<string, unknown>) {
  const targetFile = path.join(INQUIRY_STORAGE_DIR, 'inquiries.ndjson')
  await mkdir(INQUIRY_STORAGE_DIR, { recursive: true })
  await appendFile(targetFile, `${JSON.stringify(record)}\n`, 'utf8')
}

async function sendInquiryWebhook(record: Record<string, unknown>) {
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL?.trim()
  if (!webhookUrl) return false

  const token = process.env.INQUIRY_WEBHOOK_TOKEN?.trim()
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(record),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Webhook request failed with status ${response.status}.`)
  }

  return true
}

export async function deliverInquiry(payload: InquiryPayload, headers: Headers): Promise<DeliveryResult> {
  const inquiryId = await generateInquiryId(payload.submittedAt)
  const ip = getClientIp(headers)
  const userAgent = getUserAgent(headers)
  const channelsSucceeded: DeliveryChannel[] = []
  const channelsFailed: DeliveryChannel[] = []
  const mailMeta = buildInquiryMailMeta(payload, inquiryId, ip, userAgent)

  const baseRecord = {
    inquiryId,
    inquiry: payload,
    meta: {
      ip,
      userAgent,
      receivedAt: new Date().toISOString(),
    },
  }

  const mailSetupError = getInquiryMailSetupError()
  if (mailSetupError) {
    channelsFailed.push('internal_email', 'customer_receipt')
    let backupStored = false

    try {
      await persistInquiryBackup({
        ...baseRecord,
        failureStage: 'mail_setup',
        mailSetupError,
      })
      backupStored = true
      channelsSucceeded.push('file_backup')
    } catch (backupError) {
      console.error('[ONEMIND Inquiry] backup persistence failed', backupError)
      channelsFailed.push('file_backup')
    }

    return {
      status: 'failure',
      inquiryId,
      channelsSucceeded,
      channelsFailed,
      backupStored,
      message: 'Inquiry intake is temporarily unavailable. Please try again shortly or email contact@onemindsys.com directly.',
      messageZh: '当前在线询盘通道暂时不可用，请稍后重试，或直接发送邮件至 contact@onemindsys.com。',
    }
  }

  try {
    await sendInquiryInternalEmail(payload, mailMeta)
    channelsSucceeded.push('internal_email')
  } catch (error) {
    channelsFailed.push('internal_email', 'customer_receipt')
    console.error('[ONEMIND Inquiry] internal email delivery failed', error)

    let backupStored = false
    try {
      await persistInquiryBackup({
        ...baseRecord,
        failureStage: 'internal_email',
      })
      backupStored = true
      channelsSucceeded.push('file_backup')
    } catch (backupError) {
      channelsFailed.push('file_backup')
      console.error('[ONEMIND Inquiry] backup persistence failed', backupError)
    }

    return {
      status: 'failure',
      inquiryId,
      channelsSucceeded,
      channelsFailed,
      backupStored,
      message: 'We could not route your inquiry at this time. Please try again shortly or email contact@onemindsys.com and reference the Inquiry ID shown below.',
      messageZh: '当前无法将您的询盘路由给团队，请稍后重试，或直接发送邮件至 contact@onemindsys.com，并引用下方 Inquiry ID。',
    }
  }

  let warning = ''

  try {
    await sendInquiryAcknowledgmentEmail(payload, mailMeta)
    channelsSucceeded.push('customer_receipt')
  } catch (error) {
    channelsFailed.push('customer_receipt')
    warning = 'Your inquiry was received, but the confirmation email could not be delivered automatically.'
    console.error('[ONEMIND Inquiry] customer acknowledgment failed', error)
  }

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL?.trim()
  if (webhookUrl) {
    try {
      await sendInquiryWebhook(baseRecord)
      channelsSucceeded.push('webhook')
    } catch (error) {
      channelsFailed.push('webhook')
      console.error('[ONEMIND Inquiry] webhook delivery failed', error)
      try {
        await persistInquiryBackup({
          ...baseRecord,
          failureStage: 'webhook',
        })
        if (!channelsSucceeded.includes('file_backup')) {
          channelsSucceeded.push('file_backup')
        }
      } catch (backupError) {
        if (!channelsFailed.includes('file_backup')) {
          channelsFailed.push('file_backup')
        }
        console.error('[ONEMIND Inquiry] backup persistence failed', backupError)
      }
    }
  }

  if (channelsFailed.includes('customer_receipt')) {
    try {
      await persistInquiryBackup({
        ...baseRecord,
        failureStage: 'customer_receipt',
      })
      if (!channelsSucceeded.includes('file_backup')) {
        channelsSucceeded.push('file_backup')
      }
    } catch (backupError) {
      if (!channelsFailed.includes('file_backup')) {
        channelsFailed.push('file_backup')
      }
      console.error('[ONEMIND Inquiry] backup persistence failed', backupError)
    }

    return {
      status: 'partial_success',
      inquiryId,
      channelsSucceeded,
      channelsFailed,
      warning,
      message:
        'Your inquiry has been received and assigned an Inquiry ID. Our team has received your request, although the confirmation email could not be sent automatically.',
      messageZh: '您的询盘已接收并生成 Inquiry ID。我们的团队已收到您的请求，但自动确认邮件未能成功发送。',
    }
  }

  return {
    status: 'success',
    inquiryId,
    channelsSucceeded,
    channelsFailed,
    message: 'Your inquiry has been received. Our team will review it and respond in due course.',
    messageZh: '您的询盘已成功接收，我们的团队将尽快审阅并回复。',
  }
}
