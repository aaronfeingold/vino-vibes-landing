"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import BetaSignupModal from "./BetaSignupModal";
import { ChevronDown } from "lucide-react";
import ImageBanner from "./ImageBanner";

export default function HeroSection() {
  const [showBetaModal, setShowBetaModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVibeClick = () => {
    setShowBetaModal(true);
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen-small md:min-h-screen px-4 pt-16 md:pt-20"
    >
      <div
        className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-left relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8">
          {/* Tagline with better spacing */}
          <div className="flex flex-col items-center w-full">
            <h1
              id="tagline"
              className="font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-black leading-tight text-center mb-4 md:mb-6"
            >
              Wine list <span className="md:hidden"> </span>
              <br className="hidden md:block" />
              feel like
              <br />
              <span className="gradient-1-text"> another</span>
              <br className="hidden md:block" />
              <span className="gradient-1-text"> language?</span>
            </h1>
          </div>

          {/* Image Banner */}
          <ImageBanner />

          <div
            id="tag-summary"
            className="flex flex-col text-black text-center items-center w-full max-w-2xl"
          >
            <p className="text-lg font-extrabold md:text-xl lg:text-2xl 2xl:text-3xl leading-relaxed mb-3 md:mb-4">
              Experience <span className="gradient-1-text">Vino Vibes AI</span>:
              the <span className="gradient-2-text">knowledge</span> and{" "}
              <span className="gradient-2-text">confidence</span> to pair wines
              with your unique <span className="gradient-1-text">vibe</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <Button
              className="btn-primary text-zinc-100"
              onClick={handleVibeClick}
            >
              Join Vino Vibes Beta
            </Button>

            <Button
              variant="outline"
              className="btn-secondary border-purple-300/50 flex items-center gap-2"
              onClick={() => {
                const element = document.getElementById("features");
                if (element) {
                  const offset = element.offsetTop - 80; // 80px offset for navbar
                  window.scrollTo({ top: offset, behavior: "smooth" });
                }
              }}
            >
              Learn More
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <BetaSignupModal
        isOpen={showBetaModal}
        onClose={() => setShowBetaModal(false)}
      />
    </section>
  );
}
