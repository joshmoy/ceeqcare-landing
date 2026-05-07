import Link from "next/link";
import type { ReactNode } from "react";
import { MobileNav } from "@/components/mobile-nav";

const heroPoints = [
  {
    title: "Early risk visibility",
    body: "Spot staffing pressure, travel strain, and missed-visit patterns fast.",
  },
  {
    title: "CQC-ready reporting",
    body: "Turn operational data into audit-friendly summaries and evidence.",
  },
  {
    title: "Built for care leaders",
    body: "Designed for Registered Managers, Ops Managers, and Compliance Leads.",
  },
];

const signals = [
  { title: "Late visits", value: "14 this week" },
  { title: "Fatigue alerts", value: "6 carers flagged" },
  { title: "High-risk clients", value: "3 need review" },
  { title: "Audit readiness", value: "87% evidence complete" },
];

const painPoints = [
  {
    title: "Reactive operations",
    body: "Teams often discover missed visits, fatigue, or incident patterns after harm, complaints, or contract risk.",
  },
  {
    title: "Manual inspection prep",
    body: "Compliance evidence lives across systems and spreadsheets, creating a scramble before CQC reviews.",
  },
  {
    title: "Invisible workforce strain",
    body: "Travel burden, overtime, and consecutive shifts accumulate quietly until quality and retention suffer.",
  },
];

const features = [
  {
    label: "Core dashboard",
    title: "Operational Risk Dashboard",
    body: "Track missed visit trends, late-call frequency, high-risk clients, staff risk patterns, and an agency-wide risk score in one decision-making view.",
    featured: true,
  },
  {
    label: "Workforce",
    title: "Fatigue and workload detection",
    body: "Flag excessive consecutive shifts, overtime, and travel-heavy schedules before they lead to burnout or unsafe delivery.",
  },
  {
    label: "Incidents",
    title: "Incident intelligence",
    body: "Surface trends across safeguarding concerns, medication errors, complaints, and missed calls so escalation becomes visible earlier.",
  },
  {
    label: "Compliance",
    title: "CQC readiness reporting",
    body: "Generate audit summaries, incident reporting views, staff compliance reports, and operational KPIs without manual assembly.",
  },
  {
    label: "Scoring engine",
    title: "Rule-based risk scoring that can evolve into ML",
    body: "The MVP starts with practical scoring across attendance, incidents, travel time, schedule density, complaints, and training gaps, then grows into predictive models.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Ingest core operational inputs",
    body: "Visits, staff schedules, incident reports, complaint logs, training status, and travel context.",
  },
  {
    step: "02",
    title: "Score risk across agency activity",
    body: "Staff, shift, client, and operational risk scores translate raw events into a practical priority model.",
  },
  {
    step: "03",
    title: "Guide earlier action",
    body: "Managers receive alerts, trends, and audit-friendly summaries they can act on before issues escalate.",
  },
];

const audiences = [
  {
    title: "Registered Managers",
    body: "Get visibility into compliance posture, incident oversight, and inspection readiness in one place.",
  },
  {
    title: "Operations Managers",
    body: "Spot late visits, workload risk, and scheduling pressure before service performance slips.",
  },
  {
    title: "Quality & Compliance Leads",
    body: "Create evidence, trend views, and audit outputs without relying on fragmented manual prep.",
  },
];

const outcomes = [
  {
    title: "Reduce missed visits",
    body: "Identify risky patterns sooner and intervene before service delivery fails.",
  },
  {
    title: "Protect workforce capacity",
    body: "See fatigue and travel strain early enough to rebalance rotas responsibly.",
  },
  {
    title: "Strengthen CQC readiness",
    body: "Keep reporting and evidence preparation closer to real time instead of retrospective.",
  },
  {
    title: "Surface safeguarding patterns",
    body: "Track clusters and escalation indicators across incidents, complaints, and missed calls.",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Rule-based risk scoring",
    body: "Immediate value with transparent decision logic.",
  },
  {
    phase: "Phase 2",
    title: "Anomaly detection",
    body: "Spot patterns that drift outside expected operational norms.",
  },
  {
    phase: "Phase 3",
    title: "Predictive modelling",
    body: "Forecast missed visits, burnout likelihood, and incident risk earlier.",
  },
];

const navItems = [
  { href: "#platform", label: "Platform" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#outcomes", label: "Outcomes" },
];

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-8 max-w-[44rem]">
      <p className="mb-4 text-[0.78rem] uppercase tracking-[0.18em] text-[#b84f27]">
        {eyebrow}
      </p>
      <h2 className="max-w-[16ch] font-serif text-[clamp(2.3rem,4vw,4.2rem)] leading-[0.98] tracking-[-0.03em] text-pine">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-[1.04rem] leading-[1.65] text-moss">{body}</p>
      ) : null}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-[22px] border border-white/70 bg-[rgba(255,252,246,0.82)] p-5 shadow-soft ${className}`}
    >
      {children}
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-hero text-pine">
      <div className="overflow-hidden">
        <header className="sticky top-0 z-20 mx-auto mt-3 flex w-[min(1180px,calc(100vw-2rem))] items-start justify-between gap-4 py-4 backdrop-blur-[18px] md:items-center">
          <Link href="#top" className="inline-flex items-center gap-3" aria-label="CareSight AI home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,#db6d3f,#f3b07e)] font-serif text-xl font-bold text-[#fff9f1] shadow-[0_12px_30px_rgba(184,79,39,0.28)]">
              C
            </span>
            <span className="grid gap-0.5">
              <strong className="text-base tracking-[0.02em]">CareSight AI</strong>
              <small className="text-moss">by CeeqCare</small>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 rounded-full border border-white/65 bg-[rgba(255,250,243,0.72)] p-2 shadow-[0_10px_30px_rgba(25,44,38,0.08)] md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-[0.96rem] text-moss">
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full bg-deep px-4 py-3 text-sm text-[#f5f1e9]"
            >
              Book a pilot
            </Link>
          </nav>

          <MobileNav />
        </header>

        <div id="top" className="mx-auto w-[min(1180px,calc(100vw-2rem))]">
          <section className="grid gap-8 py-10 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-4 text-[0.78rem] uppercase tracking-[0.18em] text-[#b84f27]">
                AI-powered compliance and operations intelligence
              </p>
              <h1 className="max-w-[12ch] font-serif text-[clamp(3.1rem,6vw,6.2rem)] leading-[0.98] tracking-[-0.03em]">
                See operational risk before it becomes a missed visit, a complaint, or a
                CQC problem.
              </h1>
              <p className="mt-6 max-w-[38rem] text-[1.08rem] leading-[1.65] text-moss">
                CareSight AI gives UK domiciliary care agencies a predictive layer across
                visits, staffing, incidents, and compliance so managers can intervene earlier
                and lead with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#db6d3f,#f09a65)] px-6 py-3 text-[#fffaf3] shadow-[0_14px_30px_rgba(184,79,39,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Request a pilot
                </Link>
                <Link
                  href="#platform"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(24,50,44,0.12)] bg-[rgba(255,251,245,0.6)] px-6 py-3 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore the platform
                </Link>
              </div>

              <ul className="mt-8 grid gap-4 md:grid-cols-3">
                {heroPoints.map((item) => (
                  <GlassCard key={item.title} className="list-none">
                    <strong className="mb-2 block text-base">{item.title}</strong>
                    <span className="leading-[1.65] text-moss">{item.body}</span>
                  </GlassCard>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-[32px] bg-[linear-gradient(180deg,rgba(18,53,47,0.98),rgba(25,70,58,0.96))] p-6 text-[#f6efe4] shadow-float">
                <div className="mb-5 grid grid-cols-[1fr_auto] items-center">
                  <span className="text-[0.92rem] uppercase tracking-[0.08em] text-[rgba(246,239,228,0.68)]">
                    Agency Risk Pulse
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-2 text-[0.82rem]">
                    Live
                  </span>
                </div>
                <div className="grid gap-1">
                  <span className="text-[rgba(246,239,228,0.72)]">Agency-wide risk score</span>
                  <strong className="font-serif text-[clamp(4rem,12vw,6rem)] leading-[0.9]">
                    72
                  </strong>
                  <small className="text-[rgba(246,239,228,0.72)]">
                    Elevated attention needed
                  </small>
                </div>
                <div className="my-7 flex h-44 items-end gap-3 rounded-[22px] bg-white/10 p-5">
                  {["55%", "80%", "48%", "92%", "66%", "74%"].map((height, index) => (
                    <span
                      key={height + index}
                      className="block flex-1 rounded-t-full bg-[linear-gradient(180deg,#f6c07d_0%,#db6d3f_100%)]"
                      style={{ height }}
                    />
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {signals.map((item) => (
                    <div key={item.title} className="rounded-2xl bg-white/10 p-4">
                      <strong className="mb-1 block">{item.title}</strong>
                      <span className="text-[rgba(246,239,228,0.7)]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[32px] bg-[rgba(255,248,236,0.9)] p-5 shadow-float lg:absolute lg:-right-4 lg:bottom-8 lg:mt-0 lg:w-[min(18rem,62%)]">
                <p className="mb-2 text-[0.72rem] uppercase tracking-[0.15em] text-moss">
                  Today&apos;s priority
                </p>
                <strong className="leading-[1.5] text-pine">
                  Travel-heavy rotas are driving burnout risk in the north cluster.
                </strong>
              </div>
            </div>
          </section>

          <section className="mt-4 rounded-[32px] border border-white/70 bg-[rgba(255,251,245,0.7)] px-6 py-5 shadow-soft">
            <p className="mb-3 text-[0.78rem] uppercase tracking-[0.12em] text-[#b84f27]">
              Built around the real pressure points in domiciliary care operations
            </p>
            <div className="grid gap-3 md:grid-cols-5">
              {[
                "Missed visits",
                "Safeguarding risk",
                "Burnout detection",
                "Complaint trends",
                "CQC readiness",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[rgba(18,53,47,0.05)] px-4 py-3 text-center text-[0.78rem] uppercase tracking-[0.12em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="platform" className="pt-24">
            <SectionHeading
              eyebrow="Why it exists"
              title="Most agencies can record what happened. Few can see what is about to go wrong."
              body="CareSight AI sits above spreadsheets, rota tools, and legacy care systems to turn fragmented operational data into clear risk signals and next actions."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {painPoints.map((item) => (
                <GlassCard key={item.title}>
                  <h3 className="mb-2 text-base">{item.title}</h3>
                  <p className="leading-[1.65] text-moss">{item.body}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          <section id="features" className="pt-24">
            <SectionHeading
              eyebrow="MVP capabilities"
              title="An intelligence layer for operations, workforce risk, and compliance."
            />
            <div className="grid gap-4 lg:grid-cols-[1.1fr_repeat(2,minmax(0,1fr))]">
              {features.map((item) => (
                <GlassCard
                  key={item.title}
                  className={
                    item.featured
                      ? "bg-[radial-gradient(circle_at_top_right,rgba(219,109,63,0.18),transparent_36%),linear-gradient(180deg,rgba(255,250,242,0.86),rgba(255,255,255,0.8))] lg:row-span-2"
                      : "min-h-56"
                  }
                >
                  <p className="mb-3 text-[0.78rem] uppercase tracking-[0.12em] text-[#b84f27]">
                    {item.label}
                  </p>
                  <h3 className="mb-2 text-base">{item.title}</h3>
                  <p className="leading-[1.65] text-moss">{item.body}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          <section id="how-it-works" className="pt-24">
            <SectionHeading
              eyebrow="How it works"
              title="From scattered care operations data to clear intervention signals."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {workflowSteps.map((item) => (
                <GlassCard key={item.step}>
                  <span className="mb-5 inline-flex font-serif text-4xl text-clay">{item.step}</span>
                  <h3 className="mb-2 text-base">{item.title}</h3>
                  <p className="leading-[1.65] text-moss">{item.body}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          <section className="pt-24">
            <SectionHeading
              eyebrow="Built for"
              title="The leaders responsible for care quality, staffing resilience, and regulatory confidence."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {audiences.map((item) => (
                <GlassCard key={item.title}>
                  <h3 className="mb-2 text-base">{item.title}</h3>
                  <p className="leading-[1.65] text-moss">{item.body}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          <section id="outcomes" className="pt-24">
            <SectionHeading
              eyebrow="What changes"
              title="Move from reactive firefighting to proactive operational control."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {outcomes.map((item) => (
                <GlassCard key={item.title}>
                  <strong className="mb-2 block text-base">{item.title}</strong>
                  <p className="leading-[1.65] text-moss">{item.body}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          <section className="pt-24">
            <SectionHeading
              eyebrow="Roadmap direction"
              title="Starting with practical heuristics, built to grow into predictive care operations AI."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {roadmap.map((item) => (
                <GlassCard key={item.phase}>
                  <p className="mb-3 text-[0.76rem] uppercase tracking-[0.14em] text-[#b84f27]">
                    {item.phase}
                  </p>
                  <strong className="mb-2 block text-base">{item.title}</strong>
                  <span className="leading-[1.65] text-moss">{item.body}</span>
                </GlassCard>
              ))}
            </div>
          </section>

          <section id="contact" className="grid gap-4 pb-20 pt-24 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="rounded-[32px] border border-white/75 bg-[rgba(255,251,245,0.78)] p-6 shadow-soft">
              <p className="mb-4 text-[0.78rem] uppercase tracking-[0.18em] text-[#b84f27]">
                Pilot with us
              </p>
              <h2 className="max-w-[16ch] font-serif text-[clamp(2rem,4vw,4.2rem)] leading-[0.98] tracking-[-0.03em]">
                Bring predictive operational intelligence into your care agency.
              </h2>
              <p className="mt-4 text-[1.04rem] leading-[1.65] text-moss">
                CareSight AI is designed for agencies that want fewer surprises, stronger
                compliance readiness, and better visibility into frontline delivery risk.
              </p>
            </div>

            <form className="grid gap-4 rounded-[32px] border border-white/75 bg-[rgba(255,251,245,0.78)] p-6 shadow-soft">
              <label className="grid gap-2 text-pine">
                Name
                <input
                  type="text"
                  placeholder="Care leader name"
                  className="min-h-12 rounded-2xl border border-[rgba(24,50,44,0.12)] bg-[#fffdf8] px-4 py-3 text-pine outline-none placeholder:text-moss/70"
                />
              </label>
              <label className="grid gap-2 text-pine">
                Work email
                <input
                  type="email"
                  placeholder="name@agency.co.uk"
                  className="min-h-12 rounded-2xl border border-[rgba(24,50,44,0.12)] bg-[#fffdf8] px-4 py-3 text-pine outline-none placeholder:text-moss/70"
                />
              </label>
              <label className="grid gap-2 text-pine">
                Agency size
                <select className="min-h-12 rounded-2xl border border-[rgba(24,50,44,0.12)] bg-[#fffdf8] px-4 py-3 text-pine outline-none">
                  <option>1-25 staff</option>
                  <option>26-100 staff</option>
                  <option>101-250 staff</option>
                  <option>250+ staff</option>
                </select>
              </label>
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#db6d3f,#f09a65)] px-6 py-3 text-[#fffaf3] shadow-[0_14px_30px_rgba(184,79,39,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Request a pilot conversation
              </button>
            </form>
          </section>

          <footer className="flex flex-col justify-between gap-4 pb-10 text-moss md:flex-row">
            <p>CareSight AI by CeeqCare</p>
            <p>Operational intelligence for domiciliary care agencies in the UK.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
