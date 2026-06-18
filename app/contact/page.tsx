"use client";

import { ArrowLeft, ArrowRight, Calendar, Clock3, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[600px] rounded-full bg-sky-400/4 blur-[100px]" />
      </div>

      {/* Floating widget — readiness */}
      <div className="pointer-events-none absolute left-[calc(50%-520px)] top-28 hidden w-40 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl lg:block">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-white/30">
          Project Score
        </p>
        <p className="text-[28px] font-semibold leading-none tracking-tight text-white/70">
          98
        </p>
        <p className="mt-0.5 text-[10px] text-white/25">Readiness index</p>

        <div className="mt-3 flex h-9 items-end gap-1">
          {[40, 55, 50, 72, 100].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background:
                  i === 4 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating widget — availability */}
      <div className="pointer-events-none absolute bottom-40 left-8 hidden w-44 items-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl lg:flex">
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#30d158]" />
        <div>
          <p className="text-[12px] font-medium text-white/70">Available now</p>
          <p className="text-[11px] text-white/40">Responding within 24 hrs</p>
        </div>
      </div>

      <div className="relative z-10">

        {/* Header */}
        <header className="mx-auto flex max-w-6xl items-center justify-between border-b border-white/[0.07] px-10 py-7">
          <a href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#f5f5f7] text-sm font-semibold text-black">
              W
            </span>
            <span className="text-[15px] font-medium tracking-tight text-white/90">
              Waseem Studio
            </span>
          </a>

          <a
            href="/"
            className="flex items-center gap-1.5 text-[13px] text-white/40 transition hover:text-white/75"
          >
            <ArrowLeft size={14} />
            Back to home
          </a>
        </header>

        {/* Main */}
        <section className="mx-auto grid max-w-6xl gap-16 px-10 pb-24 pt-16 lg:grid-cols-[1fr_460px]">

          {/* Left */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-4 bg-white/20" />
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">
                Start a project
              </span>
            </div>

            <h1 className="max-w-md text-5xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#f5f5f7] lg:text-6xl">
              Build something{" "}
              <span className="text-white/30">that wins.</span>
            </h1>

            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/40">
              Whether you&apos;re launching a service business, scaling a SaaS,
              or automating internal workflows — describe your goal and I&apos;ll
              map the most practical path forward.
            </p>

            <div className="mt-12 flex flex-col gap-5">
              {[
                { icon: Clock3, text: "Response within 24 hours" },
                { icon: Calendar, text: "Free project consultation" },
                { icon: Mail, text: "mmuhammadwaseem2004@gmail.com" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/[0.09] text-white/50">
                    <Icon size={14} />
                  </div>
                  <span className="text-[13px] text-white/45">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-[20px] border border-white/[0.09] bg-white/[0.03] p-9 backdrop-blur-2xl">
            <h2 className="text-[22px] font-semibold tracking-tight text-[#f5f5f7]">
              Tell me about your project
            </h2>
            <p className="mb-7 mt-1 text-[13px] text-white/35">
              I&apos;ll get back to you within a day.
            </p>

            <form className="flex flex-col gap-3">
              {/* Row */}
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="Your name" type="text" />
                <Input placeholder="Company (optional)" type="text" />
              </div>

              <Input placeholder="Email address" type="email" />

              <select className="w-full cursor-pointer rounded-[10px] border border-white/[0.09] bg-white/[0.04] px-3.5 py-3 text-[14px] font-normal text-white/50 outline-none transition focus:border-white/25 focus:bg-white/[0.06]">
                <option value="" disabled>
                  Type of project
                </option>
                {[
                  "Website Design",
                  "Landing Page",
                  "Web Application",
                  "CRM / Dashboard",
                  "Automation System",
                  "Ongoing Partnership",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>

              <textarea
                rows={5}
                placeholder="Describe your project — goals, timeline, and any context that matters..."
                className="w-full resize-none rounded-[10px] border border-white/[0.09] bg-white/[0.04] px-3.5 py-3 text-[14px] text-white/80 placeholder-white/20 outline-none transition focus:border-white/25 focus:bg-white/[0.06]"
              />

              <button
                type="submit"
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#f5f5f7] py-3.5 text-[14px] font-medium text-black transition hover:bg-white active:scale-[0.985]"
              >
                Send Inquiry
                <span className="grid h-5 w-5 place-items-center rounded-full bg-black/10">
                  <ArrowRight size={11} />
                </span>
              </button>
            </form>

            <p className="mt-5 border-t border-white/[0.07] pt-5 text-[11px] leading-relaxed text-white/25">
              By submitting, you agree to be contacted regarding your project
              inquiry. No spam — ever.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

/* Reusable input */
function Input({ placeholder, type }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-[10px] border border-white/[0.09] bg-white/[0.04] px-3.5 py-3 text-[14px] text-white/80 placeholder-white/20 outline-none transition focus:border-white/25 focus:bg-white/[0.06]"
    />
  );
}