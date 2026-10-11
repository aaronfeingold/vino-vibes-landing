"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FacetMark } from "./Facet";

const NAV = [
  { href: "#how", label: "How it works" },
  { href: "#four", label: "What it does" },
  { href: "#learn", label: "Learn" },
  { href: "#restaurants", label: "For restaurants" },
];

export default function Navbar({ ctaShort, ctaHref }: { ctaShort: string; ctaHref: string }) {
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
          ? "border-b border-white/[0.07] bg-vv-bg/[0.66] backdrop-blur-[14px]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6">
        <a
          href="#top"
          aria-label="Vino Vibes home"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 text-vv-text"
        >
          <FacetMark />
          <span className="font-display text-[19px] font-bold">Vino Vibes</span>
        </a>

        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm font-semibold text-vv-text2 transition-colors hover:text-vv-red-text"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className="hidden h-10 items-center rounded-[10px] bg-vv-red px-[18px] text-sm font-bold text-white transition-colors hover:bg-[#E0242F] md:inline-flex"
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
        <div className="flex flex-col gap-1 border-t border-white/[0.07] px-4 pb-5 pt-2 md:hidden">
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
            className="mt-2 flex h-12 items-center justify-center rounded-[10px] bg-vv-red font-bold text-white"
          >
            {ctaShort}
          </a>
        </div>
      )}
    </nav>
  );
}
