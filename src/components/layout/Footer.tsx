'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RWA_COMPLIANCE_DISCLAIMER } from '@/lib/site-content'

const FOOTER_LINKS = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'RWA Structuring', href: '/rwa-structuring' },
    { label: 'Stablecoin Settlement', href: '/stablecoin-settlement' },
    { label: 'Project Finance', href: '/project-finance' },
    { label: 'Tokenization Readiness', href: '/tokenization-readiness' },
    { label: 'Experience', href: '/projects' },
    { label: 'Contact', href: '/support' },
  ],
  zh: [
    { label: '首页', href: '/zh' },
    { label: '项目经验', href: '/projects' },
    { label: '关于', href: '/about' },
    { label: '联系', href: '/support' },
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

export function Footer() {
  const pathname = usePathname()
  const isChinesePath = pathname.startsWith('/zh')
  const isLightChrome = usesLightChrome(pathname)
  const links = isChinesePath ? FOOTER_LINKS.zh : FOOTER_LINKS.en

  return (
    <footer
      style={{
        borderTop: isLightChrome ? '1px solid #E5E7EB' : '1px solid rgba(184, 190, 198, 0.12)',
        background: isLightChrome ? '#FAFAF8' : '#0a0c10',
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <div className="text-[0.95rem] font-semibold tracking-[0.28em]" style={{ color: isLightChrome ? '#111827' : '#f4f2ec' }}>
            ONEMIND
          </div>
          <p className="mt-4 text-sm leading-7" style={{ color: isLightChrome ? '#5B6472' : 'rgba(232, 235, 239, 0.68)' }}>
            {isChinesePath
              ? '基础设施与能源投资的机构级顾问服务。'
              : 'Web3-enabled project finance and RWA infrastructure advisory for real-world energy and infrastructure assets.'}
          </p>
          <p className="mt-4 text-xs leading-6" style={{ color: isLightChrome ? '#5B6472' : 'rgba(232, 235, 239, 0.56)' }}>
            {RWA_COMPLIANCE_DISCLAIMER}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm" style={{ color: isLightChrome ? '#5B6472' : 'rgba(232, 235, 239, 0.72)' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors"
              style={{ color: isLightChrome ? '#5B6472' : undefined }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className="mx-auto flex max-w-7xl flex-col gap-2 border-t px-6 py-4 text-xs md:flex-row md:items-center md:justify-between"
        style={{
          borderColor: isLightChrome ? '#E5E7EB' : 'rgba(184, 190, 198, 0.12)',
          color: isLightChrome ? '#5B6472' : 'rgba(232, 235, 239, 0.48)',
        }}
      >
        <p>{isChinesePath ? '© 2026 ONEMIND Systems。' : '© 2026 ONEMIND Systems.'}</p>
        <Link href="https://onemindsys.com" style={{ color: isLightChrome ? '#111827' : '#f4f2ec' }}>
          onemindsys.com
        </Link>
      </div>
    </footer>
  )
}
