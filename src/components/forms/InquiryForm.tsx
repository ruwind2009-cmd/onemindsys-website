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

  const handleChange = (field: keyof InquiryPayload, value: string) => {
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
            'We could not receive your message at this time. Please try again shortly or email contact@onemindsys.com.',
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
        message: 'We could not receive your message at this time. Please try again shortly or email contact@onemindsys.com.',
      })
    }
  }

  if (submitted) {
    return (
      <div className="card-base card-role-solution card-panel h-full">
        <div className="card-kicker">Message Received</div>
        <h2 className="card-heading !mt-4">Your message has been received.</h2>
        <p className="card-copy">{submitted.message}</p>
        <div className="mt-6 rounded-2xl border px-4 py-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--color-text3)' }}>
            Inquiry ID
          </div>
          <div className="mt-2 text-sm leading-7" style={{ color: 'var(--color-text)' }}>
            {submitted.inquiryId}
          </div>
        </div>
        {submitted.warning ? (
          <p className="mt-4 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
            {submitted.warning}
          </p>
        ) : null}
        <div className="button-row mt-8">
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              setSubmitted(null)
              setSubmitState('idle')
            }}
          >
            Discuss Your Project
          </button>
          <Link href="/projects" className="btn-secondary">
            View Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form id="inquiry-form" className="card-base card-role-solution card-panel h-full" onSubmit={handleSubmit} noValidate>
      <div className="card-kicker">Contact</div>
      <h2 className="card-heading !mt-4">Start with the project context.</h2>
      <p className="card-copy">Keep it short. We only need enough to understand what the project is and where it is stuck.</p>

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
            placeholder="Your name"
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

        <div className="form-field md:col-span-2">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            className="form-input form-textarea"
            placeholder="What is the project, and where is it stuck?"
            value={formData.message}
            maxLength={3000}
            onChange={(event) => handleChange('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
          />
          <FieldError message={errors.message} />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={submitState === 'submitting'}>
          {submitState === 'submitting' ? 'Sending...' : 'Discuss Your Project'}
        </button>
        <Link href="/support" className="btn-secondary">
          Contact the Team
        </Link>
      </div>

      {submitFailure ? (
        <div className="mt-4 rounded-2xl border px-4 py-4" style={{ borderColor: 'rgba(180, 83, 9, 0.26)', background: 'rgba(255, 251, 235, 0.92)' }}>
          <div className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: '#9a3412' }}>
            Submission Unavailable
          </div>
          <p className="mt-2 text-sm leading-7" style={{ color: '#9a3412' }}>
            {submitFailure.message}
          </p>
          {submitFailure.inquiryId ? (
            <p className="mt-2 text-sm leading-7" style={{ color: '#9a3412' }}>
              Inquiry ID: {submitFailure.inquiryId}
            </p>
          ) : null}
        </div>
      ) : null}
    </form>
  )
}
