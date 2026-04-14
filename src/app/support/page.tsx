import type { Metadata } from 'next'
import Link from 'next/link'
import { InquiryForm } from '@/components/forms/InquiryForm'
import { PageHeroMedia } from '@/components/media/PageHeroMedia'

const SUPPORT_PATHS = [
  { title: 'Project structuring', desc: 'Used when the project path is still unclear.' },
  { title: 'Financing readiness', desc: 'Used when funding conversations cannot yet move forward.' },
  { title: 'Delivery support', desc: 'Used when the project needs execution-aware planning.' },
]

export const metadata: Metadata = {
  title: 'Contact — ONEMIND',
  description:
    'Contact ONEMIND about a power-intensive project.',
  keywords: [
    'contact ONEMIND',
    'power infrastructure',
    'project structuring',
    'financing readiness',
    'contact ONEMIND',
  ],
  openGraph: {
    title: 'Contact — ONEMIND',
    description: 'Discuss a power-intensive project with ONEMIND.',
    type: 'website',
  },
}

export default function SupportPage() {
  return (
    <div className="page-shell page-shell--quiet">
      <div className="page-container">
        <PageHeroMedia
          eyebrow="Contact"
          title="Discuss Your Project"
          description="Start with the project context, the constraint, and the next decision that needs to be made."
          scene="support"
          imageAlt="Low-interference support visual showing project intake and infrastructure planning."
          tags={['Power Infrastructure', 'Project Readiness', 'Contact']}
          variant="quiet"
          muted
        />

        <div className="page-section grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5">
            <div className="card-base card-role-info card-panel">
              <div className="card-kicker">Start with a short conversation</div>
              <p className="text-base leading-8" style={{ color: 'var(--color-text2)' }}>
                We typically begin with a brief discussion to understand your project context before suggesting any next steps.
              </p>
            </div>

            <div className="card-base card-role-info card-panel">
              <div className="card-kicker">Email</div>
              <a
                href="mailto:contact@onemindsys.com"
                className="mt-4 inline-block text-base font-semibold leading-7"
                style={{ color: 'var(--color-text)' }}
              >
                contact@onemindsys.com
              </a>
              <p className="mt-3 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                Prefer email first? You can also reach us directly at contact@onemindsys.com
              </p>
            </div>

            <InquiryForm />
          </div>

          <div className="grid gap-5">
            <div className="card-base card-role-info card-panel">
              <div className="card-kicker">What We Can Help With</div>
              <div className="card-list">
                {SUPPORT_PATHS.map((item) => (
                  <div key={item.title} className="card-list-item">
                    <div className="font-orbitron text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-base card-role-info card-panel">
              <div className="card-kicker">What To Send</div>
              <div className="card-list">
                {[
                  'Who you are',
                  'Where the project sits',
                  'What the main constraint is',
                  'What decision needs to happen next',
                ].map((item) => (
                  <div key={item} className="card-list-item">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7" style={{ color: 'var(--color-text2)' }}>
                You can also review our{' '}
                <Link href="/projects" style={{ color: 'var(--color-text)' }}>
                  projects
                </Link>{' '}
                and our{' '}
                <Link href="/insights" style={{ color: 'var(--color-text)' }}>
                  project insights
                </Link>{' '}
                before submitting.
              </p>
            </div>
          </div>
        </div>

        <div className="page-section card-base card-role-solution page-callout">
          <div className="page-callout-title">Start with the issue that is blocking progress.</div>
          <div className="button-row mt-6">
            <Link href="#inquiry-form" className="btn-primary">
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
