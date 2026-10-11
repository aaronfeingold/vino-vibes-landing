import WinePick from "./blocks/WinePick";
import Places from "./blocks/Places";
import Lesson from "./blocks/Lesson";

const STEPS = [
  { ask: "Ask what to order", result: "a pick", Block: WinePick, offset: "" },
  { ask: "Ask where to go", result: "places", Block: Places, offset: "min-[1000px]:mt-14" },
  { ask: "Ask why", result: "a lesson", Block: Lesson, offset: "min-[1000px]:mt-28" },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 border-y border-white/[0.06] bg-vv-bg2">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <div className="text-[13px] font-extrabold tracking-[0.14em] text-vv-red-text">HOW IT WORKS</div>
          <h2 className="mb-4 mt-3 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] min-[900px]:text-5xl">
            You talk. It builds the screen.
          </h2>
          <p className="text-lg leading-relaxed text-vv-text2">
            No menus to learn. It&apos;s one conversation, and every answer shows up as the thing you
            need right then: a pick, a list of places, a lesson.
          </p>
        </div>
        <div className="grid items-start justify-items-center gap-10 min-[1000px]:grid-cols-3">
          {STEPS.map(({ ask, result, Block, offset }) => (
            <div key={ask} className={`flex w-full flex-col items-center gap-3.5 ${offset}`}>
              <div className="text-[15px] font-bold">
                {ask} <span className="text-vv-red-text">→ {result}</span>
              </div>
              <div className="flex w-full justify-center" aria-hidden="true">
                <Block />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
