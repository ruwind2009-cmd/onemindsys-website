import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'

export default function AboutPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="About"
          title="About ONEMIND"
          description="ONEMIND is a power infrastructure partner focused on structuring, financing readiness, and project advancement."
          scene="about"
          imageAlt="Power infrastructure team context showing project coordination and infrastructure delivery."
          tags={['Power Infrastructure', 'Structuring', 'Advancement']}
          variant="quiet"
        />

        <div className="page-section grid gap-5 md:grid-cols-2">
          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">Who We Are</div>
            <p className="card-copy" style={{ color: 'var(--color-text)' }}>
              ONEMIND works on projects where power infrastructure is central to viability and progress.
            </p>
            <p className="card-copy" style={{ color: 'var(--color-text)' }}>
              We support project definition, financing readiness, and advancement in environments where constraints are real.
            </p>
          </div>

          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">Focus</div>
            <div className="mt-5 space-y-3">
              {[
                'Power infrastructure',
                'Project structuring',
                'Financing readiness',
              ].map((item) => (
                <div key={item} className="card-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">How We Work</div>
            <div className="mt-5 space-y-3">
              {[
                'Assess the project and the constraint',
                'Structure the next workable path',
                'Support advancement toward execution',
              ].map((item) => (
                <div key={item} className="card-list-item">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-base card-role-info card-panel">
            <div className="card-kicker">Our Role</div>
            <p className="card-copy" style={{ color: 'var(--color-text)' }}>
              We are not a general consulting firm and not a standalone transaction intermediary. Our role sits where
              infrastructure, readiness, financing, and delivery need to be understood together.
            </p>
          </div>
        </div>

        <div className="page-section card-base card-role-solution page-callout">
          <div className="page-callout-title">Discuss Your Project</div>
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
