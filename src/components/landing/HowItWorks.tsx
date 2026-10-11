import type { ComponentType } from "react";
import PhoneFrame from "./PhoneFrame";
import AppSnap from "./screens/AppSnap";
import AppRead from "./screens/AppRead";
import AppPick from "./screens/AppPick";

const STEPS: { title: string; body: string; label: string; Screen: ComponentType }[] = [
  {
    title: "Snap the list",
    body: "Photograph the wine list and the menu. It reads every bottle and every price.",
    label: "The camera reading a wine list",
    Screen: AppSnap,
  },
  {
    title: "Tell it what you're eating",
    body: "Tap your dish. See what it read, and fix anything it got wrong.",
    label: "The list of wines and dishes it read, with one entry flagged to fix",
    Screen: AppRead,
  },
  {
    title: "Get one pick",
    body: "One bottle from this list, at the listed price, and why it suits you.",
    label: "The pick: one bottle with a personal reason",
    Screen: AppPick,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 border-y border-white/[0.06] bg-vv-band">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <div className="text-sm font-semibold tracking-[0.12em] text-vv-accent">HOW IT WORKS</div>
          <h2 className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[44px]">
            Ninety seconds, start to pour.
          </h2>
        </div>
        <ol className="grid gap-14 min-[900px]:grid-cols-3 min-[900px]:gap-10">
          {STEPS.map(({ title, body, label, Screen }, i) => (
            <li key={title} className="flex flex-col items-center gap-6 text-center">
              <PhoneFrame width={250} label={label}>
                <Screen />
              </PhoneFrame>
              <div>
                <div className="text-sm font-bold text-vv-accent">{i + 1}</div>
                <h3 className="mb-2 mt-1.5 text-[22px] font-bold">{title}</h3>
                <p className="max-w-[300px] text-base leading-[1.55] text-vv-text2">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
