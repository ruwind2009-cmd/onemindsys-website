import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SITE_URL, getInsightBySlug, insights } from '@/lib/site-content'

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getInsightBySlug(params.slug)

  if (!article) {
    return {}
  }

  return {
    title: `${article.title} — ONEMIND`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `${SITE_URL}/insights/${article.slug}`,
    },
  }
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = getInsightBySlug(params.slug)

  if (!article) notFound()

  const eyebrow = article.eyebrow ?? 'Insights'
  const seenInLabel = article.seenInLabel ?? 'Seen In'
  const ctaTitle = article.ctaTitle ?? 'Discuss Your Project'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
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
  }

  return (
    <div className="page-shell page-shell--quiet">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="page-container">
        <div className="page-hero page-hero--feature">
          <div className="sec-label">{eyebrow}</div>
          <h1 className="page-title page-title--feature">{article.title}</h1>
          <p className="page-subtitle">{article.summary}</p>
          <div className="mt-8 max-w-3xl rounded-[24px] border px-5 py-4" style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.82)' }}>
            <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--color-text3)' }}>
              {seenInLabel}
            </div>
            <p className="mt-2 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
              {article.seenIn}
            </p>
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

        <div className="page-section grid gap-5 md:grid-cols-2">
          {article.relatedLinks.map((link) => (
            <div key={link.href} className="card-base card-role-nav card-panel">
              <div className="card-kicker">Next Step</div>
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
          <div className="page-callout-title">{ctaTitle}</div>
          <div className="button-row mt-6">
            <Link href="/support#inquiry-form" className="btn-primary">
              Discuss Your Project
            </Link>
            <Link href="/support" className="btn-secondary">
              Contact the Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
