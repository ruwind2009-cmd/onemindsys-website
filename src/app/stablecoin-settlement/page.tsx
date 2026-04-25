import { Web3AdvisoryPage } from '@/components/site/Web3AdvisoryPage'
import { WEB3_PAGE_KEYWORDS } from '@/lib/site-content'
import { buildPageMetadata } from '@/lib/site-metadata'

export const metadata = buildPageMetadata({
  title: 'Stablecoin Settlement Framework for Cross-border Project Finance',
  description:
    'ONEMIND provides advisory support for stablecoin settlement architecture in project finance workflows, EPC payments, supplier settlement, investor subscriptions, and revenue distributions subject to legal and compliance review.',
  path: '/stablecoin-settlement',
  keywords: WEB3_PAGE_KEYWORDS,
})

export default function StablecoinSettlementPage() {
  return (
    <Web3AdvisoryPage
      eyebrow="Stablecoin Settlement"
      title="Stablecoin Settlement Framework for Cross-border Project Finance"
      description="Stablecoins may improve settlement speed, transparency, reconciliation, and FX management, but they do not remove banking, KYC/AML, legal, tax, custody, or regulatory requirements."
      scene="project-bess"
      tags={['Settlement Architecture', 'EPC Payments', 'Revenue Distribution']}
      details={[
        { label: 'Potential uses', value: 'Investor subscription mapping, project disbursement planning, EPC progress payments, supplier settlement, and distributions' },
        { label: 'Primary benefit', value: 'Clearer settlement rails, reconciliation, and transaction visibility across borders' },
        { label: 'ONEMIND role', value: 'Architecture and project-finance integration, not payment licensing or custody' },
      ]}
      sections={[
        {
          eyebrow: 'Use Cases',
          title: 'Where stablecoin settlement may fit',
          cards: [
            {
              title: 'Investor subscriptions',
              body: 'Map how investor funding may be reviewed for a compliant project or financing vehicle, subject to legal, KYC/AML, tax, securities, and payment review.',
            },
            {
              title: 'Project and EPC disbursements',
              body: 'Design controlled disbursement logic for EPC progress payments, supplier payments, milestone releases, documentation checks, and reconciliation.',
            },
            {
              title: 'Revenue distributions',
              body: 'Map how operating revenues may be reported, allocated, reconciled, and distributed according to legal contracts and regulated partner requirements.',
            },
          ],
        },
        {
          eyebrow: 'Benefits',
          title: 'What settlement architecture can improve',
          bullets: [
            'Cross-border settlement speed and payment-chain visibility',
            'Transaction-level reconciliation across sponsor, EPC, supplier, investor, and reporting workflows',
            'FX exposure monitoring and payment timing transparency',
            'Audit-ready payment records and distribution logic',
            'Integration between project finance milestones and settlement instructions',
          ],
        },
        {
          eyebrow: 'Boundary',
          title: 'What stablecoins do not remove',
          bullets: [
            'Banking, KYC/AML, sanctions screening, tax, and jurisdictional compliance',
            'Legal contracts, trustee arrangements, custody arrangements, and enforceable payment rights',
            'Requirements for licensed payment, securities, custody, broker-dealer, or investment management partners where applicable',
            'Independent review by legal, financial, compliance, custody, and regulated execution partners',
          ],
        },
      ]}
      cta={{
        eyebrow: 'Settlement Design',
        title: 'Discuss a stablecoin settlement map for a real project.',
        description:
          'ONEMIND can help convert project finance payment flows into a reviewable settlement architecture for licensed partners and counterparties.',
        primaryAction: { href: '/submit-project', label: 'Submit Project' },
        secondaryAction: { href: '/project-finance', label: 'View Project Finance' },
      }}
    />
  )
}
