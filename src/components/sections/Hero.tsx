import { HERO_VARIANT, hero, nav, site } from "@/content";
import { Naru } from "@/components/Naru";
import { SurveyLink } from "@/components/CtaLink";
import { Icon } from "@/components/Icon";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-lavender-100/70 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-1.5 font-display text-2xl text-ink">
          <span className="inline-block size-3 rounded-full bg-butter-300" aria-hidden />
          {site.name}
        </a>
        <SurveyLink
          location="header"
          className="rounded-full bg-butter-200 px-4 py-2 text-sm font-bold text-ink transition hover:bg-butter-300"
        >
          {nav.cta}
        </SurveyLink>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-clip bg-gradient-to-b from-lavender-100 via-lavender-50 to-cream"
    >
      <Decor />
      <div className="relative mx-auto grid max-w-5xl items-center gap-2 px-4 pb-12 pt-6 md:grid-cols-[1.1fr_1fr] md:gap-10 md:pb-24 md:pt-16">
        <div className="text-center md:order-1 md:text-left">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-butter-100 px-3 py-1 text-[13px] font-semibold text-ink ring-1 ring-butter-300">
            <span className="size-1.5 animate-pulse rounded-full bg-butter-300" aria-hidden />
            {hero.badge}
          </p>
          <h1 className="mt-3 whitespace-pre-line font-display text-[34px] leading-[1.2] tracking-tight text-ink md:text-[52px]">
            {hero.headline[HERO_VARIANT]}
          </h1>
          <p className="mx-auto mt-3 max-w-md whitespace-pre-line text-[15px] leading-relaxed text-ink-soft md:mx-0 md:text-[17px]">
            {hero.sub}
          </p>

          {/* 모바일: 캐릭터를 카피와 버튼 사이에 */}
          <NaruScene className="mx-auto my-2 w-[200px] md:hidden" />

          <div data-cta className="mx-auto max-w-md md:mx-0 md:mt-7">
            <SurveyLink
              location="hero"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-lavender-300 px-6 py-4 text-[17px] font-bold text-ink shadow-[var(--shadow-soft)] transition hover:bg-lavender-400 active:scale-[0.98] md:w-auto md:inline-flex"
            >
              {hero.cta}
              <span className="rounded-full bg-butter-100 px-2 py-0.5 text-[12px] font-semibold">{hero.ctaMeta}</span>
            </SurveyLink>
            <p className="mt-3 flex items-start justify-center gap-1.5 px-2 text-[13px] leading-snug text-ink-soft md:justify-start">
              <Icon name="chat" className="size-5 shrink-0" />
              <span>{hero.note}</span>
            </p>
          </div>
        </div>

        <NaruScene className="hidden w-full max-w-[420px] justify-self-center md:order-2 md:block" />
      </div>
    </section>
  );
}

function NaruScene({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="animate-float">
        <div className="absolute -top-1 left-1/2 z-10 -translate-x-[10%] md:top-2">
          <div className="relative whitespace-nowrap rounded-2xl rounded-bl-sm bg-white px-3 py-1.5 font-display text-[15px] text-ink shadow-[var(--shadow-softer)] ring-1 ring-lavender-200 md:px-4 md:py-2 md:text-xl">
            {hero.bubble}
          </div>
        </div>
        <Naru className="mt-6 w-full md:mt-10" label={hero.naruAlt} />
      </div>
    </div>
  );
}

function Decor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-16 top-10 size-48 rounded-full bg-butter-100/70 blur-2xl" />
      <div className="absolute -right-10 top-40 size-56 rounded-full bg-pink-100/70 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 size-40 rounded-full bg-sky-100/80 blur-2xl" />
    </div>
  );
}
