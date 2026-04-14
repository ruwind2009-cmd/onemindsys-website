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
    <div className="page-shell page-shell--quiet">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="page-container">
        <div className="page-hero page-hero--feature">
          <div className="sec-label">Project Perspective</div>
          <h1 className="page-title page-title--feature">
            Structuring a Utility-Scale Power Project for Full Financing — Bangladesh
          </h1>
          <p className="page-subtitle">
            This case illustrates how large power infrastructure projects in emerging markets are made bankable through aligned financing structures, sovereign support, and coordinated delivery frameworks.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['Region', 'Bangladesh'],
              ['Project Type', 'Utility-Scale Power Project'],
              ['Page Focus', 'Financing Structure'],
              ['Page Mode', 'Project Perspective'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[24px] border px-5 py-4"
                style={{ borderColor: 'var(--color-border)', background: 'rgba(11, 18, 31, 0.74)' }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: 'var(--color-text3)' }}
                >
                  {label}
                </div>
                <div className="mt-2 text-sm leading-7" style={{ color: 'var(--color-text)' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-section grid gap-5">
          <section className="card-base card-role-info card-panel">
            <h2 className="card-heading !mt-0">Project Context</h2>
            <div className="mt-5 space-y-4">
              {projectContextParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="card-base card-role-info card-panel">
            <h2 className="card-heading !mt-0">The Real Constraint</h2>
            <div className="mt-5 space-y-4">
              <p className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                In projects of this scale, the primary constraint is not technical feasibility.
              </p>
              <p className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                Instead, projects face challenges such as:
              </p>
            </div>
            <div className="card-list mt-8">
              {realConstraintBullets.map((bullet) => (
                <div key={bullet} className="card-list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="mt-8 text-base leading-8" style={{ color: 'var(--color-text2)' }}>
              Without a properly structured framework, projects may stall before financial close.
            </p>
          </section>

          <section className="card-base card-role-decision card-panel">
            <div className="card-kicker">Key Statement</div>
            <p className="card-heading !mt-4 !text-[2rem] md:!text-[2.4rem]">
              The limiting factor is not engineering.
              <br />
              It is whether the project can be structured to meet financing expectations.
            </p>
          </section>

          <section className="card-base card-role-info card-panel">
            <h2 className="card-heading !mt-0">Typical Financing Structure</h2>
            <div className="mt-5 space-y-4">
              <p className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                Successful utility-scale power projects often rely on a structured combination of:
              </p>
            </div>
            <div className="card-list mt-8">
              {financingStructureBullets.map((bullet) => (
                <div key={bullet} className="card-list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="mt-8 text-base leading-8" style={{ color: 'var(--color-text2)' }}>
              These elements collectively enable capital to enter the project under acceptable risk conditions.
            </p>
          </section>

          <section className="card-base card-role-info card-panel">
            <h2 className="card-heading !mt-0">Why Structure Matters</h2>
            <div className="mt-5 space-y-4">
              <p className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                Financing is not a downstream activity.
              </p>
              <p className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                Projects become viable only when:
              </p>
            </div>
            <div className="card-list mt-8">
              {structureMattersBullets.map((bullet) => (
                <div key={bullet} className="card-list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="mt-8 text-base leading-8" style={{ color: 'var(--color-text2)' }}>
              Without this alignment, even technically feasible projects cannot progress.
            </p>
          </section>

          <section className="card-base card-role-info card-panel">
            <h2 className="card-heading !mt-0">What This Means for Project Sponsors</h2>
            <div className="mt-5 space-y-4">
              <p className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                For project sponsors and developers, this typically means:
              </p>
            </div>
            <div className="card-list mt-8">
              {sponsorBullets.map((bullet) => (
                <div key={bullet} className="card-list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="mt-8 text-base leading-8" style={{ color: 'var(--color-text2)' }}>
              Projects that fail to address these factors often remain stalled despite strong underlying demand.
            </p>
          </section>

          <section className="card-base card-role-info card-panel">
            <h2 className="card-heading !mt-0">ONEMIND Perspective</h2>
            <div className="mt-5 space-y-4">
              <p className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                ONEMIND focuses on the part of projects where structure, financing readiness, and advancement logic must work together.
              </p>
              <p className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                Our work centers on:
              </p>
            </div>
            <div className="card-list mt-8">
              {onemindBullets.map((bullet) => (
                <div key={bullet} className="card-list-item">
                  {bullet}
                </div>
              ))}
            </div>
            <p className="mt-8 text-base leading-8" style={{ color: 'var(--color-text2)' }}>
              We do not treat financing as a separate step.
              <br />
              We treat it as part of the project&apos;s core structure.
            </p>
          </section>
        </div>

        <div className="page-section card-base card-role-solution page-callout">
          <div className="page-callout-title">Submit a Comparable Project for Review</div>
          <p className="card-copy !mt-4" style={{ color: 'var(--color-text)' }}>
            If your project involves infrastructure scale, financing structure, and government-linked counterparties, use the
            inquiry page to start a structured suitability review.
          </p>
          <div className="button-row mt-6">
            <Link href="/support#inquiry-form" className="btn-primary">
              Start Project Inquiry
            </Link>
            <Link href="/pre-qualification" className="btn-secondary">
              Review Qualification Criteria
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
