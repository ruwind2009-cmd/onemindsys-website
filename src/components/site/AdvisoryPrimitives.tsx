import Image from 'next/image'
import Link from 'next/link'
import { SITE_PHOTOS, type SitePhotoKey } from '@/lib/site-photos'

type HeroAction = {
  href: string
  label: string
}

type HeroMetric = {
  label: string
  value: string
}

type HeroDetail = {
  label: string
  value: string
}

type AdvisoryHeroProps = {
  eyebrow: string
  title: string
  description: string
  scene: SitePhotoKey
  imageAlt?: string
  tags?: string[]
  metrics?: HeroMetric[]
  details?: HeroDetail[]
  primaryAction: HeroAction
  secondaryAction: HeroAction
}

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

type ActionBannerProps = {
  eyebrow: string
  title: string
  description: string
  primaryAction: HeroAction
  secondaryAction?: HeroAction
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'institutional-intro institutional-intro--center' : 'institutional-intro'}>
      <div className="institutional-label">{eyebrow}</div>
      <h2 className="institutional-heading">{title}</h2>
      {description ? <p className="institutional-copy">{description}</p> : null}
    </div>
  )
}

export function AdvisoryHero({
  eyebrow,
  title,
  description,
  scene,
  imageAlt,
  tags = [],
  metrics = [],
  details = [],
  primaryAction,
  secondaryAction,
}: AdvisoryHeroProps) {
  const photo = SITE_PHOTOS[scene]

  return (
    <section className="advisory-hero">
      <Image
        src={photo.src}
        alt={imageAlt ?? photo.alt}
        fill
        priority
        sizes="100vw"
        className="advisory-hero__image"
        style={{ objectPosition: photo.position ?? 'center center' }}
      />
      <div className="advisory-hero__overlay" />
      <div className="advisory-hero__grid">
        <div className="advisory-hero__copy">
          <div className="institutional-label institutional-label--light">{eyebrow}</div>
          <h1 className="advisory-hero__title">{title}</h1>
          <p className="advisory-hero__description">{description}</p>
          <div className="button-row mt-8">
            <Link href={primaryAction.href} className="btn-primary home-hero__primary">
              {primaryAction.label}
            </Link>
            <Link href={secondaryAction.href} className="btn-secondary home-hero__secondary">
              {secondaryAction.label}
            </Link>
          </div>
          {tags.length > 0 ? (
            <div className="advisory-hero__tags">
              {tags.map((tag) => (
                <span key={tag} className="advisory-tag">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="advisory-hero__panel">
          {metrics.length > 0 ? (
            <div className="advisory-panel-block">
              <div className="advisory-panel-label">Typical Fit</div>
              <div className="advisory-metric-grid">
                {metrics.map((metric) => (
                  <div key={metric.label} className="advisory-metric-card">
                    <div className="advisory-metric-value">{metric.value}</div>
                    <div className="advisory-metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {details.length > 0 ? (
            <div className="advisory-panel-block">
              <div className="advisory-panel-label">What We Emphasize</div>
              <div className="advisory-detail-list">
                {details.map((detail) => (
                  <div key={detail.label} className="advisory-detail-row">
                    <div className="advisory-detail-label">{detail.label}</div>
                    <div className="advisory-detail-value">{detail.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export function DisclosureNotice({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="disclosure-note">
      <div className="disclosure-note__label">{title}</div>
      <div className="disclosure-note__copy">{children}</div>
    </div>
  )
}

export function ActionBanner({ eyebrow, title, description, primaryAction, secondaryAction }: ActionBannerProps) {
  return (
    <section className="institutional-cta">
      <div className="institutional-label">{eyebrow}</div>
      <h2 className="institutional-cta__title">{title}</h2>
      <p className="institutional-cta__copy">{description}</p>
      <div className="button-row mt-8">
        <Link href={primaryAction.href} className="btn-primary">
          {primaryAction.label}
        </Link>
        {secondaryAction ? (
          <Link href={secondaryAction.href} className="btn-secondary">
            {secondaryAction.label}
          </Link>
        ) : null}
      </div>
    </section>
  )
}
