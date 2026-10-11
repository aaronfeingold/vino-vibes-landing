import { ArrowRight } from "lucide-react";
import { links, type LaunchCopy } from "@/src/lib/launch-stage";
import SignupForm from "./SignupForm";
import StoreButton from "./StoreButton";
import { Glow, GlowLayer } from "./Glow";

export default function Join({ cta }: { cta: LaunchCopy }) {
  return (
    <section id="join" className="relative isolate scroll-mt-16 border-t border-white/[0.06]">
      <GlowLayer>
        <Glow shape="c" opacity={0.5} className="left-1/2 top-10 -ml-[450px] h-[520px] w-[900px]" />
      </GlowLayer>
      <div className="mx-auto max-w-[1200px] px-4 pb-[72px] pt-24 text-center sm:px-6 md:pt-32">
        <h2 className="mx-auto max-w-[820px] font-display text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] min-[900px]:text-6xl">
          Your next wine list is already decided.
        </h2>
        <div className="mx-auto mt-8 flex max-w-[540px] flex-col items-center gap-3.5">
          {cta.showForm ? (
            <SignupForm label={cta.label} source="join" stretchButton />
          ) : (
            <StoreButton href={cta.storeUrl!} label={cta.label} />
          )}
          <div className="text-sm text-vv-text2">{cta.note}</div>
        </div>

        <div
          id="restaurants"
          className="mx-auto mt-24 flex max-w-[900px] scroll-mt-24 flex-wrap items-center justify-between gap-5 rounded-[20px] border border-white/[0.08] bg-vv-surface px-8 py-7 text-left"
        >
          <div className="flex-[1_1_420px]">
            <div className="text-lg font-extrabold">Run a restaurant or a wine shop?</div>
            <div className="mt-1.5 text-[15px] leading-normal text-vv-text2">
              Free seats for you and your staff, and a card with a code for your guests.
            </div>
          </div>
          <a
            href={links.partner}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-[10px] border border-white/[0.24] px-5 text-[15px] font-bold text-vv-text transition-colors hover:border-vv-red-text hover:text-vv-red-text"
          >
            Partner with us
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
