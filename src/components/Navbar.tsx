"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Image
              style={{ marginTop: "20px" }}
              src="/VinoVibesLogo.png"
              alt="Vino Vibes"
              width={56}
              height={56}
              className="rounded-lg"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
