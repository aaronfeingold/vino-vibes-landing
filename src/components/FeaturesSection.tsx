"use client";

import { Wine, Camera, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Wine,
    title: "AI-Powered Wine Pairing",
    description:
      "Upload menu photos and get expert, personalized wine recommendations from our sassy AI sommelier.",
  },
  {
    icon: Camera,
    title: "Making Dining Memories",
    description:
      "Track what wines you've tried, where you had them, and share your vibes with others.",
  },
  {
    icon: MessageCircle,
    title: "Expert Chat Interface",
    description:
      "Discuss and refine selections through educational chats with Sip the Owl. Discover new wines with the confidence.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="mb-32 lg:h-screen lg:flex lg:items-center lg:justify-center"
    >
      <div
        id="features-content"
        className="mb-16 relative z-10 flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center lg:mb-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
          Introducing Our Mascot: Sip the Owl
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/10 border-2 border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 group-hover:from-pink-300 group-hover:to-purple-300 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {feature.title}
              </h3>

              <p className="text-pink-100 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll to next section button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              const nextSection =
                document.querySelector("#stats") ||
                document.querySelector("#cta");
              nextSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex flex-col items-center gap-2 p-4"
            aria-label="Learn how we pair wines for you"
          >
            <Button
              variant="outline"
              className="backdrop-blur-sm bg-transparent border-2 border-pink-300/50 text-pink-100 hover:bg-pink-300/10 transition-all duration-300 px-8 py-3 text-lg rounded-full"
              onClick={() => {
                const element = document.getElementById("features");
                if (element) {
                  const offset = element.offsetTop - 80; // 80px offset for navbar
                  window.scrollTo({ top: offset, behavior: "smooth" });
                }
              }}
            >
              Dining Memories by the Numbers
            </Button>
          </button>
        </div>
      </div>
    </section>
  );
}
