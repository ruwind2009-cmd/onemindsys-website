import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects, SITE_URL } from '@/lib/site-content'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {}
  }

  return {
    title: `${project.title} — ONEMIND`,
    description: project.description,
    keywords: project.keywords,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'website',
      url: `${SITE_URL}/projects/${project.slug}`,
    },
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) notFound()

  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <div className="page-hero page-hero--feature">
          <div className="sec-label">Project</div>
          <h1 className="page-title page-title--feature">{project.title}</h1>
          <p className="page-subtitle">{project.summary}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['Region', project.region],
              ['Project Type', project.projectType],
              ['Role Type', project.roleType],
              ['Role', project.role],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[24px] border px-5 py-4" style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.82)' }}>
                <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--color-text3)' }}>
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
          {project.sections.map((section) => (
            <section key={section.title} className="card-base card-role-info card-panel">
              <h2 className="card-heading !mt-0">{section.title}</h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="page-section card-base card-role-info card-panel">
          <div className="card-kicker">Value</div>
          <p className="card-copy" style={{ color: 'var(--color-text)' }}>
            {project.value}
          </p>
        </div>

        <div className="page-section grid gap-5 md:grid-cols-2">
          {project.relatedLinks.map((link) => (
            <div key={link.href} className="card-base card-role-nav card-panel">
              <div className="card-kicker">Related Action</div>
              <h2 className="card-heading">{link.label}</h2>
              <p className="card-copy">{link.description}</p>
              <div className="button-row card-actions">
                <Link href={link.href} className="btn-secondary">
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
