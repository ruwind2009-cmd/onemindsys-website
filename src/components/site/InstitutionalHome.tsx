import Image from 'next/image'
import Link from 'next/link'
import { RWA_COMPLIANCE_DISCLAIMER } from '@/lib/site-content'
import { SITE_PHOTOS } from '@/lib/site-photos'

const PROBLEMS = [
  {
    title: 'Weak project documentation',
    body: 'Many real-world projects have assets, permits, or government support, but lack bankable documentation.',
  },
  {
    title: 'Unclear cash flow and risk allocation',
    body: 'Investors need clarity on revenue source, payment waterfall, offtake risk, government risk, EPC risk, and repayment logic.',
  },
  {
    title: 'Cross-border settlement friction',
    body: 'Traditional payment chains create delay, cost, FX exposure, manual reconciliation, and lack of real-time transparency.',
  },
  {
    title: 'A token cannot fix a weak project',
    body: 'The asset, legal structure, documentation, risk allocation, and cash flow must be financeable before any RWA structure is credible.',
  },
]

const SERVICE_PILLARS = [
  {
    title: 'Project Finance Structuring',
    body: 'Align technical scope, EPC cost, revenue source, repayment logic, risk allocation, and capital structure so institutional reviewers can evaluate the project.',
  },
  {
    title: 'RWA Readiness Review',
    body: 'Assess whether the real asset, ownership/control evidence, documentation package, cash flow model, and compliance pathway can support RWA preparation.',
  },
  {
    title: 'Stablecoin Settlement Architecture',
    body: 'Map where stablecoin-enabled settlement may improve subscriptions, disbursements, EPC payments, supplier settlement, reporting, and distributions.',
  },
  {
    title: 'Investor Documentation & Disclosure',
    body: 'Prepare project notes, financial models, term sheets, risk matrices, use-of-funds plans, and investor-ready presentations for review.',
  },
]

const WORKFLOW = [
  {
    step: '01',
    title: 'Review the project',
    body: 'Assess owner, jurisdiction, asset type, permits, offtake, EPC status, documentation quality, and funding need.',
  },
  {
    step: '02',
    title: 'Build the financeable structure',
    body: 'Clarify cash flow, repayment source, debt/equity logic, risk allocation, contract dependencies, and investor review requirements.',
  },
  {
    step: '03',
    title: 'Map RWA and stablecoin settlement logic',
    body: 'Define asset boundary, reporting needs, payment flows, settlement points, and regulated partner dependencies.',
  },
  {
    step: '04',
    title: 'Prepare investor-ready documents and coordinate regulated partner execution',
    body: 'Package the project for institutional review and coordinate legal, compliance, custody, trustee, payment, and licensed partners where required.',
  },
]

const WEB3_CAN = [
  'Settlement efficiency',
  'Cash flow transparency',
  'Investor reporting',
  'Distribution automation',
]

const WEB3_CANNOT = [
  'Legal contracts',
  'KYC/AML',
  'Banks, trustees, and custodians',
  'Audit, compliance, and licensed regulated partners',
]

const EXPERIENCE = [
  {
    title: 'Egypt 1,000 MW Solar PV',
    body: 'Utility-scale renewable project structuring and capital-readiness preparation.',
  },
  {
    title: 'Middle East 4 GW Renewable Pipeline',
    body: 'Portfolio-level renewable energy planning, equipment strategy, and financing logic.',
  },
  {
    title: 'Kuwait Infrastructure Development',
    body: 'Commercial and technical structuring support for infrastructure investment review.',
  },
  {
    title: 'Iraq Power Generation Project',
    body: 'Bankability review, EPC cost framing, tariff logic, and investor documentation.',
  },
]

function SectionIntro({
  eyebrow,
  title,
  body,
  wide = false,
}: {
  eyebrow: string
  title: string
  body?: string
  wide?: boolean
}) {
  return (
    <div className={wide ? 'home-section__intro home-section__intro--wide' : 'home-section__intro'}>
      <div className="home-section__eyebrow">{eyebrow}</div>
      <h2 className="home-section__title">{title}</h2>
      {body ? <p className="home-section__body">{body}</p> : null}
    </div>
  )
}

export function InstitutionalHome() {
  const heroPhoto = SITE_PHOTOS.home

  return (
    <div className="home-institutional">
      <div className="home-institutional__glow home-institutional__glow--top" />
      <div className="home-institutional__glow home-institutional__glow--bottom" />

      <div className="home-institutional__container">
        <section className="home-hero">
          <Image
            src={heroPhoto.src}
            alt="Night infrastructure asset representing Web3-enabled project finance and RWA advisory for real assets."
            fill
            priority
            sizes="100vw"
            className="home-hero__image"
            style={{ objectPosition: heroPhoto.position ?? 'center center' }}
          />
          <div className="home-hero__overlay" />

          <div className="home-hero__content">
            <div className="home-hero__eyebrow">Web3 Project Finance & RWA Infrastructure Advisory</div>
            <h1 className="home-hero__title">
              <span>Real-world infrastructure.</span>
              <span>Web3-enabled capital structures.</span>
            </h1>
            <p className="home-hero__subtitle">
              ONEMIND helps real-world energy and infrastructure projects become financeable, RWA-ready, and prepared
              for stablecoin-enabled settlement and institutional capital review.
            </p>
            <p className="home-hero__positioning">Project finance first. Web3 infrastructure second.</p>

            <div className="home-hero__actions">
              <Link href="/submit-project" className="home-button home-button--primary">
                Submit Project
              </Link>
              <Link href="/rwa-structuring" className="home-button home-button--secondary">
                Explore RWA Structuring
              </Link>
            </div>

            <div className="home-hero__rail" aria-label="Trust line">
              <span>Project owners</span>
              <span>Infrastructure developers</span>
              <span>EPC sponsors</span>
              <span>Lenders</span>
              <span>Family offices</span>
              <span>Institutional investors</span>
              <span>Regulated partners</span>
            </div>
          </div>
        </section>

        <section className="home-section">
          <SectionIntro eyebrow="Problem" title="Why real projects struggle to access Web3-enabled capital" />
          <div className="home-card-grid home-card-grid--four">
            {PROBLEMS.map((item) => (
              <article key={item.title} className="home-card">
                <h3 className="home-card__title">{item.title}</h3>
                <p className="home-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section">
          <SectionIntro
            eyebrow="What ONEMIND Does"
            title="Institutional structuring for real assets before Web3 execution."
            body="ONEMIND prepares real infrastructure projects for financeability, RWA readiness, settlement architecture, and investor review."
            wide
          />
          <div className="home-card-grid home-card-grid--two">
            {SERVICE_PILLARS.map((item) => (
              <article key={item.title} className="home-card home-card--large">
                <h3 className="home-card__title">{item.title}</h3>
                <p className="home-card__body">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section">
          <SectionIntro eyebrow="Workflow" title="A shorter path from project basis to reviewable structure." />
          <div className="home-workflow">
            {WORKFLOW.map((item) => (
              <article key={item.title} className="home-workflow__item">
                <div className="home-workflow__step">{item.step}</div>
                <div>
                  <h3 className="home-workflow__title">{item.title}</h3>
                  <p className="home-workflow__body">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section">
          <SectionIntro
            eyebrow="Balance"
            title="What Web3 can and cannot do"
            body="ONEMIND treats Web3 as infrastructure around financeable assets, not as a substitute for legal enforceability, regulated execution, or institutional diligence."
            wide
          />
          <div className="home-contrast">
            <article className="home-card home-card--large">
              <h3 className="home-card__title">Web3 can help</h3>
              <div className="home-list">
                {WEB3_CAN.map((item) => (
                  <div key={item} className="home-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </article>
            <article className="home-card home-card--large">
              <h3 className="home-card__title">Web3 cannot replace</h3>
              <div className="home-list">
                {WEB3_CANNOT.map((item) => (
                  <div key={item} className="home-list__item">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="home-section">
          <div className="home-cta home-cta--split">
            <div>
              <div className="home-section__eyebrow">Suitable Projects</div>
              <h2 className="home-cta__title">Real projects with real financing needs.</h2>
              <p className="home-cta__body">
                Suitable projects usually include real infrastructure or energy assets, a clear project owner,
                identifiable revenue source, cross-border financing need, and funding requirement above USD 10 million
                preferred.
              </p>
            </div>
            <div className="home-cta__actions">
              <Link href="/submit-project" className="home-button home-button--primary">
                Submit a Project for Review
              </Link>
            </div>
          </div>
        </section>

        <section className="home-section home-section--track-record">
          <SectionIntro
            eyebrow="Selected Experience"
            title="Representative advisory experience reframed for Web3/RWA readiness."
            body="These examples represent advisory experience and structuring logic. They do not imply token issuance, securities offering, payment processing, custody, or completed regulated transactions."
            wide
          />

          <div className="home-track-record">
            {EXPERIENCE.map((item, index) => (
              <article key={item.title} className="home-track-record__item">
                <div className="home-track-record__index">{String(index + 1).padStart(2, '0')}</div>
                <div className="home-track-record__content">
                  <h3 className="home-track-record__title">{item.title}</h3>
                  <p className="home-track-record__body">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-disclaimer" aria-label="Compliance disclaimer">
          <div className="home-disclaimer__label">Compliance Boundary</div>
          <p>{RWA_COMPLIANCE_DISCLAIMER}</p>
        </section>
      </div>
    </div>
  )
}
