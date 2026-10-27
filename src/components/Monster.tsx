import Image from "next/image";
import type { EmotionKey } from "@/content";

export const emotionColor: Record<EmotionKey, string> = {
  lethargy: "var(--color-emo-lethargy)",
  gloom: "var(--color-emo-gloom)",
  anxiety: "var(--color-emo-anxiety)",
  anger: "var(--color-emo-anger)",
  joy: "var(--color-emo-joy)",
  calm: "var(--color-emo-calm)",
  confusion: "var(--color-emo-confusion)",
};

const INK = "#8a7aa8";
const LINE = "rgba(176,154,228,0.45)";

type Props = {
  kind: EmotionKey;
  /** "settled" 이면 대화 후의 편안한 얼굴로 그려요 */
  mood?: "default" | "settled";
  size?: number;
  className?: string;
  label?: string;
  /** /public/monsters/*.png 경로가 있으면 이미지로 교체 */
  image?: string;
};

/**
 * 감정 몬스터 placeholder 일러스트.
 * 실제 캐릭터 에셋이 준비되면 content.ts의 monsters[].image 에 경로만 넣으면 돼요.
 */
export function Monster({ kind, mood = "default", size = 120, className, label, image }: Props) {
  if (image) {
    return (
      <Image src={image} alt={label ?? ""} width={size} height={size} className={className} />
    );
  }
  const fill = emotionColor[kind];
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <ellipse cx="60" cy="112" rx="30" ry="4" fill="rgba(176,154,228,0.16)" />
      <Topper kind={kind} fill={fill} />
      <path
        d="M60 28 C 92 28, 104 54, 104 78 C 104 99, 86 108, 60 108 C 34 108, 16 99, 16 78 C 16 54, 28 28, 60 28 Z"
        fill={fill}
        stroke={LINE}
        strokeWidth="2"
      />
      <ellipse cx="42" cy="50" rx="12" ry="7" fill="#fff" opacity="0.45" transform="rotate(-25 42 50)" />
      <ellipse cx="36" cy="82" rx="7" ry="4.5" fill="#ffc9da" opacity="0.7" />
      <ellipse cx="84" cy="82" rx="7" ry="4.5" fill="#ffc9da" opacity="0.7" />
      {mood === "settled" ? <SettledFace /> : <Face kind={kind} />}
    </svg>
  );
}

function Topper({ kind, fill }: { kind: EmotionKey; fill: string }) {
  switch (kind) {
    case "lethargy":
      return (
        <g stroke={LINE} strokeWidth="2">
          <circle cx="34" cy="38" r="12" fill={fill} />
          <circle cx="86" cy="38" r="12" fill={fill} />
          <circle cx="34" cy="38" r="5" fill="#fff" opacity="0.5" stroke="none" />
          <circle cx="86" cy="38" r="5" fill="#fff" opacity="0.5" stroke="none" />
        </g>
      );
    case "gloom":
      return (
        <g stroke={LINE} strokeWidth="2" strokeLinejoin="round">
          <path d="M26 50 L30 20 L52 34 Z" fill={fill} />
          <path d="M94 50 L90 20 L68 34 Z" fill={fill} />
        </g>
      );
    case "anxiety":
      return (
        <g stroke={INK} strokeWidth="2.2" fill="none" strokeLinecap="round">
          <path d="M48 30 C 44 22, 50 16, 44 8" />
          <path d="M72 30 C 76 22, 70 16, 76 8" />
          <circle cx="44" cy="8" r="4" fill="var(--color-butter-200)" stroke={LINE} />
          <circle cx="76" cy="8" r="4" fill="var(--color-butter-200)" stroke={LINE} />
        </g>
      );
    case "anger":
      return (
        <path
          d="M46 32 C 44 20, 54 18, 52 6 C 62 14, 70 14, 68 4 C 78 14, 80 24, 74 32 Z"
          fill="#ffe3da"
          stroke={LINE}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      );
    case "joy":
      return (
        <path
          d="M60 4 L64 16 L76 20 L64 24 L60 36 L56 24 L44 20 L56 16 Z"
          fill="var(--color-butter-50)"
          stroke="#f6df95"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      );
    case "calm":
      return (
        <g stroke={LINE} strokeWidth="2">
          <path d="M60 30 L60 18" stroke="#a9dccf" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M60 20 C 50 8, 38 14, 40 22 C 48 26, 56 24, 60 20 Z" fill="#dcf5ef" />
          <path d="M60 18 C 68 6, 82 10, 80 18 C 72 22, 64 22, 60 18 Z" fill="#dcf5ef" />
        </g>
      );
    case "confusion":
      return (
        <path
          d="M60 30 C 60 20, 72 18, 72 10 C 72 2, 58 2, 58 10 C 58 15, 66 15, 66 10"
          fill="none"
          stroke={INK}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      );
  }
}

function Face({ kind }: { kind: EmotionKey }) {
  const s = { stroke: INK, strokeWidth: 2.6, strokeLinecap: "round" as const, fill: "none" };
  switch (kind) {
    case "lethargy":
      return (
        <g>
          <path d="M40 70 L52 70" {...s} />
          <path d="M68 70 L80 70" {...s} />
          <path d="M55 86 L65 86" {...s} />
          <text x="86" y="52" fontSize="12" fill={INK} opacity="0.5" fontFamily="sans-serif">z</text>
          <text x="94" y="42" fontSize="9" fill={INK} opacity="0.4" fontFamily="sans-serif">z</text>
        </g>
      );
    case "gloom":
      return (
        <g>
          <path d="M40 68 Q 46 74 52 68" {...s} />
          <path d="M68 68 Q 74 74 80 68" {...s} />
          <path d="M54 88 Q 60 84 66 88" {...s} />
          <path d="M80 76 Q 82 81 80 84 Q 78 81 80 76 Z" fill="#d3e2ff" />
        </g>
      );
    case "anxiety":
      return (
        <g>
          <circle cx="46" cy="68" r="7" fill="#fff" stroke={INK} strokeWidth="2" />
          <circle cx="74" cy="68" r="7" fill="#fff" stroke={INK} strokeWidth="2" />
          <circle cx="47" cy="69" r="2.6" fill={INK} />
          <circle cx="73" cy="69" r="2.6" fill={INK} />
          <path d="M50 88 Q 54 84 58 88 T 66 88 T 72 88" {...s} />
        </g>
      );
    case "anger":
      return (
        <g>
          <path d="M38 60 L52 65" {...s} />
          <path d="M82 60 L68 65" {...s} />
          <circle cx="46" cy="71" r="3.4" fill={INK} />
          <circle cx="74" cy="71" r="3.4" fill={INK} />
          <ellipse cx="60" cy="88" rx="6" ry="5" fill={INK} />
        </g>
      );
    case "joy":
      return (
        <g>
          <path d="M40 72 Q 46 64 52 72" {...s} />
          <path d="M68 72 Q 74 64 80 72" {...s} />
          <path d="M50 84 Q 60 96 70 84 Z" fill={INK} />
          <path d="M55 90 Q 60 93 65 90" stroke="#ffc9da" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
      );
    case "calm":
      return (
        <g>
          <path d="M40 70 Q 46 75 52 70" {...s} />
          <path d="M68 70 Q 74 75 80 70" {...s} />
          <path d="M54 86 Q 60 90 66 86" {...s} />
        </g>
      );
    case "confusion":
      return (
        <g>
          <path d="M42 68 a4 4 0 1 1 6 3 a2 2 0 1 1 -3 -2" {...s} strokeWidth={2.2} />
          <circle cx="74" cy="70" r="3" fill={INK} />
          <path d="M50 88 Q 54 84 58 88 Q 62 92 66 86 L 70 88" {...s} />
        </g>
      );
  }
}

function SettledFace() {
  const s = { stroke: INK, strokeWidth: 2.6, strokeLinecap: "round" as const, fill: "none" };
  return (
    <g>
      <path d="M40 70 Q 46 75 52 70" {...s} />
      <path d="M68 70 Q 74 75 80 70" {...s} />
      <path d="M52 85 Q 60 92 68 85" {...s} />
    </g>
  );
}
