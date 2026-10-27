"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content";
import { SurveyLink } from "@/components/CtaLink";
import { track } from "@/lib/analytics";

/** 75% 스크롤 이벤트 · 모바일 하단 고정 CTA */
export function PageEffects() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    let sent75 = false;
    // 다른 설문 버튼이나 푸터가 화면에 보이면 고정 CTA 숨김
    const visible = new Set<Element>();
    const update = () => setShowSticky(window.scrollY > window.innerHeight * 0.6 && visible.size === 0);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      update();
    });
    document.querySelectorAll("[data-cta], footer").forEach((el) => io.observe(el));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (!sent75 && ratio >= 0.75) {
        sent75 = true;
        track("scroll_75");
      }
      update();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(12px,env(safe-area-inset-bottom))] transition-all duration-300 md:hidden ${
        showSticky ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <SurveyLink
        location="sticky"
        className="block rounded-full bg-lavender-300 py-3.5 text-center text-[15px] font-bold text-ink shadow-[var(--shadow-soft)]"
      >
        {nav.cta}
      </SurveyLink>
    </div>
  );
}
