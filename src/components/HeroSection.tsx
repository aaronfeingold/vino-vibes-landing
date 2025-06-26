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
      className="flex flex-col items-center md:mt-20 md:pt-10 mb-32 scroll-mt-16 md:scroll-mt-20 h-screen"
    >
      <div className="text-left relative z-10 mb-16">
        <h1
          id="tagline"
          className="text-4xl md:text-5xl lg:text-9xl font-bold text-white mt-4 mb-6 leading-tight"
        >
          Does reading
          <br />
          a wine list
          <br />
          <span className="bg-gradient-to-r from-orange-800 to-amber-600 bg-clip-text text-transparent">
            {" "}
            Scare the sh*t
          </span>
          <br />
          <span className="bg-gradient-to-r from-amber-600 to-orange-800 bg-clip-text text-transparent">
            {" "}
            outta you?
          </span>
        </h1>
        <div className="flex flex-col items-center text-center font-bold text-grey-200">
          <p className="text-lg font-bold md:text-xl lg:text-2xl mb-2 md:mb-8 mx-auto leading-relaxed">
            Wine lists are hard, especially when no one can explain them.
          </p>
          <p className="text-lg font-bold md:text-xl lg:text-2xl mb-2 md:mb-8 mx-auto leading-relaxed">
            And the wrong wine can ruin the vibe.
            <br />
            <span className="font-bold"></span>
          </p>
          <p className="text-lg font-bold md:text-xl lg:text-2xl mb-2 md:mb-8 mx-auto leading-relaxed">
            Vino Vibes gives you AI-powered confidence in every glass.
            <br />
            <span className="font-bold"></span>
          </p>
        </div>
        <p className="text-md text-center text-pink-200 mb-6 max-w-xl mx-auto"></p>

        {/* CTA Buttons */}
        <div className="flex flex-col mt-2 sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            className="backdrop-blur-sm bg-gradient-to-r from-amber-600 to-orange-800 hover:from-amber-500 hover:to-orange-600 border-0 text-white transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={handleVibeClick}
          >
            Experience Vino Vibes AI Beta
          </Button>

          <Button
            variant="outline"
            className="backdrop-blur-sm bg-transparent border-2 border-orange-300/50 text-slate-100 hover:bg-pink-300/10 transition-all duration-300 px-8 py-3 text-lg rounded-full"
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


