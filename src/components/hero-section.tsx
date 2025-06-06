import { Button } from "./ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="text-center mb-16 relative z-10">
      {/* SIP the Owl Avatar */}
      <div className="mb-8 flex justify-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse-glow"></div>
          <svg
            className="w-32 h-32 md:w-40 md:h-40 relative z-10 transform group-hover:scale-110 transition-transform duration-300 animate-float"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Owl Body */}
            <ellipse cx="100" cy="120" rx="60" ry="70" fill="#8B4513" />

            {/* Owl Head */}
            <circle cx="100" cy="70" r="50" fill="#D2691E" />

            {/* Eyes */}
            <circle cx="85" cy="65" r="12" fill="white" />
            <circle cx="115" cy="65" r="12" fill="white" />
            <circle cx="85" cy="65" r="8" fill="black" />
            <circle cx="115" cy="65" r="8" fill="black" />

            {/* Beak */}
            <polygon points="100,75 95,85 105,85" fill="#FFA500" />

            {/* Wings */}
            <ellipse cx="70" cy="110" rx="20" ry="35" fill="#654321" transform="rotate(-20 70 110)" />
            <ellipse cx="130" cy="110" rx="20" ry="35" fill="#654321" transform="rotate(20 130 110)" />

            {/* Wine Glass in Wing */}
            <g transform="translate(125, 100)">
              <rect x="0" y="10" width="2" height="15" fill="#C0C0C0" />
              <ellipse cx="1" cy="25" rx="4" ry="2" fill="#C0C0C0" />
              <path d="M -3,5 Q 1,0 5,5 L 4,10 L -2,10 Z" fill="rgba(128,0,128,0.6)" />
            </g>

            {/* Ear Tufts */}
            <polygon points="75,35 80,20 85,35" fill="#8B4513" />
            <polygon points="115,35 120,20 125,35" fill="#8B4513" />
          </svg>
        </div>
      </div>

      {/* Headlines */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
        Meet SIP: Your Sommelier In Palm
      </h1>

      <p className="text-lg md:text-xl text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
        Let SIP the Owl, your pocket sommelier, guide you to extraordinary dining experiences
      </p>

      <p className="text-md text-pink-200 mb-12 max-w-xl mx-auto">
        Launching this Valentine's in New Orleans — elevate your palette with our wise wine companion
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Button
          asChild
          className="backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-full"
        >
          <Link href="#chat">Chat with SIP</Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="backdrop-blur-sm bg-transparent border-2 border-pink-300/50 text-pink-100 hover:bg-pink-300/10 transition-all duration-300 px-8 py-3 text-lg rounded-full"
        >
          <Link href="https://forms.gle/3uyzDNNS2qc7GnWG6" target="_blank" rel="noopener noreferrer">
            Take Our Survey
          </Link>
        </Button>
      </div>
    </div>
  )
}
