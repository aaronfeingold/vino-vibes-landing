"use client";

import Image from "next/image";

export default function OwlParallaxSection() {
  return (
    <section className="relative my-16">
      {/* Main container */}
      <div className="relative h-[60vh] w-screen left-1/2 -translate-x-1/2 bg-black flex items-center justify-center">
        {/* Animated owl */}
        <Image
          src="/StylishOwlAnimation.gif"
          alt="Stylish Owl Animation"
          width={400}
          height={400}
          className="object-contain"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
