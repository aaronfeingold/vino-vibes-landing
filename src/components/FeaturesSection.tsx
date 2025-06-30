"use client";

import React from "react";
import { Wine, Camera, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const features = (brandOwnedWord: React.ReactNode) => [
  {
    icon: Wine,
    title: "AI-Powered Wine Pairing",
    description: (
      <>
        Upload menu photos and get expert, personalized wine recommendations
        from your <span className="gradient-1-text">sommelier in pocket</span>.
      </>
    ),
  },
  {
    icon: Camera,
    title: "Track your wine journey",
    description: (
      <>
        Never forget what wines you've tried, where you had them, and share your{" "}
        <span className="gradient-2-text">vibes</span> with others.
      </>
    ),
  },
  {
    icon: MessageCircle,
    title: "Expert Chat Interface",
    description: (
      <>
        Discuss and refine selections through educational chats with Sip the
        Owl. No analysis paralysis. Choose new wines with {brandOwnedWord}.
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-4 md:py-20 lg:py-24">
      <div
        id="features-content"
        className="relative z-10 flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 lg:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-neutral-900">
          Create Your Dining Memories
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {features(<span className="gradient-2-text">confidence</span>).map(
            (feature, index) => (
              <div
                key={index}
                className="backdrop-blur-sm bg-white/10 app-border-1 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full gradient-1 group-hover:from-purple-500 group-hover:to-fuchsia-600 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-black mb-3 text-center">
                  {feature.title}
                </h3>

                <div className="text-black text-center leading-relaxed">
                  {feature.description}
                </div>
              </div>
            )
          )}
        </div>

        {/* Scroll to next section button */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            className="btn-secondary flex items-center gap-2"
            aria-label="Learn how we pair wines for you"
            onClick={() => {
              const element = document.getElementById("demo");
              if (element) {
                const offset = element.offsetTop - 80; // 80px offset for navbar
                window.scrollTo({ top: offset, behavior: "smooth" });
              }
            }}
          >
            Meet Sip the Owl
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
