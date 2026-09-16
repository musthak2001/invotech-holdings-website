import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";



export default function Services()  {
  return ( <section className="bg-background py-20 sm:py-24"> <Container> <SectionHeading eyebrow="Our Services" title="Complete Solar Services" description="From initial consultation to installation and ongoing support, we help make your transition to solar energy simple." /> <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">  {
    services.map((service) => ( <div key= {
      service.title
    }
    className="rounded-xl border border-border bg-background-light p-6 transition-shadow duration-200 hover:shadow-md" > <h3 className="text-lg font-semibold text-text">  {
      service.title
    }
    </h3> <p className="mt-3 text-sm leading-6 text-muted">  {
      service.description
    }
    </p> </div> ))
  }
  </div> </Container> </section> );
}