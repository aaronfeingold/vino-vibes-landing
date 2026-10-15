import { ArrowRight } from "lucide-react";
import type { LaunchCopy } from "@/src/lib/launch-stage";
import SignupForm from "./SignupForm";
import StoreButton from "./StoreButton";

export default function Join({ cta }: { cta: LaunchCopy }) {
  return (
    <section id="join" className="mx-auto max-w-[1200px] scroll-mt-16 px-4 pb-16 pt-24 text-center sm:px-6 md:pt-[120px]">
      <h2 className="mx-auto max-w-[760px] text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] min-[900px]:text-[52px]">
        Your next wine list is already decided.
      </h2>
      <div className="mx-auto mt-8 flex max-w-[520px] flex-col items-center gap-3.5">
        {cta.showForm ? (
          <SignupForm label={cta.label} source="join" stretchButton />
        ) : (
          <StoreButton href={cta.storeUrl!} label={cta.label} />
        )}
        <div className="text-sm text-vv-text3">{cta.note}</div>
      </div>

      <div
        id="restaurants"
        className="mx-auto mt-24 flex max-w-[900px] scroll-mt-24 flex-wrap items-center justify-between gap-5 rounded-[20px] bg-vv-surface px-8 py-7 text-left"
      >
        <div className="flex-[1_1_420px]">
          <div className="text-lg font-bold">Run a restaurant or a wine shop?</div>
          <div className="mt-1.5 text-[15px] leading-normal text-vv-text2">
            Free seats for you and your staff, and a card with a code for your guests.
          </div>
        </div>
        <a
          href="/partners"
          className="inline-flex h-12 items-center gap-2 rounded-xl border-[1.5px] border-white/[0.24] px-5 text-[15px] font-semibold text-vv-text transition-colors hover:border-vv-accent hover:text-vv-accent"
        >
          Partner with us
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
