"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function OwlParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const scrolled = window.pageYOffset;
      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate if the container is in viewport
      const inViewport =
        scrolled + windowHeight > containerTop &&
        scrolled < containerTop + containerHeight;

      if (inViewport) {
        // Calculate parallax offset
        const rate =
          (scrolled - containerTop + windowHeight) /
          (containerHeight + windowHeight);
        const yPos = -(rate * 200); // Adjust speed by changing multiplier

        if (imageRef.current) {
          imageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[60vh] overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Parallax animated owl */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <Image
          ref={imageRef}
          src="/StylishOwlAnimation.gif"
          alt="Stylish Owl Animation"
          width={600}
          height={600}
          className="object-contain max-w-full max-h-full filter brightness-110 contrast-125"
          priority
          unoptimized // Allow GIF animation
        />
      </div>
    </section>
  );
}
