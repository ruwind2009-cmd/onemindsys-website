import Image from 'next/image'
import { SITE_PHOTOS, type SitePhotoKey } from '@/lib/site-photos'

type PageHeroMediaProps = {
  eyebrow: string
  title: string
  description: string
  scene: SitePhotoKey
  imageAlt?: string
  tags?: string[]
  variant?: 'feature' | 'quiet'
  muted?: boolean
}

export function PageHeroMedia({
  eyebrow,
  title,
  description,
  scene,
  imageAlt,
  tags = [],
  variant = 'feature',
  muted = false,
}: PageHeroMediaProps) {
  const photo = SITE_PHOTOS[scene]

  return (
    <section className={`page-hero-banner ${variant === 'quiet' ? 'page-hero-banner--quiet' : ''} ${muted ? 'page-hero-banner--muted' : ''}`}>
      <Image
        src={photo.src}
        alt={imageAlt ?? photo.alt}
        fill
        priority
        sizes="100vw"
        className="page-hero-banner__image"
        style={{ objectPosition: photo.position ?? 'center center' }}
      />
      <div className="page-hero-banner__overlay" />
      <div className="page-hero-banner__content">
        <div className={`page-hero page-hero-banner__copy ${variant === 'quiet' ? 'page-hero--quiet' : 'page-hero--feature'}`}>
          <div className="sec-label" style={{ color: 'rgba(255,255,255,0.78)' }}>
            {eyebrow}
          </div>
          <h1 className={`page-title ${variant === 'quiet' ? '' : 'page-title--feature'}`} style={{ color: '#ffffff' }}>
            {title}
          </h1>
          <p className="page-subtitle" style={{ color: 'rgba(255,255,255,0.82)' }}>
            {description}
          </p>
        </div>
        {tags.length > 0 && (
          <div className="page-hero-banner__tags">
            {tags.map((tag) => (
              <span key={tag} className="page-hero-banner__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
