export function SectionHeading({
  eyebrow,
  title,
  sub,
  id,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  id?: string;
}) {
  return (
    <div className="mx-auto max-w-xl text-center">
      {eyebrow && (
        <p className="inline-block rounded-full bg-lavender-100 px-3 py-1 text-[13px] font-bold tracking-wide text-ink">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="mt-3 whitespace-pre-line font-display text-[28px] leading-tight text-ink md:text-[40px]">
        {title}
      </h2>
      {sub && <p className="mt-3 text-[15px] leading-relaxed text-ink-soft md:text-base">{sub}</p>}
    </div>
  );
}
