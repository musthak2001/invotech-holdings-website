import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="flex min-h-screen items-center">
        <div className="mx-auto">
          <h1 className="text-4xl font-bold">
            InvoTech Holdings
          </h1>

          <p className="mt-4 text-center text-gray-600">
            Our website is under development.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}