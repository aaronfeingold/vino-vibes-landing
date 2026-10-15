import { X, Zap } from "lucide-react";
import { Screen, WineDot } from "./parts";

// Page 2 of the paper list. Highlighted lines have already been extracted.
const LIST: { section: string; wines: { name: string; price: string; read?: boolean }[] }[] = [
  {
    section: "Red",
    wines: [
      { name: "Lapierre Morgon 20··", price: "62", read: true },
      { name: "CVNE Rioja Crianza 2019", price: "49", read: true },
      { name: "Benanti Etna Rosso 2021", price: "64", read: true },
      { name: "Guigal Côtes du Rhône 2022", price: "44" },
      { name: "Tempier Bandol Rouge 2020", price: "96" },
    ],
  },
  { section: "Dessert", wines: [{ name: "Royal Tokaji 5 Puttonyos", price: "18" }] },
];

// Capture modes, swiped side to side like the iOS camera; the selected one sits in the middle.
const MODES = ["Cocktails", "Wine list", "Menu"];
const SELECTED = "Wine list";

export default function AppSnap() {
  return (
    <Screen className="bg-vv-camera">
      {/* The paper wine list seen through the camera */}
      <div className="absolute left-[58px] top-[104px] flex h-[350px] w-[274px] -rotate-2 flex-col gap-1 bg-[#EDE6DA] px-5 py-[22px] font-serif text-[10.5px] text-[#2A2220] shadow-[0_30px_60px_rgba(0,0,0,0.6)] brightness-[0.78]">
        <div className="text-center text-xs tracking-[0.24em]">MAISON LUNE</div>
        {LIST.map((g) => (
          <div key={g.section} className="flex flex-col gap-1">
            <div className="mt-2.5 italic text-[#6B5D58]">{g.section}</div>
            {g.wines.map((w) => (
              <div key={w.name} className={`flex justify-between ${w.read ? "bg-purple-500/25" : ""}`}>
                <span>{w.name}</span>
                <span>{w.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 top-0 flex h-[120px] items-center justify-between bg-gradient-to-b from-vv-camera/95 to-vv-camera/0 px-3 pt-[47px]">
        <span className="flex h-11 w-11 items-center justify-center">
          <X size={22} />
        </span>
        <div className="text-base font-semibold">Page 2 of the list</div>
        <span className="flex h-11 w-11 items-center justify-center">
          <Zap size={22} />
        </span>
      </div>
      <div className="absolute inset-x-0 top-0 pl-[30px] pt-4 text-[15px] font-semibold">9:41</div>

      <div className="absolute inset-x-0 top-[470px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_22%,#000_78%,transparent)]">
        <div className="flex justify-center gap-6 whitespace-nowrap text-[13px] font-semibold tracking-[0.06em]">
          {MODES.map((m) => (
            <span
              key={m}
              className={`flex flex-col items-center gap-1 ${m === SELECTED ? "text-vv-accent" : "text-vv-text2"}`}
            >
              {m.toUpperCase()}
              {m === SELECTED && <span className="h-1 w-1 rounded-full bg-vv-accent" />}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 top-[512px] flex justify-center">
        <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-4 border-vv-text">
          <span className="block h-[60px] w-[60px] rounded-full bg-vv-text" />
        </span>
      </div>

      {/* Wines stream into this sheet while you shoot; swipe it up for the analysis */}
      <div className="absolute inset-x-0 bottom-0 top-[612px] rounded-t-3xl border-t border-white/10 bg-vv-surface pt-2">
        <div className="mx-auto h-[5px] w-9 rounded-[3px] bg-white/[0.22]" />
        <div className="flex items-center gap-2.5 px-5 pb-2 pt-3">
          <span className="h-4 w-4 shrink-0 rounded-full border-[2.5px] border-vv-surface2 border-t-vv-accent" />
          <span className="flex-1 text-[15px] font-semibold">Extracting · 29 wines so far</span>
          <span className="text-[13px] font-semibold text-vv-accent">Swipe up</span>
        </div>
        <div className="flex items-center gap-3 border-t border-white/[0.06] px-5 py-[9px]">
          <WineDot color="red" />
          <span className="flex-1 text-sm">Benanti Etna Rosso 2021</span>
          <span className="rounded-md bg-vv-accent px-1.5 py-0.5 text-[11px] font-bold text-vv-bg">ON YOUR TO-TRY</span>
        </div>
        <div className="flex items-center gap-3 border-t border-white/[0.06] px-5 py-[9px]">
          <WineDot color="red" />
          <span className="flex-1 text-sm">CVNE Rioja Crianza 2019</span>
          <span className="text-sm font-semibold">$49</span>
        </div>
        <div className="flex items-center gap-3 border-t border-white/[0.06] bg-vv-warning/[0.08] px-5 py-[9px]">
          <WineDot color="red" />
          <span className="flex-1 text-sm">
            Lapierre Morgon <span className="text-vv-warning">20??</span>
          </span>
          <span className="text-xs text-vv-warning">Reshoot closer</span>
        </div>
      </div>
    </Screen>
  );
}
