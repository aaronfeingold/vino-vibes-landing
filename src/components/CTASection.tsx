"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import EnhancedBetaSignup from "./EnhancedBetaSignup";

export default function CTASection() {
  const [showBetaModal, setShowBetaModal] = useState(false);

  const handleVibeClick = () => {
    setShowBetaModal(true);
  };

  return (
    <section
      id="vibe"
      className="max-w-7xl mx-auto w-full px-6 mb-32 scroll-mt-16 md:scroll-mt-20"
    >
      <div className="text-center mb-16 relative z-10">
        <div className="backdrop-blur-sm bg-white/5 border-2 border-white/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
            Ready to elevate your dining experience?
          </h2>

          <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join wine lovers who've discovered their perfect pairings. Start
            your sommelier journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="backdrop-blur-sm bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 border-0 text-white transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={handleVibeClick}
            >
              Start Vibing with SIP
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
                Share Your Feedback
              </Link>
            </Button>
          </div>
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
