import HeroSection from "../components/hero-section"
import FeaturesSection from "../components/features-section"
import StatsSection from "../components/stats-section"
import CTASection from "../components/cta-section"
import VenmoSection from "../components/venmo-section"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-pink-900 text-white p-4 isolate px-6 pt-14 lg:px-8 overflow-hidden">
      {/* PRESERVED: Upper left gradient */}
      <div className="absolute top-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* PRESERVED: Center gradient */}
      <div className="absolute top-[calc(50%-30rem)] left-[calc(50%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-30rem)] sm:left-[calc(50%-30rem)]">
        <div
          className="relative aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* PRESERVED: Lower right gradient */}
      <div className="absolute bottom-0 right-[calc(50%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:right-[calc(50%-30rem)]">
        <div
          className="relative aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
        <VenmoSection />

        {/* Social Links */}
        <div className="text-center mb-8 relative z-10">
          <div className="flex justify-center space-x-6">
            <Link
              href="https://instagram.com/siptheowl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-200 hover:text-white transition-colors duration-300"
            >
              📷 @siptheowl
            </Link>
            <Link
              href="https://aaronfeingold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-200 hover:text-white transition-colors duration-300"
            >
              🌐 aaronfeingold.com
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center relative z-10">
          <p className="text-pink-200 font-bold text-lg tracking-wider">SIP IN STYLE</p>
        </footer>
      </div>
    </div>
  )
}
