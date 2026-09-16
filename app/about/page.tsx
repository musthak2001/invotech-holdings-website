
import Container from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <main>
      {/* About Hero */}
      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              About InvoTech
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Powering a Cleaner Future with Solar Energy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              We are focused on providing practical and reliable solar energy
              solutions for homes and businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="bg-background-light py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Helping Customers Move Toward Solar Energy
            </h2>

            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              InvoTech Holdings is committed to helping customers explore
              cleaner and more efficient energy options through solar
              technology. We focus on understanding each customer's needs and
              providing solutions that fit their energy requirements.
            </p>

            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              As the company grows, our goal is to build long-term
              relationships with customers through reliable solutions,
              professional service, and continued support.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-background-light p-8">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Our Mission
              </p>

              <h2 className="mt-3 text-2xl font-bold text-text">
                Making Solar Energy More Accessible
              </h2>

              <p className="mt-4 leading-7 text-muted">
                To provide practical solar energy solutions that help
                customers reduce their dependence on conventional energy and
                move toward cleaner power.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background-light p-8">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Our Vision
              </p>

              <h2 className="mt-3 text-2xl font-bold text-text">
                A Cleaner and More Sustainable Future
              </h2>

              <p className="mt-4 leading-7 text-muted">
                To contribute to a future where clean and sustainable energy
                is accessible to more homes, businesses, and communities.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

