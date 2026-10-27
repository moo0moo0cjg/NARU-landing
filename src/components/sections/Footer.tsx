import { footer, site } from "@/content";
import { Naru } from "@/components/Naru";
import { SurveyLink } from "@/components/CtaLink";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-lavender-50 to-lavender-100">
      {/* 최종 CTA */}
      <div className="mx-auto max-w-xl px-4 pb-14 pt-16 text-center md:pt-24">
        <Naru className="mx-auto w-36 animate-float" label="손을 흔드는 나루" />
        <h2 className="mt-2 whitespace-pre-line font-display text-[28px] leading-tight md:text-[38px]">
          {footer.ctaHeadline}
        </h2>
        <p className="mt-3 text-[15px] text-ink-soft">{footer.ctaSub}</p>
        <div data-cta className="mt-6">
          <SurveyLink
            location="footer"
            className="inline-flex items-center justify-center rounded-full bg-lavender-300 px-8 py-4 text-[17px] font-bold text-ink shadow-[var(--shadow-soft)] transition hover:bg-lavender-400 active:scale-[0.98]"
          >
            {footer.cta}
          </SurveyLink>
        </div>
      </div>

      <div className="border-t border-lavender-200/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-[13px] text-ink-soft md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl text-ink">{site.name}</p>
            <p className="mt-1">{footer.business}</p>
            <p className="mt-1">{footer.copyright}</p>
          </div>
          <nav aria-label="푸터 링크" className="flex flex-wrap gap-x-5 gap-y-2 font-semibold">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {footer.links.instagram}
            </a>
            <a href={`mailto:${site.contactEmail}`} className="hover:text-ink">
              {footer.links.contact}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
