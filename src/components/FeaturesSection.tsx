"use client";

import { Wine, Camera, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Wine,
    title: "AI-Powered Wine Pairing",
    description: "Upload menu photos and get expert wine recommendations from our sassy AI sommelier",
  },
  {
    icon: Camera,
    title: "Image Analysis",
    description: "Advanced image recognition analyzes your food and wine menus for perfect pairings",
  },
  {
    icon: MessageCircle,
    title: "Expert Chat Interface",
    description: "Discuss and refine recommendations through our interactive chat experience",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative bg-black py-24 overflow-hidden w-screen left-1/2 -translate-x-1/2">
      {/* Animated wave background */}
      <div className="absolute inset-0">
        {/* Multiple wave layers for depth */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse" 
               style={{ animationDuration: '8s' }} />
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-tl from-gray-700 via-black to-gray-900 animate-pulse" 
               style={{ animationDuration: '12s', animationDelay: '2s' }} />
        </div>
        
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gray-800 to-white/5 animate-pulse" 
               style={{ animationDuration: '15s', animationDelay: '4s' }} />
        </div>

        {/* Subtle wave pattern overlay */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 70%, rgba(128,128,128,0.1) 0%, transparent 50%),
                                radial-gradient(circle at 40% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
               backgroundSize: '100% 200%',
               animation: 'wave 20s ease-in-out infinite'
             }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col justify-center min-h-[50vh]">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
            How SIP Elevates Your Dining
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-gray-900/20 border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/30 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 group-hover:from-gray-500 group-hover:to-gray-300 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>

              <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }
      `}</style>
    </section>
  )
}
