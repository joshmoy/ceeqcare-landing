import { marqueeItems } from "@/data/landing-content";

type FeatureMarqueeProps = {
  isLight: boolean;
};

export function FeatureMarquee({ isLight }: FeatureMarqueeProps) {
  return (
    <section
      className={`border-y py-6 ${
        isLight ? "border-black/8 bg-black/[0.02]" : "border-white/8 bg-white/[0.03]"
      }`}
    >
      <div
        className={`marquee-track flex min-w-full gap-6 whitespace-nowrap px-4 text-sm uppercase tracking-[0.28em] md:px-8 ${
          isLight ? "text-[#7c6c5f]" : "text-white/42"
        }`}
      >
        {marqueeItems.concat(marqueeItems).map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}
