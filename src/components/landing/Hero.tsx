import type { LaunchCopy } from "@/src/lib/launch-stage";
import PhoneFrame from "./PhoneFrame";
import SignupForm from "./SignupForm";
import StoreButton from "./StoreButton";
import AppPick from "./screens/AppPick";
import AppSnap from "./screens/AppSnap";

export default function Hero({ cta }: { cta: LaunchCopy }) {
  return (
    <section id="top" className="relative mx-auto max-w-[1200px] px-4 pb-28 pt-[140px] sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] top-10 h-[640px] w-[640px] max-w-full rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),rgba(168,85,247,0)_65%)]"
      />
      <div className="relative grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] min-[900px]:gap-14">
        <div className="flex flex-col items-center gap-6 text-center min-[900px]:items-start min-[900px]:text-left">
          <h1 className="text-[46px] font-extrabold leading-[1.02] tracking-[-0.035em] min-[900px]:text-[76px]">
            The wine list, simplified.
          </h1>
          <p className="max-w-[520px] text-lg leading-[1.55] text-vv-text2 min-[900px]:text-xl">
            Enjoying wine is easier than ever.
          </p>
          <div className="w-full max-w-[520px]">
            {cta.showForm ? (
              <SignupForm label={cta.label} source="hero" />
            ) : (
              <StoreButton href={cta.storeUrl!} label={cta.label} />
            )}
          </div>
          <div className="text-sm text-vv-text3">{cta.note}</div>
        </div>

        <div className="relative flex justify-center min-[900px]:min-h-[700px]">
          <div className="absolute left-0 top-[70px] hidden -rotate-[9deg] opacity-55 min-[900px]:block">
            <PhoneFrame width={262} label="The Vino Vibes camera reading a wine list">
              <AppSnap />
            </PhoneFrame>
          </div>
          <PhoneFrame
            width={332}
            label="The Vino Vibes pick screen: one bottle from the list, with a personal reason"
            className="relative shadow-[0_40px_90px_-20px_rgba(0,0,0,0.85)] min-[900px]:ml-24"
          >
            <AppPick />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
