import { NextResponse } from 'next/server'
import { normalizeInquiryPayload, validateInquiryPayload } from '@/lib/inquiry'
import { checkInquiryRateLimit, deliverInquiry, detectInquirySpam } from '@/lib/inquiry-server'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const receivedAt = new Date().toISOString()
    const { data, errors, isValid } = validateInquiryPayload(body)

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          status: 'failure',
          message: 'Please review the required fields and try again.',
          fieldErrors: errors,
        },
        { status: 400 },
      )
    }

    const inquiry = normalizeInquiryPayload({
      ...data,
      referrer: data.referrer || request.headers.get('referer') || '',
      locale: data.locale || request.headers.get('accept-language')?.split(',')[0] || 'zh-CN',
      submittedAt: receivedAt,
    })

    const spamMessage = detectInquirySpam(inquiry)
    if (spamMessage) {
      return NextResponse.json(
        {
          success: false,
          status: 'failure',
          message: spamMessage,
        },
        { status: 400 },
      )
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
    if (!checkInquiryRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          status: 'failure',
          message: 'Too many submissions in a short period. Please try again later.',
        },
        { status: 429 },
      )
    }

    const result = await deliverInquiry(inquiry, request.headers)
    const statusCode = result.status === 'success' ? 200 : result.status === 'partial_success' ? 202 : 503

    return NextResponse.json(
      {
        success: result.status !== 'failure',
        status: result.status,
        message: result.message,
        messageZh: result.messageZh,
        inquiryId: result.inquiryId,
        referenceId: result.inquiryId,
        channelsSucceeded: result.channelsSucceeded,
        channelsFailed: result.channelsFailed,
        warning: result.warning,
        backupStored: result.backupStored || false,
      },
      { status: statusCode },
    )
  } catch (error) {
    console.error('[ONEMIND Inquiry] unexpected server error', error)
    return NextResponse.json(
      {
        success: false,
        status: 'failure',
        message: 'We could not submit your inquiry right now. Please try again shortly.',
        messageZh: '当前提交失败，请稍后重试。',
      },
      { status: 500 },
    )
  }
}
