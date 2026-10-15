import { ChevronRight, Search } from "lucide-react";
import { Screen, Segmented, StatusBar, TabBar, WineDot, type WineColor } from "./parts";

type Verdict = "Loved it" | "Liked it" | "To try";
const VERDICT: Record<Verdict, string> = {
  "Loved it": "text-vv-accent",
  "Liked it": "text-vv-text2",
  "To try": "text-vv-warning",
};

const PLACES: {
  initials: string;
  name: string;
  sub: string;
  wines: { name: string; note: string; color: WineColor; verdict: Verdict; count?: number }[];
}[] = [
  {
    initials: "ML",
    name: "Maison Lune",
    sub: "Marigny · 3 visits · last tonight",
    wines: [
      { name: "Ameztoi Txakolina Rosé", note: "With redfish · pairing was great", color: "rose", verdict: "Loved it", count: 3 },
      { name: "Vacheron Sancerre", note: "With crab claws · pairing was fine", color: "white", verdict: "Liked it" },
      { name: "Benanti Etna Rosso", note: "Missed it. Saved to try next visit.", color: "red", verdict: "To try" },
    ],
  },
  {
    initials: "BS",
    name: "Bar Sardine",
    sub: "Bywater · 1 visit · Sep 28",
    wines: [{ name: "Gravner Ribolla Gialla", note: "With grilled sardines", color: "orange", verdict: "Liked it" }],
  },
  { initials: "SS", name: "San Sebastián trip", sub: "June · 5 places · 9 wines", wines: [] },
];

export default function AppLibrary() {
  return (
    <Screen>
      <StatusBar />
      <div className="absolute inset-x-0 bottom-[84px] top-[47px] overflow-hidden pb-6">
        <div className="flex items-center justify-between pl-5 pr-3 pt-3">
          <div className="text-[26px] font-bold tracking-[-0.01em]">Wine library</div>
          <span className="flex h-11 w-11 items-center justify-center">
            <Search size={20} />
          </span>
        </div>
        <Segmented items={["Places", "Wines", "Nearby"]} active="Places" className="mt-3" />
        <div className="mx-5 mt-3 text-xs text-vv-text3">14 places · 37 wines · New Orleans and 2 trips</div>

        <div className="mx-4 mt-3.5 flex flex-col gap-3">
          {PLACES.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-[20px] bg-vv-surface">
              <div className="flex items-center gap-3 px-4 py-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-vv-surface2 text-sm font-bold text-vv-accent">
                  {p.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-base font-semibold">{p.name}</div>
                  <div className="text-xs text-vv-text2">{p.sub}</div>
                </div>
                <ChevronRight size={18} className="text-vv-text3" />
              </div>
              {p.wines.map((w) => {
                const toTry = w.verdict === "To try";
                return (
                  <div
                    key={w.name}
                    className={`flex items-center gap-3 border-t border-white/[0.06] px-4 py-2.5 ${
                      toTry ? "bg-vv-warning/[0.06]" : ""
                    }`}
                  >
                    <WineDot color={w.color} />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium">{w.name}</div>
                      <div className={`text-xs ${toTry ? "text-vv-warning" : "text-vv-text2"}`}>{w.note}</div>
                    </div>
                    {w.count ? (
                      <span className="rounded-md bg-vv-text2 px-1.5 py-0.5 text-[11px] font-bold text-vv-bg">
                        ×{w.count}
                      </span>
                    ) : null}
                    <span className={`w-[62px] text-right text-[13px] font-semibold ${VERDICT[w.verdict]}`}>
                      {w.verdict}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <TabBar active="library" />
    </Screen>
  );
}
