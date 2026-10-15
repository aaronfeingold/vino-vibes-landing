import { Row, Screen, SectionLabel, Segmented, StatusBar, TabBar, WineDot, wineBg, type WineColor } from "./parts";

// Every wine they've had, on a light-to-bold (x) and crisp-to-rich (y) map. Positions are percents.
const DOTS: { left: number; top: number; color: WineColor; kind: "loved" | "tried" | "disliked" }[] = [
  { left: 22, top: 72, color: "rose", kind: "loved" },
  { left: 34, top: 64, color: "white", kind: "loved" },
  { left: 14, top: 80, color: "sparkling", kind: "tried" },
  { left: 44, top: 70, color: "white", kind: "tried" },
  { left: 40, top: 56, color: "red", kind: "loved" },
  { left: 28, top: 58, color: "orange", kind: "tried" },
  { left: 52, top: 60, color: "orange", kind: "tried" },
  { left: 58, top: 40, color: "red", kind: "tried" },
  { left: 76, top: 22, color: "red", kind: "disliked" },
  { left: 66, top: 30, color: "white", kind: "disliked" },
  { left: 20, top: 30, color: "dessert", kind: "disliked" },
];

const DOT_SIZE = {
  loved: "h-4 w-4 border-2 border-vv-text",
  tried: "h-2.5 w-2.5",
  disliked: "h-2.5 w-2.5 opacity-[0.55]",
};

const AXIS = "text-[11px] font-semibold tracking-[0.08em] text-vv-text3";

export default function AppProfile() {
  return (
    <Screen>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -ml-[280px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),rgba(168,85,247,0)_65%)]"
      />
      <StatusBar className="relative" />

      <div className="absolute inset-x-0 bottom-[84px] top-[47px] overflow-hidden pb-6">
        <div className="flex flex-col gap-2 px-5 pt-4">
          <span className="text-xs font-bold tracking-[0.12em] text-vv-accent">YOUR PROFILE</span>
          <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em]">
            Coastal whites, light reds, nothing heavy.
          </div>
          <span className="text-xs text-vv-text3">Updated after Maison Lune tonight</span>
        </div>

        <Segmented items={["Palate", "Lifestyles", "Experiences"]} active="Palate" className="mt-5" />

        <div className="mx-4 mt-4 rounded-[20px] bg-vv-surface p-4">
          <div className={`text-center ${AXIS}`}>RICH</div>
          <div className="my-1.5 flex items-center gap-1.5">
            <span className={`rotate-180 [writing-mode:vertical-rl] ${AXIS}`}>LIGHT</span>
            <div className="relative aspect-square flex-1 overflow-hidden rounded-[14px] bg-vv-band">
              <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.06]" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-white/[0.06]" />
              <div className="absolute left-[6%] top-[48%] h-[46%] w-[58%] rounded-full border-[1.5px] border-dashed border-vv-stroke/50 bg-[radial-gradient(ellipse,rgba(168,85,247,0.38),rgba(168,85,247,0)_70%)]" />
              {DOTS.map((d, i) => (
                <span
                  key={i}
                  className={`absolute rounded-full ${wineBg(d.color)} ${DOT_SIZE[d.kind]}`}
                  style={{ left: `${d.left}%`, top: `${d.top}%` }}
                />
              ))}
              <span className="absolute left-[8%] top-[52%] text-[11px] font-semibold text-vv-accent">
                Your sweet spot
              </span>
            </div>
            <span className={`[writing-mode:vertical-rl] ${AXIS}`}>BOLD</span>
          </div>
          <div className={`text-center ${AXIS}`}>CRISP</div>
          <div className="mt-3 flex justify-center gap-4 text-xs text-vv-text2">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full border-2 border-vv-text bg-vv-text2" />
              Loved
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-vv-text2" />
              Tried
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-vv-text2 opacity-[0.55]" />
              Didn&apos;t like
            </span>
          </div>
        </div>

        <SectionLabel>DRIFTING TOWARD</SectionLabel>
        <div className="mx-4 flex items-center gap-3 rounded-2xl bg-vv-surface px-4 py-3.5">
          <WineDot color="orange" />
          <div className="min-w-0 flex-1">
            <div className="text-[15px] font-semibold">Orange wine</div>
            <div className="mt-0.5 text-xs text-vv-text2">3 this month, all rated well. Shows up more in your picks now.</div>
          </div>
        </div>

        <SectionLabel>RECENT WINES</SectionLabel>
        <div className="mx-4 overflow-hidden rounded-2xl bg-vv-surface">
          <Row
            lead={<WineDot color="rose" />}
            title="Ameztoi Txakolina Rosé"
            sub="Had 3 times · Maison Lune"
            right={<span className="text-[13px] font-semibold text-vv-accent">Loved it</span>}
          />
          <Row
            lead={<WineDot color="orange" />}
            title="Gravner Ribolla Gialla"
            sub="Had once · Bar Sardine"
            right={<span className="text-[13px] font-semibold text-vv-text2">Liked it</span>}
          />
        </div>
      </div>

      <TabBar active="you" />
    </Screen>
  );
}
