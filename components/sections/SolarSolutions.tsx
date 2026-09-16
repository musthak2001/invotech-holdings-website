import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Solar System Installation",
    description:
      "Professional installation of solar energy systems designed around your property's energy requirements.",
  },
  {
    title: "Site Assessment & Consultation",
    description:
      "We assess your energy needs and property to help determine a suitable solar solution.",
  },
  {
    title: "System Maintenance",
    description:
      "Maintenance support to help keep your solar energy system operating efficiently.",
  },
  {
    title: "After-Sales Support",
    description:
      "Continued support after installation to help you get the most from your solar system.",
  },
];

export default function Services() {
  return (
    <section className="bg-background-light py-20 sm:py-24">
      <Container>
        <SectionHeading
  eyebrow="Our Solutions"
  title="Solar Solutions for Every Need"
  description="Reliable solar solutions designed for homes and businesses."
/>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-text">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

