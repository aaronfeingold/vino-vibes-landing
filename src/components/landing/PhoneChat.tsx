"use client";

import { useState, type ComponentType } from "react";
import { Camera, Mic, UserRound, Wine } from "lucide-react";
import { FacetAvatar, FacetMark } from "./Facet";
import WinePick from "./blocks/WinePick";
import Places from "./blocks/Places";
import Lesson from "./blocks/Lesson";
import Noted from "./blocks/Noted";
import YourBottles from "./blocks/YourBottles";
import { trackEvent } from "@/src/lib/analytics";

type SceneKey = "order" | "find" | "learn" | "remember" | "bottles";

const SCENES: Record<SceneKey, { label: string; ask: string; reply: string; Block: ComponentType }> = {
  order: {
    label: "Order for me",
    ask: "Steakhouse tonight, ribeye. I want something serious, around $150.",
    reply: "Then this is the one. It is on their list at $148.",
    Block: WinePick,
  },
  find: {
    label: "Find a spot",
    ask: "Where can I get great Burgundy by the glass near the Warehouse District?",
    reply: "Three spots within a short walk. Start with the first.",
    Block: Places,
  },
  learn: {
    label: "Teach me",
    ask: "Teach me Barolo. Fast.",
    reply: "Four things, and you will know more than most of the table.",
    Block: Lesson,
  },
  remember: {
    label: "Remember this",
    ask: "That Chianti last week was too thin for me.",
    reply: "Good to know. That changes what I pick for you.",
    Block: Noted,
  },
  bottles: {
    label: "My bottles",
    ask: "What have I liked lately?",
    reply: "Here is your shelf. Steak nights is filling up.",
    Block: YourBottles,
  },
};

const ORDER: SceneKey[] = ["order", "find", "learn", "remember", "bottles"];

// A 390 x 844 app screen, drawn at full size and scaled into the phone frame.
function ChatScreen() {
  const [scene, setScene] = useState<SceneKey>("order");
  const cur = SCENES[scene];

  return (
    <div className="relative h-[844px] w-[390px] overflow-hidden bg-vv-bg font-sans text-vv-text">
      <div className="flex h-16 items-center justify-between border-b border-white/[0.06] pl-[18px] pr-3 pt-2.5">
        <div className="flex items-center gap-2.5">
          <FacetMark size={26} />
          <div className="font-display text-lg font-bold">Vino Vibes</div>
        </div>
        <div className="flex text-vv-text2" aria-hidden="true">
          <span className="flex h-11 w-11 items-center justify-center">
            <Wine size={21} />
          </span>
          <span className="flex h-11 w-11 items-center justify-center">
            <UserRound size={21} />
          </span>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-[150px] top-[76px] flex flex-col gap-3 overflow-hidden px-4"
        aria-live="polite"
      >
        <div className="max-w-[290px] self-end rounded-[18px] rounded-br-[4px] bg-vv-bubble px-3.5 py-3 text-[15px] leading-[1.45]">
          {cur.ask}
        </div>
        <div className="flex items-start gap-2.5">
          <FacetAvatar className="mt-px shrink-0" />
          <div className="text-[15px] leading-normal">{cur.reply}</div>
        </div>
        <div key={scene} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <cur.Block />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-vv-bg/0 to-vv-bg to-[22%] pb-[26px] pt-3">
        <div className="flex gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none]">
          {ORDER.map((k) => {
            const on = k === scene;
            return (
              <button
                key={k}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setScene(k);
                  trackEvent("chat_prompt_tapped", "hero_phone", k);
                }}
                className={`h-9 shrink-0 whitespace-nowrap rounded-full border px-3.5 text-[13px] transition-colors ${
                  on
                    ? "border-vv-red bg-vv-red/[0.22] font-bold text-vv-text"
                    : "border-white/[0.14] bg-vv-surface font-semibold text-vv-text2 hover:text-vv-text"
                }`}
              >
                {SCENES[k].label}
              </button>
            );
          })}
        </div>
        <div
          aria-hidden="true"
          className="mx-4 flex h-[54px] items-center gap-1.5 rounded-[27px] border border-white/10 bg-vv-surface px-1.5"
        >
          <span className="flex h-[42px] w-[42px] items-center justify-center text-vv-text2">
            <Camera size={20} />
          </span>
          <span className="flex-1 text-[15px] text-vv-text3">Ask anything about wine</span>
          <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-vv-red text-white">
            <Mic size={19} strokeWidth={2.2} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PhoneChat() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-[712px] w-[340px] rounded-[54px] border border-white/[0.14] bg-[#0B0B0A] p-2.5 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(200,22,31,0.15)]">
        <div className="h-[692px] w-[320px] overflow-hidden rounded-[44px]">
          <div className="origin-top-left scale-[0.8205]">
            <ChatScreen />
          </div>
        </div>
      </div>
      <p className="text-[13px] text-vv-text3">Tap the prompts. Each answer builds its own screen.</p>
    </div>
  );
}
