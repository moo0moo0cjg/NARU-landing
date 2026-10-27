"use client";

import { site } from "@/content";
import { track } from "@/lib/analytics";

/**
 * 설문(구글 폼)으로 가는 CTA — 위치별 cta_click 을 기록해요.
 * site.surveyUrl 이 비어 있으면 페이지 안의 설문 안내 섹션(#survey)으로 이동해요.
 */
export function SurveyLink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  const external = Boolean(site.surveyUrl);
  return (
    <a
      href={external ? site.surveyUrl : "#survey"}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
      onClick={() => track("cta_click", { location })}
    >
      {children}
    </a>
  );
}
