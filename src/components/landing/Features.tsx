import type { ReactNode } from "react";
import { FacetIcon } from "./Facet";
import { Glow, GlowLayer } from "./Glow";

const FEATURES: { title: string; body: string; icon: ReactNode; sample: ReactNode }[] = [
  {
    title: "Chat",
    body: "One conversation runs everything. Type it, say it, or snap the list.",
    icon: <path d="M8 11h10M8 15h6" />,
    sample: (
      <div className="self-end rounded-[14px] rounded-br-[4px] bg-vv-bubble px-3 py-2.5 text-[13px]">
        Ribeye, $150, something serious.
      </div>
    ),
  },
  {
    title: "Search",
    body: "Who pours what, with which food, near you. Real lists from real restaurants.",
    icon: (
      <>
        <circle cx="12" cy="13" r="4" />
        <path d="M15 16l3 3" />
      </>
    ),
    sample: (
      <div className="rounded-xl bg-vv-surface2 px-3 py-2.5 text-[13px]">
        <strong>Oxblood</strong> <span className="text-vv-text2">· Chambolle by the glass</span>
      </div>
    ),
  },
  {
    title: "Memory",
    body: "What you loved, what you didn't, and what you had it with. You can see all of it.",
    icon: (
      <>
        <circle cx="13" cy="11" r="3" />
        <path d="M8 19a5 5 0 0 1 10 0" />
      </>
    ),
    sample: (
      <div className="flex flex-wrap gap-1.5 text-xs">
        <span className="rounded-full bg-vv-red/20 px-2.5 py-1.5">Big reds</span>
        <span className="rounded-full bg-vv-red/20 px-2.5 py-1.5">Brunello</span>
        <span className="rounded-full bg-vv-surface2 px-2.5 py-1.5 text-vv-text2 line-through">
          Thin Chianti
        </span>
      </div>
    ),
  },
  {
    title: "Organize",
    body: "Your bottles, your places and your lists, kept without you lifting a finger.",
    icon: <path d="M8 10h10M8 14h10M8 18h6" />,
    sample: (
      <div className="flex justify-between rounded-xl bg-vv-surface2 px-3 py-2.5 text-[13px]">
        <strong>Steak nights</strong>
        <span className="text-vv-text2">3 bottles</span>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="four" className="relative isolate scroll-mt-16">
      <GlowLayer>
        <Glow shape="b" opacity={0.22} className="left-[30%] top-[120px] h-[420px] w-[620px]" />
      </GlowLayer>
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-[120px]">
        <div className="mb-14 max-w-[720px]">
          <div className="text-[13px] font-extrabold tracking-[0.14em] text-vv-red-text">WHAT IT DOES</div>
          <h2 className="mt-3 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] min-[900px]:text-5xl">
            Four things, one conversation.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 min-[1000px]:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3.5 rounded-[20px] border border-white/[0.08] bg-vv-surface p-6"
            >
              <FacetIcon>{f.icon}</FacetIcon>
              <h3 className="font-display text-2xl font-bold">{f.title}</h3>
              <p className="text-[15px] leading-[1.55] text-vv-text2">{f.body}</p>
              <div className="mt-auto flex flex-col" aria-hidden="true">
                {f.sample}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
