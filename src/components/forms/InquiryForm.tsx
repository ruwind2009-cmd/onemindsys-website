'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { INITIAL_INQUIRY_FORM, type InquiryErrors, type InquiryPayload, validateInquiryPayload } from '@/lib/inquiry'

type SubmitResult = {
  inquiryId: string
  status: 'success' | 'partial_success'
  warning?: string
  message: string
}

type SubmitFailure = {
  message: string
  inquiryId?: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const INTEREST_OPTIONS = [
  'Project finance structuring',
  'RWA readiness',
  'Stablecoin settlement',
  'Investor package',
  'Government-backed financing',
  'Other',
]

const DOCUMENT_OPTIONS = [
  'Feasibility study',
  'PPA / offtake agreement',
  'Government letter / LOI / LOA',
  'EPC proposal',
  'Financial model',
  'Land/permit documents',
  'Company documents',
  'Other',
]

function FieldError({ message }: { message?: string }) {
  if (!message) return null

  return <p className="form-error">{message}</p>
}

export function InquiryForm() {
  const [formData, setFormData] = useState<InquiryPayload>(INITIAL_INQUIRY_FORM)
  const [errors, setErrors] = useState<InquiryErrors>({})
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [submitted, setSubmitted] = useState<SubmitResult | null>(null)
  const [submitFailure, setSubmitFailure] = useState<SubmitFailure | null>(null)

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      sourcePage: window.location.pathname,
      locale: window.navigator.language || 'en',
      referrer: document.referrer || '',
      startedAt: new Date().toISOString(),
    }))
  }, [])

  const resetMeta = () => ({
    sourcePage: window.location.pathname,
    locale: window.navigator.language || 'en',
    referrer: document.referrer || '',
    startedAt: new Date().toISOString(),
  })

  const handleChange = <K extends keyof InquiryPayload>(field: K, value: InquiryPayload[K]) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))

    if (submitState === 'error') {
      setSubmitState('idle')
      setSubmitFailure(null)
    }
  }

  const toggleArrayValue = (field: 'interestedIn' | 'documentsAvailable', value: string) => {
    const currentValue = formData[field]
    const nextValue = currentValue.includes(value)
      ? currentValue.filter((item) => item !== value)
      : [...currentValue, value]

    handleChange(field, nextValue)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validation = validateInquiryPayload({
      ...formData,
      submittedAt: new Date().toISOString(),
    })
    setErrors(validation.errors)

    if (!validation.isValid) return

    setSubmitState('submitting')
    setSubmitFailure(null)

    try {
      const payload = {
        ...validation.data,
        sourcePage: window.location.pathname,
        locale: window.navigator.language || formData.locale || 'en',
        referrer: document.referrer || formData.referrer || '',
      }

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        if (result?.fieldErrors) {
          setErrors((current) => ({ ...current, ...result.fieldErrors }))
        }

        setSubmitState('error')
        setSubmitFailure({
          message:
            result?.message ||
            'We could not receive your project inquiry at this time. Please try again shortly or email contact@onemindsys.com.',
          inquiryId: result?.inquiryId,
        })
        return
      }

      setSubmitted({
        inquiryId: result.inquiryId,
        status: result.status,
        warning: result.warning,
        message: result.message,
      })
      setSubmitState('success')
      setErrors({})
      setFormData({
        ...INITIAL_INQUIRY_FORM,
        ...resetMeta(),
      })
    } catch {
      setSubmitState('error')
      setSubmitFailure({
        message: 'We could not receive your project inquiry at this time. Please try again shortly or email contact@onemindsys.com.',
      })
    }
  }

  if (submitted) {
    return (
      <div className="contact-form">
        <div className="contact-form__eyebrow">Inquiry Received</div>
        <h2 className="contact-form__title">Your project inquiry has been received.</h2>
        <p className="contact-form__copy">{submitted.message}</p>
        <div className="contact-form__status">
          <div className="contact-form__status-label">Inquiry ID</div>
          <div className="contact-form__status-value">{submitted.inquiryId}</div>
        </div>
        {submitted.warning ? <p className="contact-form__copy contact-form__copy--compact">{submitted.warning}</p> : null}
        <div className="internal-actions mt-8">
          <button
            type="button"
            className="institutional-button institutional-button--primary"
            onClick={() => {
              setSubmitted(null)
              setSubmitState('idle')
            }}
          >
            Submit Another Project
          </button>
          <Link href="/tokenization-readiness" className="institutional-button institutional-button--secondary">
            Review Readiness Criteria
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form id="inquiry-form" className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__eyebrow">Web3 Project Intake</div>
      <h2 className="contact-form__title">Submit a real-world project for preliminary structuring review.</h2>
      <p className="contact-form__copy">
        This intake helps ONEMIND evaluate project substance, bankability, documentation readiness, RWA suitability, and
        whether a stablecoin settlement or investor package discussion is appropriate.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <input
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
          value={formData.website}
          onChange={(event) => handleChange('website', event.target.value)}
        />

        <div className="form-field">
          <label htmlFor="fullName" className="form-label">
            Name
          </label>
          <input
            id="fullName"
            className="form-input"
            placeholder="Full name"
            value={formData.fullName}
            maxLength={120}
            onChange={(event) => handleChange('fullName', event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
          />
          <FieldError message={errors.fullName} />
        </div>

        <div className="form-field">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            id="company"
            className="form-input"
            placeholder="Company or project sponsor"
            value={formData.company}
            maxLength={160}
            onChange={(event) => handleChange('company', event.target.value)}
            aria-invalid={Boolean(errors.company)}
          />
          <FieldError message={errors.company} />
        </div>

        <div className="form-field">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder="name@company.com"
            value={formData.email}
            maxLength={160}
            onChange={(event) => handleChange('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          <FieldError message={errors.email} />
        </div>

        <div className="form-field">
          <label htmlFor="phone" className="form-label">
            WhatsApp / Telegram / Phone
          </label>
          <input
            id="phone"
            className="form-input"
            placeholder="+971 ... / @telegram"
            value={formData.phone}
            maxLength={80}
            onChange={(event) => handleChange('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
          <FieldError message={errors.phone} />
        </div>

        <div className="form-field">
          <label htmlFor="country" className="form-label">
            Project Country
          </label>
          <input
            id="country"
            className="form-input"
            placeholder="Country or jurisdiction"
            value={formData.country}
            maxLength={80}
            onChange={(event) => handleChange('country', event.target.value)}
            aria-invalid={Boolean(errors.country)}
          />
          <FieldError message={errors.country} />
        </div>

        <div className="form-field">
          <label htmlFor="sector" className="form-label">
            Project Type
          </label>
          <input
            id="sector"
            className="form-input"
            placeholder="Solar / Power / Infrastructure / Other"
            value={formData.sector}
            maxLength={120}
            onChange={(event) => handleChange('sector', event.target.value)}
            aria-invalid={Boolean(errors.sector)}
          />
          <FieldError message={errors.sector} />
        </div>

        <div className="form-field">
          <label htmlFor="totalProjectSize" className="form-label">
            Project Size / Capacity
          </label>
          <input
            id="totalProjectSize"
            className="form-input"
            placeholder="20MW, 1,000MW, USD 150 million CAPEX..."
            value={formData.totalProjectSize}
            maxLength={120}
            onChange={(event) => handleChange('totalProjectSize', event.target.value)}
            aria-invalid={Boolean(errors.totalProjectSize)}
          />
          <FieldError message={errors.totalProjectSize} />
        </div>

        <div className="form-field">
          <label htmlFor="estimatedFundingRequirement" className="form-label">
            Estimated Funding Requirement
          </label>
          <input
            id="estimatedFundingRequirement"
            className="form-input"
            placeholder="USD 30 million"
            value={formData.estimatedFundingRequirement}
            maxLength={120}
            onChange={(event) => handleChange('estimatedFundingRequirement', event.target.value)}
            aria-invalid={Boolean(errors.estimatedFundingRequirement)}
          />
          <FieldError message={errors.estimatedFundingRequirement} />
        </div>

        <div className="form-field">
          <label htmlFor="projectStage" className="form-label">
            Project Stage
          </label>
          <select
            id="projectStage"
            className="form-input"
            value={formData.projectStage}
            onChange={(event) => handleChange('projectStage', event.target.value)}
            aria-invalid={Boolean(errors.projectStage)}
          >
            <option value="">Select stage</option>
            <option value="concept">Concept / early-stage structuring</option>
            <option value="feasibility">Feasibility / development</option>
            <option value="permitted">Permitted / approved</option>
            <option value="epc-procurement">EPC / procurement coordination</option>
            <option value="ready-for-financing">Ready for financing review</option>
            <option value="under-negotiation">Already under financing discussion</option>
            <option value="operating-asset">Operating asset / refinancing</option>
          </select>
          <FieldError message={errors.projectStage} />
        </div>

        <div className="form-field">
          <label htmlFor="governmentSupportAvailable" className="form-label">
            Government Support?
          </label>
          <select
            id="governmentSupportAvailable"
            className="form-input"
            value={formData.governmentSupportAvailable}
            onChange={(event) => handleChange('governmentSupportAvailable', event.target.value)}
            aria-invalid={Boolean(errors.governmentSupportAvailable)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="under-discussion">Under discussion</option>
          </select>
          <FieldError message={errors.governmentSupportAvailable} />
        </div>

        <div className="form-field">
          <label htmlFor="offtakeOrRevenueContract" className="form-label">
            Offtake or Revenue Contract?
          </label>
          <select
            id="offtakeOrRevenueContract"
            className="form-input"
            value={formData.offtakeOrRevenueContract}
            onChange={(event) => handleChange('offtakeOrRevenueContract', event.target.value)}
            aria-invalid={Boolean(errors.offtakeOrRevenueContract)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="under-negotiation">Under negotiation</option>
          </select>
          <FieldError message={errors.offtakeOrRevenueContract} />
        </div>

        <div className="form-field md:col-span-2">
          <label className="form-label">Interested In</label>
          <div className="form-check-grid">
            {INTEREST_OPTIONS.map((option) => (
              <label key={option} className="form-check">
                <input
                  type="checkbox"
                  checked={formData.interestedIn.includes(option)}
                  onChange={() => toggleArrayValue('interestedIn', option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <FieldError message={errors.interestedIn} />
        </div>

        <div className="form-field md:col-span-2">
          <label htmlFor="message" className="form-label">
            Short Project Description
          </label>
          <textarea
            id="message"
            className="form-input form-textarea"
            placeholder="Describe the asset, sponsor, current status, revenue source, funding need, counterparties, and the main structuring constraint."
            value={formData.message}
            maxLength={3000}
            onChange={(event) => handleChange('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
          />
          <FieldError message={errors.message} />
        </div>

        <div className="form-field md:col-span-2">
          <label className="form-label">Documents Available</label>
          <div className="form-check-grid">
            {DOCUMENT_OPTIONS.map((option) => (
              <label key={option} className="form-check">
                <input
                  type="checkbox"
                  checked={formData.documentsAvailable.includes(option)}
                  onChange={() => toggleArrayValue('documentsAvailable', option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-form__notice">
        <label className="flex items-start gap-3 text-sm leading-7" style={{ color: '#5B6472' }}>
          <input
            type="checkbox"
            checked={formData.confidentialityAccepted}
            onChange={(event) => handleChange('confidentialityAccepted', event.target.checked)}
            className="mt-1 h-4 w-4 rounded border"
            style={{ borderColor: '#D1D5DB', accentColor: '#1E2A38' }}
            aria-invalid={Boolean(errors.confidentialityAccepted)}
            required
          />
          <span>
            I understand that ONEMIND provides advisory and structuring support only and does not provide legal, tax,
            custody, securities, or regulated financial services.
          </span>
        </label>
        <FieldError message={errors.confidentialityAccepted} />
      </div>

      <div className="internal-actions mt-8">
        <button type="submit" className="institutional-button institutional-button--primary" disabled={submitState === 'submitting'}>
          {submitState === 'submitting' ? 'Submitting...' : 'Submit Project for Review'}
        </button>
      </div>

      {submitFailure ? (
        <div className="contact-form__status mt-4">
          <div className="contact-form__status-label">Submission Unavailable</div>
          <p className="contact-form__copy contact-form__copy--compact">{submitFailure.message}</p>
          {submitFailure.inquiryId ? (
            <p className="contact-form__copy contact-form__copy--compact">Inquiry ID: {submitFailure.inquiryId}</p>
          ) : null}
        </div>
      ) : null}
    </form>
  )
}
