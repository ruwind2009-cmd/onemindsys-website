import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'

export const metadata: Metadata = {
  title: '中文入口 — ONEMIND',
  description: '面向中国客户的 AI 算力、能源、融资与项目落地入口页面。',
  keywords: ['中文入口', 'AI算力项目', '算力与能源', 'AI项目融资', '海外部署'],
  openGraph: {
    title: '中文入口 — ONEMIND',
    description: '面向中国客户的 AI 算力、能源、融资与项目落地入口页面。',
    type: 'website',
  },
}

export default function ZhHomePage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="中文入口"
          title="AI算力、能源、融资与项目落地。"
          description="面向中国客户，ONEMIND 重点提供算力中心建设、能源项目升级、AI 算力出海与海外部署等项目型解决方案。"
          scene="zh-home"
          imageAlt="面向中国客户的算力、能源与项目落地主视觉。"
          tags={['算力中心建设', '能源升级', '海外部署']}
        />

        <div className="page-section grid gap-5 md:grid-cols-3">
          {[
            ['中文解决方案', '/zh/solutions', '查看三类核心客户方案与适用场景。', '查看解决方案'],
            ['合作模式', '/zh/cooperation', '了解项目如何推进、如何协同、责任边界如何划分。', '了解合作模式'],
            ['中文洞察', '/zh/insights', '查看围绕算力、电力、融资、海外部署的中文内容入口。', '查看中文洞察'],
          ].map(([title, href, desc, cta]) => (
            <div key={title} className="card-base card-role-nav card-panel">
              <div className="card-kicker">{title}</div>
              <p className="card-copy" style={{ color: 'var(--color-text)' }}>
                {desc}
              </p>
              <div className="button-row mt-6">
                <Link href={href} className="btn-link">
                  {cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
