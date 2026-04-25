'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = {
  en: [
    { label: 'Home', href: '/', match: (pathname: string) => pathname === '/' },
    { label: 'RWA Structuring', href: '/rwa-structuring', match: (pathname: string) => pathname === '/rwa-structuring' },
    { label: 'Stablecoin Settlement', href: '/stablecoin-settlement', match: (pathname: string) => pathname === '/stablecoin-settlement' },
    { label: 'Project Finance', href: '/project-finance', match: (pathname: string) => pathname === '/project-finance' },
    { label: 'Tokenization Readiness', href: '/tokenization-readiness', match: (pathname: string) => pathname === '/tokenization-readiness' },
    { label: 'Experience', href: '/projects', match: (pathname: string) => pathname.startsWith('/projects') },
    { label: 'Contact', href: '/support', match: (pathname: string) => pathname === '/support' || pathname === '/submit-project' },
  ],
  zh: [
    { label: '首页', href: '/zh', match: (pathname: string) => pathname === '/zh' },
    { label: '项目经验', href: '/projects', match: (pathname: string) => pathname.startsWith('/projects') },
    { label: '关于', href: '/about', match: (pathname: string) => pathname === '/about' },
    { label: '联系', href: '/support', match: (pathname: string) => pathname === '/support' },
  ],
}

const LIGHT_CHROME_ROUTES = new Set([
  '/',
  '/projects',
  '/about',
  '/support',
  '/submit-project',
  '/rwa-structuring',
  '/stablecoin-settlement',
  '/project-finance',
  '/tokenization-readiness',
])

function usesLightChrome(pathname: string) {
  return LIGHT_CHROME_ROUTES.has(pathname) || pathname.startsWith('/projects/')
}

export function Header() {
  const pathname = usePathname()
  const isChinesePath = pathname.startsWith('/zh')
  const isLightChrome = usesLightChrome(pathname)
  const navLinks = isChinesePath ? NAV_LINKS.zh : NAV_LINKS.en
  const homeHref = isChinesePath ? '/zh' : '/'
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
        background: isLightChrome
          ? scrolled
            ? 'rgba(245, 245, 244, 0.94)'
            : 'rgba(245, 245, 244, 0.78)'
          : scrolled
            ? 'rgba(10, 12, 16, 0.92)'
            : 'rgba(10, 12, 16, 0.7)',
        borderBottom: isLightChrome ? '1px solid #E5E7EB' : '1px solid rgba(184, 190, 198, 0.12)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <nav className="mx-auto flex h-[72px] max-w-[92rem] items-center justify-between px-4 py-4 sm:px-6">
        <Link href={homeHref} className="shrink-0">
          <div className="text-[0.95rem] font-semibold tracking-[0.28em]" style={{ color: isLightChrome ? '#111827' : '#f4f2ec' }}>
            ONEMIND
          </div>
          <div
            className="mt-1 text-[10px] uppercase tracking-[0.26em]"
            style={{ color: isLightChrome ? '#5B6472' : 'rgba(232, 235, 239, 0.52)' }}
          >
            {isChinesePath ? '基础设施与能源顾问' : 'Web3 Project Finance Advisory'}
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const active = link.match(pathname)
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors"
                style={{ color: active ? (isLightChrome ? '#111827' : '#f4f2ec') : isLightChrome ? '#5B6472' : 'rgba(232, 235, 239, 0.7)' }}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ background: isLightChrome ? 'rgba(17, 24, 39, 0.05)' : 'rgba(255, 255, 255, 0.07)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/submit-project"
            className="inline-flex min-h-[2.85rem] items-center rounded-full border px-4 text-[13px] font-semibold transition-colors"
            style={{
              borderColor: isLightChrome ? '#1E2A38' : 'rgba(244, 242, 236, 0.2)',
              background: isLightChrome ? '#1E2A38' : 'rgba(244, 242, 236, 0.94)',
              color: isLightChrome ? '#F9FAFB' : '#111318',
            }}
          >
            {isChinesePath ? '发起讨论' : 'Submit Project'}
          </Link>
        </div>

        <button
          aria-label={isChinesePath ? '切换菜单' : 'Toggle menu'}
          className="xl:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          style={{ color: isLightChrome ? '#111827' : '#f4f2ec' }}
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
              background: isLightChrome ? 'rgba(250, 250, 248, 0.98)' : 'rgba(12, 14, 18, 0.98)',
              borderTop: isLightChrome ? '1px solid #E5E7EB' : '1px solid rgba(184, 190, 198, 0.12)',
            }}
          >
            <div className="space-y-2 px-6 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold"
                  style={{
                    color: link.match(pathname) ? (isLightChrome ? '#111827' : '#f4f2ec') : isLightChrome ? '#5B6472' : 'rgba(232, 235, 239, 0.72)',
                    background: link.match(pathname) ? (isLightChrome ? 'rgba(17, 24, 39, 0.05)' : 'rgba(255, 255, 255, 0.07)') : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/submit-project"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex min-h-[3rem] w-full items-center justify-center rounded-full border text-sm font-semibold"
                style={{
                  borderColor: isLightChrome ? '#1E2A38' : 'rgba(244, 242, 236, 0.18)',
                  background: isLightChrome ? '#1E2A38' : 'rgba(244, 242, 236, 0.94)',
                  color: isLightChrome ? '#F9FAFB' : '#111318',
                }}
              >
                {isChinesePath ? '发起讨论' : 'Submit Project'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
