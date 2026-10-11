import { Check } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import AppMemory from "./screens/AppMemory";

const PROMISES = [
  "Only picks from the list in front of you",
  "Never pushes you up in price",
  "Shows you everything it knows about you, and forgets anything you ask it to",
];

export default function MadeForYou() {
  return (
    <section id="you" className="mx-auto max-w-[1200px] scroll-mt-16 px-4 py-20 sm:px-6 md:py-[120px]">
      <div className="grid items-center gap-16 min-[900px]:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="text-sm font-semibold tracking-[0.12em] text-vv-accent">MADE FOR YOU</div>
          <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] min-[900px]:text-[44px]">
            It chooses for you, not the average drinker.
          </h2>
          <p className="text-lg leading-relaxed text-vv-text2">
            Vino Vibes gets to know you the way a good sommelier does: where you&apos;ve travelled, what
            you cook, what you love doing outside. No tasting-note vocabulary needed. Then every pick
            comes with a reason that&apos;s yours.
          </p>
          <ul className="mt-2 flex flex-col gap-4">
            {PROMISES.map((p) => (
              <li key={p} className="flex items-start gap-3.5">
                <Check size={22} strokeWidth={2.4} aria-hidden="true" className="mt-0.5 shrink-0 text-vv-accent" />
                <span className="text-[17px] leading-normal">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <PhoneFrame
            width={313}
            label="What I know about you: traits, taste and recent bottles, each one removable"
            className="shadow-[0_40px_90px_-24px_rgba(0,0,0,0.85)]"
          >
            <AppMemory />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
