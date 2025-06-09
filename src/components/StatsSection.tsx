"use client"

import React from "react";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { useIntersectionObserver } from "@/src/lib/useIntersectionObserver";

const stats = [
  {
    number: 1247,
    label: "Wine Pairings Created",
    trend: "34% this month",
  },
  {
    number: 89,
    label: "Restaurants Supported",
    trend: "in 2025",
  },
  {
    number: 2.1,
    label: "Happy Diners",
    trend: "satisfied customers",
    suffix: "K",
  },
];

function AnimatedNumber({
  target,
  suffix = "",
  shouldAnimate = false,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  shouldAnimate?: boolean;
  delay?: number;
}) {
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldAnimate || hasStarted) return;

    const startAnimation = () => {
      setHasStarted(true);
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
    };

    const timeoutId = setTimeout(startAnimation, delay);
    return () => clearTimeout(timeoutId);
  }, [target, shouldAnimate, hasStarted, delay]);

  return (
    <span>
      {Math.floor(current)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={elementRef} className="mb-20">
      <div className="text-center mb-12">
        <h2
          className={`text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200 transition-all duration-700 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Trusted by Wine Lovers
        </h2>
        <p
          className={`text-lg text-pink-100 transition-all duration-700 delay-200 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Join thousands who&apos;ve discovered their perfect pairings
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`backdrop-blur-sm bg-white/10 border-2 border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 ${
              isIntersecting
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{
              transitionDelay: `${400 + index * 150}ms`,
            }}
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedNumber
                target={stat.number}
                suffix={stat.suffix}
                shouldAnimate={isIntersecting}
                delay={600 + index * 150}
              />
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
