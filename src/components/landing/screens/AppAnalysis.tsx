import type { ReactNode } from "react";
import { Check, ChevronRight } from "lucide-react";
import { Chip, Row, Screen, SectionLabel, StatusBar, TopBar } from "./parts";

// Each step of the analysis with its result. Problems surface in step 2.
const STEPS: { title: string; sub: ReactNode; warn?: boolean }[] = [
  { title: "Extracted from 2 photos", sub: "42 wines, 18 dishes, glass and bottle prices" },
  {
    title: "Matched to the wine database",
    sub: (
      <>
        39 identified · <span className="text-vv-warning">3 need a look</span>
      </>
    ),
    warn: true,
  },
  { title: "Compared with your palate", sub: "11 strong matches · 6 styles new to you · 1 you've had here" },
  { title: "Saved to your library", sub: "Added to Maison Lune. List changed 4 wines since Oct 2." },
];

export default function AppAnalysis() {
  return (
    <Screen>
      <StatusBar />
      <TopBar title="Maison Lune" sub="Tonight · visit 3" />

      <div className="flex flex-col gap-1.5 px-5 pt-1">
        <span className="text-xs font-bold tracking-[0.12em] text-vv-accent">LIST ANALYZED</span>
        <div className="text-2xl font-bold leading-[1.25] tracking-[-0.01em]">
          42 wines and 18 dishes, matched to your palate.
        </div>
      </div>

      <div className="mx-4 mt-4 overflow-hidden rounded-[18px] bg-vv-surface">
        {STEPS.map((s) => (
          <div key={s.title} className="flex gap-3 border-b border-white/[0.06] px-4 py-3.5 last:border-b-0">
            {s.warn ? (
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vv-warning/[0.16] text-[13px] font-bold text-vv-warning">
                !
              </span>
            ) : (
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/[0.18]">
                <Check size={13} strokeWidth={3} className="text-vv-accent" />
              </span>
            )}
            <div className="min-w-0 flex-1">
              <div className="text-[15px] font-semibold">{s.title}</div>
              <div className="text-xs text-vv-text2">{s.sub}</div>
            </div>
            {s.warn && <ChevronRight size={18} className="self-center text-vv-text3" />}
          </div>
        ))}
      </div>

      <div className="mx-5 mb-2.5 mt-[22px] text-sm font-semibold">What are you having?</div>
      <div className="mx-5 flex flex-wrap gap-2">
        <Chip on>Redfish courtbouillon</Chip>
        <Chip>Duck &amp; andouille gumbo</Chip>
        <Chip>Fried crab claws</Chip>
        <Chip muted>15 more</Chip>
      </div>

      <SectionLabel>NEEDS A LOOK</SectionLabel>
      <div className="mx-4 overflow-hidden rounded-2xl bg-vv-surface">
        <Row
          className="bg-vv-warning/[0.08]"
          title={
            <>
              Lapierre Morgon, <span className="text-vv-warning">20??</span>
            </>
          }
          sub={<span className="text-vv-warning">Vintage unclear in the photo. Tap to confirm.</span>}
          right={<div className="text-[15px] font-semibold">$62</div>}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-vv-bg/0 to-vv-bg to-30% px-4 pb-[30px] pt-4">
        <span className="flex h-14 w-full items-center justify-center rounded-2xl bg-vv-primary text-[17px] font-semibold text-white">
          Pick for me
        </span>
      </div>
    </Screen>
  );
}
