import { Eyebrow } from "../Facet";

export default function Noted() {
  return (
    <div className="relative w-full max-w-[358px] rounded-[22px] border border-vv-red/45 bg-vv-surface px-[18px] py-4 text-vv-text">
      <div className="flex items-start gap-3">
        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" className="mt-0.5 shrink-0">
          <polygon
            points="14,1 27,10 22,27 6,27 1,10"
            fill="rgba(200,22,31,0.2)"
            stroke="#C8161F"
            strokeWidth="1.5"
          />
          <path
            d="M9 14l3.5 3.5L19 11"
            fill="none"
            stroke="#FF5A5F"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex-1">
          <Eyebrow>NOTED</Eyebrow>
          <div className="mt-1 text-[15px] font-medium leading-[1.45]">
            You like more weight than a classic Chianti. I&apos;ll lean bigger from now on.
          </div>
        </div>
      </div>
      <div className="mt-3 flex gap-4 pl-10">
        <button
          type="button"
          tabIndex={-1}
          className="h-11 text-sm font-bold underline underline-offset-[3px]"
        >
          Undo
        </button>
        <button type="button" tabIndex={-1} className="h-11 text-sm font-semibold text-vv-text2">
          See what I know about you
        </button>
      </div>
    </div>
  );
}
