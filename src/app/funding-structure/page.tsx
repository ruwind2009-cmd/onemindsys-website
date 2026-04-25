import { ActionBanner, AdvisoryHero, DisclosureNotice, SectionHeading } from '@/components/site/AdvisoryPrimitives'
import { buildPageMetadata } from '@/lib/site-metadata'

const STRUCTURE_BLOCKS = [
  {
    title: 'Capital pathway design',
    body: 'We help define the likely transaction pathway, documentary sequence, and counterparty interface before any financing process is treated as executable.',
  },
  {
    title: 'Controlled disbursement logic',
    body: 'Where appropriate, structures may require staged drawdown, entrusted payment, SPC coordination, and restricted-use controls around project funds.',
  },
  {
    title: 'Execution-linked visibility',
    body: 'Financing structures should connect to actual implementation milestones, contractual responsibilities, and reporting obligations.',
  },
]

const CONTROL_METHODS = [
  'SPC and project account architecture',
  'Fund manager or paying-agent coordination where relevant',
  'Entrusted payment and vendor-directed disbursement controls',
  'Milestone-based release or tranche logic',
  'Auditability, reporting, and documentary traceability',
]

const WHAT_WE_DO_NOT_SAY = [
  'We do not position structure design as a promise of funding outcome.',
  'We do not describe website materials as underwriting, guarantee, or commitment language.',
  'We do not present capital planning as a shortcut around legal, compliance, or counterparty review.',
]

export const metadata = buildPageMetadata({
  title: 'Funding Structure',
  description:
    'Understand ONEMIND’s approach to structured capital pathways, controlled disbursement logic, and execution-aware financing frameworks.',
  path: '/funding-structure',
  keywords: [
    'funding structure',
    'structured capital solutions',
    'controlled disbursement framework',
    'project finance structuring',
    'capital pathway planning',
  ],
})

export default function FundingStructurePage() {
  return (
    <div className="institutional-shell">
      <div className="institutional-container">
        <AdvisoryHero
          eyebrow="Funding Structure"
          title="The structure is not only where capital comes from. It is how capital is controlled."
          description="For large infrastructure and energy projects, financing logic has to account for counterparties, conditions precedent, use-of-proceeds discipline, and execution visibility."
          scene="financing"
          imageAlt="Capital-intensive coastal power infrastructure used to represent structured financing frameworks."
          tags={['Capital Pathway Planning', 'Controlled Disbursement', 'Execution Visibility']}
          primaryAction={{ href: '/support#inquiry-form', label: 'Start Project Inquiry' }}
          secondaryAction={{ href: '/government-backed-projects', label: 'View Government-Backed Project Page' }}
          details={[
            { label: 'Focus', value: 'Structure and process, not capital mythology' },
            { label: 'Typical need', value: 'Coordination between sponsors, SPCs, counterparties, and controls' },
            { label: 'Outcome sought', value: 'A reviewable and disciplined financing pathway' },
          ]}
        />

        <section className="institutional-section">
          <SectionHeading
            eyebrow="Core Components"
            title="Institutional capital tends to follow coherent structure, not isolated claims."
          />
          <div className="institutional-grid institutional-grid--three">
            {STRUCTURE_BLOCKS.map((item) => (
              <article key={item.title} className="institutional-card">
                <div className="institutional-card__eyebrow">Structure</div>
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
                eyebrow="Control Methods"
                title="Examples of control layers that may be relevant."
              />
              <div className="institutional-list">
                {CONTROL_METHODS.map((item) => (
                  <div key={item} className="institutional-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="institutional-card institutional-card--soft">
              <SectionHeading
                eyebrow="What This Page Is Not"
                title="Structure language must stay inside a compliant boundary."
              />
              <div className="institutional-list">
                {WHAT_WE_DO_NOT_SAY.map((item) => (
                  <div key={item} className="institutional-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="institutional-section">
          <DisclosureNotice title="Website Disclosure">
            Website materials are advisory and informational only. Project outcomes depend on diligence, legal review,
            compliance procedures, counterparty approval, and executed agreements by the relevant parties.
          </DisclosureNotice>
        </section>

        <ActionBanner
          eyebrow="Readiness"
          title="If the project needs a more disciplined financing pathway, start with pre-qualification."
          description="The best use of this page is as a bridge into a structured discussion about documentation gaps, counterparties, and control logic."
          primaryAction={{ href: '/support#inquiry-form', label: 'Start Project Inquiry' }}
          secondaryAction={{ href: '/pre-qualification', label: 'Review Qualification Criteria' }}
        />
      </div>
    </div>
  )
}
