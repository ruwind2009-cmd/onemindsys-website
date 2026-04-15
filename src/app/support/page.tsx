import type { Metadata } from 'next'
import Link from 'next/link'
import { InquiryForm } from '@/components/forms/InquiryForm'
import { InternalPageHeader, InternalSectionHeader } from '@/components/site/InternalPagePrimitives'
import { buildPageMetadata } from '@/lib/site-metadata'

const INTAKE_CRITERIA = [
  'Defined sponsor and operating company information',
  'Clear project sector, stage, and total capital requirement',
  'Visibility on repayment source and sponsor equity position',
  'Government support or project documentation where relevant',
]

export const metadata: Metadata = buildPageMetadata({
  title: 'Project Inquiry and Pre-Qualification',
  description:
    'Submit a qualified infrastructure or energy project for preliminary review by ONEMIND through a structured pre-qualification intake.',
  path: '/support',
  keywords: [
    'project inquiry',
    'project pre-qualification',
    'infrastructure financing inquiry',
    'government-backed project intake',
    'funding readiness review',
  ],
})

export default function SupportPage() {
  return (
    <div className="internal-page">
      <div className="internal-page__container">
        <InternalPageHeader
          eyebrow="Contact"
          title="Begin with a confidential project discussion"
          description="Use the inquiry form for infrastructure and energy situations that require structured review, capital readiness assessment, or execution alignment."
        />

        <section className="internal-page__section">
          <div className="contact-layout">
            <div className="contact-aside">
              <InternalSectionHeader
                eyebrow="Submission Basis"
                title="A useful submission is concise, specific, and documented."
              />

              <div className="internal-list">
                {INTAKE_CRITERIA.map((item) => (
                  <div key={item} className="internal-list__item">
                    {item}
                  </div>
                ))}
              </div>

              <div className="contact-aside__note">
                Prefer direct contact first? Email{' '}
                <a href="mailto:contact@onemindsys.com" className="internal-inline-link">
                  contact@onemindsys.com
                </a>
                .
              </div>
            </div>

            <InquiryForm />
          </div>
        </section>

        <section className="internal-page__section internal-page__section--soft">
          <div className="internal-cta">
            <div>
              <div className="internal-page__eyebrow">Preparation</div>
              <h2 className="internal-section__title">Review the documentation checklist before submission if needed.</h2>
            </div>
            <div className="internal-actions">
              <Link href="/documentation-checklist" className="institutional-button institutional-button--primary">
                Open Checklist
              </Link>
              <Link href="/projects" className="institutional-button institutional-button--secondary">
                View Experience
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
