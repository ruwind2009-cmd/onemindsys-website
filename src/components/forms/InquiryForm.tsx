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
          <div className="contact-form__status-label">
            Inquiry ID
          </div>
          <div className="contact-form__status-value">
            {submitted.inquiryId}
          </div>
        </div>
        {submitted.warning ? (
          <p className="contact-form__copy contact-form__copy--compact">
            {submitted.warning}
          </p>
        ) : null}
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
          <Link href="/documentation-checklist" className="institutional-button institutional-button--secondary">
            Review Checklist
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form id="inquiry-form" className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__eyebrow">Pre-Qualification Intake</div>
      <h2 className="contact-form__title">Submit project basis and sponsor readiness details.</h2>
      <p className="contact-form__copy">
        The form is intentionally structured to help screen for fit, documentation readiness, and seriousness before any deeper
        conversation begins.
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
            Full Name
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
            placeholder="Company name"
            value={formData.company}
            maxLength={160}
            onChange={(event) => handleChange('company', event.target.value)}
            aria-invalid={Boolean(errors.company)}
          />
          <FieldError message={errors.company} />
        </div>

        <div className="form-field">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            id="country"
            className="form-input"
            placeholder="Country"
            value={formData.country}
            maxLength={80}
            onChange={(event) => handleChange('country', event.target.value)}
            aria-invalid={Boolean(errors.country)}
          />
          <FieldError message={errors.country} />
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
            WhatsApp / Phone
          </label>
          <input
            id="phone"
            className="form-input"
            placeholder="+971 ..."
            value={formData.phone}
            maxLength={80}
            onChange={(event) => handleChange('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
          <FieldError message={errors.phone} />
        </div>

        <div className="form-field">
          <label htmlFor="projectName" className="form-label">
            Project Name
          </label>
          <input
            id="projectName"
            className="form-input"
            placeholder="Project name"
            value={formData.projectName}
            maxLength={180}
            onChange={(event) => handleChange('projectName', event.target.value)}
            aria-invalid={Boolean(errors.projectName)}
          />
          <FieldError message={errors.projectName} />
        </div>

        <div className="form-field">
          <label htmlFor="sector" className="form-label">
            Sector
          </label>
          <input
            id="sector"
            className="form-input"
            placeholder="Power, solar, data center, water..."
            value={formData.sector}
            maxLength={120}
            onChange={(event) => handleChange('sector', event.target.value)}
            aria-invalid={Boolean(errors.sector)}
          />
          <FieldError message={errors.sector} />
        </div>

        <div className="form-field">
          <label htmlFor="totalProjectSize" className="form-label">
            Total Project Size
          </label>
          <input
            id="totalProjectSize"
            className="form-input"
            placeholder="USD 150 million"
            value={formData.totalProjectSize}
            maxLength={120}
            onChange={(event) => handleChange('totalProjectSize', event.target.value)}
            aria-invalid={Boolean(errors.totalProjectSize)}
          />
          <FieldError message={errors.totalProjectSize} />
        </div>

        <div className="form-field">
          <label htmlFor="projectStage" className="form-label">
            Current Project Stage
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
            <option value="procurement">Procurement / EPC coordination</option>
            <option value="ready-for-financing">Ready for financing review</option>
            <option value="under-negotiation">Already under financing discussion</option>
          </select>
          <FieldError message={errors.projectStage} />
        </div>

        <div className="form-field">
          <label htmlFor="governmentSupportAvailable" className="form-label">
            Government Support Documents Available?
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
          </select>
          <FieldError message={errors.governmentSupportAvailable} />
        </div>

        <div className="form-field">
          <label htmlFor="sponsorEquityAvailable" className="form-label">
            Existing Sponsor Equity Available?
          </label>
          <select
            id="sponsorEquityAvailable"
            className="form-input"
            value={formData.sponsorEquityAvailable}
            onChange={(event) => handleChange('sponsorEquityAvailable', event.target.value)}
            aria-invalid={Boolean(errors.sponsorEquityAvailable)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <FieldError message={errors.sponsorEquityAvailable} />
        </div>

        <div className="form-field">
          <label htmlFor="documentsReady" className="form-label">
            Core Documents Ready?
          </label>
          <select
            id="documentsReady"
            className="form-input"
            value={formData.documentsReady}
            onChange={(event) => handleChange('documentsReady', event.target.value)}
            aria-invalid={Boolean(errors.documentsReady)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <FieldError message={errors.documentsReady} />
        </div>

        <div className="form-field md:col-span-2">
          <label htmlFor="repaymentSource" className="form-label">
            Repayment Source
          </label>
          <input
            id="repaymentSource"
            className="form-input"
            placeholder="PPA receivables, concession revenue, budget support..."
            value={formData.repaymentSource}
            maxLength={400}
            onChange={(event) => handleChange('repaymentSource', event.target.value)}
            aria-invalid={Boolean(errors.repaymentSource)}
          />
          <FieldError message={errors.repaymentSource} />
        </div>

        <div className="form-field md:col-span-2">
          <label htmlFor="message" className="form-label">
            Brief Project Summary
          </label>
          <textarea
            id="message"
            className="form-input form-textarea"
            placeholder="Describe the project, current stage, counterparties, and the main structuring or financing constraint."
            value={formData.message}
            maxLength={3000}
            onChange={(event) => handleChange('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
          />
          <FieldError message={errors.message} />
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
          />
          <span>
            I understand this submission is for confidential preliminary review of advisory fit only and does not constitute a
            funding commitment, underwriting promise, or guaranteed transaction outcome.
          </span>
        </label>
        <FieldError message={errors.confidentialityAccepted} />
      </div>

      <div className="internal-actions mt-8">
        <button type="submit" className="institutional-button institutional-button--primary" disabled={submitState === 'submitting'}>
          {submitState === 'submitting' ? 'Submitting...' : 'Submit Project Inquiry'}
        </button>
        <Link href="/documentation-checklist" className="institutional-button institutional-button--secondary">
          Review Documentation Checklist
        </Link>
      </div>

      {submitFailure ? (
        <div className="contact-form__status mt-4">
          <div className="contact-form__status-label">
            Submission Unavailable
          </div>
          <p className="contact-form__copy contact-form__copy--compact">
            {submitFailure.message}
          </p>
          {submitFailure.inquiryId ? (
            <p className="contact-form__copy contact-form__copy--compact">
              Inquiry ID: {submitFailure.inquiryId}
            </p>
          ) : null}
        </div>
      ) : null}
    </form>
  )
}
