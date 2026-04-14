import { ActionBanner, AdvisoryHero, DisclosureNotice, SectionHeading } from '@/components/site/AdvisoryPrimitives'
import { buildPageMetadata } from '@/lib/site-metadata'

const DOCUMENT_GROUPS = [
  {
    title: 'Corporate and sponsor documents',
    items: ['Business registration', 'Ownership chart', 'Audited financial statements', 'Tax compliance records', 'Management or board profile'],
  },
  {
    title: 'Project definition materials',
    items: ['Project summary', 'Feasibility study or business plan', 'Financial model', 'Use-of-proceeds schedule', 'Repayment plan'],
  },
  {
    title: 'Legal and permitting basis',
    items: ['Licenses and approvals', 'Land rights or concession documents', 'Environmental approvals', 'Construction permits', 'Material project contracts'],
  },
  {
    title: 'Government support and counterparties',
    items: ['PPA, offtake, or concession support', 'State-linked sponsor or owner documents', 'Official support letters where relevant', 'EPC, operator, or strategic counterparty status'],
  },
]

const WHY_IT_MATTERS = [
  'Documentation quality affects diligence speed and credibility.',
  'Incomplete files make it harder to assess bankability, not easier to start financing conversations.',
  'The checklist is a filter: if core materials are missing, the project may need readiness work before outreach.',
]

export const metadata = buildPageMetadata({
  title: 'Documentation Checklist',
  description:
    'Use ONEMIND’s documentation checklist to prepare corporate, legal, technical, and financial materials for project financing review.',
  path: '/documentation-checklist',
  keywords: [
    'documentation checklist',
    'bankable project preparation',
    'project finance documents',
    'infrastructure financing readiness',
  ],
})

export default function DocumentationChecklistPage() {
  return (
    <div className="institutional-shell">
      <div className="institutional-container">
        <AdvisoryHero
          eyebrow="Documentation Checklist"
          title="A stronger financing discussion usually starts with better files."
          description="This page is meant to help sponsors understand the level of documentation discipline expected before a project can be reviewed seriously."
          scene="delivery"
          imageAlt="Night construction and industrial delivery environment representing documentation-backed execution."
          tags={['Corporate Records', 'Project Materials', 'Approvals', 'Financial Model']}
          primaryAction={{ href: '/support#inquiry-form', label: 'Start Project Inquiry' }}
          secondaryAction={{ href: '/pre-qualification', label: 'Review Qualification Criteria' }}
          details={[
            { label: 'Purpose', value: 'Improve readiness before formal advisory review' },
            { label: 'Use it for', value: 'Screening internal preparation gaps' },
            { label: 'Signal sent', value: 'Serious sponsors arrive prepared' },
          ]}
        />

        <section className="institutional-section">
          <SectionHeading
            eyebrow="Required Materials"
            title="If the team cannot assemble these basics, the project may not yet be ready for financing structuring."
          />
          <div className="institutional-grid institutional-grid--two">
            {DOCUMENT_GROUPS.map((group) => (
              <article key={group.title} className="institutional-card">
                <div className="institutional-card__eyebrow">Checklist</div>
                <h2 className="institutional-card__title">{group.title}</h2>
                <div className="institutional-list">
                  {group.items.map((item) => (
                    <div key={item} className="institutional-list__item">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="institutional-section">
          <div className="institutional-card institutional-card--soft">
            <SectionHeading
              eyebrow="Why This Matters"
              title="Preparation is part of credibility."
            />
            <div className="institutional-list">
              {WHY_IT_MATTERS.map((item) => (
                <div key={item} className="institutional-list__item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="institutional-section">
          <DisclosureNotice title="Document Handling">
            Please do not infer from this checklist that ONEMIND is soliciting investments or promising funding outcomes. The
            checklist is provided to clarify readiness expectations for advisory review only.
          </DisclosureNotice>
        </section>

        <ActionBanner
          eyebrow="Prepared Sponsors"
          title="Once the core materials are assembled, submit the project through the intake page."
          description="A complete first submission improves the quality of the initial review and makes it easier to determine whether the next step should be structuring, documentation work, or no-go."
          primaryAction={{ href: '/support#inquiry-form', label: 'Submit Project Inquiry' }}
          secondaryAction={{ href: '/projects', label: 'View Selected Projects' }}
        />
      </div>
    </div>
  )
}
