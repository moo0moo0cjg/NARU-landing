"use client";

import { useState } from "react";
import { monsterSection, monsters } from "@/content";
import { Monster, emotionColor } from "@/components/Monster";
import { SectionHeading } from "@/components/SectionHeading";
import { track } from "@/lib/analytics";

export function Monsters() {
  return (
    <section aria-labelledby="monsters-title" className="px-4 py-16 md:py-24">
      <SectionHeading
        id="monsters-title"
        eyebrow={monsterSection.eyebrow}
        title={monsterSection.headline}
        sub={monsterSection.sub}
      />
      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
        {monsters.map((m) => (
          <li key={m.key}>
            <MonsterCard monster={m} />
          </li>
        ))}
        <li className="col-span-2 grid place-items-center rounded-[var(--radius-card)] border-2 border-dashed py-6 sm:col-span-1 border-lavender-200 p-4 text-center text-sm font-semibold text-ink-soft">
          더 많은 친구들이
          <br />
          준비 중이에요
        </li>
      </ul>
    </section>
  );
}

function MonsterCard({ monster: m }: { monster: (typeof monsters)[number] }) {
  const [flipped, setFlipped] = useState(false);
  const [jiggle, setJiggle] = useState(0);

  return (
    <button
      type="button"
      onClick={() => {
        if (!flipped) track("monster_card_open", { monster: m.key });
        setFlipped((f) => !f);
        setJiggle((j) => j + 1);
      }}
      aria-pressed={flipped}
      aria-label={`${m.emotion} 몬스터 ${m.name}${flipped ? ` — "${m.line}"` : ` · ${monsterSection.tapHint}`}`}
      className="block aspect-[3/4] w-full [perspective:900px]"
    >
      <div className="flip-inner relative size-full" data-flipped={flipped}>
        {/* 앞면 */}
        <div
          className="flip-face absolute inset-0 flex flex-col items-center justify-between rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-softer)] ring-1 ring-lavender-100 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
        >
          <span
            className="self-start rounded-full px-2.5 py-0.5 text-[12px] font-bold text-ink"
            style={{ background: emotionColor[m.key] }}
          >
            {m.emotion}
          </span>
          <div key={jiggle} className={jiggle ? "animate-jiggle" : ""}>
            <Monster kind={m.key} size={104} image={m.image} />
          </div>
          <div className="text-center">
            <p className="font-display text-xl">{m.name}</p>
            <p className="mt-0.5 text-[11.5px] text-ink-soft">{monsterSection.tapHint}</p>
          </div>
        </div>

        {/* 뒷면 */}
        <div
          className="flip-face flip-back absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] p-4 text-center"
          style={{ background: emotionColor[m.key] }}
        >
          <Monster kind={m.key} mood={m.key === "joy" || m.key === "calm" ? "default" : "settled"} size={60} image={m.image} />
          <p className="rounded-2xl bg-white/85 px-3 py-2.5 font-display text-[16px] leading-snug text-ink">
            “{m.line}”
          </p>
          <p className="text-[12px] font-semibold leading-snug text-ink">{m.style}</p>
        </div>
      </div>
    </button>
  );
}
