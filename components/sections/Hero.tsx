
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-inverse-surface text-inverse-on-surface overflow-hidden flex flex-col justify-between">
      {/* Background Video Container with Fallback Poster */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida/AEtjO1W0N6sLyr8dalWzq91tJ7ETfTKhdpz1AT8gAgD7N_tO-zptCYsdqJj-g9-MXUsuKOqiSE0yNPRilWgtaaeNCI9DqpK-mO7Dmq7FXKnHA-x--3mmlbYvlMu6N5PdLXaqTS4biW_YL_JU7aTEoVfYwifnpreHl-_HGGC-9ah2Eb_Udb6IRtlQPnP3kiDhF0IZO8xb81tWoHMqc1SdXl_GaBHq2HLw6TW_QcFH4GRRMRPGaLAxiPjwcfoGpJQ')",
        }}
      >
        <video
          autoPlay
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          loop
          muted
          playsInline
          poster="https://lh3.googleusercontent.com/aida/AEtjO1W0N6sLyr8dalWzq91tJ7ETfTKhdpz1AT8gAgD7N_tO-zptCYsdqJj-g9-MXUsuKOqiSE0yNPRilWgtaaeNCI9DqpK-mO7Dmq7FXKnHA-x--3mmlbYvlMu6N5PdLXaqTS4biW_YL_JU7aTEoVfYwifnpreHl-_HGGC-9ah2Eb_Udb6IRtlQPnP3kiDhF0IZO8xb81tWoHMqc1SdXl_GaBHq2HLw6TW_QcFH4GRRMRPGaLAxiPjwcfoGpJQ"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-solar-panels-in-a-large-field-under-the-sun-41880-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Ambient Emerald Glow Overlay */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-primary/25 blur-[140px] pointer-events-none z-10" />

      {/* Directional Dark Gradient Overlay for Maximum Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/40 pointer-events-none z-10" />

      {/* Bottom Gradient Transition */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent pointer-events-none z-10" />

      {/* Subtle Background Geometric Grid Line Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-grid-cinematic"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect fill="url(#hero-grid-cinematic)" width="100%" height="100%" />
        </svg>
      </div>

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-[1280px] w-full mx-auto px-4 sm:px-8 pt-20 lg:pt-28 pb-12 flex-1 flex items-center">
        <div className="max-w-2xl flex flex-col items-start gap-4">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest/25 backdrop-blur-md border border-white/10 shadow-sm">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-fixed shadow-[0_0_8px_#85f8c4] animate-pulse" />
            <span className="text-xs tracking-wider uppercase text-primary-fixed font-semibold">
              SMART ENERGY • SMART ENGINEERING
            </span>
          </div>

          {/* Main Headline with Emerald Accent */}
          <h1 className="font-plus-jakarta text-3xl sm:text-5xl lg:text-6xl tracking-tight text-surface-container-lowest font-extrabold leading-[1.1]">
            Powering a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed via-inverse-primary to-primary-fixed">
              Smarter
            </span>
            , Sustainable Future
          </h1>

          {/* Supporting Text */}
          <p className="text-lg text-surface-container-highest/90 max-w-xl font-light leading-relaxed">
            Reliable solar and energy solutions designed for a smarter tomorrow.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-on-primary text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-emerald-900/30"
            >
              <span>Explore Solutions</span>
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-surface-container-lowest border border-white/20 text-sm font-semibold px-7 py-3.5 rounded-xl backdrop-blur-md transition-all duration-200"
            >
              <span>Contact Us</span>
              <span className="material-symbols-outlined text-[20px]">
                north_east
              </span>
            </Link>
          </div>

          {/* Verification Tagline */}
          <div className="inline-flex items-center gap-2 pt-2 text-outline-variant">
            <span className="material-symbols-outlined text-primary-fixed text-[18px]">
              verified
            </span>
            <span className="text-xs tracking-wide text-surface-container-high/90">
              Sri Lankan Renewable Energy & Solar EPC Engineering
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Minimalist Scroll Indicator */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center pb-8 pointer-events-none">
        <div className="flex flex-col items-center gap-2 text-outline-variant hover:text-surface-container-lowest transition-colors">
          <span className="text-[10px] uppercase tracking-[0.25em] text-outline-variant/80 font-semibold">
            SCROLL TO EXPLORE
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-outline-variant/50 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-primary-fixed animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}