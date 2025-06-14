import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";
import CTASection from "./CTASection";
import SocialLinksSection from "./SocialLinksSection";

export default function MainContainer() {
  return (
    <div className="max-w-7xl mx-auto w-full px-6 pt-20">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <SocialLinksSection />
    </div>
  );
}
