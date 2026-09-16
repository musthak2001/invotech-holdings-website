
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "Residential Solar System",
    category: "Residential",
    description:
      "A solar energy solution designed to support the electricity needs of a modern home.",
  },
  {
    title: "Commercial Solar System",
    category: "Commercial",
    description:
      "A scalable solar solution designed to support the energy requirements of a business.",
  },
  {
    title: "Hybrid Solar System",
    category: "Hybrid",
    description:
      "A flexible solar setup combining solar generation with battery storage for reliable energy.",
  },
];

export default function Projects() {
  return (
    <section className="bg-background-light py-20 sm:py-24">
      <Container>
        <SectionHeading
  eyebrow="Our Projects"
  title="Solar Solutions in Action"
  description="Explore examples of the types of solar solutions we provide for homes and businesses."
/>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl border border-border bg-background"
            >
              <div className="flex h-52 items-center justify-center bg-background-light">
                <span className="text-sm font-medium text-muted">
                  Project Image
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-primary">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-text">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

