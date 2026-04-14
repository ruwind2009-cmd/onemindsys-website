'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const STATS = [
  { val: 'Project Structuring', label: 'Power-intensive infrastructure' },
  { val: 'Financing Readiness', label: 'Investment alignment' },
  { val: 'Delivery Coordination', label: 'Complex environments' },
  { val: 'Execution Focus', label: 'Actionable progress' },
]

export function HeroSection() {
  return (
    <section className="px-4 pb-10 pt-28 md:px-6 md:pb-16 md:pt-36" style={{ background: 'var(--color-bg2)' }}>
      <div className="mx-auto max-w-6xl text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <span className="badge-green">ONEMIND</span>
          <h1 className="mt-6 font-orbitron text-[clamp(2.4rem,5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.04em]" style={{ color: 'var(--color-text)' }}>
            Power Infrastructure for Complex Projects
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 md:text-lg" style={{ color: 'var(--color-text2)' }}>
            ONEMIND is a power infrastructure-focused advisory and project delivery partner, helping clients structure,
            finance, and advance projects across traditional, renewable, and power-intensive digital infrastructure
            environments.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/support#inquiry-form" className="btn-primary">
              Discuss Your Project
            </Link>
            <Link href="/support" className="btn-outline">
              Contact the Team
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 + index * 0.08 }}
              className="card-base p-6"
            >
              <div className="font-orbitron text-2xl font-semibold" style={{ color: 'var(--color-text)' }}>
                {stat.val}
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--color-text3)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
