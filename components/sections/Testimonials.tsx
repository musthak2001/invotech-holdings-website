export default function Testimonials() {
  const testimonials = [
    {
      name: "Dhammika Fernando",
      role: "Operations Director",
      company: "Lanka Logistics & Warehousing",
      quote:
        "InvoTech Holdings transformed our facility energy footprint. Their solar EPC team delivered a 300kW rooftop installation on time, yielding immediate monthly tariff savings.",
    },
    {
      name: "Kamal Wickramasinghe",
      role: "Head of Engineering",
      company: "Ceylon Manufacturing Group",
      quote:
        "The precision engineering, drone thermal audits, and seamless battery integration provided by InvoTech gave us total energy independence during grid instability.",
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider text-primary font-semibold">
            Client References
          </span>
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl text-on-surface font-bold mt-1">
            Partner &amp; Client Voices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-tertiary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-on-surface-variant italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 bg-surface-container-low/50 -mx-8 -mb-8 p-6 rounded-b-2xl">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  <span className="material-symbols-outlined text-[20px]">
                    person
                  </span>
                </div>
                <div>
                  <div className="font-plus-jakarta text-sm text-on-surface font-bold">
                    {item.name}
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
