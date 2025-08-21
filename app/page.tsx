import { MarketingHeader } from '../components/layout/MarketingHeader'
import { HeroSection } from '../components/sections/HeroSection'
import { FeaturesOverview } from '../components/sections/FeaturesOverview'
import { HowItWorksSection } from '../components/sections/HowItWorksSection'
import { ScreenshotsSection } from '../components/sections/ScreenshotsSection'
import { PricingSectionComplete } from '../components/sections/PricingSectionComplete'
import { PublicFooter } from '../components/layout/PublicFooter'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesOverview />
        <HowItWorksSection />
        <ScreenshotsSection />
        <PricingSectionComplete />
      </main>
      <PublicFooter />
    </div>
  )
}


