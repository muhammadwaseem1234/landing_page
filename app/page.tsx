import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Code2,
  Gauge,
  Layers3,
  MessageSquare,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import LandingExperience from "./landing-experience";

const proofPoints = [
  "Conversion-first landing pages",
  "Next.js builds",
  "Booking and lead flows",
  "CMS-ready content",
  "Performance tuning",
  "Launch support",
];

const services = [
  {
    icon: Layers3,
    title: "Sales websites",
    copy: "Polished landing pages, service pages, and portfolio funnels that explain your offer clearly and move visitors toward an inquiry.",
    tags: ["Messaging", "Design", "Copy flow"],
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive web apps",
    copy: "Fast Next.js interfaces for dashboards, internal tools, portals, and interactive client experiences that feel reliable on every screen.",
    tags: ["Next.js", "React", "Mobile UI"],
  },
  {
    icon: Workflow,
    title: "Automation systems",
    copy: "Forms, CRMs, emails, analytics, and payment touchpoints connected so the website works like a business system.",
    tags: ["Integrations", "Analytics", "Ops"],
  },
];

const process = [
  {
    title: "Map the offer",
    copy: "Clarify the audience, goals, objections, and calls to action before design work starts.",
  },
  {
    title: "Prototype fast",
    copy: "Turn the strategy into a visual layout, interaction plan, and content rhythm for quick review.",
  },
  {
    title: "Build clean",
    copy: "Ship a responsive, maintainable Next.js site with tuned performance and production-ready polish.",
  },
  {
    title: "Launch and improve",
    copy: "Connect analytics, test the critical paths, and refine after real visitors interact with the site.",
  },
];

const offers = [
  {
    title: "Launch Page",
    price: "1-2 weeks",
    copy: "A sharp single-page site for a new offer, event, service, or campaign.",
  },
  {
    title: "Business Website",
    price: "3-5 weeks",
    copy: "A multi-section marketing site with conversion strategy, responsive design, and launch support.",
  },
  {
    title: "Growth Partner",
    price: "Monthly",
    copy: "Ongoing design, development, analytics, and optimization for teams that want momentum.",
  },
];

export default function Home() {
  return (
    <LandingExperience>
      <main className="min-h-screen bg-[#f7f5ef] text-[#171814]">
        <section className="agency-hero hero relative isolate overflow-hidden px-5 pt-5 text-white sm:px-8 lg:px-12">
          <div className="scene-layer pointer-events-none absolute inset-0 -z-10">
            <div className="hero-grid" />
            <div className="hero-code hero-window floating-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="code-lines">
                <span className="w-[72%]" />
                <span className="w-[46%]" />
                <span className="w-[86%]" />
                <span className="w-[58%]" />
                <span className="w-[68%]" />
              </div>
            </div>
            <div className="hero-dashboard hero-window floating-window">
              <div className="dashboard-head">
                <span>Launch Score</span>
                <strong>94</strong>
              </div>
              <div className="dashboard-chart">
                <span style={{ height: "45%" }} />
                <span style={{ height: "64%" }} />
                <span style={{ height: "52%" }} />
                <span style={{ height: "78%" }} />
                <span style={{ height: "88%" }} />
              </div>
              <div className="dashboard-row">
                <span>Speed</span>
                <b>Green</b>
              </div>
              <div className="dashboard-row">
                <span>Leads</span>
                <b>Ready</b>
              </div>
            </div>
            <div className="hero-device hero-window floating-window">
              <div className="device-notch" />
              <div className="device-screen">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="hero-flow">
              <span className="pulse-node" />
              <span />
              <span className="pulse-node" />
              <span />
              <span className="pulse-node" />
            </div>
          </div>

          <header
            className="mx-auto flex max-w-7xl items-center justify-between border border-white/[0.14] bg-black/[0.18] px-4 py-3 backdrop-blur-md"
            data-animate="nav"
          >
            <a className="flex items-center gap-3" href="#top" aria-label="Waseem Studio home">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-[#e6ff55] text-sm font-black text-[#171814]">
                W
              </span>
              <span className="font-semibold">Waseem Studio</span>
            </a>
            <nav className="hidden items-center gap-7 text-sm text-white/[0.74] md:flex">
              <a className="transition hover:text-white" href="#services">
                Services
              </a>
              <a className="transition hover:text-white" href="#proof">
                Proof
              </a>
              <a className="transition hover:text-white" href="#process">
                Process
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
            <a
              className="hidden items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#171814] transition hover:bg-[#e6ff55] sm:flex"
              href="#contact"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Start a Project
            </a>
          </header>

          <div className="mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-center pb-16 pt-20 sm:pb-20 lg:pb-24">
            <div className="max-w-4xl">
              <p
                className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/[0.18] bg-white/[0.10] px-3 py-2 text-sm font-medium text-white/[0.82] backdrop-blur"
                data-animate="hero-kicker"
              >
                <ShieldCheck className="h-4 w-4 text-[#7fffd4]" aria-hidden="true" />
                Independent web partner for founders and service teams
              </p>
              <h1
                className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
                data-animate="hero-title"
              >
                Solo Web Developer for Sharp, Revenue-Ready Websites
              </h1>
              <p
                className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.76] sm:text-xl"
                data-animate="hero-copy"
              >
                I design and build fast, persuasive websites with clear positioning,
                smooth interactions, and the technical setup needed to turn visits into
                serious client conversations.
              </p>
              <div
                className="mt-9 flex flex-col gap-3 sm:flex-row"
                data-animate="hero-cta"
              >
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#e6ff55] px-5 py-3 font-semibold text-[#171814] transition hover:bg-white"
                  href="#contact"
                >
                  Plan My Website
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.22] bg-white/[0.10] px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/[0.16]"
                  href="#proof"
                >
                  View Capabilities
                  <Gauge className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-[#d9d5ca] bg-[#fffbf0] py-4">
          <div className="marquee-track flex w-max gap-4 whitespace-nowrap text-sm font-semibold text-[#35362f]">
            {[...proofPoints, ...proofPoints].map((point, index) => (
              <span
                className="rounded-md border border-[#d9d5ca] bg-white px-4 py-2"
                key={`${point}-${index}`}
              >
                {point}
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase text-[#c34b27]">
                What I can build
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-[#171814] sm:text-5xl">
                A website that looks credible and works like a sales system.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    className="reveal service-card group border border-[#d9d5ca] bg-white p-6 shadow-[0_18px_50px_rgba(36,34,25,0.08)]"
                    key={service.title}
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-[#171814] text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#171814]">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[#5f6158]">{service.copy}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          className="rounded-md bg-[#f0eee5] px-3 py-1 text-sm font-medium text-[#4b4d45]"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ServiceVisual index={index} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="proof" className="bg-[#171814] px-5 py-20 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="reveal">
              <p className="mb-3 text-sm font-bold uppercase text-[#7fffd4]">
                Capability snapshot
              </p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Prospects should see your value before they ever book a call.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-white/[0.70]">
                I use design systems, persuasive page structure, motion, analytics,
                and clean front-end engineering to make your offer easier to trust
                and easier to buy.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Clear offer hierarchy",
                  "Responsive layouts",
                  "Animated proof points",
                  "Lead capture setup",
                ].map((item) => (
                  <div className="flex items-center gap-3 text-white/[0.82]" key={item}>
                    <CheckCircle2 className="h-5 w-5 text-[#e6ff55]" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal section-visual dashboard-shell border border-white/[0.12] bg-[#22231d] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.10] pb-4">
                <div>
                  <p className="text-sm text-white/[0.52]">Website Readiness</p>
                  <h3 className="text-2xl font-semibold">Offer-to-launch map</h3>
                </div>
                <div className="rounded-md bg-[#e6ff55] px-3 py-2 text-sm font-bold text-[#171814]">
                  Build Ready
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5">
                  {[
                    ["Messaging clarity", "92%"],
                    ["Lead path strength", "86%"],
                    ["Performance budget", "95%"],
                    ["Launch checklist", "78%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm text-white/[0.68]">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="metric-bar h-3 overflow-hidden rounded-md bg-white/[0.10]">
                        <span
                          className="metric-fill block h-full rounded-md bg-[#7fffd4]"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="conversion-funnel">
                  <div>
                    <span>Visitor</span>
                    <strong>100%</strong>
                  </div>
                  <div>
                    <span>Inquiry</span>
                    <strong>38%</strong>
                  </div>
                  <div>
                    <span>Call</span>
                    <strong>18%</strong>
                  </div>
                  <div>
                    <span>Client</span>
                    <strong>9%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase text-[#c34b27]">
                  Delivery process
                </p>
                <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  One accountable builder from strategy through launch.
                </h2>
              </div>
              <a
                className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-[#171814] px-5 py-3 font-semibold text-white transition hover:bg-[#c34b27]"
                href="#contact"
              >
                Schedule Discovery
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <article
                  className="process-step border border-[#d9d5ca] bg-white p-6"
                  key={step.title}
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-md bg-[#e6ff55] text-sm font-black text-[#171814]">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-4 leading-7 text-[#5f6158]">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffbf0] px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase text-[#c34b27]">
                Engagement options
              </p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Flexible scopes for where your business is right now.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {offers.map((offer) => (
                <article
                  className="offer-card border border-[#d9d5ca] bg-white p-6 shadow-[0_18px_50px_rgba(36,34,25,0.08)]"
                  key={offer.title}
                >
                  <Rocket className="h-6 w-6 text-[#c34b27]" aria-hidden="true" />
                  <h3 className="mt-5 text-2xl font-semibold">{offer.title}</h3>
                  <p className="mt-2 text-sm font-bold uppercase text-[#5f6158]">
                    {offer.price}
                  </p>
                  <p className="mt-5 leading-7 text-[#5f6158]">{offer.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 border border-[#d9d5ca] bg-[#171814] p-6 text-white shadow-[0_24px_80px_rgba(36,34,25,0.16)] md:grid-cols-[1fr_0.82fr] md:p-10">
            <div className="reveal">
              <p className="mb-3 text-sm font-bold uppercase text-[#7fffd4]">
                Start here
              </p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Bring the idea. I will turn it into a clear, credible web presence.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/[0.70]">
                Send a short note with your goal, timeline, and the kind of website
                you need. I will respond with the most practical next step.
              </p>
              <a
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-[#e6ff55] px-5 py-3 font-semibold text-[#171814] transition hover:bg-white"
                href="mailto:mmuhammadwaseem2004@gmail.com"
              >
                Email Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="reveal contact-panel border border-white/[0.12] bg-white/[0.08] p-5">
              <div className="flex items-center gap-3 border-b border-white/[0.10] pb-4">
                <Code2 className="h-5 w-5 text-[#7fffd4]" aria-hidden="true" />
                <span className="font-semibold">Project fit checklist</span>
              </div>
              <ul className="mt-5 space-y-4 text-white/[0.78]">
                {[
                  "You need a new site or a serious upgrade",
                  "You want clean design and real front-end quality",
                  "You care about leads, credibility, and speed",
                  "You prefer one direct technical partner",
                ].map((item) => (
                  <li className="flex gap-3" key={item}>
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#e6ff55]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </LandingExperience>
  );
}

function ServiceVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="service-visual mt-8">
        <div className="mini-browser">
          <div className="mini-top" />
          <div className="mini-hero" />
          <div className="mini-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="mini-cta" />
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="service-visual mt-8">
        <div className="mini-dashboard">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  return (
    <div className="service-visual mt-8">
      <div className="mini-workflow">
        <span className="pulse-node" />
        <i />
        <span />
        <i />
        <span className="pulse-node" />
      </div>
    </div>
  );
}
