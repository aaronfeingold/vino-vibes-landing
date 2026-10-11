const STATS = [
  { value: "697", label: "wines already read from New Orleans restaurant lists" },
];

// Fill in after the ten-dinner test. The card stays hidden until there is a real quote.
const QUOTE: { text: string; who: string } | null = null;

export default function Proof() {
  const cols = QUOTE ? "mx-auto max-w-[800px] sm:grid-cols-2" : "mx-auto max-w-[400px] text-center";

  return (
    <section className="border-y border-white/[0.06] bg-vv-band">
      <div className="mx-auto max-w-[1200px] px-4 py-[88px] sm:px-6">
        <h2 className="mb-10 text-center text-[32px] font-bold tracking-[-0.01em]">Built at New Orleans tables</h2>
        <div className={`grid gap-6 ${cols}`}>
          {STATS.map((s) => (
            <div key={s.label} className="rounded-[20px] bg-vv-surface p-7">
              <div className="text-5xl font-extrabold tracking-[-0.02em]">{s.value}</div>
              <div className="mt-1.5 text-base leading-normal text-vv-text2">{s.label}</div>
            </div>
          ))}
          {QUOTE && (
            <figure className="rounded-[20px] bg-vv-surface p-7">
              <blockquote className="text-lg leading-normal">&ldquo;{QUOTE.text}&rdquo;</blockquote>
              <figcaption className="mt-3 text-sm text-vv-text3">{QUOTE.who}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
