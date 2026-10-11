import { BlockShell, GhostButton, RedButton } from "./BlockShell";
import { Eyebrow, FacetBullet } from "../Facet";

const STEPS = [
  { label: "PLACE", text: "Langhe hills, Piedmont. Autumn fog, limestone and clay underfoot." },
  { label: "GRAPE", text: "Nebbiolo, named for that fog. Pale in the glass, fierce in the mouth." },
  { label: "TIME", text: "At least 38 months of ageing before release, 18 of them in wood." },
  { label: "TASTE", text: "Tar and roses, sour cherry, grip that softens over years." },
];

export default function Lesson() {
  return (
    <BlockShell>
      <Eyebrow>60-SECOND LESSON</Eyebrow>
      <div className="mt-1.5 font-display text-2xl font-bold">Barolo</div>

      <div className="relative mt-3.5 flex flex-col gap-3.5 pl-[26px]">
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-gradient-to-b from-vv-red to-vv-red-deep"
        />
        {STEPS.map((s) => (
          <div key={s.label} className="relative">
            <FacetBullet className="absolute -left-[26px] top-px" />
            <div className="text-xs font-extrabold tracking-[0.08em] text-vv-text2">{s.label}</div>
            <div className="mt-0.5 text-sm leading-[1.45]">{s.text}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <RedButton>Quiz me</RedButton>
        <GhostButton>Save to my notes</GhostButton>
      </div>
    </BlockShell>
  );
}
