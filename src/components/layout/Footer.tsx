'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const EN_LINKS = {
  Advisory: [
    { label: 'Project Pre-Qualification', href: '/pre-qualification' },
    { label: 'Funding Structure', href: '/funding-structure' },
    { label: 'Government-Backed Projects', href: '/government-backed-projects' },
  ],
  Readiness: [
    { label: 'Documentation Checklist', href: '/documentation-checklist' },
    { label: 'Projects', href: '/projects' },
    { label: 'Project Inquiry', href: '/support' },
  ],
  Additional: [
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'onemindsys.com', href: 'https://onemindsys.com' },
  ],
  China: [
    { label: 'Chinese Entry', href: '/zh' },
    { label: 'Chinese Solutions', href: '/zh/solutions' },
    { label: 'Cooperation Model', href: '/zh/cooperation' },
    { label: 'Chinese Insights', href: '/zh/insights' },
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
                : 'ONEMIND is a project finance structuring and capital facilitation platform for qualified government-backed infrastructure and energy projects.'}
            </p>
            {!isChinesePath ? (
              <p className="mt-5 max-w-sm text-sm leading-7" style={{ color: 'var(--color-text3)' }}>
                Information on this website is for general discussion of advisory capabilities only and does not constitute a
                funding commitment, guarantee, underwriting promise, or investment solicitation.
              </p>
            ) : null}
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
            <Link href="/support">{isChinesePath ? '联系' : 'Project Inquiry'}</Link>
            <Link href="/pre-qualification">{isChinesePath ? '能力' : 'Pre-Qualification'}</Link>
            <Link href="/funding-structure">{isChinesePath ? '融资路径' : 'Funding Structure'}</Link>
            <Link href="/documentation-checklist">{isChinesePath ? '资料清单' : 'Documentation Checklist'}</Link>
            <Link href={isChinesePath ? '/zh/insights' : '/insights'}>{isChinesePath ? '洞察' : 'Insights'}</Link>
            <Link href="/projects">{isChinesePath ? '项目' : 'Projects'}</Link>
            <Link href="/about">{isChinesePath ? '关于' : 'About'}</Link>
            <Link href="/support#inquiry-form">{isChinesePath ? '提交需求' : 'Start Pre-Qualification'}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
