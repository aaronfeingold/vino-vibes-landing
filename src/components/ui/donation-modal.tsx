"use client";

import { Button } from "./button";
import { X, Heart, Gift, DollarSign } from "lucide-react";
import VenmoDonationLink from "./venmo-donation-link";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
  email: string;
}

export default function DonationModal({
  isOpen,
  onClose,
  onAccept,
  onDecline,
  email,
}: DonationModalProps) {
  if (!isOpen) return null;

  const venmoUsername = process.env.NEXT_PUBLIC_VENMO_USERNAME || "siptheowl";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-md mx-4 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="mb-4 flex justify-center">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3">
              <Gift className="text-white" size={32} />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Support SIP & Get Early Access!
          </h3>

          <p className="text-pink-100 leading-relaxed">
            Love the idea of SIP? Support our development with just{" "}
            <span className="font-bold text-yellow-300">$1</span> and get{" "}
            <span className="font-bold text-green-300">2 free months</span> when
            we launch!
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-4 mb-6 border border-white/20">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="text-red-400" size={20} />
            <span className="text-white font-semibold">What you get:</span>
          </div>
          <ul className="text-pink-100 space-y-2 text-sm">
            <li>• 2 months of premium SIP access (worth $20)</li>
            <li>• Priority beta testing access</li>
            <li>• Direct influence on features</li>
            <li>• Support indie AI development</li>
          </ul>
        </div>

        <div className="space-y-3">
          <VenmoDonationLink
            username={venmoUsername}
            amount={1}
            note="SIP Beta - 2 Free Months"
            onClick={onAccept}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <DollarSign className="mr-2" size={20} />
            Donate $1 via Venmo
          </VenmoDonationLink>

          <Button
            onClick={onDecline}
            variant="outline"
            className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/40 py-3 px-6 rounded-xl transition-all duration-300"
          >
            Maybe Later
          </Button>
        </div>

        <p className="text-xs text-pink-200 text-center mt-4">
          Your email: <span className="font-mono">{email}</span>
        </p>
      </div>
    </div>
  );
}
