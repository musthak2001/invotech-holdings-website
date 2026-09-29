import type { Metadata } from "next";
import Link from "next/link";
import {
  servicesData,
  serviceProcessSteps,
  technicalCapabilities,
  serviceSlas,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services & Capabilities | InvoTech Holdings",
  description:
    "Explore InvoTech Holdings' turnkey solutions across Renewable Energy & Solar EPC, Integrated Infrastructure, Climate Technology, and Fintech Ecosystems.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20 bg-surface">
      {/* ========================================================================= */}
      {/* 01 HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-surface via-surface-container-low to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-primary uppercase">
              INVOTECH HOLDINGS • SERVICES &amp; CAPABILITIES
            </span>
          </div>

          {/* Main Page Title */}
          <h1 className="font-plus-jakarta text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Turnkey Energy &amp; Enterprise Technology Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-12">
            Delivering high-impact engineering across Renewable Energy &amp; Solar EPC, AI IoT Infrastructure, HVAC Climate Tech, and Fintech Ecosystems.
          </p>

          {/* Quick Metrics Bar */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 bg-surface-container-lowest p-3 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  business_center
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  STRUCTURE
                </span>
                <span className="text-sm font-bold text-on-surface">
                  4 Strategic Business Units
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low text-left">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  sensors
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  TELEMETRY
                </span>
                <span className="text-sm font-bold text-on-surface">
                  24/7 Cloud Monitoring
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-low text-left">
              <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                  COMPLIANCE
                </span>
                <span className="text-sm font-bold text-on-surface">
                  CEB &amp; LECO Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 STRATEGIC BUSINESS UNITS (SBUs)                                         */}
      {/* ========================================================================= */}
      <section className="py-24 bg-surface-container-lowest border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
              <span>01</span>
              <span className="w-4 h-px bg-primary" />
              <span>CORE VERTICALS</span>
            </div>
            <h2 className="font-plus-jakarta text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
              Strategic Business Units
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              InvoTech Holdings operates through four specialized business divisions engineered to empower modern infrastructure, commercial energy, and enterprise operations.
            </p>
          </div>

          {/* SBU Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((unit) => (
              <div
                key={unit.id}
                className="bg-surface-container-lowest rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        unit.accent === "tertiary"
                          ? "bg-tertiary/10 text-tertiary border-tertiary/20"
                          : unit.accent === "secondary"
                          ? "bg-secondary/10 text-secondary border-secondary/20"
                          : "bg-primary/10 text-primary border-primary/20"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {unit.icon}
                      </span>
                      <span>{unit.badge}</span>
                    </span>

                    <span className="text-xs font-semibold px-2.5 py-1 bg-surface-container-low text-on-surface-variant rounded-md border border-slate-100">
                      {unit.highlightMetric}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-plus-jakarta text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {unit.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
                    {unit.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 pt-4 border-t border-slate-100 text-xs sm:text-sm text-on-surface">
                    {unit.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${
                            unit.accent === "tertiary"
                              ? "text-tertiary"
                              : unit.accent === "secondary"
                              ? "text-secondary"
                              : "text-primary"
                          }`}
                        >
                          check_circle
                        </span>
                        <span className="font-medium text-on-surface">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Link */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-sm font-bold text-on-surface group-hover:text-primary"
                >
                  <span>Inquire About {unit.title}</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 SERVICE PROCESS WORKFLOW                                                */}
      {/* ========================================================================= */}
      <section className="py-24 bg-surface-container-low border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
              <span>02</span>
              <span className="w-4 h-px bg-primary" />
              <span>DEPLOYMENT LIFECYCLE</span>
            </div>
            <h2 className="font-plus-jakarta text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
              Our 4-Stage Engineering Workflow
            </h2>
            <p className="text-base text-on-surface-variant">
              From site feasibility and 3D irradiance modeling to turnkey commissioning and SCADA telemetry.
            </p>
          </div>

          {/* Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceProcessSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="bg-surface-container-lowest rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-primary font-plus-jakarta">
                      {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        {stepItem.icon}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-plus-jakarta text-base font-bold text-on-surface mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-4">
                    {stepItem.description}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-primary tracking-wider uppercase pt-3 border-t border-slate-100">
                  Phase Completed Verified
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 SPECIALIZED TECHNICAL CAPABILITIES                                      */}
      {/* ========================================================================= */}
      <section className="py-24 bg-surface-container-lowest border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
              <span>03</span>
              <span className="w-4 h-px bg-primary" />
              <span>SPECIALIZATION</span>
            </div>
            <h2 className="font-plus-jakarta text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
              Advanced Technical Capabilities
            </h2>
            <p className="text-base text-on-surface-variant">
              Engineered specifically for island tropical conditions, equatorial irradiance, and high-tier enterprise requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-surface-container-low border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                    <span className="material-symbols-outlined text-[22px]">
                      {cap.icon}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-1">
                    {cap.category}
                  </span>
                  <h3 className="font-plus-jakarta text-base font-bold text-on-surface mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-surface-container-lowest text-xs font-semibold text-on-surface border border-slate-200 w-fit">
                  {cap.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 SERVICE LEVEL AGREEMENTS (SLAs)                                        */}
      {/* ========================================================================= */}
      <section className="py-24 bg-surface-container-low border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
              <span>04</span>
              <span className="w-4 h-px bg-primary" />
              <span>QUALITY ASSURANCE</span>
            </div>
            <h2 className="font-plus-jakarta text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4">
              Service Guarantees &amp; Standards
            </h2>
            <p className="text-base text-on-surface-variant">
              Long-term commitment ensuring capital protection, continuous power generation, and prompt technical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceSlas.map((sla) => (
              <div
                key={sla.title}
                className="bg-surface-container-lowest rounded-2xl p-8 border border-slate-200 shadow-sm text-center flex flex-col items-center justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                    <span className="material-symbols-outlined text-[28px]">
                      {sla.icon}
                    </span>
                  </div>
                  <h3 className="font-plus-jakarta text-xl font-bold text-on-surface mb-2">
                    {sla.title}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    {sla.guarantee}
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {sla.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 CALL TO ACTION SECTION                                                 */}
      {/* ========================================================================= */}
      <section className="py-20 bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-surface-container-lowest uppercase">
              SRI LANKAN ENGINEERING INQUIRIES
            </span>
          </div>

          <h2 className="font-plus-jakarta text-3xl sm:text-5xl font-extrabold text-surface-container-lowest tracking-tight max-w-3xl mx-auto mb-5 leading-tight">
            Ready to Evaluate Your Clean Energy Potential?
          </h2>

          <p className="text-outline-variant text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Schedule a corporate site audit with our senior power engineers to analyze rooftop irradiance, tariff exposure, and energy ROI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-on-primary bg-primary hover:bg-primary-container shadow-lg transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">
                event
              </span>
              <span>Schedule Technical Consultation</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-surface-container-lowest bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">
                download
              </span>
              <span>Download SBU Capabilities</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}