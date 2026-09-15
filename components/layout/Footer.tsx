import Link from "next/link";
import Container from "./Container";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
  
];

const serviceLinks = [
  {
    label: "Software Development",
    href: "/services/software-development",
  },
  {
    label: "Mobile Solutions",
    href: "/services/mobile-solutions",
  },
  {
    label: "Web Solutions",
    href: "/services/web-solutions",
  },
  {
    label: "Technology Consulting",
    href: "/services/technology-consulting",
  },
];


export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-xl font-bold text-text">
              InvoTech Holdings
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              Building reliable software and technology solutions for modern
              businesses.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-text">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-muted">
  {companyLinks.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        className="transition-colors hover:text-primary"
      >
        {link.label}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-text">
              Services
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-muted">
  {serviceLinks.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        className="transition-colors hover:text-primary"
      >
        {link.label}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Email: info@invotech.com</li>
              <li>Phone: +94 XX XXX XXXX</li>
              <li>Sri Lanka</li>
            </ul>
          </div>
        </div>
      </Container>
      <Container>
  <div className="flex flex-col gap-4 border-t border-border py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
    <p>
      © 2026 InvoTech Holdings. All rights reserved.
    </p>

    <div className="flex gap-6">
      <Link
        href="/privacy"
        className="transition-colors hover:text-primary"
      >
        Privacy Policy
      </Link>

      <Link
        href="/terms"
        className="transition-colors hover:text-primary"
      >
        Terms of Service
      </Link>
    </div>
  </div>
</Container>
    </footer>
  );
}