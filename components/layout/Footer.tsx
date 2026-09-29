
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface border-t border-outline/20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.svg"
                alt="InvoTech Holdings Logo"
                className="h-10 w-auto bg-white/95 p-1.5 rounded-lg shadow-sm"
              />
            </div>
            <p className="text-sm text-outline-variant leading-relaxed mb-4">
              Empowering individuals and enterprises with sustainable solar energy, intelligent engineering, and turnkey infrastructure solutions.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
              <span className="text-xs text-outline-variant">
                Commercial & Utility Clean Energy
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-surface-container-lowest mb-4 font-plus-jakarta">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-outline-variant">
              <li>
                <Link href="/about" className="hover:text-surface-container-lowest transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-surface-container-lowest transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-surface-container-lowest transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-surface-container-lowest transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-surface-container-lowest transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-surface-container-lowest mb-4 font-plus-jakarta">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-outline-variant">
              <li>
                <Link href="/services" className="hover:text-surface-container-lowest transition-colors">
                  Solar PV Solutions
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-surface-container-lowest transition-colors">
                  Battery Storage
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-surface-container-lowest transition-colors">
                  Commercial EPC
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-surface-container-lowest transition-colors">
                  Smart Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-surface-container-lowest mb-4 font-plus-jakarta">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-outline-variant">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary-fixed mt-0.5">
                  call
                </span>
                <span>+94 77 010 1669</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary-fixed mt-0.5">
                  mail
                </span>
                <span>info@invotech.lk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary-fixed mt-0.5">
                  location_on
                </span>
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-outline/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-outline-variant">
          <div>© 2026 InvoTech Holdings. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-surface-container-lowest transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-surface-container-lowest transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

