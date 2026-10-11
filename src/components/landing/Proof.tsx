const STATS = [
  { value: "697", label: "wines already read from New Orleans restaurant lists" },
  { value: "4", label: "pilot restaurants in the library so far" },
];

// Fill in after the ten-dinner test. The card stays hidden until there is a real quote.
const QUOTE: { text: string; who: string } | null = null;

export default function Proof() {
  const cols = QUOTE ? "min-[1000px]:grid-cols-3" : "sm:grid-cols-2 max-w-[800px] mx-auto";

  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-24">
        <h2 className="mb-10 text-center font-display text-[30px] font-bold md:text-4xl">
          Built at New Orleans tables
        </h2>
        <div className={`grid gap-5 ${cols}`}>
          {STATS.map((s) => (
            <div key={s.label} className="rounded-[20px] border border-white/[0.08] bg-vv-surface p-7">
              <div className="font-display text-[52px] font-extrabold text-vv-red-text">{s.value}</div>
              <div className="mt-1 text-base leading-normal text-vv-text2">{s.label}</div>
            </div>
          ))}
          {QUOTE && (
            <figure className="rounded-[20px] border border-white/[0.08] bg-vv-surface p-7">
              <blockquote className="text-lg leading-normal">&ldquo;{QUOTE.text}&rdquo;</blockquote>
              <figcaption className="mt-3 text-sm text-vv-text3">{QUOTE.who}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
