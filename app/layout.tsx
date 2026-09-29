import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InvoTech Holdings | Smart Energy & Engineering Solutions",
    template: "%s | InvoTech Holdings",
  },
  description:
    "InvoTech Holdings provides solar energy solutions, EPC engineering, smart infrastructure, and energy management for Sri Lanka and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} bg-surface font-body-md text-on-surface antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}