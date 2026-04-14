import type { Metadata } from 'next'
import Link from 'next/link'
import { insights } from '@/lib/site-content'
import { buildPageMetadata } from '@/lib/site-metadata'

export const metadata: Metadata = buildPageMetadata({
  title: 'Insights',
  description:
    'Brief perspectives on project bankability, infrastructure financing readiness, and the transaction issues that cause serious projects to stall.',
  path: '/insights',
  keywords: [
    'project finance insights',
    'bankability perspectives',
    'infrastructure financing readiness',
    'transaction advisory insights',
  ],
})

export default function InsightsPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <div className="page-hero page-hero--feature">
          <div className="sec-label">Insights</div>
          <h1 className="page-title page-title--feature">Project Insights and Perspectives</h1>
          <p className="page-subtitle">
            Short perspectives on bankability, structure, and the practical reasons infrastructure transactions lose momentum.
          </p>
        </div>

        <div className="page-section grid gap-5 xl:grid-cols-3">
          {insights.map((article) => (
            <article key={article.slug} className="card-base card-role-nav card-panel flex h-full flex-col">
              <div className="card-kicker">{article.cardLabel ?? 'Problem'}</div>
              <h2 className="card-heading">{article.title}</h2>
              <p className="mt-4 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                {article.excerpt}
              </p>
              <div className="mt-4 rounded-2xl border px-4 py-4" style={{ borderColor: 'var(--color-border)' }}>
                <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--color-text3)' }}>
                  {article.seenInLabel ?? 'Seen In'}
                </div>
                <p className="mt-2 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                  {article.seenIn}
                </p>
              </div>
              <p className="mt-4 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                {article.summary}
              </p>
              <div className="button-row card-actions">
                <Link href={`/insights/${article.slug}`} className="btn-secondary">
                  View Insight
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
