'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Pre-Qualification', href: '/pre-qualification', match: (pathname: string) => pathname === '/pre-qualification' },
  { label: 'Funding Structure', href: '/funding-structure', match: (pathname: string) => pathname === '/funding-structure' || pathname === '/capabilities' || pathname === '/financing' },
  { label: 'Government-Backed Projects', href: '/government-backed-projects', match: (pathname: string) => pathname === '/government-backed-projects' || pathname === '/enterprise' || pathname === '/technology' },
  { label: 'Documentation', href: '/documentation-checklist', match: (pathname: string) => pathname === '/documentation-checklist' || pathname === '/delivery' || pathname === '/developers' || pathname === '/architecture' },
  { label: 'Projects', href: '/projects', match: (pathname: string) => pathname.startsWith('/projects') },
  { label: 'About', href: '/about', match: (pathname: string) => pathname === '/about' },
  { label: 'Project Inquiry', href: '/support', match: (pathname: string) => pathname === '/support' },
]

export function Header() {
  const pathname = usePathname()
  const isChinesePath = pathname.startsWith('/zh')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(6, 12, 22, 0.9)' : 'rgba(6, 12, 22, 0.72)',
        borderBottom: '1px solid rgba(150, 164, 186, 0.16)',
        backdropFilter: 'blur(18px)',
      }}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0">
          <div className="font-orbitron text-base font-semibold tracking-[0.28em]" style={{ color: '#f3f6fb' }}>
            ONEMIND
          </div>
          <div className="mt-1 text-[11px] tracking-[0.22em]" style={{ color: 'rgba(214, 222, 234, 0.66)' }}>
            Project Finance Advisory
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => {
            const active = link.match(pathname)
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors"
                style={{ color: active ? '#f4f7fb' : 'rgba(214, 222, 234, 0.74)' }}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ background: 'rgba(255, 255, 255, 0.08)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/funding-structure" className="hidden text-sm font-semibold 2xl:inline-flex" style={{ color: 'rgba(214, 222, 234, 0.74)' }}>
            View Funding Framework
          </Link>
          <Link href="/support#inquiry-form" className="btn-primary text-sm">
            Start Pre-Qualification
          </Link>
        </div>

        <button
          aria-label={isChinesePath ? '切换菜单' : 'Toggle menu'}
          className="xl:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          style={{ color: '#f4f7fb' }}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 rounded-full bg-current" />
            <span className="block h-0.5 w-6 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(8, 15, 27, 0.98)',
              borderTop: '1px solid rgba(150, 164, 186, 0.16)',
            }}
          >
            <div className="space-y-2 px-6 py-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold"
                  style={{
                    color: link.match(pathname) ? '#f4f7fb' : 'rgba(214, 222, 234, 0.74)',
                    background: link.match(pathname) ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/funding-structure" onClick={() => setMenuOpen(false)} className="btn-outline mt-3 w-full text-sm">
                View Funding Framework
              </Link>
              <Link href="/support#inquiry-form" onClick={() => setMenuOpen(false)} className="btn-primary mt-3 w-full text-sm">
                Start Pre-Qualification
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
