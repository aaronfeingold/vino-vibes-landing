"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import BetaSignupModal from "./BetaSignupModal";

export default function HeroSection() {
  const [showBetaModal, setShowBetaModal] = useState(false);

  const handleVibeClick = () => {
    setShowBetaModal(true);
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center md:pt-4 2xl:pt-20 mb-32 scroll-mt-16 md:scroll-mt-20 h-screen"
    >
      <div className="text-left relative z-10 mb-16">
        <h1
          id="tagline"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold text-black mt-4 mb-6 leading-tight"
        >
          Does reading
          <br />
          a wine list
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-800 bg-clip-text text-transparent">
            {" "}
            scare the sh*t
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-800 bg-clip-text text-transparent">
            {" "}
            outta you?
          </span>
        </h1>
        <div className="flex flex-col font-bold text-black text-left items-start pb-8 md:pb-0">
          <p className="text-lg font-bold md:text-xl lg:text-xl 2xl:text-2xl mb-2 md:mb-8 leading-relaxed">
            Long lists suck.
          </p>
          <p className="text-lg font-bold md:text-xl lg:text-xl 2xl:text-2xl mb-2 md:mb-8 leading-relaxed">
            Choose wrong and ruin the vibe.
            <br />
          </p>
          <p className="text-lg font-bold md:text-xl lg:text-xl 2xl:text-2xl mb-2 md:mb-8 leading-relaxed">
            Vino Vibes is AI-powered confidence in every glass.
            <br />
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col mt-2 sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            className="backdrop-blur-sm bg-gradient-to-r from-purple-600 to-fuchsia-800 hover:from-purple-500 hover:to-fuchsia-600 border-0 text-zinc-100 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={handleVibeClick}
          >
            Experience Vino Vibes Beta
          </Button>

          <Button
            variant="outline"
            className="backdrop-blur-sm bg-transparent border-2 border-purple-300/50 text-black hover:bg-pink-300/10 transition-all duration-300 px-8 py-3 text-lg rounded-full"
            onClick={() => {
              const element = document.getElementById("features");
              if (element) {
                const offset = element.offsetTop - 80; // 80px offset for navbar
                window.scrollTo({ top: offset, behavior: "smooth" });
              }
            }}
          >
            Learn How We Pair Wines for You
          </Button>
        </div>
      </div>

      <BetaSignupModal
        isOpen={showBetaModal}
        onClose={() => setShowBetaModal(false)}
      />
    </section>
  );
}


