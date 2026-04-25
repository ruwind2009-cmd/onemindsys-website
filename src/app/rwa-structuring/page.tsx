import { Web3AdvisoryPage } from '@/components/site/Web3AdvisoryPage'
import { WEB3_PAGE_KEYWORDS } from '@/lib/site-content'
import { buildPageMetadata } from '@/lib/site-metadata'

export const metadata = buildPageMetadata({
  title: 'RWA Structuring for Real Infrastructure Assets',
  description:
    'ONEMIND helps real infrastructure assets prepare for bankability review, RWA readiness, asset verification, cash flow logic, documentation, and investor disclosure.',
  path: '/rwa-structuring',
  keywords: WEB3_PAGE_KEYWORDS,
})

export default function RwaStructuringPage() {
  return (
    <Web3AdvisoryPage
      eyebrow="RWA Structuring"
      title="RWA Structuring for Real Infrastructure Assets"
      description="RWA preparation is only credible when the underlying asset, legal structure, cash flow, documentation, and risk allocation are financeable before tokenization is considered."
      scene="project-solar"
      tags={['Asset Verification', 'Bankability First', 'Investor Disclosure']}
      details={[
        { label: 'Asset focus', value: 'Solar projects, power plants, infrastructure assets, and government-backed obligations' },
        { label: 'Primary work', value: 'Readiness framework, documentation, cash flow waterfall, and disclosure package' },
        { label: 'Execution boundary', value: 'Legal, custody, securities, and regulated execution handled by licensed partners' },
      ]}
      sections={[
        {
          eyebrow: 'Meaning',
          title: 'What RWA means for real projects',
          description:
            'For ONEMIND, RWA structuring means preparing a real asset so that institutional reviewers can understand what the asset is, who controls it, where cash flow comes from, how risk is allocated, and what regulated partners would be required for execution.',
        },
        {
          eyebrow: 'Framework',
          title: 'ONEMIND’s RWA readiness framework',
          cards: [
            {
              title: 'Bankability before tokenization',
              body: 'A project must first support lender and investor review. Tokenization cannot repair missing permits, unclear ownership, weak offtake, or an unbankable cash flow model.',
            },
            {
              title: 'Asset verification logic',
              body: 'We map asset boundary, ownership/control evidence, project company structure, permits, land status, technical scope, and operating or development status.',
            },
            {
              title: 'Cash flow and payment waterfall',
              body: 'We define revenue source, collection account logic, disbursement priorities, reserve requirements, investor reporting, and repayment mechanics.',
            },
          ],
        },
        {
          eyebrow: 'Checklist',
          title: 'Documentation checklist for RWA preparation',
          bullets: [
            'Project company / SPV documents and beneficial ownership information',
            'Asset ownership or control evidence, land rights, licenses, and permits',
            'Feasibility study, technical report, EPC scope, CAPEX, OPEX, and implementation schedule',
            'Revenue contract, PPA, offtake basis, concession, government support, or payment obligation',
            'Financial model, repayment source, waterfall assumptions, risk matrix, and use-of-funds plan',
            'Legal/compliance dependency map for jurisdiction, investor eligibility, custody, trustee, tax, KYC/AML, and securities review',
            'Investor disclosure package covering asset, sponsor, risks, cash flow, reporting, and regulated execution partners',
          ],
        },
      ]}
      cta={{
        eyebrow: 'Project Review',
        title: 'Prepare the asset before discussing tokenization.',
        description:
          'Submit the project basis, documentation status, and funding requirement so ONEMIND can assess whether RWA readiness work is realistic.',
        primaryAction: { href: '/submit-project', label: 'Submit Project' },
        secondaryAction: { href: '/tokenization-readiness', label: 'View Tokenization Readiness' },
      }}
    />
  )
}
