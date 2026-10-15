import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-4 py-8 sm:px-6">
        <div className="flex items-center gap-4">
          <Image
            src="/sip-inverted-no-background.png"
            alt="Sip the Owl, the Vino Vibes mark"
            width={90}
            height={90}
            className="h-[90px] w-auto"
          />
          <div>
            <div className="text-[15px] font-semibold">Vino Vibes</div>
            <div className="text-[13px] text-vv-text3">Made in New Orleans</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
