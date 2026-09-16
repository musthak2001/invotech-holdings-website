"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import NavLink from "./NavLink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            InvoTech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
        </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-md p-2 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
               Projects
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}