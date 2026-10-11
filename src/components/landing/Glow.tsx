import type { ReactNode } from "react";

// Blurred angular shapes behind a section. Decorative only.

const SHAPES = {
  a: "polygon(28% 0,100% 14%,86% 72%,38% 100%,0 46%)",
  b: "polygon(0 18%,62% 0,100% 58%,54% 100%,10% 84%)",
  c: "polygon(50% 0,100% 38%,80% 100%,20% 100%,0 38%)",
};

export function Glow({
  shape,
  deep = false,
  opacity,
  className,
}: {
  shape: keyof typeof SHAPES;
  deep?: boolean;
  opacity: number;
  className: string;
}) {
  return (
    <div className={`absolute blur-[88px] ${className}`} style={{ opacity }}>
      <div
        className={`h-full w-full ${deep ? "bg-vv-red-deep" : "bg-vv-red"}`}
        style={{ clipPath: SHAPES[shape] }}
      />
    </div>
  );
}

export function GlowLayer({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {children}
    </div>
  );
}
