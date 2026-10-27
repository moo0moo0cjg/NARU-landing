"use client";

import { track as vercelTrack } from "@vercel/analytics";

export type AnalyticsEvent =
  | "cta_click"
  | "monster_card_open"
  | "faq_open"
  | "scroll_75";

type Props = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** GA4(설정된 경우)와 Vercel Analytics에 동시에 이벤트를 보냅니다. */
export function track(event: AnalyticsEvent, props: Props = {}) {
  try {
    window.gtag?.("event", event, props);
    vercelTrack(event, props);
  } catch {
    // 분석 실패가 사용자 경험을 막지 않도록 무시
  }
  if (process.env.NODE_ENV !== "production") {
    console.debug("[track]", event, props);
  }
}
