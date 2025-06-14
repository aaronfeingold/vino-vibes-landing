"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import EnhancedBetaSignup from "./EnhancedBetaSignup";

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
      className="md:mt-20 md:pt-10 mb-32 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="text-center relative z-10 mb-16">
        <div className="mb-4 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse-glow"></div>
            <Image
              src="/sip-owl.png"
              alt="SIP the Owl"
              width={120}
              height={120}
              className={`mx-auto transition-transform duration-300 hover:scale-110 hover:rotate-3 cursor-pointer select-none ${
                isAnimating ? "animate-bounce scale-110 rotate-3" : ""
              }`}
              onClick={handleOwlClick}
              onTouchStart={handleOwlClick}
              style={{
                transform: isAnimating ? "scale(1.1) rotate(3deg)" : undefined,
              }}
            />
          </div>
        </div>
        <h1
          id="tagline"
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 md:mb-6 leading-tight"
        >
          Your Best
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}
            Vino Vibes
          </span>
          <br />
          Start With
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}
            SIP
          </span>
        </h1>
        {/* SIP Badge for clarity */}
        <span className="px-3 py-1 rounded-full bg-pink-600/20 text-pink-400 font-semibold tracking-wide text-sm inline-block animate-pulse">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold md:mb-3 md:mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-300 to-pink-500 drop-shadow-lg text-center">
            <span className="text-pink-400 animate-bounce">S</span>
            <span className="text-white">ommelier </span>
            <span className="text-pink-400 animate-bounce delay-150">I</span>
            <span className="text-white">n </span>
            <span className="text-pink-400 animate-bounce delay-300">P</span>
            <span className="text-white">ocket</span>
          </h3>
        </span>

        <p className="text-lg md:text-xl text-pink-100 mb-2 md:mb-4 max-w-2xl mx-auto leading-relaxed">
          Sommelier, don't kill my vibe!
        </p>
        <p className="text-sm md:text-xl text-pink-100 mb-2 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          You're different. Your wine pairings should be too.{" "}
          <span className="font-bold">SIP gets it.</span>
        </p>

        <p className="text-md text-pink-200 mb-3 md:mb-6 max-w-xl mx-auto">
          Confident selections. Endless knowledge. Experience the vibes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            className="backdrop-blur-sm bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 border-0 text-white transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={handleVibeClick}
          >
            Vibe with SIP
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
            Spill the tea!
          </Button>
        </div>
      </div>

      {/* Beta Signup Modal */}
      {showBetaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md mx-4 relative">
            <button
              onClick={() => setShowBetaModal(false)}
              className="absolute top-4 right-4 text-white hover:text-pink-300 text-2xl font-bold"
            >
              ×
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Join the Beta!
              </h3>
              <p className="text-pink-100">
                Be the first to experience SIP when we launch.
              </p>
            </div>

            <EnhancedBetaSignup onClose={() => setShowBetaModal(false)} />
          </div>
        </div>
      )}
    </section>
  );
}


