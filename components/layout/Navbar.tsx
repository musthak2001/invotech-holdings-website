"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 py-1">
          <img
            src="/images/logo.svg"
            alt="InvoTech Holdings Logo"
            className="h-12 sm:h-14 w-auto object-contain transition-all"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs & User icon */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-primary-container text-on-primary text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-sm"
          >
            Get a Quote
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-on-surface p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-6 py-4 flex flex-col gap-3 shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 text-base font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center bg-primary text-on-primary text-sm font-semibold py-3 rounded-xl mt-2"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
