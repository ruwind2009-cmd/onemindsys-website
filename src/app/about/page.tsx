import Link from 'next/link'
import { ActionBanner, AdvisoryHero, DisclosureNotice, SectionHeading } from '@/components/site/AdvisoryPrimitives'
import { buildPageMetadata } from '@/lib/site-metadata'

const POSITIONING = [
  'Project finance structuring',
  'Documentation readiness',
  'Capital pathway planning',
  'Controlled execution frameworks',
]

const PRINCIPLES = [
  {
    title: 'Institutional discipline',
    body: 'We prioritize diligence, documentary coherence, and process control over promotional claims about capital availability.',
  },
  {
    title: 'Qualified mandate focus',
    body: 'We are designed for sponsors with serious infrastructure or energy situations, not generic funding requests.',
  },
  {
    title: 'Execution awareness',
    body: 'We work on structures that can withstand counterparties, approvals, and disbursement realities once a mandate begins.',
  },
]

export const metadata = buildPageMetadata({
  title: 'About ONEMIND',
  description:
    'Learn how ONEMIND approaches project finance structuring, documentation readiness, and capital facilitation for qualified government-backed infrastructure and energy projects.',
  path: '/about',
  keywords: [
    'about ONEMIND',
    'project finance structuring',
    'infrastructure advisory firm',
    'capital facilitation platform',
  ],
})

export default function AboutPage() {
  return (
    <div className="institutional-shell">
      <div className="institutional-container">
        <AdvisoryHero
          eyebrow="About ONEMIND"
          title="A restrained, institutional approach to project finance advisory."
          description="ONEMIND focuses on the work that helps qualified infrastructure and energy projects become reviewable by serious counterparties: structure, documentation, control logic, and transaction discipline."
          scene="about"
          imageAlt="Aerial view of a large industrial infrastructure complex used to represent institutional-scale advisory work."
          tags={['Institutional Advisory', 'Project Finance Structuring', 'Documentation Readiness']}
          primaryAction={{ href: '/support#inquiry-form', label: 'Start Project Pre-Qualification' }}
          secondaryAction={{ href: '/pre-qualification', label: 'See Qualification Criteria' }}
          details={[
            { label: 'Focus', value: 'Government-backed infrastructure and energy projects' },
            { label: 'Approach', value: 'Clarity, control, and counterparty readiness' },
            { label: 'Boundary', value: 'No website statement is a funding promise or guarantee' },
          ]}
        />

        <section className="institutional-section">
          <div className="institutional-split institutional-split--wide">
            <div>
              <SectionHeading
                eyebrow="Positioning"
                title="We are not a general corporate website for everyone."
                description="The brand is intentionally selective. It should communicate that ONEMIND sits closer to an infrastructure finance advisory boutique than a broad industrial services firm."
              />
            </div>
            <div className="institutional-card institutional-card--soft">
              <div className="institutional-list">
                {POSITIONING.map((item) => (
                  <div key={item} className="institutional-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="institutional-section">
          <SectionHeading
            eyebrow="Operating Principles"
            title="The standard is credibility under review."
            description="Everything from website copy to intake design should make it clear that diligence, compliance, and execution logic come before any financing narrative."
          />
          <div className="institutional-grid institutional-grid--three">
            {PRINCIPLES.map((item) => (
              <article key={item.title} className="institutional-card">
                <div className="institutional-card__eyebrow">Principle</div>
                <h2 className="institutional-card__title">{item.title}</h2>
                <p className="institutional-card__copy">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="institutional-section">
          <DisclosureNotice title="Advisory Boundary">
            All engagements are subject to independent due diligence, legal review, compliance procedures, and executed
            agreements by relevant counterparties. ONEMIND does not present this website as a public offering platform or
            a source of guaranteed funding outcomes.
          </DisclosureNotice>
        </section>

        <ActionBanner
          eyebrow="Project Inquiry"
          title="For qualified sponsors, the next step is a structured intake."
          description="Use the project inquiry page to submit the project basis, sponsor profile, and documentation status for preliminary review."
          primaryAction={{ href: '/support#inquiry-form', label: 'Start Project Inquiry' }}
          secondaryAction={{ href: '/documentation-checklist', label: 'Review Required Documentation' }}
        />
      </div>
    </div>
  )
}
