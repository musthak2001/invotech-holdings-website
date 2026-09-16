import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Solar Energy Solutions
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Power Your Future with Clean Solar Energy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Reliable and sustainable solar solutions for homes and businesses,
            helping you reduce energy costs and build a cleaner future.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/services">
              Explore Our Solutions
            </Button>

            <Button href="/contact" variant="outline">
              Get a Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

