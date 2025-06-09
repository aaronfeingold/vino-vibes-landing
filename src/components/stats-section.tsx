"use client"

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

const stats = [
  {
    number: 1247,
    label: "Wine Pairings Created",
    trend: "↗ 34% this month",
  },
  {
    number: 89,
    label: "Restaurants Supported",
    trend: "venues across NOLA",
  },
  {
    number: 2.1,
    label: "Happy Diners",
    trend: "K satisfied customers",
    suffix: "K",
  },
];

function AnimatedNumber({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const increment = target / 50;
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev < target) {
          return Math.min(prev + increment, target);
        }
        clearInterval(timer);
        return target;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {Math.floor(current)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
          Trusted by Wine Lovers
        </h2>
        <p className="text-lg text-pink-100">
          Join thousands who&apos;ve discovered their perfect pairings
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="backdrop-blur-sm bg-white/10 border-2 border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedNumber target={stat.number} suffix={stat.suffix} />
            </div>
            <div className="text-lg font-semibold text-pink-200 mb-2">
              {stat.label}
            </div>
            <div className="text-sm text-pink-100 flex items-center justify-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {stat.trend}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
