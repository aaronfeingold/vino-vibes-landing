"use client";

import EnhancedBetaSignup from "./EnhancedBetaSignup";
import { resetMobileZoom } from "./ui/enhanced-email-input";

interface BetaSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BetaSignupModal({
  isOpen,
  onClose,
}: BetaSignupModalProps) {
  const handleClose = () => {
    // Reset mobile zoom when modal closes
    resetMobileZoom();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md mx-4 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-pink-300 text-2xl font-bold"
        >
          ×
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Join the Beta!</h3>
          <p className="text-gray-100">
            Be the first to experience SIP when we launch.
          </p>
        </div>

        <EnhancedBetaSignup onClose={handleClose} />
      </div>
    </div>
  );
}
