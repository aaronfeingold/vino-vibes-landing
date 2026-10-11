import { FacetBullet } from "./Facet";

const POINTS = [
  "One line of story with every pick: the place, the grape, the people",
  "Ask why, and it goes as deep as you want",
  "Straight answers on price: worth it, or what to drink instead",
];

const ROWS = [
  { label: "Grape", a: "Nebbiolo", b: "Nebbiolo" },
  { label: "Vineyards", a: "Across the region", b: "Eleven named villages" },
  { label: "Ageing", a: "Months", b: "38 months or more" },
];

// The worth_it block: two wines side by side plus a verdict.
function WorthIt() {
  return (
    <div className="flex flex-col rounded-3xl border border-white/[0.08] bg-vv-surface p-6">
      <div className="ml-auto max-w-[340px] rounded-[18px] rounded-br-[4px] bg-vv-bubble px-3.5 py-3 text-[15px] leading-[1.45]">
        Is the $148 Barolo worth it over the $70 Nebbiolo?
      </div>
      <div className="mt-[18px] text-[11px] font-extrabold tracking-[0.14em] text-vv-red-text">WORTH IT?</div>
      <table className="mt-3 w-full table-fixed overflow-hidden rounded-[14px] text-left text-sm">
        <thead>
          <tr>
            <td className="w-[28%] bg-vv-surface2 px-3 py-2.5" />
            <th scope="col" className="bg-vv-surface2 px-3 py-2.5 font-bold">
              Langhe Nebbiolo
              <div className="font-semibold text-vv-text2">$70</div>
            </th>
            <th scope="col" className="bg-vv-red/[0.22] px-3 py-2.5 font-bold">
              Barolo
              <div className="font-semibold text-vv-text">$148</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.label} className="border-t border-white/[0.06]">
              <th scope="row" className="px-3 py-2.5 font-normal text-vv-text2">
                {r.label}
              </th>
              <td className="px-3 py-2.5">{r.a}</td>
              <td className="bg-vv-red/[0.08] px-3 py-2.5">{r.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-[15px] leading-[1.55]">
        Same grape, very different time and place. With a ribeye and an occasion, the Barolo earns
        it. On a Tuesday, the Nebbiolo gives you most of the pleasure for half the price.
      </p>
    </div>
  );
}

export default function Learn() {
  return (
    <section id="learn" className="scroll-mt-16 border-y border-white/[0.06] bg-vv-bg2">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-4 py-20 sm:px-6 md:py-[120px] min-[900px]:grid-cols-2">
        <div className="flex flex-col gap-[22px]">
          <div className="text-[13px] font-extrabold tracking-[0.14em] text-vv-red-text">LEARN AS YOU DRINK</div>
          <h2 className="font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] min-[900px]:text-5xl">
            Trade up without getting taken.
          </h2>
          <p className="text-lg leading-relaxed text-vv-text2">
            Spending more is easy. Spending well is the skill. Every pick comes with the story behind
            it, and when you ask why a bottle costs what it does, you get a straight answer.
          </p>
          <ul className="flex flex-col gap-3.5">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <FacetBullet className="mt-1 h-[18px] w-[18px]" />
                <span className="text-[17px] leading-normal">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <WorthIt />
      </div>
    </section>
  );
}
