import type { LaunchCopy } from "@/src/lib/launch-stage";
import PhoneChat from "./PhoneChat";
import SignupForm from "./SignupForm";
import StoreButton from "./StoreButton";
import { Glow, GlowLayer } from "./Glow";

export default function Hero({ cta }: { cta: LaunchCopy }) {
  return (
    <section id="top" className="relative isolate">
      <GlowLayer>
        <Glow shape="a" opacity={0.7} className="-right-[120px] -top-[60px] h-[680px] w-[760px]" />
        <Glow shape="b" deep opacity={0.55} className="right-[260px] top-[380px] h-[380px] w-[420px]" />
        <Glow shape="c" opacity={0.35} className="-left-[200px] top-[520px] h-[420px] w-[460px]" />
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0"
          fill="none"
          strokeWidth="1"
        >
          <polygon points="820,40 1300,90 1220,520 900,700 700,330" stroke="rgba(255,90,95,0.22)" />
          <polygon points="900,140 1180,180 1120,440 940,520 840,320" stroke="rgba(255,90,95,0.14)" />
          <polyline points="700,330 940,520 1220,520" stroke="rgba(255,90,95,0.12)" />
          <polygon points="60,620 260,560 330,760 160,860" stroke="rgba(255,90,95,0.12)" />
        </svg>
      </GlowLayer>

      <div className="mx-auto max-w-[1200px] px-4 pb-[104px] pt-[140px] sm:px-6">
        <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="flex flex-col items-center gap-6 text-center min-[900px]:items-start min-[900px]:text-left">
            <div className="inline-flex h-8 items-center rounded-full border border-vv-red-text/35 bg-vv-red/[0.16] px-3 text-[13px] font-bold text-[#FF8A8E]">
              A sommelier you can text
            </div>
            <h1 className="font-display text-[46px] font-extrabold leading-[0.98] tracking-[-0.03em] min-[900px]:text-[78px]">
              Order wine like you&apos;ve done it for years.
            </h1>
            <p className="max-w-[540px] text-lg leading-[1.55] text-vv-text2 min-[900px]:text-xl">
              Ask what to order, where to go, or why a bottle costs what it does. Vino Vibes answers
              with one clear pick, remembers what you liked, and gets sharper every dinner.
            </p>
            <div className="w-full max-w-[540px]">
              {cta.showForm ? (
                <SignupForm label={cta.label} source="hero" />
              ) : (
                <StoreButton href={cta.storeUrl!} label={cta.label} />
              )}
            </div>
            <div className="text-sm text-vv-text3">{cta.note}</div>
          </div>

          <PhoneChat />
        </div>
      </div>
    </section>
  );
}
