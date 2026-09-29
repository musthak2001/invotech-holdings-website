
export default function WhyChooseUs() {
  const points = [
    {
      title: "Local Engineering Expertise",
      description:
        "Direct local engineering oversight ensuring strict compliance with Sri Lankan utility regulations and grid codes.",
    },
    {
      title: "Precision Yield Simulation & Sizing",
      description:
        "Advanced 3D shading simulations, drone thermal mapping, and electrical load curve analysis for optimized LCOE.",
    },
    {
      title: "Tier-1 Hardware Standards",
      description:
        "Procurement exclusively from tier-1 globally recognized component manufacturers with verifiable long-term warranties.",
    },
    {
      title: "Prompt SLA & Performance Auditing",
      description:
        "Guaranteed SLA response times and ongoing performance telemetry to preserve capital investment yields.",
    },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column Image & Card */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-surface-container aspect-[4/3]">
            <img
              className="w-full h-full object-cover"
              alt="Female electrical engineer conducting solar telemetry diagnostics"
              src="https://static.vecteezy.com/system/resources/previews/049/099/569/large_2x/view-from-behind-engineer-technician-wearing-a-safety-helmet-long-sleeve-shirt-conducting-and-inspection-at-solar-cell-farm-warm-light-at-sunset-time-free-photo.jpg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    verified
                  </span>
                  <div>
                    <div className="text-sm text-on-surface font-bold">
                      Field-Proven Standards
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      Continuous Quality Diagnostics
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                  Active Monitoring
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Copy */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <span className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
            Technical Rigor
          </span>
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl text-on-surface font-bold">
            Why Choose InvoTech?
          </h2>
          <p className="text-base text-on-surface-variant mt-3 mb-8">
            Engineering-led renewable transition built on trust, precision, and technical transparency.
          </p>

          <div className="space-y-4 w-full">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">
                    check
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-on-surface">
                    {point.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

