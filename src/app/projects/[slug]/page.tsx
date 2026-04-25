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
    <div className="project-profile">
      <div className="project-profile__container">
        <header className="project-profile__hero">
          <div className="project-profile__eyebrow">Project Profile</div>
          <h1 className="project-profile__title">{project.title}</h1>
          <p className="project-profile__summary">{project.summary}</p>
          <div className="project-profile__facts">
            {[
              ['Region', project.region],
              ['Project Type', project.projectType],
              ['Role Type', project.roleType],
              ['Role', project.role],
            ].map(([label, value]) => (
              <div key={label} className="project-profile__fact">
                <div className="project-profile__fact-label">{label}</div>
                <div className="project-profile__fact-value">{value}</div>
              </div>
            ))}
          </div>
        </header>

        <div className="project-profile__section project-profile__section-grid">
          {project.sections.map((section) => (
            <section
              key={section.title}
              className={`project-profile__card ${
                section.title.toLowerCase() === 'disclosure' ? 'project-profile__card--disclosure' : ''
              }`}
            >
              {section.title.toLowerCase() === 'disclosure' ? (
                <div className="project-profile__card-eyebrow">Advisory Disclosure</div>
              ) : null}
              <h2 className="project-profile__card-title">{section.title}</h2>
              <div className="project-profile__copy-stack">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="project-profile__section project-profile__card project-profile__card--value">
          <div className="project-profile__card-eyebrow">Mandate Value</div>
          <p className="project-profile__value">
            {project.value}
          </p>
        </section>

        <section className="project-profile__section project-profile__section-grid project-profile__section-grid--two">
          {project.relatedLinks.map((link) => (
            <div key={link.href} className="project-profile__card project-profile__card--action">
              <div className="project-profile__card-eyebrow">Related Action</div>
              <h2 className="project-profile__card-title">{link.label}</h2>
              <p className="project-profile__card-copy">{link.description}</p>
              <div className="project-profile__actions">
                <Link href={link.href} className="project-profile__button project-profile__button--secondary">
                  Open Related Page
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className="project-profile__section project-profile__disclosure">
          <div className="project-profile__card-eyebrow">Advisory Disclosure</div>
          <p>
            These examples represent advisory experience and structuring logic. They do not imply token issuance,
            securities offering, custody activity, payment licensing, or completed regulated transactions.
          </p>
        </section>

        <section className="project-profile__section project-profile__cta">
          <div className="project-profile__cta-title">Submit a Comparable Project for Review</div>
          <div className="project-profile__actions">
            <Link href="/submit-project" className="project-profile__button project-profile__button--primary">
              Submit Project
            </Link>
            <Link href="/tokenization-readiness" className="project-profile__button project-profile__button--secondary">
              Review Readiness Criteria
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
