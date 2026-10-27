import { empathy } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";

const tints = ["bg-pink-100", "bg-sky-100", "bg-mint-100"];

export function Empathy() {
  return (
    <section aria-labelledby="empathy-title" className="px-4 py-16 md:py-24">
      <SectionHeading id="empathy-title" title={empathy.headline} />
      <ul className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
        {empathy.cards.map((card, i) => (
          <li
            key={card.icon}
            className="flex items-center gap-4 rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-softer)] ring-1 ring-lavender-100 md:flex-col md:items-start md:p-7"
          >
            <div className={`grid size-16 shrink-0 place-items-center rounded-2xl ${tints[i]}`}>
              <EmpathyIcon kind={card.icon} />
            </div>
            <p className="whitespace-pre-line text-[15.5px] font-medium leading-relaxed md:text-[17px]">{card.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function EmpathyIcon({ kind }: { kind: "bubble" | "phone" | "tangle" }) {
  const s = { stroke: "#8a7aa8", strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  if (kind === "bubble")
    return (
      <svg viewBox="0 0 48 48" className="size-10" aria-hidden>
        <path d="M8 12 h32 a4 4 0 0 1 4 4 v14 a4 4 0 0 1 -4 4 H22 l-8 7 v-7 H8 a4 4 0 0 1 -4 -4 V16 a4 4 0 0 1 4 -4 z" {...s} fill="#fff" />
        <circle cx="16" cy="23" r="2" fill="#8a7aa8" />
        <circle cx="24" cy="23" r="2" fill="#8a7aa8" />
        <circle cx="32" cy="23" r="2" fill="#8a7aa8" />
      </svg>
    );
  if (kind === "phone")
    return (
      <svg viewBox="0 0 48 48" className="size-10" aria-hidden>
        <rect x="12" y="5" width="22" height="38" rx="5" {...s} fill="#fff" />
        <path d="M20 37 h6" {...s} />
        <rect x="17" y="12" width="12" height="12" rx="3" fill="#e6dcfc" />
        <circle cx="35" cy="10" r="7" fill="#fff0a8" stroke="#8a7aa8" strokeWidth="2" />
        <text x="35" y="14" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8a7aa8" fontFamily="sans-serif">3</text>
      </svg>
    );
  return (
    <svg viewBox="0 0 48 48" className="size-10" aria-hidden>
      <path d="M6 30 C 12 10, 24 40, 28 22 S 18 8, 14 20 S 30 40, 36 26 S 40 14, 44 18" {...s} />
    </svg>
  );
}
