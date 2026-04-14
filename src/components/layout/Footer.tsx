'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const EN_LINKS = {
  Capabilities: [
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/support' },
  ],
  Insights: [
    { label: 'Insights', href: '/insights' },
    { label: 'Project Insights', href: '/insights' },
    { label: 'Selected Projects', href: '/projects' },
  ],
  China: [
    { label: 'Chinese Entry', href: '/zh' },
    { label: 'Chinese Solutions', href: '/zh/solutions' },
    { label: 'Cooperation Model', href: '/zh/cooperation' },
    { label: 'Chinese Insights', href: '/zh/insights' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'onemindsys.com', href: 'https://onemindsys.com' },
  ],
}

const ZH_LINKS = {
  解决方案: [
    { label: '解决方案', href: '/zh/solutions' },
    { label: '合作模式', href: '/zh/cooperation' },
    { label: '项目经验', href: '/projects' },
    { label: '联系我们', href: '/support' },
  ],
  洞察: [
    { label: '中文洞察', href: '/zh/insights' },
    { label: '融资路径', href: '/financing' },
    { label: '项目经验', href: '/projects' },
  ],
  英文站: [
    { label: '英文首页', href: '/' },
    { label: '英文方案', href: '/enterprise' },
    { label: '英文交付', href: '/delivery' },
    { label: '英文洞察', href: '/insights' },
  ],
  公司: [
    { label: '关于 ONEMIND', href: '/about' },
    { label: '算力与能源', href: '/technology' },
    { label: 'onemindsys.com', href: 'https://onemindsys.com' },
  ],
}

export function Footer() {
  const pathname = usePathname()
  const isChinesePath = pathname.startsWith('/zh')
  const links = isChinesePath ? ZH_LINKS : EN_LINKS

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg2)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div>
            <div className="font-orbitron text-base font-semibold tracking-[0.28em]" style={{ color: 'var(--color-text)' }}>
              ONEMIND
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
              {isChinesePath
                ? 'ONEMIND 专注于构建算力与能源一体化 AI 基础设施。'
                : 'ONEMIND is a power infrastructure partner focused on structuring, financing readiness, and project advancement.'}
            </p>
          </div>

          {Object.entries(links).map(([group, groupLinks]) => (
            <div key={group}>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--color-text3)' }}>
                {group}
              </div>
              <ul className="space-y-3">
                {groupLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm transition-colors" style={{ color: 'var(--color-text2)' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 text-sm md:flex-row md:items-center"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p style={{ color: 'var(--color-text3)' }}>
            {isChinesePath ? '© 2026 ONEMIND Systems。访问 ' : '© 2026 ONEMIND Systems. Visit '}
            <Link href="https://onemindsys.com" style={{ color: 'var(--color-text)' }}>
              onemindsys.com
            </Link>
            {isChinesePath ? '。' : '.'}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2" style={{ color: 'var(--color-text3)' }}>
            <Link href="/support">{isChinesePath ? '联系' : 'Contact'}</Link>
            <Link href="/capabilities">{isChinesePath ? '能力' : 'Capabilities'}</Link>
            <Link href={isChinesePath ? '/zh/insights' : '/insights'}>{isChinesePath ? '洞察' : 'Insights'}</Link>
            <Link href="/projects">{isChinesePath ? '项目' : 'Projects'}</Link>
            <Link href="/about">{isChinesePath ? '关于' : 'About'}</Link>
            <Link href="/support#inquiry-form">{isChinesePath ? '提交需求' : 'Discuss Your Project'}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
