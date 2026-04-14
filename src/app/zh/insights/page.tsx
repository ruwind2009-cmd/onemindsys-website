import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'
import { zhInsights } from '@/lib/site-content'

export const metadata: Metadata = {
  title: '中文洞察 — ONEMIND',
  description: '围绕 AI 数据中心、算力成本、能源系统与海外部署的中文行业洞察。',
  keywords: ['AI数据中心', 'AI算力成本', '中东AI基础设施', '算力与能源', '中文洞察'],
  openGraph: {
    title: '中文洞察 — ONEMIND',
    description: '围绕 AI 数据中心、算力成本、能源系统与海外部署的中文行业洞察。',
    type: 'website',
  },
}

export default function ZhInsightsPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="中文洞察"
          title="AI基础设施中文洞察。"
          description="面向中文客户的 AI 数据中心、算力成本、能源系统与海外部署内容入口。"
          scene="zh-insights"
          imageAlt="中文洞察页面主视觉，体现研究、行业判断与基础设施视角。"
          tags={['AI数据中心', '算力成本', '海外部署']}
        />

        <div className="page-section grid gap-5 xl:grid-cols-3">
          {zhInsights.map((article) => (
            <article key={article.slug} className="card-base card-role-nav card-panel flex h-full flex-col">
              <div className="card-kicker">中文文章</div>
              <h2 className="card-heading">{article.title}</h2>
              <p className="card-copy">{article.excerpt}</p>
              <div className="button-row card-actions">
                <Link href={`/zh/insights/${article.slug}`} className="btn-secondary">
                  阅读文章
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="page-section grid gap-5 md:grid-cols-3">
          {[
            ['中文解决方案', '/zh/solutions', '从客户场景出发查看三类中国客户解决方案。', '查看解决方案'],
            ['合作模式', '/zh/cooperation', '了解项目如何推进、如何协同以及责任边界。', '了解合作模式'],
            ['融资路径', '/financing', '了解融资如何支持 AI 基础设施项目落地。', '获取融资方案'],
            ['项目经验', '/projects', '查看电力、光伏、储能与关键基础设施方向的项目经验。', '查看项目经验'],
            ['提交需求', '/support#inquiry-form', '直接提交算力、能源或海外项目需求。', '提交项目需求'],
          ].map(([title, href, desc, cta]) => (
            <div key={title} className="card-base card-role-info card-panel">
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
