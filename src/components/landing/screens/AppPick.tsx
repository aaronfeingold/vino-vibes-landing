import { Composer, Screen, StatusBar, TopBar } from "./parts";

// Side-by-side scores out of three; the first column is the pick.
const COMPARE: { label: string; scores: [number, number, number] }[] = [
  { label: "Salty", scores: [3, 1, 2] },
  { label: "Acidity", scores: [3, 3, 2] },
  { label: "Body", scores: [1, 2, 1] },
];
const QUICK_REPLIES = ["By the glass", "Something red", "Something new"];

function Dots({ n, pick }: { n: number; pick: boolean }) {
  return (
    <span className="flex gap-[3px]">
      {[0, 1, 2].map((i) => (
        <i
          key={i}
          className={`h-2 w-2 rounded-full ${i < n ? (pick ? "bg-vv-accent" : "bg-vv-text2") : "bg-vv-surface2"}`}
        />
      ))}
    </span>
  );
}

export default function AppPick() {
  return (
    <Screen className="bg-vv-page">
      <StatusBar />
      <TopBar title="Maison Lune" sub="List analyzed · 42 wines" className="border-b border-white/[0.06]" />

      <div className="absolute inset-x-0 bottom-[92px] top-[112px] flex flex-col gap-3 overflow-hidden p-4">
        <div className="max-w-[290px] self-end rounded-[18px_18px_4px_18px] bg-vv-surface2 px-3.5 py-3 text-[15px] leading-[1.45]">
          Having the redfish. Something like those cider bars in San Sebastián?
        </div>

        <div className="rounded-3xl border-[1.5px] border-vv-stroke/45 bg-vv-surface p-[18px] shadow-[0_0_0_6px_rgba(168,85,247,0.08)]">
          <div className="text-xs font-bold tracking-[0.12em] text-vv-accent">BEST MATCH ON THIS LIST</div>
          <div className="mt-1.5 flex justify-between gap-3">
            <div>
              <div className="text-2xl font-extrabold leading-[1.15] tracking-[-0.01em]">Txakolina Rosé</div>
              <div className="mt-0.5 text-[13px] text-vv-text2">Ameztoi · Getaria · 2023</div>
            </div>
            <div className="text-right">
              <div className="text-[22px] font-bold">$54</div>
              <div className="text-xs text-vv-text3">$15 glass</div>
            </div>
          </div>
          <p className="mt-3 text-[15px] font-medium leading-normal">
            Same coast as <span className="text-vv-accent">San Sebastián</span>: salty, a little spritz, bright
            enough for the roux.
          </p>
          <div className="mt-3.5 flex gap-2">
            <span className="flex h-11 flex-1 items-center justify-center rounded-xl bg-vv-primary text-[15px] font-semibold text-white">
              I&apos;m having it
            </span>
            <span className="flex h-11 items-center rounded-xl border-[1.5px] border-white/[0.22] px-3.5 text-sm font-medium">
              Why this?
            </span>
          </div>
        </div>

        <div className="rounded-[20px] bg-vv-surface p-4">
          <div className="text-xs font-semibold tracking-[0.1em] text-vv-text3">SIDE BY SIDE</div>
          <div className="mt-3 grid grid-cols-[64px_repeat(3,minmax(0,1fr))] items-center gap-x-2 gap-y-2.5 text-xs">
            <span />
            <span className="font-semibold text-vv-accent">Txakolina</span>
            <span className="font-semibold">Sancerre</span>
            <span className="font-semibold">Vinho Verde</span>
            {COMPARE.map((row) => (
              <div key={row.label} className="contents">
                <span className="text-vv-text2">{row.label}</span>
                {row.scores.map((n, i) => (
                  <Dots key={i} n={n} pick={i === 0} />
                ))}
              </div>
            ))}
            <span className="text-vv-text2">Bottle</span>
            <span className="font-semibold">$54</span>
            <span className="font-semibold">$68</span>
            <span className="font-semibold">$38</span>
            <span className="text-vv-text2">You</span>
            <span className="text-vv-accent">Loved ×2</span>
            <span className="text-vv-text2">Liked</span>
            <span className="text-vv-text3">New</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {QUICK_REPLIES.map((q) => (
            <span
              key={q}
              className="inline-flex h-9 items-center rounded-full border-[1.5px] border-vv-stroke/50 px-3.5 text-[13px] text-vv-accent"
            >
              {q}
            </span>
          ))}
        </div>
      </div>

      <Composer placeholder="Ask about this list" />
    </Screen>
  );
}
