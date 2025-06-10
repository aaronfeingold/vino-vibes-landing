"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "stats", label: "Stats" },
  { id: "chat", label: "Chat" },
  { id: "vibes", label: "Vibes" },
];

export default function Navbar() {
  const [current, setCurrent] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    setCurrent(id);
    setIsMobileMenuOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "vibes") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = element.offsetTop - 80; // 80px offset for navbar
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always on the left */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleClick("home")}
          >
            <Image
              src="/VinoVibesLogo.png"
              alt="Vino Vibes"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </div>

          {/* Desktop Navigation Items */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                    current === item.id
                      ? "text-white bg-white text-black"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white p-2 hover:text-gray-300 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileMenu();
              }}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  // X icon when menu is open
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon when menu is closed
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/20 bg-black">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`block w-full text-left px-3 py-2 text-base font-bold uppercase tracking-wider transition-colors duration-200 ${
                    current === item.id
                      ? "text-black bg-white"
                      : "text-white hover:text-gray-300 hover:bg-white/10"
                  }`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
