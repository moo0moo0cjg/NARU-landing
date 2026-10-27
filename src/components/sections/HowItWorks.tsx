import { how, monsters } from "@/content";
import { Monster } from "@/components/Monster";
import { SectionHeading } from "@/components/SectionHeading";

export function HowItWorks() {
  const [pick, talk, settle] = how.steps;
  return (
    <section aria-labelledby="how-title" className="bg-lavender-50 px-4 py-16 md:py-24">
      <SectionHeading id="how-title" eyebrow={how.eyebrow} title={how.headline} />
      <ol className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-3 md:gap-6">
        <Step n={1} title={pick.title} body={pick.body} footnote={pick.footnote}>
          <Phone>
            <p className="text-center font-display text-[13px] text-ink">지금 기분이 어떠세요?</p>
            <div className="mt-3 grid grid-cols-4 gap-x-1 gap-y-2">
              {monsters.map((m) => (
                <div
                  key={m.key}
                  className={`flex flex-col items-center rounded-xl py-1 ${m.key === "lethargy" ? "bg-butter-100 ring-2 ring-butter-300" : ""}`}
                >
                  <Monster kind={m.key} size={36} />
                  <span className="text-[9.5px] font-semibold text-ink">{m.emotion}</span>
                </div>
              ))}
            </div>
          </Phone>
        </Step>

        <Step n={2} title={talk.title} body={talk.body}>
          <Phone>
            <div className="flex items-center gap-1.5">
              <Monster kind="anger" size={26} />
              <span className="text-[11px] font-bold">{monsters.find((m) => m.key === "anger")?.name}</span>
            </div>
            <div className="mt-2 space-y-1.5 text-[11px] leading-snug">
              {talk.chat?.map((c, i) => (
                <p
                  key={i}
                  className={
                    c.from === "me"
                      ? "ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-lavender-200 px-2.5 py-1.5"
                      : "w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-peach-100 px-2.5 py-1.5"
                  }
                >
                  {c.text}
                </p>
              ))}
            </div>
            <div className="mt-3 rounded-full bg-butter-200 py-1.5 text-center text-[11px] font-bold text-ink">
              {talk.enough}
            </div>
          </Phone>
        </Step>

        <Step n={3} title={settle.title} body={settle.body}>
          <Phone>
            <div className="relative grid h-[150px] place-items-center">
              <div className="state-loop-a absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative">
                  <Monster kind="anger" size={92} className="animate-wobble" />
                  <Scribble />
                </div>
                <span className="mt-1 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-ink-soft ring-1 ring-lavender-200">
                  {settle.before}
                </span>
              </div>
              <div className="state-loop-b absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 -m-3 rounded-full bg-butter-100 blur-md" aria-hidden />
                  <Monster kind="anger" mood="settled" size={92} className="relative animate-breathe" />
                </div>
                <span className="mt-1 rounded-full bg-butter-200 px-2 py-0.5 text-[10px] font-bold text-ink">
                  {settle.after}
                </span>
              </div>
            </div>
          </Phone>
        </Step>
      </ol>
    </section>
  );
}

function Step({
  n,
  title,
  body,
  footnote,
  children,
}: {
  n: number;
  title: string;
  body: string;
  footnote?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex flex-col items-center text-center">
      {children}
      <span className="mt-6 grid size-8 place-items-center rounded-full bg-lavender-300 font-display text-lg text-ink">
        {n}
      </span>
      <h3 className="mt-2 font-display text-[21px] leading-snug">{title}</h3>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-ink-soft">{body}</p>
      {footnote && <p className="mt-2 max-w-xs text-[12.5px] leading-relaxed text-ink-soft/90">{footnote}</p>}
    </li>
  );
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[220px] rounded-[30px] bg-white p-2.5 shadow-[var(--shadow-soft)] ring-1 ring-lavender-200">
      <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-lavender-100" aria-hidden />
      <div className="min-h-[170px] rounded-[22px] bg-cream p-3" aria-hidden>
        {children}
      </div>
    </div>
  );
}

function Scribble() {
  return (
    <svg viewBox="0 0 40 40" className="absolute -right-4 -top-2 size-8" aria-hidden>
      <path d="M4 20 C 10 4, 18 36, 24 16 S 34 30, 36 10" stroke="#8a7aa8" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
