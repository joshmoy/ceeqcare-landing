import { SectionHeading } from "@/components/landing/section-heading";
import { scrubCopy, storyCards } from "@/data/landing-content";

type StorySectionProps = {
  isLight: boolean;
};

export function StorySection({ isLight }: StorySectionProps) {
  return (
    <section
      id="story"
      className="mx-auto grid w-full max-w-[86rem] gap-14 px-4 py-24 md:px-8 md:py-40 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div>
        <SectionHeading
          eyebrow="What managers feel"
          title="The service usually tells you before the report does."
          isLight={isLight}
          titleClassName="max-w-[10ch] leading-[0.95]"
        />
        <p
          data-scrub-copy
          className={`mt-8 max-w-[33rem] text-[1.2rem] leading-9 ${
            isLight ? "text-[#516864]" : "text-white/70"
          }`}
        >
          {scrubCopy.split(" ").map((word, index) => (
            <span key={`${word}-${index}`} data-word className="mr-[0.38rem] inline-block">
              {word}
            </span>
          ))}
        </p>
      </div>

      <div className="grid gap-5">
        {storyCards.map((card) => (
          <article
            key={card.title}
            data-story-card
            className={`rounded-[2rem] border p-6 md:p-8 ${
              isLight
                ? "border-black/8 bg-[linear-gradient(180deg,rgba(16,34,37,0.06),rgba(16,34,37,0.02))]"
                : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]"
            }`}
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span
                  className={`text-sm uppercase tracking-[0.2em] ${
                    isLight ? "text-[#7c6c5f]" : "text-white/46"
                  }`}
                >
                  Daily operating signal
                </span>
                <h3
                  className={`mt-3 text-[1.7rem] font-medium tracking-[-0.04em] ${
                    isLight ? "text-[#102225]" : "text-white"
                  }`}
                >
                  {card.title}
                </h3>
              </div>
              <strong className="text-[clamp(3rem,7vw,5rem)] font-semibold leading-none tracking-[-0.06em] text-[#f0b18c]">
                {card.stat}
              </strong>
            </div>
            <p
              className={`mt-5 max-w-[36rem] text-[1rem] leading-7 ${
                isLight ? "text-[#516864]" : "text-white/68"
              }`}
            >
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
