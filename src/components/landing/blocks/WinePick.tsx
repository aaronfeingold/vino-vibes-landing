import { BlockShell, GhostButton, RedButton } from "./BlockShell";
import { Eyebrow } from "../Facet";

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-[58px] text-xs text-vv-text2">{label}</div>
      <div className="grid flex-1 grid-cols-5 gap-1" role="img" aria-label={`${label} ${value} of 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-[3px] ${i < value ? "bg-vv-red" : "bg-vv-meter"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WinePick() {
  return (
    <BlockShell>
      <svg
        aria-hidden="true"
        width="180"
        height="140"
        viewBox="0 0 180 140"
        className="absolute -right-[30px] -top-[30px] opacity-50"
      >
        <polygon points="40,10 170,0 150,90 70,130 0,60" fill="none" stroke="#C8161F" strokeWidth="1" />
        <polygon points="70,30 150,20 130,80 80,100" fill="rgba(200,22,31,0.18)" />
      </svg>

      <Eyebrow className="relative">THE PICK</Eyebrow>
      <div className="relative mt-2 flex items-start justify-between gap-3">
        <div>
          <div className="font-display text-[28px] font-bold leading-[1.05]">Barolo</div>
          <div className="mt-1 text-[13px] text-vv-text2">Serralunga d&apos;Alba, Piedmont · 2016</div>
        </div>
        <div className="text-right">
          <div className="text-[22px] font-extrabold">$148</div>
          <div className="text-[11px] text-vv-text3">on their list</div>
        </div>
      </div>

      <div className="relative mt-4 flex flex-col gap-2">
        <Meter label="Body" value={5} />
        <Meter label="Tannin" value={5} />
        <Meter label="Acidity" value={4} />
      </div>

      <p className="relative mt-4 text-[15px] font-medium leading-normal">
        You called last month&apos;s Brunello the best thing you drank all year. This is its sterner
        older brother, and ribeye fat is exactly what it wants.
      </p>

      <div className="relative mt-4 flex gap-2">
        <RedButton className="h-[46px] text-[15px]">I&apos;m ordering it</RedButton>
        <GhostButton>Teach me Barolo</GhostButton>
      </div>
    </BlockShell>
  );
}
