const INK = "#8a7aa8";

/** 대표 캐릭터 '나루' — 구름 위에 앉은 하얀 구름 친구 (placeholder 일러스트) */
export function Naru({ className, label }: { className?: string; label?: string }) {
  return (
    <svg
      viewBox="0 0 240 210"
      className={className}
      role="img"
      aria-label={label}
    >

      {/* 받침 구름 */}
      <path
        d="M30 176 C 14 176, 10 156, 26 150 C 22 132, 46 124, 58 134 C 66 116, 96 116, 104 132 C 116 118, 146 118, 152 134 C 162 122, 190 124, 192 142 C 210 140, 222 160, 208 174 C 200 184, 50 186, 30 176 Z"
        fill="#e6dcfc"
      />

      {/* 나루 몸 */}
      <path
        d="M66 140 C 46 140, 40 116, 56 106 C 50 84, 72 70, 90 78 C 96 58, 128 50, 144 70 C 162 60, 186 76, 180 98 C 198 104, 196 134, 176 140 Z"
        fill="#ffffff"
        stroke="rgba(176,154,228,0.4)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* 팔 */}
      <ellipse cx="70" cy="128" rx="10" ry="7" fill="#fff" stroke="rgba(176,154,228,0.4)" strokeWidth="2" transform="rotate(-20 70 128)" />
      <ellipse cx="172" cy="128" rx="10" ry="7" fill="#fff" stroke="rgba(176,154,228,0.4)" strokeWidth="2" transform="rotate(20 172 128)" />

      {/* 얼굴 */}
      <ellipse cx="101" cy="108" rx="4.2" ry="5.2" fill={INK} />
      <ellipse cx="139" cy="108" rx="4.2" ry="5.2" fill={INK} />
      <circle cx="102.5" cy="106" r="1.4" fill="#fff" />
      <circle cx="140.5" cy="106" r="1.4" fill="#fff" />
      <ellipse cx="90" cy="120" rx="8" ry="5" fill="#ffcfdf" opacity="0.8" />
      <ellipse cx="150" cy="120" rx="8" ry="5" fill="#ffcfdf" opacity="0.8" />
      <path d="M112 118 Q 120 126 128 118" stroke={INK} strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* 반짝이 */}
      <path d="M202 52 L205 61 L214 64 L205 67 L202 76 L199 67 L190 64 L199 61 Z" fill="#fff0a8" />
      <path d="M36 70 L38 76 L44 78 L38 80 L36 86 L34 80 L28 78 L34 76 Z" fill="#fff6c7" />
      <circle cx="220" cy="100" r="3" fill="#e6dcfc" />
      <circle cx="24" cy="112" r="2.5" fill="#e6dcfc" />
    </svg>
  );
}
