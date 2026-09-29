import type { Metadata } from "next";
import Link from "next/link";
import {
  aboutAnchors,
  whoWeAreMetrics,
  aboutPillars,
  epcStages,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About Us | InvoTech Holdings - Clean Energy Engineering",
  description:
    "Learn more about InvoTech Holdings, our integrated technology, industrial-grade renewable energy architectures, precision photovoltaic EPC deployment, and corporate values.",
};

export default function AboutPage() {
  return (
    <main className="pt-20 bg-surface">
      {/* 01 HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden subtle-mesh border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Corporate Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              ABOUT INVOTECH HOLDINGS • CORPORATE PROFILE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-plus-jakarta text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Engineering Sri Lanka&apos;s Clean Energy Transition
          </h1>

          {/* Executive Mission Subtitle */}
          <p className="text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-12">
            InvoTech Holdings delivers industrial-grade renewable energy architectures, precision photovoltaic EPC deployment, and high-yield infrastructure for sovereign resilience.
          </p>

          {/* Value Anchors Banner */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 bg-surface-container-lowest p-3 rounded-2xl border border-slate-200/80 shadow-sm shadow-slate-200/50">
            {aboutAnchors.map((anchor) => (
              <div
                key={anchor.title}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-low border border-slate-100 text-left"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    anchor.accent === "tertiary"
                      ? "bg-tertiary/10 text-tertiary"
                      : anchor.accent === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {anchor.icon}
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                    {anchor.badge}
                  </span>
                  <span className="text-sm font-bold text-on-surface">
                    {anchor.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 WHO WE ARE */}
      <section className="py-24 bg-surface-container-lowest border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Narrative Details Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase">
                <span>01</span>
                <span className="w-4 h-px bg-primary" />
                <span>WHO WE ARE</span>
              </div>
              <h2 className="font-plus-jakarta text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
                Built for Industrial Longevity &amp; Island-Specific Irradiance
              </h2>
              <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
                <p>
                  InvoTech Holdings operates as a dedicated clean energy engineering partner, designing resilient solar infrastructure tailored specifically to the challenging tropical climatic conditions and regulatory landscape of Sri Lanka.
                </p>
                <p>
                  We bypass standard consumer configurations in favor of hardened commercial architectures—employing heavy-anodized marine-grade mounting structures, N-Type TOPCon bifacial modules with high temperature tolerance coefficients, and high-efficiency hybrid inverters built to withstand grid fluctuations.
                </p>
              </div>

              {/* Historical Milestone Card */}
              <div className="p-4 rounded-xl bg-surface-container-low border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">
                    history
                  </span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-on-surface block">
                    Historical Milestone Dossier
                  </span>
                  <span className="text-on-surface-variant leading-snug">
                    Verified operational timeline and continuous multi-megawatt commercial portfolio rollout across primary industrial hubs.
                  </span>
                </div>
              </div>

              {/* Metric Callout Badges */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100">
                {whoWeAreMetrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="block text-2xl lg:text-3xl font-extrabold text-on-surface font-plus-jakarta">
                      {metric.value}
                    </span>
                    <span className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mt-1">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Showcase Right Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-inverse-surface group">
                <img
                  alt="Photovoltaic solar array installed on commercial rooftop facility"
                  className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsYVFU6pwtZxi_YCDDVNikYLiriQsHFv5PCOF5Azu5e5FyyqZXfi-hXuPKnvkDlDWBXVVEh2XcPI0MCLC03Hr2Ij_Ucsm9AOmSZBpi64VRjpsYQj-mpbM0C5vCkPoi02b_HgMC9Y2ivuVyl0ByPnf6TbJQaAGE4KV2au-iJbIFHIAnhmW4HpFqALPJ7iKBmsR8eo2gPA2gO4wDXPub6klmong-gxZcUPGnvmoVHWJsbl5kDVaHLOWxIe1vlYWORnJabw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        wb_sunny
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-on-surface font-plus-jakarta">
                        Photovoltaic Array Alignment
                      </h4>
                      <p className="text-xs text-on-surface-variant">
                        Optimized for equatorial tilt &amp; high humidity
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">
                    Tropical Standard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 MISSION, VISION & PRINCIPLES */}
      <section className="py-24 bg-surface-container-low border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
              <span>02</span>
              <span className="w-4 h-px bg-primary" />
              <span>INSTITUTIONAL PURPOSE</span>
            </div>
            <h2 className="font-plus-jakarta text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
              Mission, Vision &amp; Core Principles
            </h2>
            <p className="text-base text-on-surface-variant">
              Structural certainty guiding Sri Lanka&apos;s renewable industrialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-surface-container-lowest rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${
                      pillar.accent === "tertiary"
                        ? "bg-tertiary/10 border-tertiary/20 text-tertiary"
                        : pillar.accent === "secondary"
                        ? "bg-secondary/10 border-secondary/20 text-secondary"
                        : "bg-primary/10 border-primary/20 text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className="font-plus-jakarta text-xl font-bold text-on-surface mb-1">
                    {pillar.title}
                  </h3>
                  <span className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </span>

                  {pillar.description && (
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  )}

                  {pillar.principles && (
                    <ul className="space-y-3 text-xs sm:text-sm text-on-surface-variant mb-6">
                      {pillar.principles.map((item) => (
                        <li key={item.title} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>
                            <strong className="text-on-surface">
                              {item.title}:
                            </strong>{" "}
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="p-3 rounded-lg bg-surface-container-low border border-slate-100">
                  <span className="block text-[11px] font-bold text-on-surface-variant uppercase">
                    {pillar.objectiveLabel}
                  </span>
                  <span className="text-xs font-bold text-on-surface">
                    {pillar.objectiveText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 EPC METHODOLOGY */}
      <section className="py-24 bg-surface-container-lowest border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
              <span>03</span>
              <span className="w-4 h-px bg-primary" />
              <span>EPC METHODOLOGY</span>
            </div>
            <h2 className="font-plus-jakarta text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
              Our Engineering Approach
            </h2>
            <p className="text-base text-on-surface-variant">
              A four-stage systematic deployment lifecycle ensuring seamless grid integration and maximized kWh generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {epcStages.map((stage) => (
              <div
                key={stage.number}
                className="bg-surface-container-lowest rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-4xl font-extrabold text-primary/70 block mb-4 group-hover:text-primary transition-colors font-plus-jakarta">
                    {stage.number}
                  </span>
                  <h3 className="font-plus-jakarta text-lg font-bold text-on-surface mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-primary">
                  <span className="material-symbols-outlined text-[16px]">
                    {stage.icon}
                  </span>
                  <span>{stage.footerLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 CTA SECTION */}
      <section className="py-20 bg-surface-container-low border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest border border-slate-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[11px] font-bold tracking-wider text-on-surface uppercase">
              DIRECT TECHNICAL ENGAGEMENT
            </span>
          </div>
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight max-w-3xl mx-auto mb-5 leading-tight">
            Partner with InvoTech on Your Renewable Journey
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Consult with our licensed power engineers to evaluate rooftop solar feasibility, reduce peak tariff exposure, and achieve ESG compliance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-on-primary bg-primary hover:bg-primary-container shadow-md transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[18px]">
                event
              </span>
              <span>Schedule Corporate Consultation</span>
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-on-surface bg-surface-container-lowest hover:bg-surface-container border border-slate-300 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[18px]">
                explore
              </span>
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
