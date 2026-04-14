import { ActionBanner, AdvisoryHero, DisclosureNotice, SectionHeading } from '@/components/site/AdvisoryPrimitives'
import { buildPageMetadata } from '@/lib/site-metadata'

const FRAMEWORKS = [
  {
    title: 'State-linked counterparties',
    body: 'Projects may involve ministries, utilities, state-owned enterprises, concession-granting authorities, or other government-backed entities.',
  },
  {
    title: 'Support documentation',
    body: 'Bankability often depends on what can actually be documented: concession rights, sovereign support, offtake terms, approvals, and payment support mechanics.',
  },
  {
    title: 'Implementation discipline',
    body: 'Structures need to account for SPC design, EPC or contractor responsibilities, payment controls, and reporting visibility during execution.',
  },
]

const SUITABLE_CONTEXTS = [
  'Utility-scale power and grid projects',
  'State-supported energy and industrial infrastructure',
  'Public-interest logistics, transport, water, and strategic assets',
  'Projects with formal government interface and bankable documentation pathway',
]

const ADVISORY_BOUNDARY = [
  'We coordinate financing architecture and readiness logic; we do not advertise public guarantees.',
  'We help frame how government-backed projects may be reviewed; we do not substitute for legal advice or official commitments.',
  'The relevant counterparties and documents always govern the transaction, not promotional language on a website.',
]

export const metadata = buildPageMetadata({
  title: 'Government-Backed Projects',
  description:
    'ONEMIND supports government-backed infrastructure and energy projects through financing architecture, documentation readiness, and coordinated execution logic.',
  path: '/government-backed-projects',
  keywords: [
    'government-backed projects',
    'sovereign-backed financing',
    'infrastructure financing advisory',
    'state-supported project structuring',
  ],
})

export default function GovernmentBackedProjectsPage() {
  return (
    <div className="institutional-shell">
      <div className="institutional-container">
        <AdvisoryHero
          eyebrow="Government-Backed Projects"
          title="Government support can improve bankability, but only when the structure is documented and reviewable."
          description="This page focuses on the framework around government-backed infrastructure and energy transactions: support basis, counterparties, execution controls, and disciplined financing coordination."
          scene="enterprise"
          imageAlt="Large utility-scale power plant representing sovereign-facing infrastructure contexts."
          tags={['State-Linked Counterparties', 'Support Documentation', 'Execution Controls']}
          primaryAction={{ href: '/support#inquiry-form', label: 'Start Project Pre-Qualification' }}
          secondaryAction={{ href: '/documentation-checklist', label: 'Review Documentation Checklist' }}
          details={[
            { label: 'Fit', value: 'Projects with formal public-sector interface and contractual basis' },
            { label: 'Need', value: 'Clarity on support, cash flow, and control mechanics' },
            { label: 'Role', value: 'Financing architecture coordination subject to diligence' },
          ]}
        />

        <section className="institutional-section">
          <SectionHeading
            eyebrow="Framework"
            title="Government-backed does not mean informal. It means the evidence and interfaces matter even more."
          />
          <div className="institutional-grid institutional-grid--three">
            {FRAMEWORKS.map((item) => (
              <article key={item.title} className="institutional-card">
                <div className="institutional-card__eyebrow">Framework Element</div>
                <h2 className="institutional-card__title">{item.title}</h2>
                <p className="institutional-card__copy">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="institutional-section">
          <div className="institutional-split">
            <div className="institutional-card institutional-card--soft">
              <SectionHeading
                eyebrow="Suitable Situations"
                title="Examples of contexts where this positioning may be relevant."
              />
              <div className="institutional-list">
                {SUITABLE_CONTEXTS.map((item) => (
                  <div key={item} className="institutional-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="institutional-card institutional-card--soft">
              <SectionHeading
                eyebrow="Advisory Boundary"
                title="The website is not an official guarantee instrument."
              />
              <div className="institutional-list">
                {ADVISORY_BOUNDARY.map((item) => (
                  <div key={item} className="institutional-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="institutional-section">
          <DisclosureNotice title="Important Context">
            Government support, sovereign interface, or state-linked ownership may strengthen a project, but any financing
            pathway remains subject to diligence, legal review, compliance procedures, and executed agreements by the relevant
            counterparties.
          </DisclosureNotice>
        </section>

        <ActionBanner
          eyebrow="Next Step"
          title="If the project includes formal public-sector support, submit it for structured review."
          description="A strong intake should describe the sponsor, project basis, support documentation, and current bottleneck clearly enough for an initial suitability assessment."
          primaryAction={{ href: '/support#inquiry-form', label: 'Submit Government-Backed Project Inquiry' }}
          secondaryAction={{ href: '/funding-structure', label: 'View Funding Structure' }}
        />
      </div>
    </div>
  )
}
