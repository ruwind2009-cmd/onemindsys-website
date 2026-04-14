import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SITE_URL, getZhInsightBySlug, zhInsights } from '@/lib/site-content'

export function generateStaticParams() {
  return zhInsights.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getZhInsightBySlug(params.slug)

  if (!article) return {}

  return {
    title: `${article.title} — ONEMIND`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `${SITE_URL}/zh/insights/${article.slug}`,
    },
  }
}

export default function ZhInsightArticlePage({ params }: { params: { slug: string } }) {
  const article = getZhInsightBySlug(params.slug)

  if (!article) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    mainEntityOfPage: `${SITE_URL}/zh/insights/${article.slug}`,
    author: {
      '@type': 'Organization',
      name: 'ONEMIND',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ONEMIND',
      url: SITE_URL,
    },
    keywords: article.keywords.join(', '),
    inLanguage: 'zh-CN',
  }

  return (
    <div className="page-shell page-shell--quiet">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="page-container">
        <div className="page-hero page-hero--feature">
          <div className="sec-label">中文洞察</div>
          <h1 className="page-title page-title--feature">{article.title}</h1>
          <p className="page-subtitle">{article.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {article.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border px-3 py-1 text-xs font-semibold"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text2)' }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="page-section grid gap-5">
          {article.sections.map((section) => (
            <section key={section.title} className="card-base card-role-info card-panel">
              <h2 className="card-heading !mt-0">{section.title}</h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <div className="card-list mt-8">
                  {section.bullets.map((bullet) => (
                    <div key={bullet} className="card-list-item">
                      {bullet}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="page-section grid gap-5 md:grid-cols-3">
          {article.relatedLinks.map((link) => (
            <div key={link.href} className="card-base card-role-nav card-panel">
              <div className="card-kicker">下一步</div>
              <h2 className="card-heading">{link.label}</h2>
              <p className="card-copy">{link.description}</p>
              <div className="button-row card-actions">
                <Link href={link.href} className="btn-secondary">
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="page-section card-base card-role-solution page-callout">
          <div className="page-callout-title">需要进入项目沟通，而不是继续阅读内容？</div>
          <div className="button-row mt-6">
            <Link href="/support#inquiry-form" className="btn-primary">
              提交项目需求
            </Link>
            <Link href="/financing" className="btn-secondary">
              获取融资方案
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
