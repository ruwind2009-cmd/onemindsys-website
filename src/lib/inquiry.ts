export type InquiryPayload = {
  fullName: string
  company: string
  email: string
  country: string
  phone: string
  projectName: string
  sector: string
  totalProjectSize: string
  projectStage: string
  governmentSupportAvailable: string
  repaymentSource: string
  sponsorEquityAvailable: string
  documentsReady: string
  message: string
  confidentialityAccepted: boolean
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
  phone: '',
  projectName: '',
  sector: '',
  totalProjectSize: '',
  projectStage: '',
  governmentSupportAvailable: '',
  repaymentSource: '',
  sponsorEquityAvailable: '',
  documentsReady: '',
  message: '',
  confidentialityAccepted: false,
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
  phone: 80,
  projectName: 180,
  sector: 120,
  totalProjectSize: 120,
  projectStage: 120,
  governmentSupportAvailable: 40,
  repaymentSource: 400,
  sponsorEquityAvailable: 40,
  documentsReady: 40,
  message: 3000,
  sourcePage: 120,
  locale: 40,
  referrer: 500,
  website: 120,
}

function cleanSingleLine(value: unknown) {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : ''
}

function cleanBoolean(value: unknown) {
  return value === true
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
    phone: cleanSingleLine(input.phone),
    projectName: cleanSingleLine(input.projectName),
    sector: cleanSingleLine(input.sector),
    totalProjectSize: cleanSingleLine(input.totalProjectSize),
    projectStage: cleanSingleLine(input.projectStage),
    governmentSupportAvailable: cleanSingleLine(input.governmentSupportAvailable).toLowerCase(),
    repaymentSource: cleanSingleLine(input.repaymentSource),
    sponsorEquityAvailable: cleanSingleLine(input.sponsorEquityAvailable).toLowerCase(),
    documentsReady: cleanSingleLine(input.documentsReady).toLowerCase(),
    message: cleanMultiline(input.message),
    confidentialityAccepted: cleanBoolean(input.confidentialityAccepted),
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
    errors.fullName = 'Full name is required.'
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

  if (!data.phone) {
    errors.phone = 'WhatsApp or phone is required.'
  } else {
    validateMaxLength(errors, 'phone', data.phone)
  }

  if (!data.projectName) {
    errors.projectName = 'Project name is required.'
  } else {
    validateMaxLength(errors, 'projectName', data.projectName)
  }

  if (!data.sector) {
    errors.sector = 'Sector is required.'
  } else {
    validateMaxLength(errors, 'sector', data.sector)
  }

  if (!data.totalProjectSize) {
    errors.totalProjectSize = 'Total project size is required.'
  } else {
    validateMaxLength(errors, 'totalProjectSize', data.totalProjectSize)
  }

  if (!data.projectStage) {
    errors.projectStage = 'Current project stage is required.'
  } else {
    validateMaxLength(errors, 'projectStage', data.projectStage)
  }

  if (!data.governmentSupportAvailable) {
    errors.governmentSupportAvailable = 'Please indicate whether government support documents are available.'
  } else {
    validateMaxLength(errors, 'governmentSupportAvailable', data.governmentSupportAvailable)
  }

  if (!data.repaymentSource) {
    errors.repaymentSource = 'Repayment source is required.'
  } else if (data.repaymentSource.length < 10) {
    errors.repaymentSource = 'Please provide a clearer repayment source.'
  } else {
    validateMaxLength(errors, 'repaymentSource', data.repaymentSource)
  }

  if (!data.sponsorEquityAvailable) {
    errors.sponsorEquityAvailable = 'Please indicate whether sponsor equity is available.'
  } else {
    validateMaxLength(errors, 'sponsorEquityAvailable', data.sponsorEquityAvailable)
  }

  if (!data.documentsReady) {
    errors.documentsReady = 'Please indicate whether core documents are ready.'
  } else {
    validateMaxLength(errors, 'documentsReady', data.documentsReady)
  }

  if (!data.message) {
    errors.message = 'Project summary is required.'
  } else if (data.message.length < 40) {
    errors.message = 'Please add enough detail for an initial pre-qualification review.'
  } else {
    validateMaxLength(errors, 'message', data.message)
  }

  if (!data.confidentialityAccepted) {
    errors.confidentialityAccepted = 'You must acknowledge the confidentiality and advisory notice.'
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
