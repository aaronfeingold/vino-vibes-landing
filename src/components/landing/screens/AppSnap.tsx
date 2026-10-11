import { Check, X, Zap } from "lucide-react";
import { Screen } from "./parts";

const LIST: { section: string; wines: [string, string][] }[] = [
  { section: "Sparkling", wines: [["Crémant de Loire, NV", "58"], ["Cava Brut Nature, NV", "46"]] },
  {
    section: "White & rosé",
    wines: [
      ["Txakoli Rosé, Getaria 2023", "54"],
      ["Sancerre 2022", "68"],
      ["Vinho Verde 2023", "38"],
      ["Grüner Veltliner 2022", "52"],
    ],
  },
  {
    section: "Red",
    wines: [
      ["Morgon 2021", "62"],
      ["Rioja Crianza 2019", "49"],
      ["Etna Rosso 2021", "64"],
      ["Côtes du Rhône 2022", "44"],
    ],
  },
];

const CORNERS = [
  "left-[22px] top-[84px] border-l-[3px] border-t-[3px] rounded-tl-[14px]",
  "right-[22px] top-[84px] border-r-[3px] border-t-[3px] rounded-tr-[14px]",
  "left-[22px] top-[546px] border-b-[3px] border-l-[3px] rounded-bl-[14px]",
  "right-[22px] top-[546px] border-b-[3px] border-r-[3px] rounded-br-[14px]",
];

export default function AppSnap() {
  return (
    <Screen className="bg-vv-camera">
      {/* The paper wine list seen through the camera */}
      <div className="absolute left-[34px] top-24 h-[470px] w-[322px] -rotate-[2.5deg] bg-[#EDE6DA] px-[26px] py-7 font-serif text-[#2A2220] shadow-[0_30px_60px_rgba(0,0,0,0.6)] brightness-[0.78]">
        <div className="text-center text-[13px] tracking-[0.24em]">CHEZ MARIGNY</div>
        <div className="mt-1 text-center text-[10px] tracking-[0.2em] text-[#6B5D58]">WINES BY THE BOTTLE</div>
        {LIST.map((g, i) => (
          <div key={g.section}>
            <div className={`${i === 0 ? "mt-[18px]" : "mt-3.5"} text-[11px] italic text-[#6B5D58]`}>{g.section}</div>
            {g.wines.map(([name, price], j) => (
              <div key={name} className={`flex justify-between text-xs ${j === 0 ? "mt-1.5" : "mt-1"}`}>
                <span>{name}</span>
                <span>{price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {CORNERS.map((c) => (
        <div key={c} className={`absolute h-9 w-9 border-vv-stroke ${c}`} />
      ))}

      <div className="absolute inset-x-0 top-0 flex h-[72px] items-center justify-between bg-gradient-to-b from-vv-camera/90 to-vv-camera/0 px-3 pt-4">
        <span className="flex h-11 w-11 items-center justify-center">
          <X size={22} />
        </span>
        <div className="text-base font-semibold">Snap the wine list</div>
        <span className="flex h-11 w-11 items-center justify-center">
          <Zap size={22} />
        </span>
      </div>

      <div className="absolute inset-x-0 top-[598px] flex justify-center">
        <div className="inline-flex h-9 items-center gap-2 rounded-full border border-vv-stroke/50 bg-vv-surface/[0.92] px-3.5 text-sm font-medium">
          <Check size={16} strokeWidth={2.4} className="text-vv-accent" />
          Reading… 11 wines so far
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[196px] border-t border-white/[0.08] bg-vv-bg px-5 pb-7 pt-4">
        <div className="flex justify-center gap-1.5 text-[13px]">
          <span className="flex h-8 items-center rounded-full bg-vv-text px-3.5 font-semibold text-vv-bg">Wine list</span>
          <span className="flex h-8 items-center rounded-full bg-vv-surface2 px-3.5 font-medium text-vv-text2">Menu</span>
        </div>
        <div className="mt-[22px] flex items-center justify-between">
          <span className="w-24 text-sm text-vv-text2 underline underline-offset-[3px]">Type it instead</span>
          <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-4 border-vv-text">
            <span className="block h-[60px] w-[60px] rounded-full bg-vv-text" />
          </span>
          <span className="flex h-11 w-24 items-center justify-center rounded-[14px] bg-vv-primary text-[15px] font-semibold text-white">
            Done · 2
          </span>
        </div>
      </div>
    </Screen>
  );
}
