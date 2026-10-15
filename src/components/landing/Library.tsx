import type { ComponentType } from "react";
import PhoneFrame from "./PhoneFrame";
import AppCheckIn from "./screens/AppCheckIn";
import AppLibrary from "./screens/AppLibrary";
import AppWine from "./screens/AppWine";
import AppNearby from "./screens/AppNearby";

const SCREENS: { title: string; body: string; label: string; Screen: ComponentType }[] = [
  {
    title: "Tell it how it went",
    body: "The next morning: the wine, the pairing, and what you wish you'd tried.",
    label: "A next-day check-in asking how the wine was, how it went with the redfish, and what you wish you'd tried",
    Screen: AppCheckIn,
  },
  {
    title: "Every place you've been",
    body: "What you drank there, how many times, what you thought, and what you missed.",
    label: "The wine library by place: each restaurant with the wines had there, repeat counts and verdicts",
    Screen: AppLibrary,
  },
  {
    title: "Every wine, over time",
    body: "Where and with what you had it, how locals drink it, and where to get it nearby.",
    label: "One wine over time: how often you've had it, where, what locals pair it with, and where to get it nearby",
    Screen: AppWine,
  },
  {
    title: "Tonight, nearby",
    body: "Fish and a Chardonnay, close by. The nearest places that have both.",
    label: "A nearby search for fish and a Chardonnay, with a map and three ranked places",
    Screen: AppNearby,
  },
];

export default function Library() {
  return (
    <section id="library" className="scroll-mt-16">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <div className="text-sm font-semibold tracking-[0.12em] text-vv-accent">YOUR WINE LIBRARY</div>
          <h2 className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[44px]">
            Every place, every pour, remembered.
          </h2>
        </div>
        <ul className="grid gap-14 sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-4 xl:gap-x-6">
          {SCREENS.map(({ title, body, label, Screen }) => (
            <li key={title} className="flex flex-col items-center gap-6 text-center">
              <PhoneFrame width={250} label={label}>
                <Screen />
              </PhoneFrame>
              <div>
                <h3 className="mb-2 text-[22px] font-bold">{title}</h3>
                <p className="max-w-[260px] text-base leading-[1.55] text-vv-text2">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
