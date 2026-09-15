import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            InvoTech Holdings
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Technology that moves businesses forward.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            We build reliable software and technology solutions for modern
            businesses.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/services">
  Explore Services
</Button>
            <Button href="/contact" variant="outline">
  Contact Us
</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}