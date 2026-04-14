import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'
import { SITE_PHOTOS } from '@/lib/site-photos'
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
  const projectScenes = {
    'power-infrastructure-project-in-iraq': {
      scene: 'project-power' as const,
      alt: 'Power infrastructure project visual with transmission and substation assets.',
    },
    'utility-scale-solar-pv-project': {
      scene: 'project-solar' as const,
      alt: 'Utility-scale solar project visual linked to infrastructure delivery.',
    },
    'bess-for-critical-infrastructure': {
      scene: 'project-bess' as const,
      alt: 'Battery energy storage system visual for critical infrastructure resilience.',
    },
  }

  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="Projects"
          title="Selected Project Contexts"
          description="Illustrative project situations where structure, documentation readiness, and execution discipline shaped the financing pathway."
          scene="projects"
          imageAlt="Project portfolio visual showing large-scale energy and industrial infrastructure assets."
          tags={['Infrastructure', 'Energy', 'Project Finance']}
        />

        <div className="page-section grid gap-5 xl:grid-cols-3">
          {projects.map((project) => {
            const media = projectScenes[project.slug as keyof typeof projectScenes]

            return (
            <article key={project.slug} className="card-base card-role-nav card-panel flex h-full flex-col">
              {media && (
                <div className="media-card-frame media-card-frame--compact">
                  <Image
                    src={SITE_PHOTOS[media.scene].src}
                    alt={media.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                    style={{ objectPosition: SITE_PHOTOS[media.scene].position ?? 'center center' }}
                  />
                </div>
              )}
              <div className="card-kicker">{project.projectType}</div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--color-text3)' }}>
                Role Type
              </div>
              <p className="mt-2 text-sm font-semibold leading-6" style={{ color: 'var(--color-text)' }}>
                {project.roleType}
              </p>
              <h2 className="card-heading !mt-4">{project.title}</h2>
              <p className="card-meta">{project.region}</p>
              <p className="mt-4 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                {project.role}
              </p>
              <p className="mt-4 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                {project.value}
              </p>
              <div className="button-row card-actions">
                <Link href={`/projects/${project.slug}`} className="btn-secondary">
                  View Project
                </Link>
              </div>
            </article>
            )
          })}
        </div>

        <div className="page-section card-base card-role-solution page-callout">
          <div className="page-callout-title">Start Project Pre-Qualification</div>
          <div className="button-row mt-6">
            <Link href="/support#inquiry-form" className="btn-primary">
              Submit Project Inquiry
            </Link>
            <Link href="/documentation-checklist" className="btn-secondary">
              Review Documentation Checklist
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
