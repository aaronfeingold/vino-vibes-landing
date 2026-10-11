import { ArrowUp, Camera } from "lucide-react";
import { Screen, SectionLabel, TopBar } from "./parts";

const ALTERNATIVES = [
  { tag: "SAFER", name: "Vacheron Sancerre", note: "Loire · clean and citrus, never wrong with fish", price: "$68" },
  { tag: "LIGHTER BILL", name: "Aphros Vinho Verde", note: "Minho · the same snap, a little simpler", price: "$38" },
];

export default function AppPick() {
  return (
    <Screen>
      <TopBar title="Maison Lune" sub="42 wines · 18 dishes read" right={<Camera size={22} />} />

      <div className="flex flex-wrap gap-2 px-5 pt-1 text-[13px]">
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-vv-surface2 px-3">
          <span className="text-vv-text2">With</span> Redfish courtbouillon
        </span>
        <span className="inline-flex h-8 items-center rounded-full bg-vv-surface2 px-3">$40–70</span>
      </div>

      <div className="mx-4 mt-4 rounded-3xl border-[1.5px] border-vv-stroke/45 bg-vv-surface p-5 shadow-[0_0_0_6px_rgba(168,85,247,0.08),0_24px_48px_-16px_rgba(0,0,0,0.6)]">
        <div className="flex items-baseline justify-between">
          <div className="text-xs font-bold tracking-[0.12em] text-vv-accent">MY PICK</div>
          <div className="text-[13px] text-vv-text2">bottle</div>
        </div>
        <div className="mt-1.5 flex items-start justify-between gap-3">
          <div>
            <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em]">Txakolina Rosé</div>
            <div className="mt-1 text-sm text-vv-text2">Ameztoi · Getaria, Spain · 2023</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">$54</div>
            <div className="text-xs text-vv-text3">$15 a glass</div>
          </div>
        </div>
        <div className="my-4 h-px bg-white/10" />
        <p className="text-base font-medium leading-normal">
          You loved the cider bars in <span className="text-vv-accent">San Sebastián</span>. This is the
          same coast in a glass: salty, a little spritz, bright enough to cut the roux.
        </p>
        <p className="mt-2.5 text-[13px] leading-normal text-vv-text3">
          Grown on cliffs above the Bay of Biscay, where the sea air is part of the taste.
        </p>
        <div className="mt-[18px] flex gap-2.5">
          <span className="flex h-[52px] flex-1 items-center justify-center rounded-[14px] bg-vv-primary text-base font-semibold text-white">
            I&apos;m having it
          </span>
          <span className="flex h-[52px] items-center rounded-[14px] border-[1.5px] border-white/[0.22] px-4 text-[15px] font-medium">
            Why this one?
          </span>
        </div>
      </div>

      <SectionLabel>IF YOU&apos;D RATHER</SectionLabel>
      <div className="mx-4 flex flex-col gap-2.5">
        {ALTERNATIVES.map((a) => (
          <div key={a.tag} className="flex items-center gap-3 rounded-2xl bg-vv-surface px-4 py-3.5">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-vv-text2 px-1.5 py-0.5 text-[11px] font-bold tracking-[0.08em] text-vv-bg">
                  {a.tag}
                </span>
                <span className="text-[15px] font-semibold">{a.name}</span>
              </div>
              <div className="mt-1 text-[13px] text-vv-text2">{a.note}</div>
            </div>
            <div className="text-base font-semibold">{a.price}</div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-4 bottom-6 flex h-[52px] items-center gap-2 rounded-[26px] border border-white/10 bg-vv-surface2 pl-4 pr-1.5">
        <span className="flex-1 text-[15px] text-vv-text3">Ask about this list</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vv-primary text-white">
          <ArrowUp size={18} strokeWidth={2.2} />
        </span>
      </div>
    </Screen>
  );
}
