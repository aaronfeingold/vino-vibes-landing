import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";

export function Screen({ children, className = "bg-vv-bg" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative h-[844px] w-[390px] overflow-hidden text-left font-sans text-vv-text ${className}`}>
      {children}
    </div>
  );
}

export function TopBar({ title, sub, right }: { title?: string; sub?: string; right?: ReactNode }) {
  return (
    <div className="flex h-16 items-center justify-between px-3 pt-2">
      <span className="flex h-11 w-11 items-center justify-center">
        <ChevronLeft size={22} />
      </span>
      {title && (
        <div className="text-center">
          <div className="text-[15px] font-semibold">{title}</div>
          <div className="text-xs text-vv-text2">{sub}</div>
        </div>
      )}
      <span className="flex h-11 w-11 items-center justify-center">{right}</span>
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mx-5 mb-2.5 mt-[22px] text-xs font-semibold tracking-[0.1em] text-vv-text3">
      {children}
    </div>
  );
}

export function Row({
  title,
  sub,
  right,
  className = "",
}: {
  title: ReactNode;
  sub: ReactNode;
  right: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 border-b border-white/[0.06] px-4 py-3 last:border-b-0 ${className}`}
    >
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-medium">{title}</div>
        <div className="text-xs text-vv-text2">{sub}</div>
      </div>
      {right}
    </div>
  );
}
