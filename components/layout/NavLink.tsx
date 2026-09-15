"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({
  href,
  children,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          : "text-sm font-medium text-muted transition-colors hover:text-primary"
      }
    >
      {children}
    </Link>
  );
}