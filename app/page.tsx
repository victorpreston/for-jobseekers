import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { FeaturedCompanies } from "@/components/home/featured-companies"
import { FeaturesSection } from "@/components/home/features-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturedCompanies />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}