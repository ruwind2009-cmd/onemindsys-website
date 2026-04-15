import Link from 'next/link'
import { InternalPageHeader, InternalSectionHeader } from '@/components/site/InternalPagePrimitives'
import { buildPageMetadata } from '@/lib/site-metadata'

const PRINCIPLES = [
  {
    title: 'Institutional discipline',
    body: 'We prioritize clarity, documentary coherence, and advisory judgment over promotional narratives.',
  },
  {
    title: 'Integrated perspective',
    body: 'We work where engineering logic, commercial structure, and capital requirements must align.',
  },
  {
    title: 'Execution awareness',
    body: 'We frame mandates with the discipline required for counterparties, approvals, and implementation realities.',
  },
]

export const metadata = buildPageMetadata({
  title: 'About ONEMIND',
  description:
    'Learn how ONEMIND approaches project finance structuring, documentation readiness, and capital facilitation for qualified government-backed infrastructure and energy projects.',
  path: '/about',
  keywords: [
    'about ONEMIND',
    'project finance structuring',
    'infrastructure advisory firm',
    'capital facilitation platform',
  ],
})

export default function AboutPage() {
  return (
    <div className="internal-page">
      <div className="internal-page__container">
        <InternalPageHeader
          eyebrow="About"
          title="A restrained advisory platform for infrastructure and energy mandates"
          description="ONEMIND is positioned at the intersection of project structuring, capital readiness, and execution discipline for large-scale infrastructure situations."
        />

        <section className="internal-page__section">
          <InternalSectionHeader
            eyebrow="Positioning"
            title="We are built for selective, institutional work."
            description="The platform is designed to communicate judgment, discretion, and readiness for serious project conversations."
          />

          <div className="internal-positioning">
            <p className="internal-positioning__statement">
              We advise on projects where technical definition, commercial structure, and capital pathways must be presented with institutional clarity.
            </p>
          </div>
        </section>

        <section className="internal-page__section internal-page__section--soft">
          <InternalSectionHeader
            eyebrow="Core Philosophy"
            title="Our standard is credibility under review."
          />

          <div className="internal-principles">
            {PRINCIPLES.map((item) => (
              <article key={item.title} className="internal-principles__item">
                <h2 className="internal-principles__title">{item.title}</h2>
                <p className="internal-principles__body">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="internal-page__section">
          <div className="internal-cta">
            <div>
              <div className="internal-page__eyebrow">Contact</div>
              <h2 className="internal-section__title">For qualified situations, begin with a structured discussion.</h2>
            </div>
            <div className="internal-actions">
              <Link href="/support#inquiry-form" className="institutional-button institutional-button--primary">
                Start a Discussion
              </Link>
              <Link href="/documentation-checklist" className="institutional-button institutional-button--secondary">
                Review Checklist
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
