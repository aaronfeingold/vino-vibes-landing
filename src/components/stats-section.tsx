"use client"

import { useEffect, useState } from "react"

const stats = [
  { label: "Wine Pairings Created", value: 1247, suffix: "", trend: "↗ 34% this month" },
  { label: "Restaurants Supported", value: 89, suffix: " venues across NOLA", trend: "" },
  { label: "Happy Diners", value: 2.1, suffix: "K satisfied customers", trend: "" },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="mb-16 relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
        SIP by the Numbers
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="backdrop-blur-sm bg-white/10 border-2 border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
          >
            <div
              className={`text-3xl md:text-4xl font-bold text-white mb-2 ${isVisible ? "animate-count-up" : "opacity-0"}`}
            >
              {stat.value}
              {stat.suffix}
            </div>

            <div className="text-pink-100 font-medium mb-2">{stat.label}</div>

            {stat.trend && <div className="text-sm text-pink-200">{stat.trend}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
