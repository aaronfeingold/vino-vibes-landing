import type { Metadata } from "next";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import PartnerForm from "../../components/landing/PartnerForm";
import { getLaunchCopy } from "../../lib/launch-stage";

const DESCRIPTION =
  "Restaurants, bars and wine shops: try Vino Vibes in everyday service, free. All we ask for is honest feedback.";

export const metadata: Metadata = {
  title: "Partner with Vino Vibes",
  description: DESCRIPTION,
  alternates: { canonical: "/partners" },
  openGraph: { title: "Partner with Vino Vibes", description: DESCRIPTION, url: "https://vinovibes.ai/partners" },
};

const OFFER = [
  {
    title: "Free for you and your staff",
    body: "Seats for everyone on the floor, at no cost, for as long as we're testing.",
  },
  {
    title: "A card for your guests",
    body: "A table card with a code, so guests can try it on your list during dinner.",
  },
  {
    title: "Your list, read right",
    body: "We load your wine list and menu, so every pick is something you actually pour, at your price.",
  },
];

const STEPS = [
  { title: "Tell us about your place", body: "Fill in the form below. It takes a minute." },
  { title: "We set you up", body: "We read your wine list and menu and get your staff and guest codes ready." },
  { title: "Use it in service", body: "Try it for a few weeks during normal service. No training, no contract." },
  { title: "Tell us what you think", body: "What worked, what didn't, what you'd change. That's all we ask." },
];

export default function PartnersPage() {
  const cta = getLaunchCopy();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-vv-page font-sans text-vv-text">
      <Navbar ctaShort={cta.short} ctaHref={cta.storeUrl ?? "/#join"} />
      <main>
        <section className="relative mx-auto max-w-[1200px] px-4 pb-20 pt-[140px] sm:px-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[4%] top-10 h-[520px] w-[520px] max-w-full rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.2),rgba(168,85,247,0)_65%)]"
          />
          <div className="relative max-w-[760px]">
            <div className="text-sm font-semibold tracking-[0.12em] text-vv-accent">
              FOR RESTAURANTS, BARS AND WINE SHOPS
            </div>
            <h1 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] min-[900px]:text-[64px]">
              Try Vino Vibes at your tables, free.
            </h1>
            <p className="mt-6 max-w-[600px] text-lg leading-[1.55] text-vv-text2 min-[900px]:text-xl">
              We&apos;re looking for places willing to give it a shot in everyday service. It costs you
              nothing. All we ask for is honest feedback.
            </p>
            <a
              href="#interest"
              className="mt-8 inline-flex h-14 items-center rounded-[14px] bg-vv-primary px-[26px] text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              I&apos;m interested
            </a>
          </div>
        </section>

        <section className="border-y border-white/[0.06] bg-vv-band">
          <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6">
            <h2 className="text-[32px] font-extrabold tracking-[-0.02em] min-[900px]:text-[40px]">
              What you get
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {OFFER.map((o) => (
                <div key={o.title} className="rounded-[20px] bg-vv-surface p-7">
                  <h3 className="text-lg font-bold">{o.title}</h3>
                  <p className="mt-2 leading-relaxed text-vv-text2">{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6">
          <h2 className="text-[32px] font-extrabold tracking-[-0.02em] min-[900px]:text-[40px]">How it works</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <div className="text-sm font-bold text-vv-accent">{i + 1}</div>
                <h3 className="mt-1.5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-vv-text2">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="interest" className="mx-auto max-w-[900px] scroll-mt-20 px-4 pb-24 sm:px-6">
          <h2 className="mb-2 text-[32px] font-extrabold tracking-[-0.02em]">Let&apos;s talk</h2>
          <p className="mb-8 text-vv-text2">Tell us a little about your place and we&apos;ll reach out.</p>
          <PartnerForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
