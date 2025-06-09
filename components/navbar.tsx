"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Stats", href: "#stats" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      {/* Fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-pink-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none md:pointer-events-none mt-5"
            >
              <Image
                src="/VinoVibesLogo.png"
                alt="Vino Vibes"
                width={56}
                height={56}
                className="rounded-lg"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
