import { HeroV2 } from '@/components/sections/HeroV2'
import { CTASection, TwoPathsSection, UseCasesSection } from '@/components/sections/UseCasesSection'

export default function HomePage() {
  return (
    <>
      <HeroV2 />
      <TwoPathsSection />
      <UseCasesSection />
      <CTASection />
    </>
  )
}
