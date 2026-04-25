import type { Metadata } from 'next'
import Link from 'next/link'
import { InquiryForm } from '@/components/forms/InquiryForm'
import { InternalPageHeader, InternalSectionHeader } from '@/components/site/InternalPagePrimitives'
import { RWA_COMPLIANCE_DISCLAIMER, WEB3_PAGE_KEYWORDS } from '@/lib/site-content'
import { buildPageMetadata } from '@/lib/site-metadata'

const REVIEW_CRITERIA = [
  'Real asset or infrastructure project with an identifiable owner or sponsor',
  'Minimum project documentation available for preliminary review',
  'Identifiable revenue source, repayment source, offtake, or government support pathway',
  'Funding requirement above USD 10 million preferred',
  'Developer willing to provide legal, financial, technical, and project documents',
  'Cross-border financing, stablecoin settlement, or RWA readiness need',
]

export const metadata: Metadata = buildPageMetadata({
  title: 'Submit a Project for Review',
  description:
    'Submit a real-world energy or infrastructure project for ONEMIND advisory review across project finance structuring, RWA readiness, stablecoin settlement architecture, and investor package preparation.',
  path: '/submit-project',
  keywords: WEB3_PAGE_KEYWORDS,
})

export default function SubmitProjectPage() {
  return (
    <div className="internal-page">
      <div className="internal-page__container">
        <InternalPageHeader
          eyebrow="Project Intake"
          title="Submit a Project for Review"
          description="Use this intake for real-world infrastructure, energy, power, solar, industrial, or government-backed projects that need bankability review, RWA readiness, stablecoin settlement architecture, or investor-facing documentation."
        />

        <section className="internal-page__section">
          <div className="contact-layout">
            <div className="contact-aside">
              <InternalSectionHeader eyebrow="Review Fit" title="Projects should have real asset substance." />

              <div className="internal-list">
                {REVIEW_CRITERIA.map((item) => (
                  <div key={item} className="internal-list__item">
                    {item}
                  </div>
                ))}
              </div>

              <div className="contact-aside__note">
                ONEMIND reviews advisory fit only. Regulated legal, securities, payment, custody, and financial execution must
                be handled by appropriately licensed partners.
              </div>
            </div>

            <InquiryForm />
          </div>
        </section>

        <section className="internal-page__section internal-page__section--soft">
          <div className="internal-cta">
            <div>
              <div className="internal-page__eyebrow">Compliance Boundary</div>
              <p className="internal-section__description">{RWA_COMPLIANCE_DISCLAIMER}</p>
            </div>
            <div className="internal-actions">
              <Link href="/rwa-structuring" className="institutional-button institutional-button--primary">
                RWA Structuring
              </Link>
              <Link href="/stablecoin-settlement" className="institutional-button institutional-button--secondary">
                Settlement Framework
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
