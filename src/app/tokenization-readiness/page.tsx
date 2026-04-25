import { Web3AdvisoryPage } from '@/components/site/Web3AdvisoryPage'
import { WEB3_PAGE_KEYWORDS } from '@/lib/site-content'
import { buildPageMetadata } from '@/lib/site-metadata'

export const metadata = buildPageMetadata({
  title: 'Tokenization Readiness Review',
  description:
    'ONEMIND reviews whether real infrastructure projects are ready for RWA preparation by assessing ownership, permits, revenue source, repayment logic, risk allocation, documentation, and compliance pathway.',
  path: '/tokenization-readiness',
  keywords: WEB3_PAGE_KEYWORDS,
})

export default function TokenizationReadinessPage() {
  return (
    <Web3AdvisoryPage
      eyebrow="Tokenization Readiness"
      title="Tokenization Readiness Review"
      description="Tokenization is not the first step. The project must first prove ownership, permits, revenue source, financial model, repayment logic, risk allocation, and documentation quality."
      scene="project-power"
      tags={['Bankability Review', 'Documentation Quality', 'Compliance Pathway']}
      details={[
        { label: 'Review object', value: 'The project, not a token concept' },
        { label: 'Core question', value: 'Can the real asset support a compliant RWA preparation process?' },
        { label: 'Output focus', value: 'Readiness gaps, disclosure needs, risk framework, and partner requirements' },
      ]}
      sections={[
        {
          eyebrow: 'Principle',
          title: 'A token cannot create bankability',
          description:
            'ONEMIND reviews whether the asset and financing case have enough legal, technical, commercial, and financial substance to be presented to institutional or Web3-enabled capital reviewers.',
        },
        {
          eyebrow: 'Checklist',
          title: 'Readiness checklist',
          bullets: [
            'Asset ownership and control',
            'Project company / SPV structure',
            'Revenue contract or offtake basis',
            'EPC and technical scope',
            'CAPEX and OPEX model',
            'Funding requirement and use of funds',
            'Repayment source',
            'Legal enforceability',
            'Compliance pathway',
            'Investor reporting requirements',
          ],
        },
        {
          eyebrow: 'Review',
          title: 'What ONEMIND reviews before RWA preparation',
          cards: [
            {
              title: 'Project substance',
              body: 'Sponsor identity, jurisdiction, asset status, permits, land rights, technical basis, EPC scope, and development maturity.',
            },
            {
              title: 'Financial logic',
              body: 'CAPEX, OPEX, revenue source, repayment source, payment waterfall, sensitivities, risk matrix, and use-of-funds discipline.',
            },
            {
              title: 'Disclosure and compliance pathway',
              body: 'Investor-facing materials, risk disclosure, reporting package, legal dependencies, and required regulated execution partners.',
            },
          ],
        },
      ]}
      cta={{
        eyebrow: 'Readiness Review',
        title: 'Find out whether the project is suitable for RWA preparation.',
        description:
          'Submit the project basis and available documents so ONEMIND can identify bankability, disclosure, and compliance-pathway gaps before tokenization discussions go too far.',
        primaryAction: { href: '/submit-project', label: 'Submit Project' },
        secondaryAction: { href: '/rwa-structuring', label: 'View RWA Structuring' },
      }}
    />
  )
}
