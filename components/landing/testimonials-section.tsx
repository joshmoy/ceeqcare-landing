import { SectionHeading } from "@/components/landing/section-heading";
import { testimonials } from "@/data/landing-content";

type TestimonialsSectionProps = {
  isLight: boolean;
};

export function TestimonialsSection({ isLight }: TestimonialsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[86rem] px-4 py-24 md:px-8 md:py-40">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionHeading
            eyebrow="Why teams stay with it"
            title="It sharpens judgement instead of replacing it."
            isLight={isLight}
            titleClassName="max-w-[10ch] leading-[0.95]"
          />
        </div>

        <div className="grid gap-4">
          {testimonials.map((item, index) => (
            <article
              key={item.role}
              className={`rounded-[2rem] border p-6 md:p-8 ${
                index === 0
                  ? isLight
                    ? "border-[#f0b18c]/50 bg-[#fff6ef]"
                    : "border-[#f0b18c]/40 bg-[#f0b18c]/10"
                  : isLight
                    ? "border-black/8 bg-white/55"
                    : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <p
                className={`max-w-[42rem] text-[1.2rem] leading-9 tracking-[-0.02em] ${
                  isLight ? "text-[#102225]" : "text-white"
                }`}
              >
                {item.quote}
              </p>
              <p
                className={`mt-6 text-sm uppercase tracking-[0.18em] ${
                  isLight ? "text-[#7c6c5f]" : "text-white/50"
                }`}
              >
                {item.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
