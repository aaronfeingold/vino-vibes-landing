"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import BetaSignupModal from "./BetaSignupModal";

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
        <div className="backdrop-blur-sm bg-white/5 app-border-1 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-clip-text text-black">
            Ready to elevate your dining experience?
          </h2>

          <p className="text-lg text-black mb-8 max-w-2xl mx-auto leading-relaxed">
            Join wine lovers who've discovered their perfect pairings. Start
            your sommelier journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-primary" onClick={handleVibeClick}>
              Get Your First Pairing
            </Button>

            <Button asChild variant="outline" className="btn-secondary">
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

      <BetaSignupModal
        isOpen={showBetaModal}
        onClose={() => setShowBetaModal(false)}
      />
    </section>
  );
}
