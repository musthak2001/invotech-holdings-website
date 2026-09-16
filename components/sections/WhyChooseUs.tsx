
import Container from "@/components/layout/Container";

const benefits = [
  {
    title: "Quality Solutions",
    description:
      "We focus on providing solar solutions designed around your energy requirements.",
  },
  {
    title: "Reliable Performance",
    description:
      "Our solutions are designed to provide dependable solar power for everyday energy needs.",
  },
  {
    title: "Energy Savings",
    description:
      "Solar energy can help reduce dependence on conventional electricity and lower long-term energy costs.",
  },
  {
    title: "Clean Energy",
    description:
      "Switch to a cleaner energy source and take a step toward a more sustainable future.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Reliable Solar Energy for a Brighter Future
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              We help homes and businesses move toward cleaner and more
              efficient energy with practical solar solutions designed around
              their needs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border bg-background-light p-6"
              >
                <h3 className="text-lg font-semibold text-text">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

