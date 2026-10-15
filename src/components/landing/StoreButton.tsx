import { Smartphone } from "lucide-react";

export default function StoreButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex h-14 items-center gap-2.5 rounded-[14px] bg-vv-text px-[26px] text-base font-semibold text-vv-bg transition-opacity hover:opacity-90"
    >
      <Smartphone size={20} aria-hidden="true" />
      {label}
    </a>
  );
}
