import { ChevronLeft, Users } from "lucide-react";
import { Row, Screen, SectionLabel, StatusBar, WineDot } from "./parts";

const HISTORY = [
  { when: "Tonight", title: "Maison Lune · with redfish", note: "$54 bottle · rate it tomorrow", now: true },
  { when: "Oct 2", title: "Maison Lune · with crab claws", note: "Loved it · pairing was great" },
  { when: "Jul 11", title: "Bar Sardine · by the glass", note: "Liked it · a little warm" },
];

const LOCALS = [
  { label: "Seafood", pct: 71 },
  { label: "Fried", pct: 18 },
  { label: "Cheese", pct: 11 },
];

export default function AppWine() {
  return (
    <Screen>
      <StatusBar />
      <div className="absolute inset-x-0 bottom-0 top-[47px] overflow-hidden pb-8">
        <div className="flex h-14 items-center gap-0.5 px-3 pt-1 text-[15px] font-medium text-vv-accent">
          <ChevronLeft size={22} />
          Library
        </div>
        <div className="flex flex-col gap-1 px-5 pt-1">
          <span className="text-xs font-bold tracking-[0.12em] text-vv-accent">IN YOUR LIBRARY</span>
          <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em]">Ameztoi Txakolina Rosé</div>
          <span className="flex items-center gap-2 text-sm text-vv-text2">
            <WineDot color="rose" />
            Getaria, Spain · 2023 · salty, spritzy
          </span>
        </div>

        <div className="mx-4 mt-[18px] rounded-[20px] bg-vv-surface p-4">
          <div className="grid grid-cols-3 gap-2 border-b border-white/[0.08] pb-3.5">
            <div>
              <div className="text-[22px] font-bold">3×</div>
              <div className="text-xs text-vv-text2">had it</div>
            </div>
            <div>
              <div className="text-[22px] font-bold">2</div>
              <div className="text-xs text-vv-text2">places</div>
            </div>
            <div>
              <div className="text-[22px] font-bold text-vv-accent">Loved</div>
              <div className="text-xs text-vv-text2">2 of 3 times</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-3.5">
            {HISTORY.map((h) => (
              <div key={h.when} className="flex gap-3">
                <span className={`w-14 shrink-0 text-xs font-semibold ${h.now ? "text-vv-accent" : "text-vv-text3"}`}>
                  {h.when}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium">{h.title}</div>
                  <div className="text-xs text-vv-text2">{h.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionLabel>AROUND YOU</SectionLabel>
        <div className="mx-4 flex flex-col gap-3 rounded-[20px] bg-vv-surface p-4">
          <div className="flex items-center gap-2.5">
            <Users size={18} className="text-vv-accent" />
            <span className="text-sm font-medium">Ordered 64 times in the Marigny this month</span>
          </div>
          <div className="text-xs text-vv-text3">What locals have it with</div>
          {LOCALS.map((l, i) => (
            <div key={l.label} className="grid grid-cols-[70px_minmax(0,1fr)_36px] items-center gap-2.5 text-[13px]">
              <span className="text-vv-text2">{l.label}</span>
              <div className="h-2 rounded bg-vv-surface2">
                <div
                  className={`h-2 rounded ${i === 0 ? "bg-vv-primary" : "bg-vv-stroke"}`}
                  style={{ width: `${l.pct}%` }}
                />
              </div>
              <span className="text-right font-semibold">{l.pct}%</span>
            </div>
          ))}
          <div className="text-xs leading-normal text-vv-text2">
            People who love it here also order <span className="text-vv-text">Albariño</span> and{" "}
            <span className="text-vv-text">Vinho Verde</span>.
          </div>
        </div>

        <SectionLabel>GET IT NEARBY</SectionLabel>
        <div className="mx-4 overflow-hidden rounded-2xl bg-vv-surface">
          <Row title="Maison Lune" sub="6 min walk · on the list" right={<span className="text-[15px] font-semibold">$54</span>} />
          <Row title="Bayou Bottle Shop" sub="12 min walk · to take home" right={<span className="text-[15px] font-semibold">$22</span>} />
        </div>
      </div>
    </Screen>
  );
}
