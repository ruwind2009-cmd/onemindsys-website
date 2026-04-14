import Link from 'next/link'
import { ActionBanner, AdvisoryHero, DisclosureNotice, SectionHeading } from '@/components/site/AdvisoryPrimitives'

const WHAT_WE_DO = [
  {
    title: 'Project Pre-Qualification',
    body: 'We assess whether the sponsor profile, project scale, government support, and repayment visibility are strong enough to justify a formal structuring process.',
  },
  {
    title: 'Financing Structure Design',
    body: 'We help frame the capital pathway, documentation logic, counterparty interface, and controlled disbursement architecture required for serious institutional review.',
  },
  {
    title: 'Execution Coordination',
    body: 'We work on the discipline between sponsor, SPC, EPC, fund manager, entrusted payment parties, and other stakeholders so structure survives implementation pressure.',
  },
]

const TARGET_FIT = [
  'Government-supported infrastructure developers',
  'Energy, power, utilities, logistics, and industrial sponsors',
  'Project owners with concession, PPA, sovereign support, or state-linked counterparties',
  'Sponsors that can provide auditable corporate and project documentation',
]

const NON_FIT = [
  'Small-ticket or opportunistic funding requests',
  'Projects without credible repayment visibility',
  'Requests based only on introductions without documentation readiness',
  'Structures that depend on shortcuts, opaque guarantees, or unverifiable claims',
]

const READINESS_STEPS = [
  ['Sponsor profile', 'Corporate standing, ownership clarity, governance, and financial history.'],
  ['Project basis', 'Defined use of proceeds, scope, development stage, and contractual map.'],
  ['Government support', 'Concession, offtake, state-linked counterparty, or formal support evidence where relevant.'],
  ['Repayment visibility', 'Cash flow logic, budgetary backing, receivables, or other defensible source of repayment.'],
  ['Documentation set', 'Feasibility, model, permits, licenses, EPC context, and supporting approvals.'],
  ['Execution controls', 'SPC, fund management, entrusted payment, staged drawdown, and reporting framework.'],
] as const

const CONTROL_PILLARS = [
  {
    title: 'Capital pathway planning',
    body: 'We focus on sequence, counterparties, conditions precedent, and documentary logic before any capital discussion is treated as actionable.',
  },
  {
    title: 'Controlled disbursement framework',
    body: 'Where appropriate, we help design staged release logic, entrusted payment coordination, and ring-fenced uses of proceeds to improve accountability.',
  },
  {
    title: 'Risk visibility',
    body: 'We work to surface execution dependencies early so sponsors, counterparties, and advisors are aligned on what must be true before a structure can proceed.',
  },
]

const PROJECT_TYPES = [
  'Power generation and transmission',
  'Utility-scale solar, storage, and hybrid energy assets',
  'Data center, digital infrastructure, and grid-linked industrial loads',
  'Water, transport, logistics, and strategic industrial infrastructure',
]

const WHY_ONEMIND = [
  'Institutional tone rather than brokerage language',
  'Built around bankability, documentation, and execution discipline',
  'Designed to filter for qualified sponsors, not maximize raw lead volume',
  'Clear boundary that no page statement is a funding commitment or guarantee',
]

const PROCESS = [
  {
    step: '01',
    title: 'Pre-qualification intake',
    body: 'We review the project basis, sponsor profile, available support documents, and current bottleneck.',
  },
  {
    step: '02',
    title: 'Readiness diagnosis',
    body: 'We identify what is missing for serious diligence, what is already usable, and where the structure is currently weak.',
  },
  {
    step: '03',
    title: 'Structure design',
    body: 'We map the likely capital pathway, documentation priorities, and control framework needed for counterparties to evaluate the transaction.',
  },
  {
    step: '04',
    title: 'Counterparty coordination',
    body: 'Subject to mandate and compliance, we support the documentation and process discipline required for formal engagement.',
  },
]

export function InstitutionalHome() {
  return (
    <div className="institutional-shell">
      <div className="institutional-container">
        <AdvisoryHero
          eyebrow="Project Finance Advisory"
          title="Structured Capital Solutions for Government-Backed Infrastructure Projects"
          description="We help qualified sponsors prepare bankable documentation, design financing structures, and engage institutional capital through disciplined due diligence and controlled execution frameworks."
          scene="home"
          imageAlt="Night infrastructure asset with institutional-scale energy systems and industrial density."
          tags={['Government-Backed Projects', 'Financing Structure', 'Documentation Readiness', 'Controlled Disbursement']}
          primaryAction={{ href: '/support#inquiry-form', label: 'Start Project Pre-Qualification' }}
          secondaryAction={{ href: '/funding-structure', label: 'View Funding Framework' }}
          metrics={[
            { value: 'Large-Scale', label: 'Infrastructure and energy transactions' },
            { value: 'Qualified', label: 'Sponsor-led and documentation-backed mandates' },
            { value: 'Disciplined', label: 'Due diligence, compliance, and execution controls' },
          ]}
          details={[
            { label: 'Our role', value: 'Structuring, readiness, coordination, and capital facilitation' },
            { label: 'Not our role', value: 'Public fundraising, guaranteed funding, or unsecured promises' },
            { label: 'Best fit', value: 'Sponsors with credible project basis and formal counterparties' },
          ]}
        />

        <section className="institutional-section">
          <SectionHeading
            eyebrow="What We Do"
            title="We do not sell capital stories. We prepare financeable project pathways."
            description="The work sits between project definition, documentation readiness, transaction structure, and disciplined execution planning."
          />
          <div className="institutional-grid institutional-grid--three">
            {WHAT_WE_DO.map((item) => (
              <article key={item.title} className="institutional-card">
                <div className="institutional-card__eyebrow">Core Scope</div>
                <h3 className="institutional-card__title">{item.title}</h3>
                <p className="institutional-card__copy">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="institutional-section">
          <div className="institutional-split">
            <div className="institutional-card institutional-card--soft">
              <SectionHeading
                eyebrow="Who We Work With"
                title="Projects that are serious enough to be reviewed institutionally."
                description="We are built for sponsors that understand documentation, approvals, and structured counterparties matter."
              />
              <div className="institutional-list">
                {TARGET_FIT.map((item) => (
                  <div key={item} className="institutional-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="institutional-card institutional-card--soft">
              <SectionHeading
                eyebrow="Who We Do Not Serve"
                title="The site is designed to screen out low-fit inquiries."
                description="A better website for this business is one that makes the boundary conditions obvious."
              />
              <div className="institutional-list">
                {NON_FIT.map((item) => (
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
            eyebrow="Funding Readiness Framework"
            title="A project becomes financeable when the documentation, risk allocation, and execution controls can be reviewed coherently."
            description="This is the threshold we use before institutional counterparties can be approached with credibility."
          />
          <div className="institutional-grid institutional-grid--three">
            {READINESS_STEPS.map(([title, body]) => (
              <article key={title} className="institutional-card institutional-card--compact">
                <div className="institutional-card__title institutional-card__title--small">{title}</div>
                <p className="institutional-card__copy">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="institutional-section">
          <div className="institutional-split institutional-split--wide">
            <div>
              <SectionHeading
                eyebrow="Controlled Capital Structure"
                title="Structure matters because capital has to be coordinated, monitored, and used for defined purposes."
                description="For complex projects, control frameworks are often as important as the headline source of funds."
              />
              <DisclosureNotice title="Important Boundary">
                Information on this website is for general discussion of advisory capabilities only. No statement here constitutes a
                funding commitment, guarantee, underwriting promise, or investment solicitation.
              </DisclosureNotice>
            </div>
            <div className="institutional-grid institutional-grid--stack">
              {CONTROL_PILLARS.map((item) => (
                <article key={item.title} className="institutional-card institutional-card--soft">
                  <div className="institutional-card__eyebrow">Risk Control</div>
                  <h3 className="institutional-card__title">{item.title}</h3>
                  <p className="institutional-card__copy">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="institutional-section">
          <SectionHeading
            eyebrow="Project Types"
            title="The mandate is focused on qualified infrastructure and energy situations where capital readiness can be structured."
          />
          <div className="institutional-grid institutional-grid--two">
            {PROJECT_TYPES.map((item) => (
              <article key={item} className="institutional-card institutional-card--inline">
                <h3 className="institutional-card__title institutional-card__title--small">{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="institutional-section">
          <div className="institutional-split institutional-split--wide">
            <div>
              <SectionHeading
                eyebrow="Why ONEMIND"
                title="The website should signal judgment, boundaries, and transaction discipline."
                description="Trust in this category comes from restraint, process clarity, and visible standards for who may proceed."
              />
              <div className="button-row mt-8">
                <Link href="/pre-qualification" className="btn-link">
                  Review project qualification criteria
                </Link>
              </div>
            </div>
            <div className="institutional-grid institutional-grid--stack">
              {WHY_ONEMIND.map((item) => (
                <article key={item} className="institutional-card institutional-card--soft">
                  <p className="institutional-card__copy institutional-card__copy--strong">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="institutional-section">
          <SectionHeading
            eyebrow="Process"
            title="A conversion path designed for serious sponsors."
            description="The next step is not a sales call. It is a structured intake process to determine whether a project is suitable for deeper review."
          />
          <div className="institutional-process">
            {PROCESS.map((item) => (
              <article key={item.step} className="institutional-process__item">
                <div className="institutional-process__step">{item.step}</div>
                <div>
                  <h3 className="institutional-process__title">{item.title}</h3>
                  <p className="institutional-process__copy">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ActionBanner
          eyebrow="Project Intake"
          title="If your project has formal basis, visible repayment logic, and real counterparties, start with pre-qualification."
          description="All engagements are subject to independent due diligence, legal review, compliance procedures, and executed agreements by relevant counterparties."
          primaryAction={{ href: '/support#inquiry-form', label: 'Start Project Pre-Qualification' }}
          secondaryAction={{ href: '/documentation-checklist', label: 'Review Documentation Checklist' }}
        />
      </div>
    </div>
  )
}
