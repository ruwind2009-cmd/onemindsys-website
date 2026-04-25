import type { Metadata } from 'next'
import Link from 'next/link'
import { InquiryForm } from '@/components/forms/InquiryForm'
import { InternalPageHeader, InternalSectionHeader } from '@/components/site/InternalPagePrimitives'
import { buildPageMetadata } from '@/lib/site-metadata'

const INTAKE_CRITERIA = [
  'Defined sponsor, asset type, country, and project stage',
  'Clear funding requirement and project size or capacity',
  'Visibility on revenue source, offtake, government support, or repayment logic',
  'Available documentation for bankability, RWA readiness, or settlement review',
]

export const metadata: Metadata = buildPageMetadata({
  title: 'Project Inquiry and Pre-Qualification',
  description:
    'Submit a qualified infrastructure or energy project for preliminary Web3 project finance, RWA readiness, stablecoin settlement, or investor package review.',
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
          title="Begin with a confidential project structuring discussion"
          description="Use the intake form for real-world infrastructure and energy projects that require project finance structuring, RWA readiness review, stablecoin settlement mapping, or investor-facing documentation."
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
              <h2 className="internal-section__title">Review the readiness criteria before submission if needed.</h2>
            </div>
            <div className="internal-actions">
              <Link href="/submit-project" className="institutional-button institutional-button--primary">
                Submit Project
              </Link>
              <Link href="/tokenization-readiness" className="institutional-button institutional-button--secondary">
                Readiness Criteria
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
