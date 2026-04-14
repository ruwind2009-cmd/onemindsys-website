'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TALK_TRIGGERS = [
  'Power availability is uncertain',
  'Project structure is unclear',
  'Financing readiness is weak',
  'Projects are not moving forward',
]

export function HeroV2() {
  return (
    <section
      className="relative isolate overflow-hidden px-4 md:px-6"
      style={{ minHeight: '92vh', background: '#040812' }}
    >
      <Image
        src="/images/site/real/home-thermal-night.jpeg"
        alt="Night view of an active thermal power plant with cranes, industrial lighting, and large utility structures."
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center center' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(3,8,18,0.94) 0%, rgba(3,8,18,0.88) 26%, rgba(3,8,18,0.66) 48%, rgba(3,8,18,0.3) 70%, rgba(3,8,18,0.12) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(3,8,18,0.18) 0%, rgba(3,8,18,0.56) 100%)' }}
      />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center py-24 md:py-32">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-0 max-w-[38rem]"
          >
            <h1
              className="font-orbitron text-[clamp(3rem,6.8vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              style={{ color: '#ffffff' }}
            >
              Power Infrastructure for Complex Projects
            </h1>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Link href="/support#inquiry-form" className="btn-primary home-hero__primary">
                Discuss Your Project
              </Link>
              <Link href="/support" className="btn-secondary home-hero__secondary">
                Contact the Team
              </Link>
            </div>
            <div
              className="mt-8 max-w-3xl rounded-[24px] border px-5 py-5"
              style={{
                borderColor: 'rgba(255,255,255,0.12)',
                background: 'rgba(8,12,20,0.38)',
                backdropFilter: 'blur(18px)',
              }}
            >
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.62)' }}>
                When to Talk to Us
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {TALK_TRIGGERS.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border px-4 py-3 text-sm font-semibold leading-6"
                    style={{ borderColor: 'rgba(255,255,255,0.08)', color: '#ffffff' }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
