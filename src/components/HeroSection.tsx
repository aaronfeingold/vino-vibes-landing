"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import BetaSignupModal from "./BetaSignupModal";

export default function HeroSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showBetaModal, setShowBetaModal] = useState(false);

  const handleOwlClick = () => {
    if (isAnimating) return; // Prevent multiple animations

    setIsAnimating(true);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 600);
  };

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
          className="text-4xl md:text-5xl lg:text-10xl lg:text-9xl font-bold text-white mt-4 mb-6 leading-tight"
        >
          Make Dining
          <br />
          Memories With
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}
            Vino Vibes
          </span>
        </h1>
        <div className="flex flex-col items-center text-center font-bold text-grey-200">
          <p className="text-lg font-bold md:text-xl lg:text-2xl mb-2 md:mb-8 mx-auto leading-relaxed">
            Everyone should be able to experience the best wine when dining out.
          </p>
          <p className="text-lg font-bold md:text-xl lg:text-2xl mb-2 md:mb-8 mx-auto leading-relaxed">
            Yet choosing the wrong wine can kill the vibe.
            <br />
            <span className="font-bold"></span>
          </p>
          <p className="text-lg font-bold md:text-xl lg:text-2xl mb-2 md:mb-8 mx-auto leading-relaxed">
            With a sommelier in pocket, the vibe of every sip is unforgettable.
            <br />
            <span className="font-bold"></span>
          </p>
        </div>
        <p className="text-md text-center text-pink-200 mb-6 max-w-xl mx-auto"></p>

        {/* CTA Buttons */}
        <div className="flex flex-col mt-2 sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            className="backdrop-blur-sm bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 border-0 text-white transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={handleVibeClick}
          >
            Experience Vino Vibes AI Beta
          </Button>

          <Button
            variant="outline"
            className="backdrop-blur-sm bg-transparent border-2 border-pink-300/50 text-pink-100 hover:bg-pink-300/10 transition-all duration-300 px-8 py-3 text-lg rounded-full"
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


