import { promise } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";

const tints = ["bg-lavender-100", "bg-butter-100", "bg-mint-100", "bg-pink-100"];

export function Trust() {
  return (
    <section aria-labelledby="promise-title" className="px-4 py-16 md:py-24">
      <SectionHeading id="promise-title" eyebrow={promise.eyebrow} title={promise.headline} />
      <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 md:gap-4">
        {promise.items.map((item, i) => (
          <li key={item.icon} className="flex gap-4 rounded-[var(--radius-card)] bg-white p-5 ring-1 ring-lavender-100">
            <div className={`grid size-12 shrink-0 place-items-center rounded-2xl ${tints[i]}`}>
              <PromiseIcon kind={item.icon} />
            </div>
            <div>
              <h3 className="font-display text-[19px]">{item.title}</h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-xl text-center text-[12.5px] leading-relaxed text-ink-soft">{promise.disclaimer}</p>
    </section>
  );
}

function PromiseIcon({ kind }: { kind: "lock" | "bot" | "hands" | "timer" }) {
  const s = { stroke: "#8a7aa8", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  return (
    <svg viewBox="0 0 32 32" className="size-7" aria-hidden>
      {kind === "lock" && (
        <>
          <rect x="7" y="14" width="18" height="13" rx="4" {...s} fill="#fff" />
          <path d="M11 14 v-3 a5 5 0 0 1 10 0 v3" {...s} />
          <circle cx="16" cy="20.5" r="1.8" fill="#8a7aa8" />
        </>
      )}
      {kind === "bot" && (
        <>
          <rect x="6" y="10" width="20" height="15" rx="6" {...s} fill="#fff" />
          <path d="M16 10 V6" {...s} />
          <circle cx="16" cy="5" r="1.6" fill="#8a7aa8" />
          <circle cx="12" cy="17" r="1.6" fill="#8a7aa8" />
          <circle cx="20" cy="17" r="1.6" fill="#8a7aa8" />
          <path d="M13.5 21 Q16 22.5 18.5 21" {...s} />
        </>
      )}
      {kind === "hands" && (
        <path d="M16 27 C 6 20, 4 14, 7 10 C 10 6, 14 8, 16 11 C 18 8, 22 6, 25 10 C 28 14, 26 20, 16 27 Z" {...s} fill="#fff" />
      )}
      {kind === "timer" && (
        <>
          <circle cx="16" cy="17" r="10" {...s} fill="#fff" />
          <path d="M16 11 V17 L20 19" {...s} />
          <path d="M13 4 H19" {...s} />
        </>
      )}
    </svg>
  );
}
