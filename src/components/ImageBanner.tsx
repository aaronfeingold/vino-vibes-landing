"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageBanner() {
  // Hardcoded image paths from public/foreign-carousel-pics
  const [images] = useState<string[]>([
    "/foreign-carousel-pics/image-000.png",
    "/foreign-carousel-pics/image-001.png",
    "/foreign-carousel-pics/image-002.png",
    "/foreign-carousel-pics/image-003.png",
    "/foreign-carousel-pics/image-004.png",
  ]);

  // Duplicate the images array to create seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden py-6 md:py-8">
      <div className="flex animate-scroll-banner space-x-4 md:space-x-6 lg:space-x-8">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={src}
              alt={`Wine image ${(index % images.length) + 1}`}
              width={144}
              height={144}
              className="w-full h-full object-cover"
              priority={index < images.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
