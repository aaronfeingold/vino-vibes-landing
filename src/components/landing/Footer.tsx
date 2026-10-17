import Image from "next/image";

const LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/#you", label: "Made for you" },
  { href: "/#library", label: "Your library" },
  { href: "/partners", label: "For restaurants" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/sip-inverted-no-background.png"
            alt="Sip the Owl, the Vino Vibes mark"
            width={90}
            height={90}
            className="h-[72px] w-auto md:h-[90px]"
          />
          <div>
            <div className="text-[15px] font-semibold">Vino Vibes</div>
            <div className="text-[13px] text-vv-text3">Made in New Orleans</div>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-1 md:flex md:gap-7">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-11 items-center text-sm text-vv-text2 transition-colors hover:text-vv-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-4 py-5 text-[13px] text-vv-text3 sm:px-6">
          &copy; {new Date().getFullYear()} Vino Vibes
        </div>
      </div>
    </footer>
  );
}
