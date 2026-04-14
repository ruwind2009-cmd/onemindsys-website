'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Capabilities', href: '/capabilities', match: (pathname: string) => pathname === '/capabilities' || pathname === '/enterprise' },
  { label: 'Projects', href: '/projects', match: (pathname: string) => pathname.startsWith('/projects') },
  { label: 'Insights', href: '/insights', match: (pathname: string) => pathname.startsWith('/insights') },
  { label: 'About', href: '/about', match: (pathname: string) => pathname === '/about' },
  { label: 'Contact', href: '/support', match: (pathname: string) => pathname === '/support' },
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
        background: scrolled ? 'rgba(248, 251, 255, 0.92)' : 'rgba(248, 251, 255, 0.76)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
        backdropFilter: 'blur(18px)',
      }}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0">
          <div className="font-orbitron text-base font-semibold tracking-[0.28em]" style={{ color: 'var(--color-text)' }}>
            ONEMIND
          </div>
          <div className="mt-1 text-[11px] tracking-[0.24em]" style={{ color: 'var(--color-text2)' }}>
            Power Infrastructure
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = link.match(pathname)
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors"
                style={{ color: active ? 'var(--color-text)' : 'var(--color-text2)' }}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ background: 'rgba(15, 23, 42, 0.06)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/support" className="hidden text-sm font-semibold xl:inline-flex" style={{ color: 'var(--color-text2)' }}>
            Contact the Team
          </Link>
          <Link href="/support#inquiry-form" className="btn-primary text-sm">
            Discuss Your Project
          </Link>
        </div>

        <button
          aria-label={isChinesePath ? '切换菜单' : 'Toggle menu'}
          className="lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          style={{ color: 'var(--color-text)' }}
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
              background: 'rgba(248, 251, 255, 0.96)',
              borderTop: '1px solid rgba(226, 232, 240, 0.9)',
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
                    color: link.match(pathname) ? 'var(--color-text)' : 'var(--color-text2)',
                    background: link.match(pathname) ? 'rgba(15, 23, 42, 0.05)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/support" onClick={() => setMenuOpen(false)} className="btn-outline mt-3 w-full text-sm">
                Contact the Team
              </Link>
              <Link href="/support#inquiry-form" onClick={() => setMenuOpen(false)} className="btn-primary mt-3 w-full text-sm">
                Discuss Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
