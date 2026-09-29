
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import Services from "@/components/sections/SolarSolutions";
import ScaleApplications from "@/components/sections/ScaleApplications";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProductsSection from "@/components/sections/ProductsSection";
import Projects from "@/components/sections/Projects";
import Metrics from "@/components/sections/Metrics";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="w-full pt-20 bg-surface">
      <div className="flex flex-col w-full">
        {/* 01 Hero Section */}
        <Hero />

        {/* 02 Value Proposition */}
        <ValueProposition />

        {/* 03 Turnkey Engineering Capabilities */}
        <Services />

        {/* 04 Scale & Applications */}
        <ScaleApplications />

        {/* 05 Technical Rigor / Why InvoTech */}
        <WhyChooseUs />

        {/* 06 Products Catalog */}
        <ProductsSection />

        {/* 07 Projects Portfolio */}
        <Projects />

        {/* 08 Company Metrics */}
        <Metrics />

        {/* 09 Client References */}
        <Testimonials />

        {/* 10 Call to Action */}
        <CallToAction />
      </div>
    </main>
  );
}