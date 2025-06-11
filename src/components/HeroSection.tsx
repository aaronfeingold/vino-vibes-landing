"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
        <h1
          id="tagline"
          className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Your Best
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
          The Sommelier In Pocket
        </h1>

        <p className="text-lg md:text-xl text-pink-100 mb-5 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          SIP gives you the confidence to choose the wine that suits your vibes
          everytime.
        </p>
        <p className="text-lg md:text-xl text-pink-100 mb-5 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience personalized, expert recommendations that impress at any
          restaurant or occasion.
        </p>

        <p className="text-md text-pink-200 mb-5 md:mb-12 max-w-xl mx-auto">
          Built for ambitious professionals who want to elevate their dining
          game — launching soon in New Orleans where culinary excellence meets
          cutting-edge AI.
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
            asChild
            variant="outline"
            className="backdrop-blur-sm bg-transparent border-2 border-pink-300/50 text-pink-100 hover:bg-pink-300/10 transition-all duration-300 px-8 py-3 text-lg rounded-full"
          >
            <Link
              href="https://forms.gle/3uyzDNNS2qc7GnWG6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Your Vino Vibe
            </Link>
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

            <BetaSignupForm onClose={() => setShowBetaModal(false)} />
          </div>
        </div>
      )}
    </section>
  );
}

function BetaSignupForm({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/beta-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="text-4xl mb-4">🎉</div>
        <p className="text-white font-semibold">You're on the list!</p>
        <p className="text-pink-100 text-sm">
          We'll notify you when SIP launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          disabled={isSubmitting}
        />
      </div>

      {error && <p className="text-red-300 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
      >
        {isSubmitting ? "Joining..." : "Join Beta List"}
      </button>
    </form>
  );
}
