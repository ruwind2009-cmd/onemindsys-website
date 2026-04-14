import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: string
  color?: 'green' | 'blue' | 'teal'
}

const colorMap = {
  green: 'var(--color-text2)',
  blue: 'var(--color-text3)',
  teal: 'var(--color-text2)',
}

export function SectionLabel({ children, color = 'green' }: SectionLabelProps) {
  return (
    <div
      className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase mb-3 font-rajdhani"
      style={{ color: colorMap[color] }}
    >
      {children}
    </div>
  )
}

interface SectionHeadingProps {
  children: ReactNode
  gradient?: [string, string]
  className?: string
}

export function SectionHeading({ children, gradient = ['#0a0f14', '#94a3b8'], className = '' }: SectionHeadingProps) {
  return (
    <h2
      className={`font-orbitron font-bold leading-tight mb-4 ${className}`}
      style={{
        fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
        background: `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </h2>
  )
}
