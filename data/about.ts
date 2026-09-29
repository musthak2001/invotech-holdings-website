export type AnchorItem = {
  icon: string;
  badge: string;
  title: string;
  accent: "primary" | "secondary" | "tertiary";
};

export type MetricBadge = {
  value: string;
  label: string;
};

export type PrincipleItem = {
  title: string;
  description: string;
};

export type PillarCard = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description?: string;
  principles?: PrincipleItem[];
  objectiveLabel: string;
  objectiveText: string;
  accent: "primary" | "secondary" | "tertiary";
};

export type EpcStage = {
  number: string;
  title: string;
  description: string;
  icon: string;
  footerLabel: string;
};

export const aboutAnchors: AnchorItem[] = [
  {
    icon: "verified",
    badge: "OPERATING FRAMEWORK",
    title: "CEB & LECO Standard Alignment",
    accent: "primary",
  },
  {
    icon: "precision_manufacturing",
    badge: "PROCUREMENT STANDARD",
    title: "Tier-1 Silicon & Tropicalized Hardware",
    accent: "secondary",
  },
  {
    icon: "bolt",
    badge: "ENGINEERING FOCUS",
    title: "Commercial & Industrial Photovoltaic EPC",
    accent: "tertiary",
  },
];

export const whoWeAreMetrics: MetricBadge[] = [
  {
    value: "100%",
    label: "ENGINEERING COMPLIANCE",
  },
  {
    value: "Tier-1",
    label: "HARDWARE INTEGRATION",
  },
  {
    value: "24/7",
    label: "SCADA TELEMETRY READY",
  },
];

export const aboutPillars: PillarCard[] = [
  {
    id: "mission",
    icon: "flag",
    title: "Our Mission",
    subtitle: "CORPORATE PURPOSE",
    description:
      "To engineer and construct resilient, high-yield clean energy systems that de-risk private industrial balance sheets and transition regional commercial sectors to sovereign self-sufficiency.",
    objectiveLabel: "CURRENT STRATEGIC OBJECTIVE",
    objectiveText: "Accelerate C&I clean electricity generation",
    accent: "primary",
  },
  {
    id: "vision",
    icon: "visibility",
    title: "Our Vision",
    subtitle: "FUTURE STATE",
    description:
      "To serve as the institutional standard for renewable infrastructure across the Indian Ocean basin—renowned for unyielding engineering integrity, advanced telemetry, and rapid grid decarbonization.",
    objectiveLabel: "NATIONAL TARGET",
    objectiveText: "Enterprise net-zero energy resilience",
    accent: "secondary",
  },
  {
    id: "principles",
    icon: "workspace_premium",
    title: "Guiding Principles",
    subtitle: "ENGINEERING AXIOMS",
    principles: [
      {
        title: "Technical Rigor",
        description:
          "Mathematical precision over approximations in all yield assessments.",
      },
      {
        title: "Environmental Stewardship",
        description:
          "Measurable carbon mitigation through durable infrastructure.",
      },
      {
        title: "Operational Transparency",
        description:
          "Full access to real-time SCADA telemetry for every client.",
      },
      {
        title: "Client Yield Maximization",
        description:
          "Uncompromising 25-year performance warranty protection.",
      },
    ],
    objectiveLabel: "FRAMEWORK",
    objectiveText: "Institutional Quality Control",
    accent: "tertiary",
  },
];

export const epcStages: EpcStage[] = [
  {
    number: "01",
    title: "Feasibility & 3D Irradiance Profiling",
    description:
      "LiDAR structural assessments, shadow trajectory simulations, and solar irradiance modeling adjusted for Sri Lanka's monsoonal cloud-cover patterns.",
    icon: "bar_chart",
    footerLabel: "Digital Twin Modeling",
  },
  {
    number: "02",
    title: "Precision Electrical Architecture",
    description:
      "String-level sizing, string inverter matching, surge protection coordination, and direct procurement of Tier-1 N-Type solar silicon.",
    icon: "settings",
    footerLabel: "Tier-1 Hardware Spec",
  },
  {
    number: "03",
    title: "Regulated EPC Installation",
    description:
      "Turnkey installation, wind-load certified mounting fixtures, and adherence to CEB / LECO interconnection and net-metering protocols.",
    icon: "electrical_services",
    footerLabel: "Grid Synchronization",
  },
  {
    number: "04",
    title: "Telemetry & Preventative O&M",
    description:
      "Automated sensor alerts, thermographic drone imaging, inverter performance diagnostics, and scheduled thermal cleaning cycles.",
    icon: "trending_up",
    footerLabel: "24/7 Remote Monitoring",
  },
];
