'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  accent?: 'green' | 'blue' | 'teal'
  className?: string
  delay?: number
  animate?: boolean
}

const accentBorders = {
  green: 'rgba(226, 232, 240, 1)',
  blue: 'rgba(203, 213, 225, 1)',
  teal: 'rgba(226, 232, 240, 1)',
}

export function GlowCard({ children, accent = 'green', className = '', delay = 0, animate = true }: GlowCardProps) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration: 0.45 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`rounded-[24px] ${className}`}
      style={{
        border: `1px solid ${accentBorders[accent]}`,
        background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      {children}
    </motion.div>
  )
}
