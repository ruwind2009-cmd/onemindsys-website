import type { Metadata } from 'next'
import Link from 'next/link'
import { InquiryForm } from '@/components/forms/InquiryForm'
import { ActionBanner, AdvisoryHero, DisclosureNotice, SectionHeading } from '@/components/site/AdvisoryPrimitives'
import { buildPageMetadata } from '@/lib/site-metadata'

const INTAKE_CRITERIA = [
  'Defined sponsor and operating company information',
  'Clear project sector, stage, and total capital requirement',
  'Visibility on repayment source and sponsor equity position',
  'Government support documentation where relevant to the structure',
]

const WHAT_HAPPENS_NEXT = [
  'Initial screening for fit, completeness, and seriousness',
  'Assessment of missing documentation or structural weaknesses',
  'Follow-up only where the project appears suitable for disciplined review',
]

const FORM_NOTICE = [
  'The inquiry form is intended for project pre-qualification, not for general public fundraising requests.',
  'Submitting the form does not create a funding commitment, mandate, or advisory engagement.',
  'Please do not rely on the website as a guarantee of financing outcome or capital availability.',
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
    <div className="institutional-shell">
      <div className="institutional-container">
        <AdvisoryHero
          eyebrow="Project Inquiry"
          title="Pre-qualification intake for serious project sponsors."
          description="This page is designed as a structured inquiry for government-backed infrastructure and energy projects that may be suitable for financing structure review."
          scene="support"
          imageAlt="Industrial power site with utility links used to represent structured project intake."
          tags={['Project Inquiry', 'Sponsor Screening', 'Documentation Review']}
          primaryAction={{ href: '#inquiry-form', label: 'Start Project Inquiry' }}
          secondaryAction={{ href: '/pre-qualification', label: 'Review Qualification Criteria' }}
          details={[
            { label: 'Use this page for', value: 'Qualified project intake and sponsor pre-screening' },
            { label: 'Not for', value: 'Generic introductions or capital promises' },
            { label: 'Review basis', value: 'Due diligence, compliance, and documentary completeness' },
          ]}
        />

        <section className="institutional-section">
          <div className="institutional-split">
            <div className="institutional-grid institutional-grid--stack">
              <div className="institutional-card institutional-card--soft">
                <SectionHeading
                  eyebrow="Minimum Intake Basis"
                  title="A useful submission gives us enough signal to assess fit."
                />
                <div className="institutional-list">
                  {INTAKE_CRITERIA.map((item) => (
                    <div key={item} className="institutional-list__item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="institutional-card institutional-card--soft">
                <SectionHeading
                  eyebrow="What Happens Next"
                  title="Only suitable projects move forward to the next stage."
                />
                <div className="institutional-list">
                  {WHAT_HAPPENS_NEXT.map((item) => (
                    <div key={item} className="institutional-list__item">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                  Prefer direct contact first? Email{' '}
                  <a href="mailto:contact@onemindsys.com" style={{ color: 'var(--color-text)' }}>
                    contact@onemindsys.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <InquiryForm />
          </div>
        </section>

        <section className="institutional-section">
          <DisclosureNotice title="Before You Submit">
            {FORM_NOTICE.join(' ')}
          </DisclosureNotice>
        </section>

        <ActionBanner
          eyebrow="Preparation"
          title="Need to review the required materials before submitting?"
          description="Use the documentation checklist if the project team still needs to organize core corporate, legal, technical, and funding materials."
          primaryAction={{ href: '/documentation-checklist', label: 'Open Documentation Checklist' }}
          secondaryAction={{ href: '/projects', label: 'View Selected Project Contexts' }}
        />
      </div>
    </div>
  )
}
