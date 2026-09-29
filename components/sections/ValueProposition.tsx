export default function ValueProposition() {
  const cards = [
    {
      icon: "wb_sunny",
      title: "Sustainable Solutions",
      description:
        "Clean renewable energy architectures tailored to local environmental and operating conditions.",
      tag: "Sustainable Architecture",
      accent: "primary",
    },
    {
      icon: "architecture",
      title: "Engineering Approach",
      description:
        "Rigorous technical design, structural assessment, shade modelling, and electrical load profiling.",
      tag: "Validated Integrity",
      accent: "primary",
    },
    {
      icon: "verified_user",
      title: "Reliable Support",
      description:
        "Comprehensive lifecycle monitoring, prompt SLA response, and proactive system care.",
      tag: "Dedicated Telemetry",
      accent: "primary",
    },
    {
      icon: "bolt",
      title: "Energy Efficiency",
      description:
        "Optimized power generation with minimal transmission losses and high-yield output.",
      tag: "High-Yield Performance",
      accent: "tertiary",
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
          <span className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
            Our Core Value Proposition
          </span>
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl text-on-surface font-bold">
            Energy Solutions Designed Around You
          </h2>
          <p className="text-base text-on-surface-variant mt-3 max-w-xl">
            InvoTech Holdings combines technology, engineering, and innovation to deliver smart, clean energy solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    card.accent === "tertiary"
                      ? "bg-tertiary/10 text-tertiary"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[26px]">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-plus-jakarta text-lg text-on-surface font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div
                className={`mt-6 flex items-center gap-1 text-xs font-semibold ${
                  card.accent === "tertiary" ? "text-tertiary" : "text-primary"
                }`}
              >
                <span>{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
