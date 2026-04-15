import { InstitutionalHome } from '@/components/site/InstitutionalHome'
import { buildPageMetadata } from '@/lib/site-metadata'

export const metadata = buildPageMetadata({
  title: 'Institutional Advisory for Infrastructure and Energy Investments',
  description:
    'Institutional-grade advisory for infrastructure and energy investments across project structuring, capital advisory, and investment readiness.',
  path: '/',
  keywords: [
    'infrastructure advisory',
    'energy investment advisory',
    'project structuring',
    'capital advisory',
    'investment readiness',
  ],
})

export default function HomePage() {
  return <InstitutionalHome />
}
