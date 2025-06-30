"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative h-[25vh] w-full overflow-hidden bg-black flex items-center justify-center mt-20"
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <Image
          src="/StylishOwlAnimation.gif"
          alt="Stylish Owl Animation"
          width={600}
          height={600}
          className="object-contain max-w-full max-h-full filter brightness-110 contrast-125"
          priority
          unoptimized
        />
      </div>
    </footer>
  );
}
