import { ImageOverlayCard } from "@/components/landing/image-overlay-card";
import { SectionHeading } from "@/components/landing/section-heading";
import { audienceCards } from "@/data/landing-content";

type AudienceSectionProps = {
  isLight: boolean;
};

export function AudienceSection({ isLight }: AudienceSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[86rem] px-4 py-24 md:px-8 md:py-40">
      <div className="flex flex-col gap-5 md:max-w-[44rem]">
        <SectionHeading
          eyebrow="Who it helps most"
          title="Three operating views, one shared source of truth."
          isLight={isLight}
          titleClassName="max-w-[12ch] leading-[0.95]"
        />
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {audienceCards.map((item) => (
          <ImageOverlayCard
            key={item.title}
            title={item.title}
            body={item.body}
            image={item.image}
            isLight={isLight}
            className={isLight ? "min-h-[32rem] bg-[#dbe3dd]" : "min-h-[32rem] bg-[#0c1a1d]"}
            contentClassName="h-full"
            titleClassName="max-w-[12ch] text-[2rem] leading-[0.95] tracking-[-0.05em]"
            bodyClassName="max-w-[24rem] text-[1rem] text-white/68"
            imageClassName="opacity-55"
            overlayClassName="bg-[linear-gradient(180deg,rgba(7,18,20,0.18),rgba(7,18,20,0.94))]"
          />
        ))}
      </div>
    </section>
  );
}
