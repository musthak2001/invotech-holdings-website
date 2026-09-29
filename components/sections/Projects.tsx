
"use client";

import { useState } from "react";

const projectsList = [
  {
    category: "Commercial",
    tag: "Commercial Rooftop",
    title: "Commercial Rooftop Solar Array",
    location: "Colombo, Sri Lanka",
    description:
      "450kW grid-tied commercial rooftop installation engineered to offset peak daytime tariffs for corporate headquarters.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIB0CNEebshU7CoctPJBzvPtVdOSKbAy0VK0kRcuVg9g3MzBCXlQJMe8xs0zUfMYC53U9ccTtrdUW-Rgd8t-Wfn3jKOMaK3Uvo0NhRVVPPZ8OOQUCPpFoyATQ4Q7suJoZIG_XuETk1l8bZbGwt9x1QCL7N0zFTebfMhZcRxkDZll_xhajNtHgCc6MdZTNbwETSa67aDNgBpb-j6mmu92W58BMjaMajEQVmcwTqAsr7",
  },
  {
    category: "Industrial",
    tag: "Industrial Facility",
    title: "Industrial Manufacturing Solar Plant",
    location: "Gampaha, Sri Lanka",
    description:
      "1.2MW megawatt-scale rooftop PV solution powering high-capacity apparel and industrial processing machinery.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_4sS5a-zeFJ6u4Bz-MKi9-9srH8fvC0bpIGFaZsqQszn_VOV0OIfAGLpmFphCwTPd2vu4L_L2746LGEVOxgjPd1d3JG9Yk_e1JTYXlrpoLeLPY98Wts9UAp6o_9C5vDExXje6jpxFMJrkAPYuMLmN4VUDm1vtGj6a3WxLYWK9HY6SVC02By2Rb6W4zfz3mfiIjxc2_a0y5Xdg35Kj9uwvcoiq2jnkAcr_6uouDeLJ",
  },
  {
    category: "Storage & Hybrid",
    tag: "Storage & Hybrid",
    title: "Enterprise Hybrid Energy Storage",
    location: "Kandy, Sri Lanka",
    description:
      "Integrated 200kWh lithium battery storage setup enabling zero grid interruption during utility load-shedding cycles.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACWXP3Fre0iD2ZB6kk21gqmr67ZtqRPpC7mdmoCKlYt7K0LTovN4hV34SX0uCiEiRDUXk9ebHzLOfurwT1slF2xkw9TtDCep62RPUetvxJT4kHyv7DlgnCDxlIF4iNKvjp78cgc_1OQ3VuZ3jw7uGw-ykmMhSI_3bhdjb6ykYr3o4cQa6GLpuDVVR0I88uVpe0sfeOvwMc9fOhiRWNe18L1oWwSAJdLCcekum8mlx1",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full bg-surface-container-lowest py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">
              Track Record
            </span>
            <h2 className="font-plus-jakarta text-3xl sm:text-4xl text-on-surface font-bold mt-1">
              Projects &amp; Solutions in Action
            </h2>
          </div>

          {/* Project category tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {["All", "Commercial", "Industrial", "Storage & Hybrid"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-inverse-surface text-surface-container-lowest"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm flex flex-col group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={project.title}
                  src={project.image}
                />
                <div className="absolute bottom-3 left-3 bg-inverse-surface/80 backdrop-blur-md px-3 py-1 rounded-md text-surface-container-lowest flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-primary-fixed">
                    location_on
                  </span>
                  <span className="text-xs font-medium">{project.location}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {project.tag}
                </span>
                <h3 className="font-plus-jakarta text-lg text-on-surface font-bold mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

