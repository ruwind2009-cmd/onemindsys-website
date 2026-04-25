import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site-content'

export const metadata: Metadata = {
  title: 'Structuring a Utility-Scale Power Project for Full Financing — Bangladesh — ONEMIND',
  description:
    'This case illustrates how large power infrastructure projects in emerging markets are made bankable through aligned financing structures, sovereign support, and coordinated delivery frameworks.',
  keywords: [
    'Bangladesh power project',
    'utility-scale power project',
    'bankability',
    'financing structure',
    'power infrastructure',
  ],
  openGraph: {
    title: 'Structuring a Utility-Scale Power Project for Full Financing — Bangladesh',
    description:
      'This case illustrates how large power infrastructure projects in emerging markets are made bankable through aligned financing structures, sovereign support, and coordinated delivery frameworks.',
    type: 'article',
    url: `${SITE_URL}/projects/bangladesh-power-project-structure`,
  },
}

const projectContextParagraphs = [
  'Large-scale power projects in emerging markets are rarely constrained by engineering capability alone.',
  'They depend on the ability to structure financing across multiple institutions, align risk allocation, and create a framework that satisfies lenders, contractors, and public stakeholders.',
  'Projects of this nature typically involve government-backed utilities, international EPC contractors, and multi-layer financing arrangements.',
]

const realConstraintBullets = [
  'Misalignment between EPC scope and financing expectations',
  'Unclear risk allocation across stakeholders',
  'Limited bankability in early-stage structures',
  'Dependence on sovereign guarantees and external support',
]

const financingStructureBullets = [
  'Sovereign-backed support mechanisms',
  'Multilateral guarantees (e.g. MIGA-type structures) (gtreview.com)',
  'Export credit agency participation',
  'Commercial bank syndication and arranger coordination (ICBC)',
  'Alignment between EPC contracts and financing terms',
]

const structureMattersBullets = [
  'Risk is clearly allocated across stakeholders',
  'Lender requirements are reflected in project structure',
  'EPC delivery aligns with financing conditions',
]

const sponsorBullets = [
  'Financing must be structured early, not added later',
  'Project design must support lender confidence',
  'Stakeholder alignment is required before major commitments',
]

const onemindBullets = [
  'Structuring projects for bankability',
  'Aligning financing expectations with real infrastructure conditions',
  'Supporting project advancement in complex environments',
]

export default function BangladeshPowerProjectStructurePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Structuring a Utility-Scale Power Project for Full Financing — Bangladesh',
    description:
      'This case illustrates how large power infrastructure projects in emerging markets are made bankable through aligned financing structures, sovereign support, and coordinated delivery frameworks.',
    mainEntityOfPage: `${SITE_URL}/projects/bangladesh-power-project-structure`,
    author: {
      '@type': 'Organization',
      name: 'ONEMIND',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ONEMIND',
      url: SITE_URL,
    },
    keywords: 'Bangladesh power project, utility-scale power project, bankability, financing structure, power infrastructure',
  }

  return (
    <div className="project-profile">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="project-profile__container">
        <header className="project-profile__hero">
          <div className="project-profile__eyebrow">Project Perspective</div>
          <h1 className="project-profile__title">
            Structuring a Utility-Scale Power Project for Full Financing — Bangladesh
          </h1>
          <p className="project-profile__summary">
            This case illustrates how large power infrastructure projects in emerging markets are made bankable through aligned financing structures, sovereign support, and coordinated delivery frameworks.
          </p>
          <div className="project-profile__facts">
            {[
              ['Region', 'Bangladesh'],
              ['Project Type', 'Utility-Scale Power Project'],
              ['Page Focus', 'Financing Structure'],
              ['Page Mode', 'Project Perspective'],
            ].map(([label, value]) => (
              <div key={label} className="project-profile__fact">
                <div className="project-profile__fact-label">{label}</div>
                <div className="project-profile__fact-value">{value}</div>
              </div>
            ))}
          </div>
        </header>

        <div className="project-profile__section project-profile__section-grid">
          <section className="project-profile__card">
            <h2 className="project-profile__card-title">Project Context</h2>
            <div className="project-profile__copy-stack">
              {projectContextParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="project-profile__card">
            <h2 className="project-profile__card-title">The Real Constraint</h2>
            <div className="project-profile__copy-stack">
              <p>
                In projects of this scale, the primary constraint is not technical feasibility.
              </p>
              <p>
                Instead, projects face challenges such as:
              </p>
            </div>
            <div className="project-profile__list">
              {realConstraintBullets.map((bullet) => (
                <div key={bullet} className="project-profile__list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="project-profile__note">
              Without a properly structured framework, projects may stall before financial close.
            </p>
          </section>

          <section className="project-profile__card project-profile__card--value">
            <div className="project-profile__card-eyebrow">Key Statement</div>
            <p className="project-profile__statement">
              The limiting factor is not engineering.
              <br />
              It is whether the project can be structured to meet financing expectations.
            </p>
          </section>

          <section className="project-profile__card">
            <h2 className="project-profile__card-title">Typical Financing Structure</h2>
            <div className="project-profile__copy-stack">
              <p>
                Successful utility-scale power projects often rely on a structured combination of:
              </p>
            </div>
            <div className="project-profile__list">
              {financingStructureBullets.map((bullet) => (
                <div key={bullet} className="project-profile__list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="project-profile__note">
              These elements collectively enable capital to enter the project under acceptable risk conditions.
            </p>
          </section>

          <section className="project-profile__card">
            <h2 className="project-profile__card-title">Why Structure Matters</h2>
            <div className="project-profile__copy-stack">
              <p>
                Financing is not a downstream activity.
              </p>
              <p>
                Projects become viable only when:
              </p>
            </div>
            <div className="project-profile__list">
              {structureMattersBullets.map((bullet) => (
                <div key={bullet} className="project-profile__list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="project-profile__note">
              Without this alignment, even technically feasible projects cannot progress.
            </p>
          </section>

          <section className="project-profile__card">
            <h2 className="project-profile__card-title">What This Means for Project Sponsors</h2>
            <div className="project-profile__copy-stack">
              <p>
                For project sponsors and developers, this typically means:
              </p>
            </div>
            <div className="project-profile__list">
              {sponsorBullets.map((bullet) => (
                <div key={bullet} className="project-profile__list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="project-profile__note">
              Projects that fail to address these factors often remain stalled despite strong underlying demand.
            </p>
          </section>

          <section className="project-profile__card">
            <h2 className="project-profile__card-title">ONEMIND Perspective</h2>
            <div className="project-profile__copy-stack">
              <p>
                ONEMIND focuses on the part of projects where structure, financing readiness, and advancement logic must work together.
              </p>
              <p>
                Our work centers on:
              </p>
            </div>
            <div className="project-profile__list">
              {onemindBullets.map((bullet) => (
                <div key={bullet} className="project-profile__list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="project-profile__note">
              We do not treat financing as a separate step.
              <br />
              We treat it as part of the project&apos;s core structure.
            </p>
          </section>
        </div>

        <section className="project-profile__section project-profile__disclosure">
          <div className="project-profile__card-eyebrow">Advisory Disclosure</div>
          <p>
            These examples represent advisory experience and structuring logic. They do not imply token issuance,
            securities offering, custody activity, payment licensing, or completed regulated transactions.
          </p>
        </section>

        <section className="project-profile__section project-profile__cta">
          <div className="project-profile__cta-title">Submit a Comparable Project for Review</div>
          <p className="project-profile__card-copy project-profile__card-copy--wide">
            If your project involves infrastructure scale, financing structure, and government-linked counterparties, use the
            inquiry page to start a structured suitability review.
          </p>
          <div className="project-profile__actions">
            <Link href="/support#inquiry-form" className="project-profile__button project-profile__button--primary">
              Start Project Inquiry
            </Link>
            <Link href="/pre-qualification" className="project-profile__button project-profile__button--secondary">
              Review Qualification Criteria
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
