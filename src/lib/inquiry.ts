export type InquiryPayload = {
  fullName: string
  company: string
  email: string
  country: string
  message: string
  sourcePage: string
  submittedAt: string
  locale: string
  referrer: string
  startedAt: string
  website: string
}

export type InquiryErrors = Partial<Record<keyof InquiryPayload, string>>

export type InquiryResultStatus = 'success' | 'partial_success' | 'failure'

export const INITIAL_INQUIRY_FORM: InquiryPayload = {
  fullName: '',
  company: '',
  email: '',
  country: '',
  message: '',
  sourcePage: '/support',
  submittedAt: '',
  locale: '',
  referrer: '',
  startedAt: '',
  website: '',
}

const FIELD_LIMITS: Partial<Record<keyof InquiryPayload, number>> = {
  fullName: 120,
  company: 160,
  email: 160,
  country: 80,
  message: 3000,
  sourcePage: 120,
  locale: 40,
  referrer: 500,
  website: 120,
}

function cleanSingleLine(value: unknown) {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : ''
}

function cleanMultiline(value: unknown) {
  if (typeof value !== 'string') return ''

  return value
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validateMaxLength(errors: InquiryErrors, field: keyof InquiryPayload, value: string) {
  const maxLength = FIELD_LIMITS[field]
  if (maxLength && value.length > maxLength) {
    errors[field] = `Please keep this field within ${maxLength} characters.`
  }
}

export function normalizeInquiryPayload(input: Partial<InquiryPayload>): InquiryPayload {
  return {
    fullName: cleanSingleLine(input.fullName),
    company: cleanSingleLine(input.company),
    email: cleanSingleLine(input.email).toLowerCase(),
    country: cleanSingleLine(input.country),
    message: cleanMultiline(input.message),
    sourcePage: cleanSingleLine(input.sourcePage) || '/support',
    submittedAt: cleanSingleLine(input.submittedAt) || new Date().toISOString(),
    locale: cleanSingleLine(input.locale) || 'en',
    referrer: cleanSingleLine(input.referrer),
    startedAt: cleanSingleLine(input.startedAt),
    website: cleanSingleLine(input.website),
  }
}

export function validateInquiryPayload(input: Partial<InquiryPayload>) {
  const data = normalizeInquiryPayload(input)
  const errors: InquiryErrors = {}

  if (!data.fullName) {
    errors.fullName = 'Name is required.'
  } else {
    validateMaxLength(errors, 'fullName', data.fullName)
  }

  if (!data.company) {
    errors.company = 'Company is required.'
  } else {
    validateMaxLength(errors, 'company', data.company)
  }

  if (!data.email) {
    errors.email = 'Email is required.'
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Enter a valid email address.'
  } else {
    validateMaxLength(errors, 'email', data.email)
  }

  if (!data.country) {
    errors.country = 'Country is required.'
  } else {
    validateMaxLength(errors, 'country', data.country)
  }

  if (!data.message) {
    errors.message = 'Message is required.'
  } else if (data.message.length < 20) {
    errors.message = 'Please add a little more detail so we can understand the project.'
  } else {
    validateMaxLength(errors, 'message', data.message)
  }

  if (data.sourcePage) validateMaxLength(errors, 'sourcePage', data.sourcePage)
  if (data.locale) validateMaxLength(errors, 'locale', data.locale)
  if (data.referrer) validateMaxLength(errors, 'referrer', data.referrer)
  if (data.website) validateMaxLength(errors, 'website', data.website)

  return {
    data,
    errors,
    isValid: Object.keys(errors).length === 0,
  }
}
