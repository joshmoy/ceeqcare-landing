type NavItem = {
  href: string;
  label: string;
  cta?: boolean;
};

export const navItems: NavItem[] = [
  { href: "#platform", label: "Platform" },
  { href: "#signals", label: "Signals" },
  { href: "#story", label: "Story" },
] as const;

export const mobileNavItems: NavItem[] = [
  ...navItems,
  { href: "#contact", label: "Book a pilot", cta: true },
] as const;

export const heroStats = [
  ["Late visits", "14 this week"],
  ["Fatigue alerts", "6 carers flagged"],
  ["High-risk clients", "3 need review"],
  ["Evidence ready", "87% assembled"],
] as const;

export const heroTopics = [
  "Missed visits",
  "Fatigue detection",
  "Complaint drift",
  "CQC readiness",
] as const;

export const marqueeItems = [
  "Missed visit visibility",
  "Burnout detection",
  "Complaint intelligence",
  "Incident escalation",
  "CQC reporting confidence",
  "Rota pressure mapping",
  "Travel-heavy schedule alerts",
] as const;

export const signalCards = [
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
] as const;

export const storyCards = [
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
] as const;

export const audienceCards = [
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
] as const;

export const testimonials = [
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
] as const;

export const scrubCopy =
  "CareSight AI gives care leaders one operating surface for workforce strain, missed visits, complaint drift, incident escalation, and CQC readiness, so intervention happens before the service slips.";
