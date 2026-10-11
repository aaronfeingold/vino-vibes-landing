import { Check } from "lucide-react";
import { Row, Screen, TopBar } from "./parts";

const DISHES = ["Duck & andouille gumbo", "Fried crab claws"];

const WINES = [
  { name: "Crémant de Loire, NV", sub: "Loire · sparkling", price: "$58" },
  { name: "Txakoli Rosé, 2023", sub: "Getaria · salty, spritzy rosé", price: "$54" },
  { name: "Sancerre, 2022", sub: "Loire · crisp white", price: "$68" },
  { name: "Morgon, 20??", sub: "Couldn't read the vintage. Tap to fix.", price: "$62", misread: true },
  { name: "Rioja Crianza, 2019", sub: "Rioja · medium red", price: "$49" },
];

export default function AppRead() {
  return (
    <Screen>
      <TopBar title="Chez Marigny" sub="Read from 3 photos" />

      <div className="px-5 pt-2">
        <div className="text-2xl font-bold leading-tight tracking-[-0.01em]">I read 42 wines and 18&nbsp;dishes.</div>
        <div className="mt-[18px] text-sm font-semibold">What are you having?</div>
        <div className="mt-2.5 flex flex-wrap gap-2 text-[13px]">
          <span className="inline-flex h-9 items-center gap-1.5 rounded-full border-[1.5px] border-vv-stroke bg-purple-500/[0.18] px-3 font-medium">
            <Check size={14} strokeWidth={3} className="text-vv-accent" />
            Redfish courtbouillon
          </span>
          {DISHES.map((d) => (
            <span key={d} className="inline-flex h-9 items-center rounded-full bg-vv-surface2 px-3">
              {d}
            </span>
          ))}
          <span className="inline-flex h-9 items-center rounded-full bg-vv-surface2 px-3 text-vv-text2">15 more</span>
        </div>
      </div>

      <div className="mx-5 mt-[22px] flex items-baseline justify-between">
        <div className="text-sm font-semibold">Wines on the list</div>
        <div className="text-xs text-vv-text3">Tap any to fix</div>
      </div>

      <div className="mx-4 mt-2.5 overflow-hidden rounded-[18px] bg-vv-surface">
        {WINES.map((w) => (
          <Row
            key={w.name}
            className={w.misread ? "bg-vv-warning/[0.08]" : ""}
            title={
              w.misread ? (
                <>
                  Morgon, <span className="text-vv-warning">20??</span>
                </>
              ) : (
                w.name
              )
            }
            sub={w.misread ? <span className="text-vv-warning">{w.sub}</span> : w.sub}
            right={<div className="text-[15px] font-semibold">{w.price}</div>}
          />
        ))}
      </div>
      <div className="mx-5 mt-2.5 text-[13px] text-vv-text3">and 37 more</div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-vv-bg/0 to-vv-bg to-30% px-4 pb-7 pt-4">
        <span className="flex h-14 w-full items-center justify-center rounded-2xl bg-vv-primary text-[17px] font-semibold text-white">
          Pick for me
        </span>
      </div>
    </Screen>
  );
}
