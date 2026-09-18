import Container from "@/components/layout/Container";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Products",
  description:
    "Explore solar panels, inverters, battery storage, and complete solar system solutions from InvoTech Holdings.",
};

export default function ProductsPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-background py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Our Products
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Solar Products for Your Energy Needs
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Explore the essential products and solutions used to build
              reliable solar energy systems for homes and businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="bg-background-light py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.title}
                className="rounded-xl border border-border bg-background p-6 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex h-40 items-center justify-center rounded-lg bg-background-light">
                  <span className="text-sm font-medium text-muted">
                    Product Image
                  </span>
                </div>

                <h2 className="mt-6 text-lg font-semibold text-text">
                  {product.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}