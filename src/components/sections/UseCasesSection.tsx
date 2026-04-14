'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SITE_PHOTOS } from '@/lib/site-photos'
import { projects } from '@/lib/site-content'

const PATHS = [
  {
    title: 'Power Project Structuring',
    desc: 'Defines project logic, infrastructure readiness, and viable pathways.',
    meta: 'Core Capability',
    cta: 'Discuss Your Project',
    href: '/support#inquiry-form',
    primary: true,
    imageKey: 'home-solution-compute' as const,
  },
  {
    title: 'Financing Enablement',
    desc: 'Builds financing readiness by aligning technical, commercial, and risk foundations.',
    meta: 'Core Capability',
    cta: 'Discuss Your Project',
    href: '/support#inquiry-form',
    imageKey: 'home-solution-energy' as const,
  },
  {
    title: 'Delivery & Project Advancement',
    desc: 'Moves projects toward execution through planning, coordination, and support.',
    meta: 'Core Capability',
    cta: 'Discuss Your Project',
    href: '/support#inquiry-form',
    imageKey: 'home-solution-deployment' as const,
  },
]

export function TwoPathsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="px-4 py-24 md:px-6" style={{ background: 'var(--color-section)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="sec-label">What We Do</div>
        <p className="mb-10 mt-5 max-w-3xl text-base leading-8" style={{ color: 'var(--color-text2)' }}>
          Three capabilities. One focus: power infrastructure projects that need structure, readiness, and forward motion.
        </p>
        <div ref={ref} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PATHS.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-base p-8"
            >
              <div className="media-card-frame mb-6">
                <Image
                  src={SITE_PHOTOS[path.imageKey].src}
                  alt={SITE_PHOTOS[path.imageKey].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: SITE_PHOTOS[path.imageKey].position ?? 'center center' }}
                />
              </div>
              <div className="card-kicker">{path.meta}</div>
              <h2 className="mt-4 font-orbitron text-[1.95rem] font-semibold leading-tight" style={{ color: 'var(--color-text)' }}>
                {path.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-7" style={{ color: 'var(--color-text2)' }}>
                {path.desc}
              </p>
              <div className="mt-8">
                <Link href={path.href} className={path.primary ? 'btn-primary' : 'btn-outline'}>
                  {path.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UseCasesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const projectImages = {
    'power-infrastructure-project-in-iraq': 'project-power' as const,
    'utility-scale-solar-pv-project': 'project-solar' as const,
    'bess-for-critical-infrastructure': 'project-bess' as const,
  }

  return (
    <section className="px-4 py-24 md:px-6" style={{ background: 'var(--color-bg)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="sec-label">Selected Projects</div>
        <div ref={ref} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const imageKey = projectImages[project.slug as keyof typeof projectImages]
            const image = SITE_PHOTOS[imageKey]

            return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="card-base card-role-nav card-panel flex h-full flex-col"
            >
              <div className="media-card-frame media-card-frame--compact">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: image.position ?? 'center center' }}
                />
              </div>
              <div className="card-kicker">{project.projectType}</div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--color-text3)' }}>
                Role Type
              </div>
              <p className="mt-2 text-sm font-semibold leading-6" style={{ color: 'var(--color-text)' }}>
                {project.roleType}
              </p>
              <h3 className="mt-4 font-orbitron text-2xl font-semibold leading-tight" style={{ color: 'var(--color-text)' }}>
                {project.title}
              </h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--color-text3)' }}>
                {project.region}
              </p>
              <p className="mt-4 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                {project.role}
              </p>
              <p className="mt-4 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                {project.value}
              </p>
              <div className="button-row card-actions">
                <Link href={`/projects/${project.slug}`} className="btn-secondary">
                  View Project Details
                </Link>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function DeveloperPreviewSection() {
  return (
    <section className="px-4 py-24 md:px-6" style={{ background: 'var(--color-section)' }}>
      <div className="mx-auto max-w-5xl rounded-[32px] border bg-white px-8 py-12 text-center md:px-14" style={{ borderColor: 'var(--color-border)' }}>
        <div className="sec-label inline-flex justify-center">Delivery Capability</div>
        <p className="mx-auto max-w-2xl font-orbitron text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-tight" style={{ color: 'var(--color-text)' }}>
          Structured delivery for
          <br />
          project clients, partners, and investors.
        </p>
        <div className="mt-8">
          <Link href="/developers" className="btn-outline">
            Explore Delivery Model
          </Link>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="px-4 py-24 md:px-6" style={{ background: 'var(--color-bg2)' }}>
      <div
        className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border px-8 py-12 text-center md:px-14 md:py-16"
        style={{
          borderColor: 'var(--color-border)',
          background: 'linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%)',
          boxShadow: 'var(--shadow-soft)',
        }}
      >
        <div className="sec-label inline-flex justify-center">Contact</div>
        <h2 className="mx-auto max-w-3xl font-orbitron text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight" style={{ color: 'var(--color-text)' }}>
          Discuss a Power-Intensive Project
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7" style={{ color: 'var(--color-text2)' }}>
          If your project depends on power infrastructure, financing readiness, and practical advancement, we can support the next step.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/support#inquiry-form" className="btn-primary">
            Discuss Your Project
          </Link>
          <Link href="/support" className="btn-secondary">
            Contact the Team
          </Link>
        </div>
      </div>
    </section>
  )
}
