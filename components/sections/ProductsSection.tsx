"use client";

import { useState } from "react";
import Link from "next/link";

const productsData = [
  {
    category: "Solar Panels",
    badge: "Solar Module",
    badgeColor: "text-primary",
    title: "High-Efficiency N-Type Bifacial Module",
    description:
      "Premium crystalline photovoltaic panel engineered for high ambient temperature resilience and maximum rear-side yield.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgWYRJnqkbPTy3CaoSapAK1lif5UIvA86X9OPf9bPq5SvTm7v52L9Af_fjq5c1srGVcryPZCC81eJVsNSXqGOqbRH2blxqcw7km_wlsTBaW6pILpKlFarDW6O6TRipaDfURI-L9Pe-yCvrAPysgnb8K2Eo3XqLEUaZpiFXoXV_xSkyH7OEq5rwOZVan5m7yKIDOnX3gjQcSLrz4unrt6MhZj-XTAXrTaZbR5itP-sE",
    specs: ["580W+ Output", "22.5% Efficiency"],
  },
  {
    category: "Inverters",
    badge: "Inverter",
    badgeColor: "text-tertiary",
    title: "Smart Hybrid Inverter System",
    description:
      "High-frequency multi-MPPT solar inverter with integrated grid-export control and emergency power switching.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBP1s2KxHeczhqTmceGG78T442SqC4A8vpxtGHXv4SSj8mnNC60npgRQuRLwKJnLdKOsqQWGyGCVHuJU9e6CrbSCUUk8SgdcL8PbM8OIrX95Nz7ybv8-7OE_dm5mQsoo2-pUe7F688-LH9bfYqxAgc3dNAFI4TsdRnFocLaFKZHPbvrOA0vZnUFS6DQTu5JSvIP9jVWox-DWDOvOoNvHihqRvBzf8Y2h7ohkyJSUSF1",
    specs: ["Multi-MPPT", "98.6% Peak Eff."],
  },
  {
    category: "Battery Storage",
    badge: "Energy Storage",
    badgeColor: "text-primary",
    title: "High-Voltage Modular Lithium Battery",
    description:
      "Scalable energy storage unit designed for seamless commercial and residential uninterrupted backup power.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtYtiZH3Speku0y0fvUXwgYAbbYkuGwLdZ3EMSIATsuwcKfWm7E-InKnBpEBG4l2ELJWk3C_dBk5MoJxIpetKoWDDr8KTdjYeGQvmuaQPqZDabWJ9OtGjAtIeDXbh52jBHOhM9Y2oWR_74b5gau0hUC4Tn-NJyhw5u9x7AApIkev7F5Qc_JrT26hGXRRVh4Mj_hvLtTtvMtI96Pag36RGC5ulyyI1zECpNSLNbVNNh",
    specs: ["LiFePO4 Chemistry", "6000+ Cycles"],
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeTab);

  return (
    <section className="w-full bg-surface-container-low py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider text-primary font-semibold">
            Engineered Components
          </span>
          <h2 className="font-plus-jakarta text-3xl sm:text-4xl text-on-surface font-bold mt-1">
            Solar Technology &amp; Products
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            Top-tier solar modules, smart inverters, and high-safety lithium energy storage systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {["All", "Solar Panels", "Inverters", "Battery Storage"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm ${
                activeTab === tab
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.title}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="h-60 overflow-hidden bg-surface-container relative">
                <img
                  className="w-full h-full object-cover"
                  alt={product.title}
                  src={product.image}
                />
                <span
                  className={`absolute top-3 right-3 text-[11px] uppercase font-bold px-2.5 py-1 bg-surface-container-lowest/90 ${product.badgeColor} rounded-md backdrop-blur-sm`}
                >
                  {product.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-plus-jakarta text-lg text-on-surface font-bold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-md bg-surface-container text-xs text-on-surface-variant font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/products"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface text-sm font-semibold transition-colors block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
