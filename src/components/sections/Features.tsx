import { featureSection, monsters } from "@/content";
import { Monster, emotionColor } from "@/components/Monster";
import { SectionHeading } from "@/components/SectionHeading";

const [heatmap, memory, grow] = featureSection.items;

// 한 달 히트맵 목업용 고정 패턴 (빈칸 = 기록 없음)
const pattern = "3021302_30210_2031_21303_2_1023210302";
const keys = monsters.map((m) => m.key);

export function Features() {
  return (
    <section aria-labelledby="features-title" className="bg-gradient-to-b from-cream to-lavender-50 px-4 py-16 md:py-24">
      <SectionHeading id="features-title" eyebrow={featureSection.eyebrow} title={featureSection.headline} />
      <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3 md:gap-5">
        {/* 세 카드의 이미지 영역은 모두 정사각형으로 같은 높이 */}
        <Card title={heatmap.title} body={heatmap.body} tint="bg-butter-50">
          <div className="flex aspect-square flex-col rounded-2xl bg-white p-3 ring-1 ring-butter-200">
            <p className="mb-2 font-display text-sm">10월의 마음</p>
            <div
              className="grid flex-1 grid-cols-7 grid-rows-6 gap-1"
              role="img"
              aria-label="한 달 동안의 감정을 색으로 표시한 달력 예시"
            >
              {pattern.split("").map((c, i) => (
                <span
                  key={i}
                  className="rounded-md"
                  style={{ background: c === "_" ? "var(--color-lavender-50)" : emotionColor[keys[Number(c)]] }}
                />
              ))}
            </div>
          </div>
        </Card>

        <Card title={memory.title} body={memory.body} tint="bg-pink-100/60">
          <ul className="flex aspect-square flex-col justify-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-pink-100">
            {memory.bubbles.map((b) => (
              <li key={b.text} className="flex items-end gap-2">
                <Monster kind={b.monster} size={44} className="shrink-0" />
                <p className="rounded-2xl rounded-bl-sm px-3 py-2 text-[13px] leading-snug" style={{ background: emotionColor[b.monster] }}>
                  {b.text}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card title={grow.title} body={grow.body} tint="bg-mint-100/60">
          <div className="grid aspect-square place-items-center rounded-2xl bg-white p-3 ring-1 ring-mint-100">
            <div className="relative grid size-[70%] place-items-center">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full opacity-80"
                style={{
                  background: `conic-gradient(${keys.map((k) => emotionColor[k]).join(",")}, ${emotionColor[keys[0]]})`,
                  mask: "radial-gradient(circle, transparent 52%, #000 54%)",
                  WebkitMask: "radial-gradient(circle, transparent 52%, #000 54%)",
                }}
              />
              <Monster kind="calm" size={140} className="h-auto w-[68%] animate-breathe" label="여러 감정의 색이 새겨진 몬스터" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Card({
  title,
  body,
  tint,
  children,
}: {
  title: string;
  body: string;
  tint: string;
  children: React.ReactNode;
}) {
  return (
    <article className={`flex flex-col gap-4 rounded-[var(--radius-card)] p-5 ring-1 ring-lavender-100 md:p-6 ${tint}`}>
      {children}
      <div>
        <h3 className="font-display text-[22px]">{title}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{body}</p>
      </div>
    </article>
  );
}
