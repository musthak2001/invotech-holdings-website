import Container from "@/components/layout/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Projects",
  description:
    "Explore solar projects and energy solutions delivered by InvoTech Holdings for homes and businesses.",
};

const projects = [
  {
    title: "Residential Solar Installation",
    category: "Residential",
    description:
      "A solar energy system designed to support the electricity needs of a residential property.",
  },
  {
    title: "Commercial Solar Installation",
    category: "Commercial",
    description:
      "A scalable solar solution designed to support the energy requirements of a business.",
  },
  {
    title: "Hybrid Solar System",
    category: "Hybrid",
    description:
      "A solar and battery solution designed to provide flexible and reliable energy.",
  },
  {
    title: "Rooftop Solar Project",
    category: "Rooftop",
    description:
      "A rooftop solar solution designed to make better use of available space for clean energy generation.",
  },
  {
    title: "Solar Energy Project",
    category: "Solar",
    description:
      "A practical solar energy installation designed around the customer's energy requirements.",
  },
  {
    title: "Custom Solar Solution",
    category: "Custom",
    description:
      "A tailored solar solution designed according to the specific requirements of the property.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Our Projects
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Solar Solutions in Action
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Explore examples of the types of solar energy projects and
              solutions we provide for different energy needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="bg-background-light py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-xl border border-border bg-background"
              >
                <div className="flex h-56 items-center justify-center bg-background-light">
                  <span className="text-sm font-medium text-muted">
                    Project Image
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-sm font-medium text-primary">
                    {project.category}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold text-text">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}