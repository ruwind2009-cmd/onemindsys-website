import type { MetadataRoute } from 'next'
import { SITE_URL, insights, projects } from '@/lib/site-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    '',
    '/about',
    '/pre-qualification',
    '/funding-structure',
    '/government-backed-projects',
    '/documentation-checklist',
    '/support',
    '/insights',
    '/projects',
    '/projects/bangladesh-power-project-structure',
  ]

  return [
    ...routes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...insights.map((article) => ({
      url: `${SITE_URL}/insights/${article.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}
