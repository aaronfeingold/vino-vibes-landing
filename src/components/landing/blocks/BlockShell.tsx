import type { ReactNode } from "react";

export function BlockShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[358px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-vv-surface p-[18px] text-vv-text ${className}`}
    >
      {children}
    </div>
  );
}

export function GhostButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      className="h-11 flex-1 rounded-xl border border-white/[0.22] px-3.5 text-sm font-semibold text-vv-text"
    >
      {children}
    </button>
  );
}

export function RedButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      className={`h-11 flex-1 rounded-xl bg-vv-red text-sm font-bold text-white ${className}`}
    >
      {children}
    </button>
  );
}
