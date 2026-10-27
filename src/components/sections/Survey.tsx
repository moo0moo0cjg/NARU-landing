import { research } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";
import { SurveyLink } from "@/components/CtaLink";
import { Monster } from "@/components/Monster";
import { Icon } from "@/components/Icon";

const stepTints = ["bg-lavender-100", "bg-butter-100", "bg-mint-100"];

export function Survey() {
  const { interview } = research;
  return (
    <section id="survey" aria-labelledby="survey-title" className="scroll-mt-16 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-br from-lavender-100 via-lavender-50 to-butter-50 px-4 py-12 ring-1 ring-lavender-200 md:px-12 md:py-16">
        <SectionHeading id="survey-title" eyebrow={research.eyebrow} title={research.headline} sub={undefined} />
        <p className="mx-auto mt-3 max-w-xl whitespace-pre-line text-center text-[15px] leading-relaxed text-ink-soft md:text-base">
          {research.sub}
        </p>

        {/* 참여 흐름 */}
        <ol className="mt-10 grid gap-3 md:grid-cols-3 md:gap-4">
          {research.steps.map((step, i) => (
            <li key={step.title} className="relative rounded-[var(--radius-card)] bg-white/90 p-5 ring-1 ring-lavender-100">
              <div className="flex items-center gap-2">
                <span className={`grid size-8 place-items-center rounded-full font-display text-lg ${stepTints[i]}`}>{i + 1}</span>
                <h3 className="font-display text-[19px]">{step.title}</h3>
                <span className="ml-auto rounded-full bg-lavender-50 px-2 py-0.5 text-[12px] font-semibold text-ink-soft ring-1 ring-lavender-100">
                  {step.meta}
                </span>
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>

        {/* 인터뷰 안내 */}
        <div className="mt-6 rounded-[var(--radius-card)] bg-white p-5 ring-1 ring-butter-200 md:p-8">
          <div className="flex items-center gap-3">
            <Monster kind="calm" size={44} />
            <h3 className="font-display text-[22px]">{interview.title}</h3>
          </div>
          <dl className="mt-5 grid gap-x-6 gap-y-3 md:grid-cols-2">
            {interview.items.map((item) => (
              <div key={item.label} className="flex gap-3">
                <dt className="w-16 shrink-0 pt-0.5 text-[14.5px] font-bold">{item.label}</dt>
                <dd className="pt-0.5 text-[14.5px] leading-relaxed">{item.text}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 space-y-2 rounded-2xl bg-lavender-50 p-4 text-[13.5px] leading-relaxed text-ink-soft">
            {interview.notes.map((note) => (
              <li key={note} className="flex gap-2">
                <Icon name="check" className="mt-0.5 size-[18px] shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div data-cta className="mt-8 text-center">
          <SurveyLink
            location="survey"
            className="inline-flex items-center justify-center rounded-full bg-lavender-300 px-8 py-4 text-[17px] font-bold text-ink shadow-[var(--shadow-soft)] transition hover:bg-lavender-400 active:scale-[0.98]"
          >
            {research.cta}
          </SurveyLink>
          <p className="mt-2 text-[12.5px] text-ink-soft">{research.ctaNote}</p>
        </div>
      </div>
    </section>
  );
}
