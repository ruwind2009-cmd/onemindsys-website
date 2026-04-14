import { ActionBanner, AdvisoryHero, DisclosureNotice, SectionHeading } from '@/components/site/AdvisoryPrimitives'
import { buildPageMetadata } from '@/lib/site-metadata'

const THRESHOLDS = [
  {
    title: 'Project scale',
    body: 'The platform is built for substantial infrastructure and energy transactions where institutional process discipline matters.',
  },
  {
    title: 'Development basis',
    body: 'There should be a credible project concept, defined use of proceeds, and identifiable counterparties or approvals path.',
  },
  {
    title: 'Sponsor readiness',
    body: 'Sponsors should be able to provide company information, ownership clarity, and evidence of execution capacity.',
  },
  {
    title: 'Repayment visibility',
    body: 'A serious submission requires a defensible source of repayment, whether contractual, operating, budgetary, or otherwise structured.',
  },
]

const REQUIRED_ITEMS = [
  'Corporate registration and sponsor background',
  'Project summary, use of proceeds, and total project size',
  'Development stage and current approvals status',
  'Government support documents where available',
  'Financial model, budget, or repayment basis where available',
  'Summary of existing equity, co-sponsors, EPC parties, or strategic counterparties',
]

const SCREENING_LOGIC = [
  'We look for projects that can credibly withstand diligence rather than projects with the most optimistic headline narrative.',
  'We prioritize completeness, seriousness, and sponsor readiness over speed.',
  'If the project is not yet ready, the next step is usually documentation and structure work, not immediate capital outreach.',
]

export const metadata = buildPageMetadata({
  title: 'Project Pre-Qualification',
  description:
    'Review ONEMIND’s project pre-qualification criteria for government-backed infrastructure and energy mandates before submitting an inquiry.',
  path: '/pre-qualification',
  keywords: [
    'project pre-qualification',
    'funding readiness criteria',
    'infrastructure sponsor screening',
    'bankable project preparation',
  ],
})

export default function PreQualificationPage() {
  return (
    <div className="institutional-shell">
      <div className="institutional-container">
        <AdvisoryHero
          eyebrow="Project Pre-Qualification"
          title="We only engage projects that can move through a serious review process."
          description="The purpose of pre-qualification is to determine whether a project has sufficient basis, sponsor readiness, and documentation quality to justify deeper structuring work."
          scene="projects"
          imageAlt="Coastal infrastructure complex representing large-scale project qualification."
          tags={['Sponsor Readiness', 'Government Support', 'Repayment Visibility']}
          primaryAction={{ href: '/support#inquiry-form', label: 'Start Project Inquiry' }}
          secondaryAction={{ href: '/documentation-checklist', label: 'Review Documentation Checklist' }}
          details={[
            { label: 'Best fit', value: 'Qualified sponsors with serious project basis' },
            { label: 'Primary test', value: 'Can the project withstand diligence and structured review?' },
            { label: 'Common gap', value: 'Incomplete documentation or weak repayment logic' },
          ]}
        />

        <section className="institutional-section">
          <SectionHeading
            eyebrow="Minimum Thresholds"
            title="A project does not need to be perfect, but it must be credible."
          />
          <div className="institutional-grid institutional-grid--two">
            {THRESHOLDS.map((item) => (
              <article key={item.title} className="institutional-card">
                <div className="institutional-card__eyebrow">Threshold</div>
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
                eyebrow="What To Prepare"
                title="The initial review depends on documentation signal."
              />
              <div className="institutional-list">
                {REQUIRED_ITEMS.map((item) => (
                  <div key={item} className="institutional-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="institutional-card institutional-card--soft">
              <SectionHeading
                eyebrow="How We Screen"
                title="Why we accept only a limited set of projects."
              />
              <div className="institutional-list">
                {SCREENING_LOGIC.map((item) => (
                  <div key={item} className="institutional-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="institutional-section">
          <DisclosureNotice title="Qualification Standard">
            ONEMIND is an advisory and structuring platform. Pre-qualification does not imply approval, funding availability,
            or transaction commitment. Any next step depends on diligence, compliance, and counterparties willing to proceed
            under formal agreements.
          </DisclosureNotice>
        </section>

        <ActionBanner
          eyebrow="Next Step"
          title="If the project basis is real, submit the intake with enough detail for serious review."
          description="A stronger first submission usually leads to a faster determination on fit, documentation gaps, and whether structuring work is justified."
          primaryAction={{ href: '/support#inquiry-form', label: 'Submit Project Inquiry' }}
          secondaryAction={{ href: '/funding-structure', label: 'View Funding Structure Page' }}
        />
      </div>
    </div>
  )
}
