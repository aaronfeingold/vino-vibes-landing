"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/#you", label: "Made for you" },
  { href: "/partners", label: "For restaurants" },
];

export default function Navbar({ ctaShort, ctaHref }: { ctaShort: string; ctaHref: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Clear at the top; blurred and tinted once the reader is halfway through the hero.
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const threshold = hero ? hero.offsetHeight / 2 : 300;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-white/[0.08] bg-vv-page/[0.62] backdrop-blur-[14px]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6">
        <a
          href="/"
          aria-label="Vino Vibes home"
          onClick={(e) => {
            setOpen(false);
            if (pathname !== "/") return;
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 text-vv-text"
        >
          <Image src="/VinoVibesLogo.png" alt="" width={36} height={36} className="rounded-lg" priority />
          <span className="text-[17px] font-bold tracking-[-0.01em]">Vino Vibes</span>
        </a>

        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm font-medium text-vv-text2 transition-colors hover:text-vv-accent"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className="hidden h-10 items-center rounded-xl bg-vv-text px-[18px] text-sm font-semibold text-vv-bg transition-opacity hover:opacity-90 md:inline-flex"
          >
            {ctaShort}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center text-vv-text md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-white/[0.08] px-4 pb-5 pt-2 md:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-vv-text"
            >
              {n.label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-2 flex h-12 items-center justify-center rounded-xl bg-vv-text font-semibold text-vv-bg"
          >
            {ctaShort}
          </a>
        </div>
      )}
    </nav>
  );
}
