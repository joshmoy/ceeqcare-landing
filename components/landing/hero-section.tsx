import Link from "next/link";
import { heroStats, heroTopics } from "@/data/landing-content";

type HeroSectionProps = {
  isLight: boolean;
};

export function HeroSection({ isLight }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[86rem] items-center px-4 pb-24 pt-12 md:px-8 md:pb-32 md:pt-20"
    >
      <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="relative z-10">
          <p data-hero-item className="text-[0.78rem] uppercase tracking-[0.28em] text-[#f0b18c]">
            Predictive care operations intelligence
          </p>
          <h1
            data-hero-item
            className={`mt-6 max-w-[14ch] text-[clamp(3rem,5.6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.06em] ${
              isLight ? "text-[#102225]" : "text-white"
            }`}
          >
            See the week&apos;s service risk before it becomes a missed visit, complaint, or
            inspection problem.
          </h1>
          <p
            data-hero-item
            className={`mt-8 max-w-[44rem] text-[1.08rem] leading-8 md:text-[1.15rem] ${
              isLight ? "text-[#425a55]" : "text-white/72"
            }`}
          >
            CareSight AI gives UK domiciliary care agencies an earlier read on staffing
            pressure, route strain, incident patterns, and compliance drift so leaders can
            intervene while there is still room to change the outcome.
          </p>

          <div data-hero-item className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className={`rounded-full px-7 py-4 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
                isLight ? "bg-[#102225] text-[#f7f1e8]" : "bg-[#f3ebdf] text-[#071214]"
              }`}
            >
              Request a pilot
            </Link>
            <Link
              href="#signals"
              className={`rounded-full border px-7 py-4 text-sm transition-colors duration-300 ${
                isLight
                  ? "border-black/12 bg-white/60 text-[#102225] hover:bg-white/90"
                  : "border-white/16 bg-white/[0.05] text-white hover:bg-white/[0.1]"
              }`}
            >
              Explore the platform
            </Link>
          </div>

          <div
            data-hero-item
            className={`mt-14 flex flex-wrap gap-6 text-sm ${
              isLight ? "text-[#5b726d]" : "text-white/62"
            }`}
          >
            {heroTopics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-40 w-40 rounded-full bg-[#d86d39]/25 blur-3xl lg:block" />
          <div className="absolute -right-2 bottom-6 hidden h-52 w-52 rounded-full bg-[#5a8c7e]/18 blur-3xl lg:block" />

          <div
            className={`relative overflow-hidden rounded-[2.4rem] border p-5 md:p-6 ${
              isLight
                ? "border-black/8 bg-[rgba(255,255,255,0.7)] shadow-[0_30px_80px_rgba(45,54,50,0.14)]"
                : "border-white/12 bg-[rgba(12,28,31,0.78)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            }`}
          >
            <div
              className="rounded-[2rem] bg-cover bg-center p-6 text-white md:p-8"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,rgba(8,18,20,0.15),rgba(8,18,20,0.92)),url(/images/landing/hero.jpg)",
              }}
            >
              <div className="flex items-center justify-between text-sm text-white/68">
                <span>Agency risk pulse</span>
                <span className="rounded-full border border-white/16 bg-white/[0.07] px-3 py-2 text-white">
                  Live
                </span>
              </div>

              <div className="mt-10 grid gap-2">
                <span className="text-sm uppercase tracking-[0.18em] text-white/52">
                  This morning
                </span>
                <strong className="text-[clamp(4.5rem,10vw,7rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white">
                  72
                </strong>
                <span className="max-w-[18rem] text-base leading-7 text-white/72">
                  Elevated risk driven by travel-heavy rotas, late-call clusters, and two
                  unresolved medication incidents.
                </span>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {heroStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4 text-white backdrop-blur-md"
                  >
                    <span className="block text-sm text-white/58">{label}</span>
                    <strong className="mt-1 block text-lg font-medium text-white">{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`mt-4 grid gap-4 rounded-[1.8rem] border p-5 md:grid-cols-[1fr_auto] md:items-center ${
                isLight ? "border-black/8 bg-[rgba(16,34,37,0.05)]" : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <div>
                <span className="block text-sm uppercase tracking-[0.18em] text-[#f0b18c]">
                  Priority signal
                </span>
                <p
                  className={`mt-2 max-w-[32rem] text-[1.02rem] leading-7 ${
                    isLight ? "text-[#425a55]" : "text-white/72"
                  }`}
                >
                  North cluster rotas are absorbing too much journey time. Rebalancing
                  tomorrow&apos;s route density would cut the fatigue risk fastest.
                </p>
              </div>
              <div
                className={`hidden rounded-full border px-4 py-3 text-sm md:block ${
                  isLight ? "border-black/10 text-[#5b726d]" : "border-white/12 text-white/68"
                }`}
              >
                Recommended action within 12 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
