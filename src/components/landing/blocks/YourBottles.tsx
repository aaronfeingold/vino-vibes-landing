import { BlockShell, GhostButton } from "./BlockShell";
import { Eyebrow } from "../Facet";

const LISTS = [
  { name: "Loved", count: 7, swatches: ["#8E1219", "#C8161F", "#E5D3B3"] },
  { name: "Want to try", count: 4, swatches: ["#6E0A10", "#B9A27A", "#45423F"] },
  {
    name: "Steak nights",
    count: 3,
    swatches: ["#8E1219", "#6E0A10", "#C8161F"],
    latest: "Barolo 2016 just added",
  },
];

export default function YourBottles() {
  return (
    <BlockShell>
      <Eyebrow>YOUR BOTTLES</Eyebrow>

      <ul className="mt-3 flex flex-col gap-2">
        {LISTS.map((l) => (
          <li
            key={l.name}
            className={`flex items-center gap-3 rounded-[14px] bg-vv-surface2 px-3 py-2.5 ${
              l.latest ? "border border-vv-red/50" : ""
            }`}
          >
            <div aria-hidden="true" className="flex">
              {l.swatches.map((c, i) => (
                <span
                  key={i}
                  className={`h-[26px] w-[18px] rounded ${i > 0 ? "-ml-1.5" : ""}`}
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="flex-1">
              <div className="text-[15px] font-bold">{l.name}</div>
              {l.latest && <div className="text-xs text-vv-red-text">{l.latest}</div>}
            </div>
            <div className="text-[13px] text-vv-text2">{l.count} bottles</div>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex gap-2">
        <GhostButton>New list</GhostButton>
        <GhostButton>Places I&apos;ve been</GhostButton>
      </div>
    </BlockShell>
  );
}
