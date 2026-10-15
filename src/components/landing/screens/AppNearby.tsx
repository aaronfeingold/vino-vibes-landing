import { Search, Users } from "lucide-react";
import { Screen, StatusBar, TabBar } from "./parts";

const FILTERS = [
  { label: "Fish", on: true },
  { label: "Chardonnay", on: true },
  { label: "Within 10 min walk" },
  { label: "Open now" },
];

const MAP_GRID = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",
  backgroundSize: "26px 26px",
};

export default function AppNearby() {
  return (
    <Screen>
      <StatusBar />
      <div className="absolute inset-x-0 bottom-[84px] top-[47px] overflow-hidden pb-6">
        <div className="px-5 pt-3 text-[26px] font-bold tracking-[-0.01em]">Tonight, nearby</div>
        <div className="mx-4 mt-3 flex h-12 items-center gap-2.5 rounded-[14px] border-[1.5px] border-vv-stroke bg-vv-surface2 px-4">
          <Search size={18} className="text-vv-text2" />
          <span className="text-[15px]">Fish and a Chardonnay</span>
        </div>
        <div className="mx-4 mt-2.5 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <span
              key={f.label}
              className={`inline-flex h-8 items-center rounded-full px-3 text-[13px] ${
                f.on ? "border-[1.5px] border-vv-stroke bg-purple-500/[0.18]" : "bg-vv-surface2"
              }`}
            >
              {f.label}
            </span>
          ))}
        </div>

        {/* Stylised map: you, and the three results */}
        <div className="relative mx-4 mt-3.5 h-[200px] overflow-hidden rounded-[20px] bg-vv-surface" style={MAP_GRID}>
          <div className="absolute -inset-x-5 top-[92px] h-3 -rotate-[14deg] bg-white/[0.06]" />
          <div className="absolute -inset-y-5 left-[200px] w-2.5 rotate-[18deg] bg-white/[0.06]" />
          <div className="absolute left-[170px] top-[100px] h-[18px] w-[18px] rounded-full border-[3px] border-vv-bg bg-vv-accent shadow-[0_0_0_8px_rgba(168,85,247,0.25)]" />
          <div className="absolute left-[236px] top-[58px] flex h-7 w-7 items-center justify-center rounded-full bg-vv-primary text-[13px] font-bold">
            1
          </div>
          <div className="absolute left-[96px] top-[44px] flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-vv-stroke bg-vv-surface2 text-[13px] font-bold">
            2
          </div>
          <div className="absolute left-[62px] top-[142px] flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-white/[0.22] bg-vv-surface2 text-[13px] font-bold text-vv-text2">
            3
          </div>
          <span className="absolute bottom-2.5 left-3 text-[11px] text-vv-text3">Marigny</span>
        </div>

        <div className="mx-4 mt-3.5 flex flex-col gap-2.5">
          <div className="rounded-[18px] border-[1.5px] border-vv-stroke/45 bg-vv-surface px-4 py-3.5">
            <div className="flex items-baseline gap-2">
              <span className="text-[13px] font-bold text-vv-accent">1</span>
              <span className="flex-1 text-base font-semibold">Bar Sardine</span>
              <span className="text-[13px] text-vv-text2">4 min</span>
            </div>
            <div className="mt-1.5 text-sm leading-[1.45]">
              Seared snapper · Roulot Bourgogne Blanc, <span className="font-semibold">$16 glass</span>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <span className="inline-flex h-[26px] items-center rounded-full bg-purple-500/[0.16] px-2.5 text-xs">
                Strong palate match
              </span>
              <span className="inline-flex h-[26px] items-center rounded-full bg-vv-surface2 px-2.5 text-xs">
                Top Chardonnay here this week
              </span>
            </div>
          </div>
          <div className="rounded-[18px] bg-vv-surface px-4 py-3.5">
            <div className="flex items-baseline gap-2">
              <span className="text-[13px] font-bold text-vv-text2">2</span>
              <span className="flex-1 text-base font-semibold">Olive &amp; Oyster</span>
              <span className="text-[13px] text-vv-text2">7 min</span>
            </div>
            <div className="mt-1.5 text-sm leading-[1.45]">
              Grilled drum · Chablis 1er Cru, <span className="font-semibold">$18 glass</span>
            </div>
            <div className="mt-1.5 text-xs text-vv-text2">You&apos;ve been twice. Liked this Chablis in August.</div>
          </div>
          <div className="rounded-[18px] bg-vv-surface px-4 py-3.5">
            <div className="flex items-baseline gap-2">
              <span className="text-[13px] font-bold text-vv-text2">3</span>
              <span className="flex-1 text-base font-semibold">Maison Lune</span>
              <span className="text-[13px] text-vv-text2">9 min</span>
            </div>
            <div className="mt-1.5 text-sm leading-[1.45] text-vv-text2">
              Redfish, but no Chardonnay. The Sancerre is the closest swap.
            </div>
          </div>
        </div>

        <div className="mx-5 mt-4 flex items-center gap-2 text-xs text-vv-text3">
          <Users size={16} />
          212 Chardonnays ordered in the Marigny this week
        </div>
      </div>
      <TabBar active="library" />
    </Screen>
  );
}
