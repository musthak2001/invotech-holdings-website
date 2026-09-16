import Container from "@/components/layout/Container";
const services = [  {
  title: "Solar System Installation", description: "Professional installation of solar energy systems designed around your property's energy requirements.",
}
,  {
  title: "Site Assessment & Consultation", description: "We assess your energy needs and property to help determine a suitable solar solution.",
}
,  {
  title: "System Maintenance", description: "Maintenance support to help keep your solar energy system operating efficiently.",
}
,  {
  title: "After-Sales Support", description: "Continued support after installation to help you get the most from your solar system.",
}
, ];
export default function Services()  {
  return ( <section className="bg-background py-20 sm:py-24"> <Container> <div className="mx-auto max-w-2xl text-center"> <p className="text-sm font-medium uppercase tracking-wide text-primary"> Our Services </p> <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl"> Complete Solar Services </h2> <p className="mt-4 text-base leading-7 text-muted sm:text-lg"> From initial consultation to installation and ongoing support, we help make your transition to solar energy simple. </p> </div> <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">  {
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