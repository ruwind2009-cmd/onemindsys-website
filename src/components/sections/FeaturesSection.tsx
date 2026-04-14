'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const FEATURES = [
  {
    title: 'Infrastructure-Led Assessment',
    kicker: 'Assessment',
    desc: 'We look first at infrastructure constraints, site readiness, and energy context before advancing project assumptions.',
  },
  {
    title: 'Project Structuring',
    kicker: 'Structuring',
    desc: 'We help frame power-intensive projects around viability, sequencing, and practical development pathways.',
  },
  {
    title: 'Financing Readiness',
    kicker: 'Financing',
    desc: 'Technical, commercial, and risk elements are aligned to support lender, investor, and funding discussions.',
  },
  {
    title: 'Execution Support',
    kicker: 'Delivery',
    desc: 'We help move projects toward execution through coordination, planning, and support in complex environments.',
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="px-4 py-24 md:px-6" style={{ background: 'var(--color-bg)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="sec-label">How We Work</div>
        <div ref={ref} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="card-base p-7"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--color-text3)' }}>
                {feature.kicker}
              </div>
              <p className="mt-4 font-orbitron text-xl font-semibold leading-8" style={{ color: 'var(--color-text)' }}>
                {feature.title}
              </p>
              <p className="mt-4 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
