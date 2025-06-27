"use client";

import Link from "next/link";
import { Globe, Instagram } from "lucide-react";
import VenmoDeepLink from "./VenmoDeepLink";

export default function SocialLinksSection() {
  return (
    <div className="text-center relative z-10">
      <div className="backdrop-blur-sm bg-white/5 app-border-1 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
        {/* Social Links */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-6 tracking-wide">
            Connect & Support
          </h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <Link
              href="https://instagram.com/siptheowl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-pink-200 transition-colors text-lg hover:scale-105 transform duration-200"
            >
              <Instagram size={32} /> @siptheowl
            </Link>
            <Link
              href="https://aaron-feingold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-pink-200 transition-colors text-lg hover:scale-105 transform duration-200"
            >
              <Globe size={24} />
              aaron-feingold.com
            </Link>
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-8">
          <p className="text-black mb-4 text-sm md:text-base">
            Feeling the Vino Vibes? Help keep the project growing!
          </p>
          <VenmoDeepLink
            username="Aaron-Feingold"
            className="inline-flex items-center px-6 py-3 border-2 border-black font-bold hover:bg-white hover:text-pink-900 transition-all duration-300 backdrop-blur-sm bg-white/10 rounded-lg text-black md:text-lg transform hover:scale-105"
          >
            Support the Project
          </VenmoDeepLink>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-purple-600 font-bold text-lg tracking-wider">
            Build Your Wine Confidence
          </p>
        </div>
      </div>
    </div>
  );
}
