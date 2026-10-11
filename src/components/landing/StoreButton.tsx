export default function StoreButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex h-14 items-center gap-2.5 rounded-xl bg-vv-red px-[26px] text-base font-bold text-white transition-colors hover:bg-[#E0242F]"
    >
      {label}
    </a>
  );
}
