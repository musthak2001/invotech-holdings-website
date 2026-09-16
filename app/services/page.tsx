import Container from "@/components/layout/Container";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Our Services
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Complete Solar Services
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              From consultation and installation to maintenance and support,
              we provide services to help you get the most from solar energy.
            </p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-background-light py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-border bg-background p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-text">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}