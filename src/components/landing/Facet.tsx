import type { ReactNode } from "react";

// The five-sided facet is the brand mark, the assistant avatar, list numbers and bullets.

export function FacetMark({ size = 30 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 26 26">
      <polygon points="13,1 25,9 21,25 5,25 1,9" className="fill-vv-red" />
      <polygon points="13,7 19,11 17,19 9,19 7,11" className="fill-vv-red-deep" />
    </svg>
  );
}

export function FacetAvatar({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 26 26" className={className}>
      <polygon points="13,1 25,9 21,25 5,25 1,9" className="fill-vv-red" />
    </svg>
  );
}

export function FacetBullet({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" className={`shrink-0 ${className}`}>
      <polygon points="8,0 16,6 13,16 3,16 0,6" className="fill-vv-red" />
    </svg>
  );
}

export function FacetNumber({ n, active }: { n: number; active?: boolean }) {
  return (
    <svg aria-hidden="true" width="34" height="34" viewBox="0 0 34 34" className="shrink-0">
      <polygon
        points="17,1 33,12 27,33 7,33 1,12"
        className={active ? "fill-vv-red" : "fill-vv-meter"}
      />
      <text
        x="17"
        y="22"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        className={active ? "fill-white" : "fill-vv-text"}
      >
        {n}
      </text>
    </svg>
  );
}

// Feature icon: the facet with a white glyph drawn on top.
export function FacetIcon({ children }: { children: ReactNode }) {
  return (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 26 26">
      <polygon points="13,1 25,9 21,25 5,25 1,9" className="fill-vv-red" />
      <g stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none">
        {children}
      </g>
    </svg>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-[11px] font-extrabold tracking-[0.14em] text-vv-red-text ${className}`}>
      {children}
    </div>
  );
}
