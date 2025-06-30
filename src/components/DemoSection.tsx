"use client";

import React from "react";
import {
  Wine,
  BookOpen,
  MapPin,
  TrendingUp,
  DollarSign,
  Star,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function DemoSection() {
  return (
    <section id="demo" className="relative z-10 px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Meet Sip, Your AI Sommelier in Pocket
          </h2>
          <p className="text-xl text-gray-700">
            Chat with our AI assistant to discover and pair the perfect wines
            for any occasion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/vv-convo-1.png"
              alt="Sip the Owl chat interface showing wine pairing conversation"
              width={500}
              height={600}
              className="w-full max-w-lg rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-4">
              Sip Can Help You:
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: Wine,
                  text: "Get personalized wine pairing recommendations",
                },
                {
                  icon: BookOpen,
                  text: "Learn about wine regions, grapes, and styles",
                },
                {
                  icon: MapPin,
                  text: "Discover local wine bars and restaurants",
                },
                {
                  icon: TrendingUp,
                  text: "Track your wine preferences and journey",
                },
                {
                  icon: DollarSign,
                  text: "Find budget-friendly bottles that taste expensive",
                },
                {
                  icon: Star,
                  text: "Remember your favorite wines and experiences",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to next section button */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            className="btn-secondary flex items-center gap-2"
            aria-label="See our community stats"
            onClick={() => {
              const element = document.getElementById("stats");
              if (element) {
                const offset = element.offsetTop - 80; // 80px offset for navbar
                window.scrollTo({ top: offset, behavior: "smooth" });
              }
            }}
          >
            See Our Community
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
