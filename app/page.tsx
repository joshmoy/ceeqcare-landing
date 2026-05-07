"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MobileNav } from "@/components/mobile-nav";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const navItems = [
  { href: "#platform", label: "Platform" },
  { href: "#signals", label: "Signals" },
  { href: "#story", label: "Story" },
];

const signalCards = [
  {
    title: "Missed-visit pressure",
    body: "Prioritise clusters where lateness, cancellations, and thin rota cover are trending together.",
    span: "lg:col-span-3 lg:row-span-2",
    image: "/images/landing/signal-missed-visits.jpg",
  },
  {
    title: "Workforce strain",
    body: "Spot overtime, stacked journeys, and consecutive high-load days before retention starts slipping.",
    span: "lg:col-span-2",
    image: "/images/landing/signal-workforce.jpg",
  },
  {
    title: "Complaint drift",
    body: "See when small service issues start moving in the same direction across teams.",
    span: "lg:col-span-1",
    image: "/images/landing/signal-complaint-drift.jpg",
  },
  {
    title: "Inspection readiness",
    body: "Keep evidence, incidents, and training status close enough to real time that prep stops being a scramble.",
    span: "lg:col-span-2",
    image: "/images/landing/signal-inspection-readiness.jpg",
  },
  {
    title: "Agency pulse",
    body: "Bring staff, clients, routes, incidents, and compliance activity into one daily operating picture.",
    span: "lg:col-span-2",
    image: "/images/landing/signal-agency-pulse.jpg",
  },
  {
    title: "Board-level clarity",
    body: "Translate frontline volatility into a simple risk language leaders can act on quickly.",
    span: "lg:col-span-2",
    image: "/images/landing/signal-board-clarity.jpg",
  },
];

const storyCards = [
  {
    stat: "72",
    title: "Agency-wide risk score",
    body: "A rolling pulse that blends attendance, incidents, staffing strain, travel burden, and compliance gaps.",
  },
  {
    stat: "6",
    title: "Fatigue flags today",
    body: "Managers see exactly where travel-heavy schedules and repeated late finishes are stacking up.",
  },
  {
    stat: "87%",
    title: "Evidence prepared",
    body: "Inspection reporting moves from retrospective panic to something you can review every week.",
  },
];

const accordionItems = [
  {
    title: "For Registered Managers",
    body: "See whether operational noise is turning into real client risk, and step into inspections with stronger evidence trails.",
    image: "/images/landing/audience-registered-managers.jpg",
  },
  {
    title: "For Operations Leads",
    body: "Track pressure across calls, teams, and geographies without waiting for spreadsheets to catch up.",
    image: "/images/landing/audience-operations-leads.jpg",
  },
  {
    title: "For Quality Teams",
    body: "Link incidents, complaints, missed calls, and training posture into one narrative you can actually use.",
    image: "/images/landing/audience-quality-teams.jpg",
  },
];

const testimonials = [
  {
    quote:
      "It turns operational noise into a daily priority list instead of another dashboard nobody can act on.",
    role: "Operations Director, Regional Domiciliary Care Group",
  },
  {
    quote:
      "The value is not more reporting. It is seeing service risk early enough to change the rota before people feel it.",
    role: "Registered Manager, Multi-branch Provider",
  },
  {
    quote:
      "For compliance teams, the strongest shift is that evidence becomes continuous rather than a last-minute exercise.",
    role: "Quality and Governance Lead, Independent Agency",
  },
];

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
      <div className="relative flex min-h-[18rem] flex-col justify-end p-6 md:p-8">
        <h3 className="max-w-[14ch] text-[1.5rem] font-medium leading-[1.02] tracking-[-0.04em] text-white">
          {title}
        </h3>
        <p className="mt-3 max-w-[28rem] text-[0.98rem] leading-7 text-white/72">
          {body}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  const root = useRef<HTMLElement | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-hero-item]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-story-card]").forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.84, opacity: 0.28, filter: "brightness(0.7)" },
          {
            scale: 1,
            opacity: 1,
            filter: "brightness(1)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "bottom 28%",
              scrub: true,
            },
          },
        );
      });

      const words = gsap.utils.toArray<HTMLElement>("[data-word]");
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: "[data-scrub-copy]",
            start: "top 75%",
            end: "bottom 38%",
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  const scrubCopy =
    "CareSight AI gives care leaders one operating surface for workforce strain, missed visits, complaint drift, incident escalation, and CQC readiness, so intervention happens before the service slips.";

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("ceeqcare-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("ceeqcare-theme", theme);
  }, [theme]);

  const isLight = theme === "light";

  return (
    <main
      ref={root}
      className={`landing-shell w-full max-w-full overflow-x-hidden ${
        isLight
          ? "bg-[#f6f0e6] text-[#102225]"
          : "bg-[#071214] text-[#f5efe6]"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[42rem] ${
          isLight
            ? "bg-[radial-gradient(circle_at_20%_15%,rgba(227,119,59,0.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(72,123,107,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(246,240,230,0))]"
            : "bg-[radial-gradient(circle_at_20%_15%,rgba(227,119,59,0.28),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(72,123,107,0.22),transparent_24%),linear-gradient(180deg,rgba(7,18,20,0.1),rgba(7,18,20,0))]"
        }`}
      />

      <header className="sticky top-0 z-30 px-4 py-4 md:px-8">
        <div
          className={`mx-auto flex w-full max-w-[86rem] items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-xl md:px-6 ${
            isLight
              ? "border-black/8 bg-[rgba(255,251,245,0.76)]"
              : "border-white/10 bg-[rgba(10,23,25,0.72)]"
          }`}
        >
          <Link href="#top" className="flex items-center gap-3" aria-label="CareSight AI home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,#e37a45,#f0b18c)] text-base font-semibold text-[#0b1719]">
              C
            </span>
            <span>
              <span
                className={`block text-sm uppercase tracking-[0.24em] ${
                  isLight ? "text-[#6f5b4d]" : "text-white/56"
                }`}
              >
                CeeqCare
              </span>
              <strong className="block text-[1.02rem] tracking-[-0.03em]">CareSight AI</strong>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  isLight
                    ? "text-[#516864] hover:text-[#102225]"
                    : "text-white/72 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className={`rounded-full border px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                isLight
                  ? "border-black/10 bg-white/70 text-[#102225]"
                  : "border-white/12 bg-white/[0.04] text-white/82"
              }`}
            >
              {isLight ? "Dark mode" : "Light mode"}
            </button>
            <Link
              href="#contact"
              className={`rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
                isLight
                  ? "bg-[#102225] text-[#f7f1e8]"
                  : "bg-[#f3ebdf] text-[#081315]"
              }`}
            >
              Book a pilot
            </Link>
          </nav>

          <MobileNav
            theme={theme}
            onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          />
        </div>
      </header>

      <section
        id="top"
        className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[86rem] items-center px-4 pb-24 pt-12 md:px-8 md:pb-32 md:pt-20"
      >
        <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="relative z-10">
            <p
              data-hero-item
              className="text-[0.78rem] uppercase tracking-[0.28em] text-[#f0b18c]"
            >
              Predictive care operations intelligence
            </p>
            <h1
              data-hero-item
              className={`mt-6 max-w-[14ch] text-[clamp(3rem,5.6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.06em] ${
                isLight ? "text-[#102225]" : "text-white"
              }`}
            >
              See the week&apos;s service risk before it becomes a missed visit,
              complaint, or inspection problem.
            </h1>
            <p
              data-hero-item
              className={`mt-8 max-w-[44rem] text-[1.08rem] leading-8 md:text-[1.15rem] ${
                isLight ? "text-[#425a55]" : "text-white/72"
              }`}
            >
              CareSight AI gives UK domiciliary care agencies an earlier read on
              staffing pressure, route strain, incident patterns, and compliance drift
              so leaders can intervene while there is still room to change the outcome.
            </p>

            <div data-hero-item className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className={`rounded-full px-7 py-4 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
                  isLight
                    ? "bg-[#102225] text-[#f7f1e8]"
                    : "bg-[#f3ebdf] text-[#071214]"
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
              <span>Missed visits</span>
              <span>Fatigue detection</span>
              <span>Complaint drift</span>
              <span>CQC readiness</span>
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
                className="rounded-[2rem] bg-cover bg-center p-6 md:p-8"
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
                  <strong className="text-[clamp(4.5rem,10vw,7rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
                    72
                  </strong>
                  <span className="max-w-[18rem] text-base leading-7 text-white/72">
                    Elevated risk driven by travel-heavy rotas, late-call clusters, and
                    two unresolved medication incidents.
                  </span>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Late visits", "14 this week"],
                    ["Fatigue alerts", "6 carers flagged"],
                    ["High-risk clients", "3 need review"],
                    ["Evidence ready", "87% assembled"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4 backdrop-blur-md"
                    >
                      <span className="block text-sm text-white/58">{label}</span>
                      <strong className="mt-1 block text-lg font-medium text-white">
                        {value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`mt-4 grid gap-4 rounded-[1.8rem] border p-5 md:grid-cols-[1fr_auto] md:items-center ${
                  isLight
                    ? "border-black/8 bg-[rgba(16,34,37,0.05)]"
                    : "border-white/10 bg-white/[0.04]"
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
                    isLight
                      ? "border-black/10 text-[#5b726d]"
                      : "border-white/12 text-white/68"
                  }`}
                >
                  Recommended action within 12 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          {[
            "Missed visit visibility",
            "Burnout detection",
            "Complaint intelligence",
            "Incident escalation",
            "CQC reporting confidence",
            "Rota pressure mapping",
            "Travel-heavy schedule alerts",
          ]
            .concat([
              "Missed visit visibility",
              "Burnout detection",
              "Complaint intelligence",
              "Incident escalation",
              "CQC reporting confidence",
              "Rota pressure mapping",
              "Travel-heavy schedule alerts",
            ])
            .map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
        </div>
      </section>

      <section
        id="platform"
        className="mx-auto w-full max-w-[86rem] px-4 py-24 md:px-8 md:py-40"
      >
        <div className="max-w-[52rem]">
          <p className="text-[0.78rem] uppercase tracking-[0.28em] text-[#f0b18c]">
            Built for the reality of care operations
          </p>
          <h2
            className={`mt-5 max-w-[14ch] text-[clamp(2.8rem,5vw,5.3rem)] font-semibold leading-[0.94] tracking-[-0.06em] ${
              isLight ? "text-[#102225]" : "text-white"
            }`}
          >
            A dense signal layer for agencies that cannot afford to learn too late.
          </h2>
          <p className={`mt-6 max-w-[44rem] text-[1.06rem] leading-8 ${isLight ? "text-[#516864]" : "text-white/68"}`}>
            Instead of waiting for a spreadsheet review, leaders get an earlier picture
            of what is drifting: staffing load, late-call clusters, high-risk clients,
            training gaps, complaint patterns, and inspection evidence readiness.
          </p>
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

      <section
        id="story"
        className="mx-auto grid w-full max-w-[86rem] gap-14 px-4 py-24 md:px-8 md:py-40 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <p className="text-[0.78rem] uppercase tracking-[0.28em] text-[#f0b18c]">
            What managers feel
          </p>
          <h2
            className={`mt-5 max-w-[10ch] text-[clamp(2.8rem,5vw,5.1rem)] font-semibold leading-[0.95] tracking-[-0.06em] ${
              isLight ? "text-[#102225]" : "text-white"
            }`}
          >
            The service usually tells you before the report does.
          </h2>
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
                  <span className={`text-sm uppercase tracking-[0.2em] ${isLight ? "text-[#7c6c5f]" : "text-white/46"}`}>
                    Daily operating signal
                  </span>
                  <h3 className={`mt-3 text-[1.7rem] font-medium tracking-[-0.04em] ${isLight ? "text-[#102225]" : "text-white"}`}>
                    {card.title}
                  </h3>
                </div>
                <strong className="text-[clamp(3rem,7vw,5rem)] font-semibold leading-none tracking-[-0.06em] text-[#f0b18c]">
                  {card.stat}
                </strong>
              </div>
              <p className={`mt-5 max-w-[36rem] text-[1rem] leading-7 ${isLight ? "text-[#516864]" : "text-white/68"}`}>
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[86rem] px-4 py-24 md:px-8 md:py-40">
        <div className="flex flex-col gap-5 md:max-w-[44rem]">
          <p className="text-[0.78rem] uppercase tracking-[0.28em] text-[#f0b18c]">
            Who it helps most
          </p>
          <h2
            className={`max-w-[12ch] text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.06em] ${
              isLight ? "text-[#102225]" : "text-white"
            }`}
          >
            Three operating views, one shared source of truth.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {accordionItems.map((item) => (
            <article
              key={item.title}
              className={`group relative min-h-[32rem] overflow-hidden rounded-[2rem] border ${
                isLight ? "border-black/8 bg-[#dbe3dd]" : "border-white/10 bg-[#0c1a1d]"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-55 grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,20,0.18),rgba(7,18,20,0.94))]" />
              <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                <h3 className="max-w-[12ch] text-[2rem] font-medium leading-[0.95] tracking-[-0.05em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[24rem] text-[1rem] leading-7 text-white/68">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[86rem] px-4 py-24 md:px-8 md:py-40">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-[0.78rem] uppercase tracking-[0.28em] text-[#f0b18c]">
              Why teams stay with it
            </p>
            <h2
              className={`mt-5 max-w-[10ch] text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.06em] ${
                isLight ? "text-[#102225]" : "text-white"
              }`}
            >
              It sharpens judgement instead of replacing it.
            </h2>
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
                <p className={`max-w-[42rem] text-[1.2rem] leading-9 tracking-[-0.02em] ${isLight ? "text-[#102225]" : "text-white"}`}>
                  {item.quote}
                </p>
                <p className={`mt-6 text-sm uppercase tracking-[0.18em] ${isLight ? "text-[#7c6c5f]" : "text-white/50"}`}>
                  {item.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-[86rem] px-4 pb-16 pt-24 md:px-8 md:pb-24 md:pt-40"
      >
        <div className="overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(135deg,#f0b18c_0%,#f3ebdf_32%,#d9e4da_100%)] text-[#091416]">
          <div className="grid gap-10 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-[0.78rem] uppercase tracking-[0.28em] text-[#6e4a36]">
                Start with a pilot
              </p>
              <h2 className="mt-5 max-w-[12ch] text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                Bring earlier operational visibility into your agency this quarter.
              </h2>
              <p className="mt-6 max-w-[36rem] text-[1.05rem] leading-8 text-[#314540]">
                We built CareSight AI for care leaders who need fewer surprises, stronger
                inspection confidence, and a clearer read on workforce and service risk.
              </p>
            </div>

            <form className="grid gap-4 rounded-[2rem] border border-black/8 bg-white/55 p-5 backdrop-blur-md md:p-6">
              <label className="grid gap-2 text-sm font-medium text-[#0d1d20]">
                Name
                <input
                  type="text"
                  placeholder="Care leader name"
                  className="min-h-12 rounded-[1.1rem] border border-black/10 bg-white/80 px-4 py-3 text-base outline-none placeholder:text-[#4b5d58]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#0d1d20]">
                Work email
                <input
                  type="email"
                  placeholder="name@agency.co.uk"
                  className="min-h-12 rounded-[1.1rem] border border-black/10 bg-white/80 px-4 py-3 text-base outline-none placeholder:text-[#4b5d58]"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#0d1d20]">
                Agency size
                <select className="min-h-12 rounded-[1.1rem] border border-black/10 bg-white/80 px-4 py-3 text-base outline-none">
                  <option>1-25 staff</option>
                  <option>26-100 staff</option>
                  <option>101-250 staff</option>
                  <option>250+ staff</option>
                </select>
              </label>
              <button
                type="button"
                className="mt-2 rounded-full bg-[#0a1719] px-6 py-4 text-sm font-medium text-[#f5efe6] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Request a pilot conversation
              </button>
            </form>
          </div>
        </div>

        <footer
          className={`flex flex-col gap-4 px-1 pt-8 text-sm md:flex-row md:items-center md:justify-between ${
            isLight ? "text-[#7c6c5f]" : "text-white/46"
          }`}
        >
          <p>CareSight AI by CeeqCare</p>
          <p>Operational intelligence for UK domiciliary care agencies.</p>
        </footer>
      </section>
    </main>
  );
}
