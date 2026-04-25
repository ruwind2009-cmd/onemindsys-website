import { ActionBanner, AdvisoryHero, DisclosureNotice, SectionHeading } from '@/components/site/AdvisoryPrimitives'
import { RWA_COMPLIANCE_DISCLAIMER } from '@/lib/site-content'
import type { SitePhotoKey } from '@/lib/site-photos'

type PageAction = {
  href: string
  label: string
}

type ContentCard = {
  title: string
  body: string
}

type ContentSection = {
  eyebrow: string
  title: string
  description?: string
  cards?: ContentCard[]
  bullets?: string[]
}

type Web3AdvisoryPageProps = {
  eyebrow: string
  title: string
  description: string
  scene: SitePhotoKey
  tags: string[]
  details: { label: string; value: string }[]
  sections: ContentSection[]
  cta: {
    eyebrow: string
    title: string
    description: string
    primaryAction: PageAction
    secondaryAction?: PageAction
  }
}

export function Web3AdvisoryPage({
  eyebrow,
  title,
  description,
  scene,
  tags,
  details,
  sections,
  cta,
}: Web3AdvisoryPageProps) {
  return (
    <div className="institutional-shell">
      <div className="institutional-container">
        <AdvisoryHero
          eyebrow={eyebrow}
          title={title}
          description={description}
          scene={scene}
          tags={tags}
          primaryAction={cta.primaryAction}
          secondaryAction={cta.secondaryAction ?? { href: '/submit-project', label: 'Submit a Project' }}
          details={details}
        />

        {sections.map((section) => (
          <section key={section.title} className="institutional-section">
            <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
            {section.cards ? (
              <div className="institutional-grid institutional-grid--three mt-8">
                {section.cards.map((card) => (
                  <article key={card.title} className="institutional-card">
                    <div className="institutional-card__eyebrow">{section.eyebrow}</div>
                    <h2 className="institutional-card__title institutional-card__title--small">{card.title}</h2>
                    <p className="institutional-card__copy">{card.body}</p>
                  </article>
                ))}
              </div>
            ) : null}
            {section.bullets ? (
              <div className="institutional-card institutional-card--soft mt-8">
                <div className="institutional-list">
                  {section.bullets.map((item) => (
                    <div key={item} className="institutional-list__item">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ))}

        <section className="institutional-section">
          <DisclosureNotice title="Compliance Note">{RWA_COMPLIANCE_DISCLAIMER}</DisclosureNotice>
        </section>

        <ActionBanner {...cta} />
      </div>
    </div>
  )
}
