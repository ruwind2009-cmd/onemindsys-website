import type { Metadata } from 'next'
import Link from 'next/link'
import { InternalPageHeader, InternalSectionHeader } from '@/components/site/InternalPagePrimitives'
import { projects } from '@/lib/site-content'
import { buildPageMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Selected Experience',
  description:
    'Selected ONEMIND advisory experience reframed around bankability, RWA readiness, stablecoin settlement context, and institutional project finance discipline.',
  path: '/projects',
  keywords: [
    'project finance case studies',
    'infrastructure project contexts',
    'bankability examples',
    'structured capital solutions',
  ],
})

export default function ProjectsPage() {
  return (
    <div className="internal-page">
      <div className="internal-page__container">
        <InternalPageHeader
          eyebrow="Experience"
          title="Selected advisory experience across real infrastructure assets"
          description="Representative engagements reflecting project finance structuring, bankability review, technical-financial integration, and RWA-readiness logic for real-world assets."
        />

        <section className="internal-page__section">
          <InternalSectionHeader
            eyebrow="Selected Experience"
            title="Track record presented with the discipline of an advisory mandate list."
            description="Each entry is framed around geography, mandate type, project-finance logic, and relevance to Web3-enabled capital readiness."
          />

          <div className="track-record">
            {projects.map((project, index) => (
              <article key={project.slug} className="track-record__item">
                <div className="track-record__index">{String(index + 1).padStart(2, '0')}</div>
                <div className="track-record__body">
                  <div className="track-record__eyebrow">{project.region}</div>
                  <h2 className="track-record__title">{project.title}</h2>
                  <div className="track-record__meta">
                    <span>Sector: {project.projectType}</span>
                    <span>Role: {project.roleType}</span>
                  </div>
                  <p className="track-record__summary">{project.role}</p>
                </div>
                <div className="track-record__actions">
                  <Link href={`/projects/${project.slug}`} className="track-record__link">
                    View Project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="internal-page__section internal-page__section--soft">
          <div className="internal-cta">
            <div>
              <div className="internal-page__eyebrow">Advisory Disclosure</div>
              <h2 className="internal-section__title">
                These examples represent advisory experience and structuring logic.
              </h2>
              <p className="internal-section__description">
                They do not imply token issuance, securities offering, custody activity, payment licensing, or completed
                regulated transactions.
              </p>
            </div>
            <div className="internal-actions">
              <Link href="/submit-project" className="institutional-button institutional-button--primary">
                Submit Project
              </Link>
              <Link href="/rwa-structuring" className="institutional-button institutional-button--secondary">
                RWA Structuring
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
