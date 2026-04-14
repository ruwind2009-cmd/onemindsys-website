import nodemailer, { type Transporter } from 'nodemailer'
import type { InquiryPayload } from '@/lib/inquiry'

type InquiryMailConfig = {
  host: string
  port: number
  secure: boolean
  requireTLS: boolean
  user?: string
  pass?: string
  from: string
  acknowledgmentFrom: string
  to: string
  cc?: string
  replyTo: string
}

type InquiryMeta = {
  inquiryId: string
  submittedAtLabel: string
  ip: string
  userAgent: string
}

let cachedTransporter: Transporter | null = null

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatMultilineHtml(value: string) {
  return escapeHtml(value).replace(/\n/g, '<br />')
}

function textOrDash(value: string) {
  return value || '-'
}

function formatDateLabel(value: string) {
  const date = new Date(value)
  if (!Number.isFinite(date.getTime())) return value

  return `${date.toISOString().replace('T', ' ').replace('.000Z', ' UTC')}`
}

function buildMailConfig(): InquiryMailConfig {
  const host = process.env.SMTP_HOST?.trim() || ''
  const port = Number(process.env.SMTP_PORT || '587')
  const secure = process.env.SMTP_SECURE === 'true'
  const requireTLS = process.env.SMTP_REQUIRE_TLS !== 'false'
  const user = process.env.SMTP_USER?.trim() || undefined
  const pass = process.env.SMTP_PASS?.trim() || undefined
  const from = process.env.INQUIRY_FROM_EMAIL?.trim() || user || 'admin@onemindsys.com'
  const acknowledgmentFrom = process.env.INQUIRY_ACK_FROM_EMAIL?.trim() || from
  const to = process.env.INQUIRY_TO_EMAIL?.trim() || 'contact@onemindsys.com'
  const cc = process.env.INQUIRY_CC_EMAIL?.trim() || 'admin@onemindsys.com'
  const replyTo = process.env.INQUIRY_REPLY_TO_EMAIL?.trim() || 'contact@onemindsys.com'

  if (!host) {
    throw new Error('SMTP_HOST is not configured.')
  }

  if (!Number.isFinite(port) || port <= 0) {
    throw new Error('SMTP_PORT is invalid.')
  }

  if (!from) {
    throw new Error('INQUIRY_FROM_EMAIL is not configured.')
  }

  return {
    host,
    port,
    secure,
    requireTLS,
    user,
    pass,
    from,
    acknowledgmentFrom,
    to,
    cc,
    replyTo,
  }
}

function getTransporter() {
  if (cachedTransporter) return cachedTransporter

  const config = buildMailConfig()
  cachedTransporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: config.requireTLS,
    auth: config.user && config.pass ? { user: config.user, pass: config.pass } : undefined,
  })

  return cachedTransporter
}

function buildInternalSubject(payload: InquiryPayload, inquiryId: string) {
  return `[${inquiryId}] New Inquiry from ${payload.fullName}`
}

function buildAcknowledgmentSubject(inquiryId: string) {
  return `Inquiry Receipt [${inquiryId}] — ONEMIND SYSTEMS`
}

function buildInternalText(payload: InquiryPayload, meta: InquiryMeta) {
  return [
    'ONEMIND SYSTEMS',
    'New website inquiry received.',
    '',
    `Inquiry ID: ${meta.inquiryId}`,
    `Submitted At: ${meta.submittedAtLabel}`,
    '',
    'Contact Details',
    `Full Name: ${payload.fullName}`,
    `Company: ${textOrDash(payload.company)}`,
    `Email: ${payload.email}`,
    `Country: ${textOrDash(payload.country)}`,
    '',
    'Message',
    payload.message,
    '',
    'Submission Metadata',
    `Source Page: ${textOrDash(payload.sourcePage)}`,
    `Locale: ${textOrDash(payload.locale)}`,
    `Referrer: ${textOrDash(payload.referrer)}`,
    `IP Address: ${textOrDash(meta.ip)}`,
    `User Agent: ${textOrDash(meta.userAgent)}`,
  ].join('\n')
}

function buildInternalHtml(payload: InquiryPayload, meta: InquiryMeta) {
  const rows = [
    ['Inquiry ID', meta.inquiryId],
    ['Submitted At', meta.submittedAtLabel],
    ['Full Name', payload.fullName],
    ['Company', textOrDash(payload.company)],
    ['Email', payload.email],
    ['Country', textOrDash(payload.country)],
    ['Source Page', textOrDash(payload.sourcePage)],
    ['Locale', textOrDash(payload.locale)],
    ['Referrer', textOrDash(payload.referrer)],
    ['IP Address', textOrDash(meta.ip)],
  ]

  return `
    <div style="font-family:Arial,sans-serif;background:#f5f7fa;padding:24px;color:#0f172a;">
      <div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;">
        <div style="padding:24px 28px;border-bottom:1px solid #e2e8f0;background:#f8fafc;">
          <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#64748b;font-weight:700;">ONEMIND SYSTEMS</div>
          <h1 style="margin:14px 0 0;font-size:26px;line-height:1.2;color:#0f172a;">New Inquiry Received</h1>
        </div>
        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;">
            <tbody>
              ${rows
                .map(
                  ([label, value]) => `
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #edf2f7;width:34%;font-size:13px;font-weight:700;color:#475569;vertical-align:top;">
                        ${escapeHtml(label)}
                      </td>
                      <td style="padding:10px 0;border-bottom:1px solid #edf2f7;font-size:14px;color:#0f172a;">
                        ${escapeHtml(value)}
                      </td>
                    </tr>
                  `,
                )
                .join('')}
            </tbody>
          </table>
          <div style="margin-top:24px;">
            <div style="font-size:13px;font-weight:700;color:#475569;text-transform:uppercase;letter-spacing:0.08em;">Message</div>
            <div style="margin-top:10px;padding:18px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fafc;font-size:14px;line-height:1.7;color:#0f172a;">
              ${formatMultilineHtml(payload.message)}
            </div>
          </div>
          <p style="margin:20px 0 0;font-size:13px;line-height:1.7;color:#64748b;">
            Reply directly to this email to respond to ${escapeHtml(payload.fullName)} at ${escapeHtml(payload.email)}.
          </p>
        </div>
      </div>
    </div>
  `.trim()
}

function buildAcknowledgmentText(payload: InquiryPayload, meta: InquiryMeta) {
  return [
    `Dear ${payload.fullName},`,
    '',
    'Thank you for contacting ONEMIND SYSTEMS.',
    '',
    'Your inquiry has been received and is currently under review by our team.',
    '',
    `Inquiry ID: ${meta.inquiryId}`,
    `Submitted At: ${meta.submittedAtLabel}`,
    '',
    'A member of our team will review your request and respond within a reasonable timeframe.',
    'If you need to add information, please reply to this email and reference the Inquiry ID above.',
    '',
    'Regards,',
    'ONEMIND SYSTEMS',
    'contact@onemindsys.com',
  ].join('\n')
}

function buildAcknowledgmentHtml(payload: InquiryPayload, meta: InquiryMeta) {
  return `
    <div style="font-family:Arial,sans-serif;background:#f5f7fa;padding:24px;color:#0f172a;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;">
        <div style="padding:24px 28px;border-bottom:1px solid #e2e8f0;background:#f8fafc;">
          <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#64748b;font-weight:700;">ONEMIND SYSTEMS</div>
          <h1 style="margin:14px 0 0;font-size:26px;line-height:1.2;color:#0f172a;">Inquiry Received</h1>
        </div>
        <div style="padding:28px;">
          <p style="margin:0 0 14px;font-size:15px;line-height:1.8;color:#0f172a;">Dear ${escapeHtml(payload.fullName)},</p>
          <p style="margin:0 0 14px;font-size:15px;line-height:1.8;color:#334155;">
            Thank you for contacting ONEMIND SYSTEMS.
          </p>
          <p style="margin:0 0 18px;font-size:15px;line-height:1.8;color:#334155;">
            Your inquiry has been received and is currently under review by our team.
          </p>
          <div style="padding:18px 20px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fafc;">
            <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;font-weight:700;">Inquiry Reference</div>
            <div style="margin-top:8px;font-size:24px;font-weight:700;color:#0f172a;">${escapeHtml(meta.inquiryId)}</div>
            <div style="margin-top:8px;font-size:14px;color:#475569;">Submitted At: ${escapeHtml(meta.submittedAtLabel)}</div>
          </div>
          <p style="margin:18px 0 0;font-size:15px;line-height:1.8;color:#334155;">
            A member of our team will review your request and respond within a reasonable timeframe.
            If you need to add information, please reply to this email and reference the Inquiry ID above.
          </p>
          <p style="margin:22px 0 0;font-size:15px;line-height:1.8;color:#334155;">
            Regards,<br />
            ONEMIND SYSTEMS<br />
            <a href="mailto:contact@onemindsys.com" style="color:#0f172a;text-decoration:none;">contact@onemindsys.com</a>
          </p>
        </div>
      </div>
    </div>
  `.trim()
}

export function getInquiryMailSetupError() {
  try {
    buildMailConfig()
    return ''
  } catch (error) {
    return error instanceof Error ? error.message : 'Inquiry mail transport is not configured.'
  }
}

export async function sendInquiryInternalEmail(payload: InquiryPayload, meta: InquiryMeta) {
  const transporter = getTransporter()
  const config = buildMailConfig()

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    cc: config.cc,
    replyTo: payload.email,
    subject: buildInternalSubject(payload, meta.inquiryId),
    text: buildInternalText(payload, meta),
    html: buildInternalHtml(payload, meta),
  })
}

export async function sendInquiryAcknowledgmentEmail(payload: InquiryPayload, meta: InquiryMeta) {
  const transporter = getTransporter()
  const config = buildMailConfig()

  await transporter.sendMail({
    from: config.acknowledgmentFrom,
    to: payload.email,
    replyTo: config.replyTo,
    subject: buildAcknowledgmentSubject(meta.inquiryId),
    text: buildAcknowledgmentText(payload, meta),
    html: buildAcknowledgmentHtml(payload, meta),
  })
}

export function buildInquiryMailMeta(payload: InquiryPayload, inquiryId: string, ip: string, userAgent: string): InquiryMeta {
  return {
    inquiryId,
    submittedAtLabel: formatDateLabel(payload.submittedAt),
    ip,
    userAgent,
  }
}
