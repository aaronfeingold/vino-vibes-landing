import { BlockShell, GhostButton } from "./BlockShell";
import { Eyebrow, FacetNumber } from "../Facet";

const PLACES = [
  { name: "Oxblood Wine Bar", pour: "Chambolle-Musigny 2019 · $32 a glass", distance: "0.3 mi" },
  { name: "Rue Cellar", pour: "Gevrey-Chambertin 2018 · $38 a glass", distance: "0.6 mi" },
  { name: "The Marrow", pour: "Bourgogne Rouge · $16, the honest starter", distance: "0.9 mi" },
];

export default function Places() {
  return (
    <BlockShell>
      <div className="flex items-baseline justify-between">
        <Eyebrow>3 PLACES NEAR YOU</Eyebrow>
        <div className="text-xs text-vv-text3">Burgundy by the glass</div>
      </div>

      <ol className="mt-3 flex flex-col">
        {PLACES.map((p, i) => (
          <li
            key={p.name}
            className="flex items-center gap-3 border-b border-white/[0.07] py-3 last:border-b-0"
          >
            <FacetNumber n={i + 1} active={i === 0} />
            <div className="min-w-0 flex-1">
              <div className="text-[15px] font-bold">{p.name}</div>
              <div className="mt-0.5 text-[13px] text-vv-text2">{p.pour}</div>
            </div>
            <div className="text-xs text-vv-text3">{p.distance}</div>
          </li>
        ))}
      </ol>

      <div className="mt-2 flex gap-2">
        <GhostButton>Show on map</GhostButton>
        <GhostButton>What to eat there</GhostButton>
      </div>
    </BlockShell>
  );
}
