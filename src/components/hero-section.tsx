import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOwlClick = () => {
    if (isAnimating) return; // Prevent multiple animations

    setIsAnimating(true);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="text-center mb-16 relative z-10">
      {/* SIP the Owl Avatar */}
      <div className="mb-8 flex justify-center">
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

      {/* Headlines */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
        SIP: The Sommelier In Pocket
      </h1>

      <p className="text-lg md:text-xl text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
        SIP gives you the confidence to find the wine that suits your vibes.
        Experience personalized, expert recommendations that impress at any
        restaurant or occasion.
      </p>

      <p className="text-md text-pink-200 mb-12 max-w-xl mx-auto">
        Built for ambitious professionals who want to elevate their dining game
        — launching soon in New Orleans where culinary excellence meets
        cutting-edge AI.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Button
          asChild
          className="backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full"
        >
          <Link href="#chat">Experience SIP's AI Sommelier</Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="backdrop-blur-sm bg-transparent border-2 border-pink-300/50 text-pink-100 hover:bg-pink-300/10 transition-all duration-300 px-8 py-3 text-lg rounded-full"
        >
          <Link
            href="https://forms.gle/3uyzDNNS2qc7GnWG6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Wine Revolution
          </Link>
        </Button>
      </div>
    </div>
  );
}
