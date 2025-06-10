"use client";

import React from "react";
import VenmoDeepLink from "./VenmoDeepLink";

export default function VenmoSection() {
  return (
    <section id="vibes" className="text-center mb-8 relative z-10 mb-16">
      <VenmoDeepLink
        username="Aaron-Feingold"
        className="px-6 py-4 border-2 border-white font-bold hover:bg-white hover:text-pink-900 transition-all duration-300 backdrop-blur-sm bg-white/10 rounded-lg text-lg"
      >
        Support the Project
      </VenmoDeepLink>
    </section>
  );
}
