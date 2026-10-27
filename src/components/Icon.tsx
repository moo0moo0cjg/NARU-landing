/** 이모지 대신 쓰는 작은 SVG 아이콘 (선 색은 부드러운 라벤더 그레이) */
type Name = "chat" | "check";

export function Icon({ name, className = "size-4" }: { name: Name; className?: string }) {
  const s = {
    stroke: "var(--color-line)",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {name === "chat" && (
        <>
          <path d="M5 5 h14 a2.5 2.5 0 0 1 2.5 2.5 v7 a2.5 2.5 0 0 1 -2.5 2.5 H11 l-4 3.5 v-3.5 H5 a2.5 2.5 0 0 1 -2.5 -2.5 v-7 A2.5 2.5 0 0 1 5 5 z" {...s} fill="#fff" />
          <circle cx="8" cy="11" r="1.1" fill="var(--color-line)" />
          <circle cx="12" cy="11" r="1.1" fill="var(--color-line)" />
          <circle cx="16" cy="11" r="1.1" fill="var(--color-line)" />
        </>
      )}
      {name === "check" && (
        <>
          <circle cx="12" cy="12" r="9" fill="var(--color-lavender-200)" />
          <path d="M8 12.3 l2.7 2.7 L16 9.5" {...s} strokeWidth={2.2} />
        </>
      )}
    </svg>
  );
}
