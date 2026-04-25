import { InstitutionalHome } from '@/components/site/InstitutionalHome'
import { buildPageMetadata } from '@/lib/site-metadata'
import { WEB3_PAGE_KEYWORDS } from '@/lib/site-content'

export const metadata = buildPageMetadata({
  title: 'Project Finance Advisory for RWA-ready Infrastructure',
  description:
    'ONEMIND helps real-world energy and infrastructure projects become financeable, RWA-ready, and prepared for stablecoin-enabled settlement and institutional capital review.',
  path: '/',
  keywords: WEB3_PAGE_KEYWORDS,
})

export default function HomePage() {
  return <InstitutionalHome />
}
