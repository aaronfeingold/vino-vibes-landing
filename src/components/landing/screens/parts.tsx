import type { ReactNode } from "react";
import { ArrowUp, BookOpen, Camera, Check, ChevronLeft, User } from "lucide-react";

export function Screen({ children, className = "bg-vv-bg" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative h-[844px] w-[390px] overflow-hidden text-left font-sans text-vv-text ${className}`}>
      {children}
    </div>
  );
}

export function StatusBar({ time = "9:41", className = "" }: { time?: string; className?: string }) {
  return <div className={`h-[47px] px-[30px] pt-4 text-[15px] font-semibold ${className}`}>{time}</div>;
}

export function TopBar({
  title,
  sub,
  right,
  className = "",
}: {
  title?: string;
  sub?: string;
  right?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex h-16 items-center justify-between px-3 pt-2 ${className}`}>
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

export function SectionLabel({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="mx-5 mb-2.5 mt-[22px] flex items-baseline justify-between text-xs font-semibold tracking-[0.1em] text-vv-text3">
      <span>{children}</span>
      {right}
    </div>
  );
}

export function Row({
  title,
  sub,
  right,
  lead,
  className = "",
}: {
  title: ReactNode;
  sub: ReactNode;
  right: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 border-b border-white/[0.06] px-4 py-3 last:border-b-0 ${className}`}
    >
      {lead}
      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-medium">{title}</div>
        <div className="text-xs text-vv-text2">{sub}</div>
      </div>
      {right}
    </div>
  );
}

export type WineColor = "red" | "white" | "rose" | "orange" | "sparkling" | "dessert";

const WINE_BG: Record<WineColor, string> = {
  red: "bg-vv-wine-red",
  white: "bg-vv-wine-white",
  rose: "bg-vv-wine-rose",
  orange: "bg-vv-wine-orange",
  sparkling: "bg-vv-wine-sparkling",
  dessert: "bg-vv-wine-dessert",
};

export function wineBg(color: WineColor) {
  return WINE_BG[color];
}

export function WineDot({ color }: { color: WineColor }) {
  return <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${WINE_BG[color]}`} />;
}

/** Three-way segmented control: Palate / Lifestyles / Experiences, Places / Wines / Nearby. */
export function Segmented({ items, active, className = "" }: { items: string[]; active: string; className?: string }) {
  return (
    <div className={`mx-4 grid h-11 grid-cols-3 gap-1 rounded-[14px] bg-vv-surface p-1 ${className}`}>
      {items.map((item) => (
        <div
          key={item}
          className={`flex items-center justify-center rounded-[10px] text-sm ${
            item === active ? "bg-vv-surface2 font-semibold" : "text-vv-text2"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

const TABS = [
  { key: "snap", label: "Snap", Icon: Camera },
  { key: "library", label: "Library", Icon: BookOpen },
  { key: "you", label: "You", Icon: User },
] as const;

export function TabBar({ active }: { active: (typeof TABS)[number]["key"] }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-[84px] justify-between border-t border-white/[0.08] bg-vv-bg/[0.94] px-8 pt-2.5">
      {TABS.map(({ key, label, Icon }) => (
        <div
          key={key}
          className={`flex w-[72px] flex-col items-center gap-1 text-[11px] font-semibold ${
            key === active ? "text-vv-accent" : "text-vv-text3"
          }`}
        >
          <Icon size={24} strokeWidth={2} />
          {label}
        </div>
      ))}
    </div>
  );
}

export function Composer({ placeholder }: { placeholder: string }) {
  return (
    <div className="absolute inset-x-4 bottom-[30px] flex h-[52px] items-center gap-2 rounded-[26px] border border-white/10 bg-vv-surface2 pl-4 pr-1.5">
      <span className="flex-1 text-[15px] text-vv-text3">{placeholder}</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vv-primary text-white">
        <ArrowUp size={18} strokeWidth={2.2} />
      </span>
    </div>
  );
}

/** Selected chip with a check, or a resting chip. */
export function Chip({ children, on = false, muted = false }: { children: ReactNode; on?: boolean; muted?: boolean }) {
  return on ? (
    <span className="inline-flex h-9 items-center gap-1.5 rounded-full border-[1.5px] border-vv-stroke bg-purple-500/[0.18] px-3 text-[13px] font-medium">
      <Check size={14} strokeWidth={3} className="text-vv-accent" />
      {children}
    </span>
  ) : (
    <span
      className={`inline-flex h-9 items-center rounded-full border-[1.5px] border-transparent bg-vv-surface2 px-3 text-[13px] ${
        muted ? "text-vv-text2" : ""
      }`}
    >
      {children}
    </span>
  );
}
