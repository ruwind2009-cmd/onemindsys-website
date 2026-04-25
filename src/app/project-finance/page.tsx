import { Web3AdvisoryPage } from '@/components/site/Web3AdvisoryPage'
import { WEB3_PAGE_KEYWORDS } from '@/lib/site-content'
import { buildPageMetadata } from '@/lib/site-metadata'

export const metadata = buildPageMetadata({
  title: 'Project Finance Advisory for Web3-enabled Capital',
  description:
    'ONEMIND connects traditional project finance discipline with RWA readiness, stablecoin settlement architecture, smart-contract cash flow logic, and institutional investor packages.',
  path: '/project-finance',
  keywords: WEB3_PAGE_KEYWORDS,
})

export default function ProjectFinancePage() {
  return (
    <Web3AdvisoryPage
      eyebrow="Project Finance"
      title="Project Finance Advisory for Web3-enabled Capital"
      description="Traditional project finance discipline comes first: feasibility, financial model, risk allocation, repayment source, contracts, and credible investor materials. Web3-enabled structures are an overlay, not a substitute."
      scene="project-power"
      tags={['Financial Model', 'Risk Matrix', 'RWA Overlay']}
      details={[
        { label: 'Traditional base', value: 'Feasibility, EPC cost, offtake, debt/equity structure, and risk allocation' },
        { label: 'Web3 overlay', value: 'RWA readiness, stablecoin settlement mapping, and smart-contract cash flow transparency' },
        { label: 'Audience', value: 'Developers, lenders, infrastructure investors, EPC sponsors, family offices, and government-linked owners' },
      ]}
      sections={[
        {
          eyebrow: 'Foundation',
          title: 'Traditional project finance remains the foundation',
          cards: [
            {
              title: 'Project feasibility',
              body: 'Review technical scope, site status, permits, grid or utility interface, implementation schedule, development stage, and operating assumptions.',
            },
            {
              title: 'Financial model',
              body: 'Build or review CAPEX, OPEX, revenue, debt sizing, DSCR, repayment source, sensitivity cases, and use-of-funds logic.',
            },
            {
              title: 'Debt/equity structure',
              body: 'Frame sponsor equity, senior debt, mezzanine or structured tranches, government support, guarantees, and institutional investor requirements.',
            },
          ],
        },
        {
          eyebrow: 'Execution',
          title: 'Bankability work that supports institutional review',
          bullets: [
            'Government-backed projects and sovereign/payment risk framing',
            'EPC cost review, supplier payment logic, and technical-financial integration',
            'Risk matrix covering construction, offtake, tariff, government, currency, operational, and repayment risks',
            'Lender and investor package including project note, term sheet, model, risk disclosure, and presentation materials',
          ],
        },
        {
          eyebrow: 'Overlay',
          title: 'Where Web3 infrastructure fits',
          bullets: [
            'RWA readiness review to assess whether the asset, cash flow, and legal structure can support compliant preparation',
            'Stablecoin settlement architecture for subscriptions, disbursements, EPC payments, supplier settlement, and distributions',
            'Smart-contract cash flow governance for transparent reporting and waterfall logic without replacing legal contracts',
            'Coordination with regulated legal, custody, trustee, payment, compliance, and financial partners when execution becomes regulated',
          ],
        },
      ]}
      cta={{
        eyebrow: 'Capital Readiness',
        title: 'Structure the project before approaching Web3-enabled capital.',
        description:
          'ONEMIND helps developers convert real projects into reviewable financing cases with a disciplined Web3 overlay where appropriate.',
        primaryAction: { href: '/submit-project', label: 'Submit Project' },
        secondaryAction: { href: '/stablecoin-settlement', label: 'View Settlement Framework' },
      }}
    />
  )
}
