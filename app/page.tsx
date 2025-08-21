import { HeroSection } from '../components/sections/HeroSection'
import { FeaturesOverview } from '../components/sections/FeaturesOverview'
import { HowItWorksSection } from '../components/sections/HowItWorksSection'
import { ScreenshotsSection } from '../components/sections/ScreenshotsSection'
import { PricingSectionComplete } from '../components/sections/PricingSectionComplete'

export default function Page() {
  return (
    <div>
      <HeroSection />
      <FeaturesOverview />
      <HowItWorksSection />
      <ScreenshotsSection />
      <PricingSectionComplete />
    </div>
  )
}


