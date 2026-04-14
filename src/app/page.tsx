import { InstitutionalHome } from '@/components/site/InstitutionalHome'
import { buildPageMetadata } from '@/lib/site-metadata'

export const metadata = buildPageMetadata({
  title: 'Project Finance Advisory for Government-Backed Infrastructure',
  description:
    'Structured capital solutions for qualified infrastructure and energy sponsors seeking financing readiness, documentation discipline, and controlled execution frameworks.',
  path: '/',
  keywords: [
    'project finance advisory',
    'government-backed infrastructure',
    'structured capital solutions',
    'project funding readiness',
    'institutional capital facilitation',
  ],
})

export default function HomePage() {
  return <InstitutionalHome />
}
