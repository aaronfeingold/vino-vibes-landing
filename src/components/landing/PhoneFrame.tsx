import type { ReactNode } from "react";

// Draws a 390 x 844 app screen at full size and scales it into a phone bezel.
// The screen is a picture of the app, so it is hidden from assistive tech and
// its controls are inert; `label` describes it instead.
export default function PhoneFrame({
  width,
  label,
  children,
  className = "",
}: {
  width: number;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  const pad = width >= 300 ? 10 : 8;
  const inner = width - pad * 2;
  const scale = inner / 390;
  const height = Math.round(844 * scale) + pad * 2;
  const radius = Math.round(width * 0.158);

  return (
    <div
      role="img"
      aria-label={label}
      className={`shrink-0 border border-white/[0.14] bg-vv-phone ${className}`}
      style={{ width, height, padding: pad, borderRadius: radius }}
    >
      <div
        aria-hidden="true"
        inert
        className="overflow-hidden"
        style={{ width: inner, height: height - pad * 2, borderRadius: radius - pad }}
      >
        <div className="origin-top-left" style={{ transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
    </div>
  );
}
