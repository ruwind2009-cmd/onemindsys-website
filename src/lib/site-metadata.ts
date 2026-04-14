import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-content'

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

const DEFAULT_OG_IMAGE = '/images/site/real/home-thermal-night.jpeg'

export function buildPageMetadata({ title, description, path, keywords = [] }: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'ONEMIND',
      type: 'website',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1600,
          height: 900,
          alt: 'Night infrastructure asset representing institutional project finance advisory work.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}
