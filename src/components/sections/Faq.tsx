"use client";

import { faq } from "@/content";
import { SectionHeading } from "@/components/SectionHeading";
import { track } from "@/lib/analytics";

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-lavender-50 px-4 py-16 md:py-24">
      <SectionHeading id="faq-title" title={faq.headline} />
      <div className="mx-auto mt-8 max-w-2xl space-y-3">
        {faq.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-[20px] bg-white ring-1 ring-lavender-100 open:ring-lavender-300"
            onToggle={(e) => {
              if ((e.currentTarget as HTMLDetailsElement).open) track("faq_open", { question: item.q });
            }}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-[16px] font-bold">
              {item.q}
              <span
                aria-hidden
                className="grid size-7 shrink-0 place-items-center rounded-full bg-butter-100 text-lg leading-none transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
