import { Check } from "lucide-react";
import { Composer, Screen, StatusBar, TopBar, WineDot } from "./parts";

const LABEL = "text-xs font-semibold tracking-[0.1em] text-vv-text3";

export default function AppCheckIn() {
  return (
    <Screen className="bg-vv-page">
      <StatusBar time="10:12" />
      <TopBar title="Maison Lune" sub="Last night" className="border-b border-white/[0.06]" />

      <div className="absolute inset-x-0 bottom-[92px] top-[112px] flex flex-col gap-3 overflow-hidden p-4">
        <div className="flex items-center gap-2.5 rounded-[14px] bg-vv-surface px-3.5 py-2.5 opacity-80">
          <WineDot color="rose" />
          <span className="flex-1 text-[13px] text-vv-text2">
            You had <span className="text-vv-text">Txakolina Rosé</span> with redfish
          </span>
          <span className="text-[13px] font-semibold">$54</span>
        </div>
        <div className="text-center text-xs text-vv-text3">Today 10:12</div>
        <div className="text-[15px] leading-normal">Quick one about last night, so your next pick is sharper.</div>

        <div className="flex flex-col gap-4 rounded-[20px] border border-white/[0.09] bg-vv-surface p-4">
          <div className="flex flex-col gap-2">
            <span className={LABEL}>THE WINE</span>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <span className="flex h-11 items-center justify-center rounded-xl border-[1.5px] border-vv-stroke bg-purple-500/[0.18] font-semibold">
                Loved it
              </span>
              <span className="flex h-11 items-center justify-center rounded-xl bg-vv-surface2">Fine</span>
              <span className="flex h-11 items-center justify-center rounded-xl bg-vv-surface2">Not for me</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className={LABEL}>WITH THE REDFISH</span>
            <div className="grid grid-cols-5 gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className={`h-2.5 rounded-[5px] ${i < 4 ? "bg-vv-primary" : "bg-vv-surface2"}`} />
              ))}
            </div>
            <div className="flex justify-between text-xs text-vv-text2">
              <span>Clashed</span>
              <span className="font-semibold text-vv-accent">Great match</span>
              <span>Perfect</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className={LABEL}>WISH YOU&apos;D TRIED?</span>
            <div className="flex flex-wrap gap-2 text-[13px]">
              <span className="inline-flex h-9 items-center gap-1.5 rounded-full border-[1.5px] border-vv-stroke bg-purple-500/[0.18] px-3 font-medium">
                <Check size={14} strokeWidth={3} className="text-vv-accent" />
                Benanti Etna Rosso
              </span>
              <span className="inline-flex h-9 items-center rounded-full bg-vv-surface2 px-3">Tempier Bandol Rosé</span>
              <span className="inline-flex h-9 items-center rounded-full bg-vv-surface2 px-3 text-vv-text2">Nope</span>
            </div>
          </div>

          <span className="flex h-[52px] items-center justify-center rounded-[14px] bg-vv-primary text-base font-semibold text-white">
            Save to library
          </span>
        </div>
      </div>

      <Composer placeholder="Add a note" />
    </Screen>
  );
}
