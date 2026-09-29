export default function Metrics() {
  const stats = [
    {
      label: "Installations",
      metric: "100+",
      description: "Successful Installations Completed",
      color: "text-primary-fixed",
    },
    {
      label: "Total Capacity",
      metric: "2MW+",
      description: "Total Installed Capacity across Sri Lanka",
      color: "text-tertiary-fixed",
    },
    {
      label: "Engineering Portfolio",
      metric: "50+",
      description: "Clean Energy Projects Engineered & Commissioned",
      color: "text-primary-fixed",
    },
    {
      label: "Reliability Metric",
      metric: "99.8%",
      description: "Target Performance & System Uptime",
      color: "text-tertiary-fixed",
    },
  ];

  return (
    <section className="w-full bg-inverse-surface text-inverse-on-surface py-20 relative overflow-hidden">
      {/* Background Dots Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="metrics-dots"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect fill="url(#metrics-dots)" width="100%" height="100%" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-surface-container-highest/20 backdrop-blur-sm flex flex-col justify-between border border-white/5"
            >
              <span className="text-xs uppercase tracking-wider text-outline-variant font-semibold mb-2">
                {stat.label}
              </span>
              <div
                className={`font-plus-jakarta text-3xl sm:text-4xl tracking-tight font-extrabold mb-1 ${stat.color}`}
              >
                {stat.metric}
              </div>
              <p className="text-xs text-outline-variant leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
