import { Check, X, Zap } from "lucide-react";
import { Screen } from "./parts";

// [producer and wine, by the glass, by the bottle]
const LIST: { section: string; wines: [string, string, string][] }[] = [
  {
    section: "Sparkling",
    wines: [
      ["Langlois-Château Crémant de Loire NV", "14", "58"],
      ["Gramona Brut Nature 2019", "12", "46"],
    ],
  },
  {
    section: "White & rosé",
    wines: [
      ["Ameztoi Txakolina Rosé 2023", "15", "54"],
      ["Vacheron Sancerre 2022", "17", "68"],
      ["Aphros Vinho Verde 2023", "10", "38"],
      ["Hirsch Grüner Veltliner 2022", "13", "52"],
    ],
  },
  {
    section: "Red",
    wines: [
      ["Lapierre Morgon 2021", "16", "62"],
      ["CVNE Rioja Crianza 2019", "12", "49"],
      ["Benanti Etna Rosso 2021", "16", "64"],
      ["Guigal Côtes du Rhône 2022", "11", "44"],
    ],
  },
];

// Capture modes, swiped side to side like the iOS camera; the selected one sits in the middle.
const MODES = ["Spirits", "Cocktails", "Wine list", "Menu", "Dessert"];
const SELECTED = "Wine list";

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
        <div className="text-center text-[13px] tracking-[0.24em]">MAISON LUNE</div>
        <div className="mt-1 text-center text-[10px] tracking-[0.2em] text-[#6B5D58]">WINES</div>
        <div className="mt-3 flex justify-end gap-3 text-[9px] tracking-[0.12em] text-[#6B5D58]">
          <span className="w-5 text-right">GLASS</span>
          <span className="w-7 text-right">BTL</span>
        </div>
        {LIST.map((g, i) => (
          <div key={g.section}>
            <div className={`${i === 0 ? "mt-1" : "mt-3"} text-[11px] italic text-[#6B5D58]`}>{g.section}</div>
            {g.wines.map(([name, glass, bottle], j) => (
              <div key={name} className={`flex gap-3 text-[11.5px] ${j === 0 ? "mt-1" : "mt-[3px]"}`}>
                <span className="min-w-0 flex-1 truncate">{name}</span>
                <span className="w-5 text-right">{glass}</span>
                <span className="w-7 text-right">{bottle}</span>
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
        <div className="relative -mx-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_22%,#000_78%,transparent)]">
          <div className="flex justify-center gap-6 whitespace-nowrap text-[13px] font-semibold tracking-[0.06em]">
            {MODES.map((m) => (
              <span
                key={m}
                className={`flex flex-col items-center gap-1 ${m === SELECTED ? "text-vv-accent" : "text-vv-text2"}`}
              >
                {m.toUpperCase()}
                <span className={`h-1 w-1 rounded-full ${m === SELECTED ? "bg-vv-accent" : "bg-transparent"}`} />
              </span>
            ))}
          </div>
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
