import type { Metadata } from 'next'
import Link from 'next/link'
import { InternalPageHeader, InternalSectionHeader } from '@/components/site/InternalPagePrimitives'
import { projects } from '@/lib/site-content'
import { buildPageMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Selected Project Contexts',
  description:
    'Selected project contexts showing how ONEMIND approaches bankability, financing structure, and execution discipline across infrastructure and energy projects.',
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
          title="Selected track record across infrastructure and energy projects"
          description="Representative engagements reflecting project structuring, readiness assessment, and execution alignment across institutional project contexts."
        />

        <section className="internal-page__section">
          <InternalSectionHeader
            eyebrow="Selected Experience"
            title="Track record presented with the discipline of an advisory mandate list."
            description="Each entry is framed around geography, mandate type, and the role performed."
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
              <div className="internal-page__eyebrow">Project Inquiry</div>
              <h2 className="internal-section__title">Discuss a comparable project situation.</h2>
            </div>
            <div className="internal-actions">
              <Link href="/support#inquiry-form" className="institutional-button institutional-button--primary">
                Start a Discussion
              </Link>
              <Link href="/documentation-checklist" className="institutional-button institutional-button--secondary">
                Review Checklist
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
