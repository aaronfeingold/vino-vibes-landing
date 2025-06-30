"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import BetaSignupModal from "./BetaSignupModal";
import { ChevronDown } from "lucide-react";

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
      className="flex flex-col items-center pt-20 md:pt-80 lg:pt-40 h-screen-small md:h-screen"
    >
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-left relative z-10">
          {/* Responsive layout: Single column on mobile, two columns on desktop */}
          <div className="flex flex-col md:flex-row md:items-center md:items-start">
            <h1
              id="tagline"
              className="font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold text-black mt-4 leading-tight text-center md:text-left md:flex-1"
            >
              Wine list <span className="md:hidden"> </span>
              <br className="hidden md:block" />
              feel like
              <br />
              <span className="gradient-1-text"> another</span>
              <br className="hidden md:block" />
              <span className="gradient-1-text"> language?</span>
            </h1>
            <div
              id="vv-down-the-drain"
              className="flex justify-center mt-6 md:mt-0 md:flex-shrink-0 2xl:mt-[20rem]"
            >
              <Image
                src="/vv-down-the-drain-328x328.png"
                alt="Wine down the drain"
                width={128}
                height={128}
                className="md:w-[328px] md:h-[328px]"
              />
            </div>
          </div>

          <div className="flex flex-col text-black text-center items-center pb-2 md:pb-0">
            <p className="text-lg font-bold md:text-xl lg:text-xl 2xl:text-2xl mb-2 md:mb-8 leading-relaxed">
              Stop pouring juice down the drain. Ignore the second cheapest
              bottle.
            </p>
            {/* <p className="text-lg font-bold  md:text-xl lg:text-xl 2xl:text-2xl mb-2 md:mb-8 leading-relaxed">
              Stop pouring juice down the drain.
            </p> */}
            <p className="text-lg font-extrabold md:text-xl lg:text-xl 2xl:text-2xl mb-2 md:mb-8 leading-relaxed">
              Experience <span className="gradient-1-text"> Vino Vibes AI</span>
              : the <span className="gradient-2-text">knowledge</span> and{" "}
              <span className="gradient-2-text">confidence</span> to pair wines
              with your unique <span className="gradient-1-text">vibe</span>.
              <br />
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col mt-2 sm:flex-row gap-4 justify-center items-center">
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
