import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'

const CORE_CAPABILITIES = [
  {
    title: 'Project Structuring',
    value: 'Clarifies project logic, infrastructure readiness, and development pathways.',
    fit: 'Used when projects lack structure, site clarity, or a workable starting point.',
  },
  {
    title: 'Financing Enablement',
    value: 'Aligns technical, commercial, and risk foundations for funding engagement.',
    fit: 'Used when projects are defined but not yet financing-ready.',
  },
  {
    title: 'Delivery & Advancement',
    value: 'Supports execution-aware planning, coordination, and controlled progress.',
    fit: 'Used when projects need to move from concept into practical advancement.',
  },
]

const WORKFLOW = [
  ['Assess', 'Clarify constraints, readiness, and project pathways.'],
  ['Structure', 'Align technical, commercial, and financing foundations.'],
  ['Advance', 'Support delivery planning and project progression.'],
] as const

export const metadata: Metadata = {
  title: 'Capabilities — ONEMIND',
  description:
    'Power infrastructure capabilities across project structuring, financing enablement, and delivery support.',
}

export default function CapabilitiesPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="Capabilities"
          title="Capabilities Built Around Power Infrastructure"
          description="ONEMIND supports power-intensive projects through structuring, financing readiness, and practical advancement."
          scene="enterprise"
          imageAlt="Power infrastructure capability visual showing project coordination and infrastructure delivery."
          tags={['Structuring', 'Financing', 'Advancement']}
          variant="quiet"
        />

        <div className="page-section grid gap-5 md:grid-cols-3">
          {CORE_CAPABILITIES.map((item) => (
            <div key={item.title} className="card-base card-role-info card-panel">
              <div className="card-kicker">Capability</div>
              <h2 className="card-heading !mt-4 text-[1.65rem]">{item.title}</h2>
              <p className="card-copy">{item.value}</p>
              <p className="mt-4 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                {item.fit}
              </p>
            </div>
          ))}
        </div>

        <div className="page-section card-base card-role-info card-panel">
          <div className="card-kicker">How We Work</div>
          <h2 className="card-heading !mt-4">Assess. Structure. Advance.</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {WORKFLOW.map(([title, body]) => (
              <div key={title} className="rounded-[24px] border px-5 py-5" style={{ borderColor: 'var(--color-border)' }}>
                <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--color-text3)' }}>
                  Stage
                </div>
                <div className="mt-3 font-orbitron text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
                  {title}
                </div>
                <p className="mt-3 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="page-section card-base card-role-solution page-callout">
          <div className="page-callout-title">Discuss a Power-Intensive Project</div>
          <p className="card-copy !mt-4">
            If power infrastructure, financing readiness, and delivery constraints need to be understood together, we
            can support the next step.
          </p>
          <div className="button-row mt-6">
            <Link href="/support#inquiry-form" className="btn-primary">
              Discuss Your Project
            </Link>
            <Link href="/support" className="btn-secondary">
              Contact the Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
