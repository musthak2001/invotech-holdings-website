
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full bg-inverse-surface text-inverse-on-surface py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary-container/20 pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest/30 backdrop-blur-md mb-6">
          <span className="material-symbols-outlined text-primary-fixed text-[16px]">
            location_on
          </span>
          <span className="text-xs uppercase tracking-wider text-surface-container-lowest font-medium">
            Colombo, Sri Lanka • Engineering Inquiries Welcomed
          </span>
        </div>

        <h2 className="font-plus-jakarta text-3xl sm:text-5xl font-extrabold text-surface-container-lowest max-w-3xl leading-tight">
          Ready to Explore Smarter Energy Solutions?
        </h2>

        <p className="text-base sm:text-lg text-outline-variant max-w-2xl mt-4 mb-8 leading-relaxed">
          Contact our solar engineering and infrastructure specialists today to schedule your site audit and receive a customized yield proposal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md"
          >
            <span>Get a Quote</span>
            <span className="material-symbols-outlined text-[18px]">
              calculate
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-surface-container-highest/40 hover:bg-surface-container-highest/60 text-surface-container-lowest text-sm font-semibold px-8 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200"
          >
            <span>Contact Us</span>
            <span className="material-symbols-outlined text-[18px]">
              send
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

