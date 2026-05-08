import { SectionHeading } from "@/components/landing/section-heading";
import { signalCards } from "@/data/landing-content";

type PlatformSectionProps = {
  isLight: boolean;
};

function SignalCard({
  title,
  body,
  span,
  image,
  isLight,
}: {
  title: string;
  body: string;
  span: string;
  image: string;
  isLight: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border ${span} ${
        isLight ? "border-black/8 bg-black/[0.03]" : "border-white/12 bg-white/[0.04]"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,20,0.08)_0%,rgba(7,18,20,0.86)_72%,rgba(7,18,20,0.96)_100%)]" />
      <div className="relative flex min-h-[18rem] flex-col justify-end p-6 text-white md:p-8">
        <h3 className="max-w-[14ch] text-[1.5rem] font-medium leading-[1.02] tracking-[-0.04em] text-white">
          {title}
        </h3>
        <p className="mt-3 max-w-[28rem] text-[0.98rem] leading-7 text-white/72">{body}</p>
      </div>
    </article>
  );
}

export function PlatformSection({ isLight }: PlatformSectionProps) {
  return (
    <section id="platform" className="mx-auto w-full max-w-[86rem] px-4 py-24 md:px-8 md:py-40">
      <div className="max-w-[52rem]">
        <SectionHeading
          eyebrow="Built for the reality of care operations"
          title="A dense signal layer for agencies that cannot afford to learn too late."
          description="Instead of waiting for a spreadsheet review, leaders get an earlier picture of what is drifting: staffing load, late-call clusters, high-risk clients, training gaps, complaint patterns, and inspection evidence readiness."
          isLight={isLight}
          titleClassName="max-w-[14ch]"
          descriptionClassName="max-w-[44rem]"
        />
      </div>

      <div
        id="signals"
        className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:grid-flow-dense"
      >
        {signalCards.map((card) => (
          <SignalCard key={card.title} {...card} isLight={isLight} />
        ))}
      </div>
    </section>
  );
}
