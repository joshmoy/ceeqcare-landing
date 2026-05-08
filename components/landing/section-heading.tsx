type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  isLight: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  isLight,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-[0.78rem] uppercase tracking-[0.28em] text-[#f0b18c]">{eyebrow}</p>
      <h2
        className={`mt-5 text-[clamp(2.8rem,5vw,5.3rem)] font-semibold leading-[0.94] tracking-[-0.06em] ${
          isLight ? "text-[#102225]" : "text-white"
        } ${titleClassName ?? ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 text-[1.06rem] leading-8 ${
            isLight ? "text-[#516864]" : "text-white/68"
          } ${descriptionClassName ?? ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
