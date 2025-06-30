import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DemoSection from "./DemoSection";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";
import SocialLinksSection from "./SocialLinksSection";

export default function MainContainer() {
  return (
    <div id="main-container" className="max-w-7xl mx-auto w-full px-6">
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <StatsSection />
      <CTASection />
      <SocialLinksSection />
    </div>
  );
}
