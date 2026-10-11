import { X } from "lucide-react";
import { Row, Screen, SectionLabel, TopBar } from "./parts";

const TRAITS = [
  {
    title: "Loves the cider bars in San Sebastián",
    sub: "You told me on Sep 28 · leans me toward salty, coastal whites",
  },
  { title: "Happiest outdoors", sub: "From our chat on Oct 2 · leans me toward earthy, savoury reds" },
];

const TASTE: { label: string; kind: "like" | "avoid" | "plain" }[] = [
  { label: "Salty whites", kind: "like" },
  { label: "Gamay", kind: "like" },
  { label: "Bubbles before dinner", kind: "like" },
  { label: "Heavy oak", kind: "avoid" },
  { label: "$40–70 a bottle", kind: "plain" },
];

const CHIP = {
  like: "bg-purple-500/[0.16]",
  avoid: "bg-vv-surface2 text-vv-text2 line-through",
  plain: "bg-vv-surface2",
};

export default function AppMemory() {
  return (
    <Screen>
      <TopBar />

      <div className="px-5">
        <div className="text-[26px] font-bold tracking-[-0.01em]">What I know about you</div>
        <p className="mt-2 text-sm leading-normal text-vv-text2">
          Everything I use to choose for you. Only you can see it. Remove anything and I&apos;ll forget it.
        </p>
      </div>

      <SectionLabel>HOW YOU LIVE</SectionLabel>
      <div className="mx-4 flex flex-col gap-2">
        {TRAITS.map((t) => (
          <div key={t.title} className="flex items-start gap-2.5 rounded-2xl bg-vv-surface py-3.5 pl-4 pr-2">
            <div className="min-w-0 flex-1">
              <div className="text-[15px] font-semibold">{t.title}</div>
              <div className="mt-[3px] text-xs text-vv-text2">{t.sub}</div>
            </div>
            <span className="-mt-2 flex h-11 w-11 shrink-0 items-center justify-center text-vv-text3">
              <X size={18} />
            </span>
          </div>
        ))}
      </div>

      <SectionLabel>YOUR TASTE</SectionLabel>
      <div className="mx-5 flex flex-wrap gap-2 text-[13px]">
        {TASTE.map((t) => (
          <span key={t.label} className={`inline-flex h-8 items-center rounded-full px-3 ${CHIP[t.kind]}`}>
            {t.label}
          </span>
        ))}
      </div>

      <SectionLabel>LATELY</SectionLabel>
      <div className="mx-4 overflow-hidden rounded-2xl bg-vv-surface">
        <Row
          title="Txakoli Rosé, 2023"
          sub="Chez Marigny · with redfish"
          right={<div className="text-[13px] font-semibold text-vv-accent">Loved it</div>}
        />
        <Row
          title="Morgon, 2021"
          sub="At home · with red beans"
          right={<div className="text-[13px] font-semibold text-vv-text2">Liked it</div>}
        />
      </div>
    </Screen>
  );
}
