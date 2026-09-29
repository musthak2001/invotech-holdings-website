
import Link from "next/link";

const servicesList = [
  {
    icon: "roofing",
    title: "Solar Installation",
    description:
      "Full turnkey rooftop and ground-mounted solar photovoltaic installations for residential, commercial, and industrial sites.",
  },
  {
    icon: "domain_verification",
    title: "Site Assessment & Engineering",
    description:
      "Detailed thermal drone surveys, structural integrity audits, irradiance mapping, and grid interconnection design.",
  },
  {
    icon: "build_circle",
    title: "System Maintenance",
    description:
      "Periodic scheduled diagnostics, thermal imaging inspects, panel cleaning protocol, and preventative maintenance.",
  },
  {
    icon: "support_agent",
    title: "After-Sales Support",
    description:
      "Dedicated local engineering responsiveness, warranty administration, inverter telemetry, and rapid-response SLA.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">
              Turnkey Engineering Capabilities
            </span>
            <h2 className="font-plus-jakarta text-3xl sm:text-4xl text-on-surface font-bold mt-1">
              Our Solutions &amp; Services
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-md">
            Integrated engineering solutions spanning renewable energy, smart infrastructure, and energy management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-surface-container-low p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm mb-5">
                  <span className="material-symbols-outlined text-[22px]">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-plus-jakarta text-lg text-on-surface font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <Link
                href="/services"
                className="text-xs sm:text-sm text-primary hover:text-primary-container font-semibold inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

