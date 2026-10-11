import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import Learn from "../components/landing/Learn";
import Proof from "../components/landing/Proof";
import Join from "../components/landing/Join";
import Footer from "../components/landing/Footer";
import { getLaunchCopy } from "../lib/launch-stage";

export default function Home() {
  const cta = getLaunchCopy();
  const ctaHref = cta.storeUrl ?? "#join";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-vv-bg font-sans text-vv-text">
      <Navbar ctaShort={cta.short} ctaHref={ctaHref} />
      <main>
        <Hero cta={cta} />
        <HowItWorks />
        <Features />
        <Learn />
        <Proof />
        <Join cta={cta} />
      </main>
      <Footer />
    </div>
  );
}
