import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Switch to Solar?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Let's find the right solar solution for your home or business and
            take the next step toward cleaner energy.
          </p>

          <div className="mt-8">
            <Button href="/contact" variant="outline">
              Get a Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
