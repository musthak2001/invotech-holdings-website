export type ServiceUnit = {
  id: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  accent: "primary" | "secondary" | "tertiary";
  highlightMetric: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: string;
};

export type TechnicalCapability = {
  icon: string;
  title: string;
  category: string;
  description: string;
  tag: string;
};

export type ServiceSla = {
  icon: string;
  title: string;
  guarantee: string;
  description: string;
};

// 01 Strategic Business Units Data
export const servicesData: ServiceUnit[] = [
  {
    id: "renewable-energy",
    icon: "wb_sunny",
    badge: "ENERGY & EPC",
    title: "Renewable Energy & Sustainability",
    description:
      "Turnkey Solar EPC, smart energy management platforms, and strategic supply of solar DC cables, electrical switchgear, and LFP battery storage systems.",
    features: [
      "Commercial & Industrial Rooftop Solar PV",
      "Utility-Scale Solar & Ground-Mounted Arrays",
      "LFP Battery Storage & Uninterrupted Power (BESS)",
      "Solar DC Cables & Heavy Switchgear Supply",
    ],
    accent: "primary",
    highlightMetric: "2MW+ Solar PV Integrated",
  },
  {
    id: "integrated-infrastructure",
    icon: "domain",
    badge: "SMART INFRASTRUCTURE",
    title: "Integrated Infrastructure",
    description:
      "AI-based IoT ecosystems, intelligent fleet management, smart security surveillance systems, and professional EV charging infrastructure.",
    features: [
      "AI-Powered IoT & Sensor Telemetry Networks",
      "EV Charging Station Architecture & Deployment",
      "Smart Security Systems & Integrated Surveillance",
      "Enterprise Fleet Telemetry & Monitoring",
    ],
    accent: "secondary",
    highlightMetric: "AI-Powered Telemetry",
  },
  {
    id: "climate-lifestyle",
    icon: "ac_unit",
    badge: "CLIMATE & LIGHTING",
    title: "Climate & Lifestyle Technology",
    description:
      "Enterprise HVAC sales, turnkey installation, and full lifecycle management, together with sustainable commercial LED lighting and energy-efficient electrical solutions.",
    features: [
      "Industrial & Commercial HVAC Lifecycle Management",
      "High-Efficiency Chiller & VRF Systems",
      "Sustainable Architectural & Industrial LED Lighting",
      "Energy Efficiency Audits & Retrofits",
    ],
    accent: "tertiary",
    highlightMetric: "30%+ Energy Reduction",
  },
  {
    id: "fintech-retail",
    icon: "point_of_sale",
    badge: "FINTECH & SOFTWARE",
    title: "Fintech & Retail Ecosystems",
    description:
      "Enterprise POS solutions, integrated retail management platforms, specialized thermal hardware distribution, and custom software development for energy and retail sectors.",
    features: [
      "Cloud Retail Management & POS Platforms",
      "Custom Enterprise Software Development",
      "Thermal Printers & Point-of-Sale Hardware",
      "Energy Billing & Payment Gateway Integration",
    ],
    accent: "primary",
    highlightMetric: "Turnkey Retail Systems",
  },
];

// 02 Service Deployment Lifecycle Workflow Steps
export const serviceProcessSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Site Audit & Thermal Irradiance Assessment",
    description:
      "Comprehensive LiDAR structural assessments, thermal drone imaging, and electrical load curve modeling tailored to Sri Lankan monsoonal climate patterns.",
    icon: "search",
  },
  {
    step: "02",
    title: "System Architecture & Electrical Design",
    description:
      "Precision string-level inverter matching, surge protection coordination, single-line diagrams (SLD), and grid-tie approval documentation.",
    icon: "architecture",
  },
  {
    step: "03",
    title: "Turnkey Procurement & EPC Deployment",
    description:
      "Direct procurement of Tier-1 solar silicon, marine-grade mounting structures, and rapid certified installation complying with CEB & LECO standards.",
    icon: "build",
  },
  {
    step: "04",
    title: "SCADA Telemetry & Preventative O&M",
    description:
      "24/7 real-time cloud performance monitoring, automated sensor alerts, thermographic diagnostics, and scheduled thermal cleaning cycles.",
    icon: "monitoring",
  },
];

// 03 Specialized Technical Capabilities
export const technicalCapabilities: TechnicalCapability[] = [
  {
    icon: "solar_power",
    title: "Bifacial Solar PV Architecture",
    category: "Renewable Energy",
    description: "N-Type TOPCon bifacial modules engineered for maximum albedo reflection and tropical heat resistance.",
    tag: "High Efficiency",
  },
  {
    icon: "battery_charging_full",
    title: "LFP Energy Storage (BESS)",
    category: "Energy Resilience",
    description: "High-voltage modular lithium iron phosphate battery racks with automated zero-msec transfer switching.",
    tag: "Uninterrupted Power",
  },
  {
    icon: "ev_station",
    title: "EV Fast-Charging Networks",
    category: "Infrastructure",
    description: "Commercial DC fast-charging infrastructure integrated with automated billing and fleet management software.",
    tag: "Smart Mobility",
  },
  {
    icon: "hvac",
    title: "Chiller & VRF HVAC Optimizers",
    category: "Climate Tech",
    description: "Variable Refrigerant Flow (VRF) and chiller plant management designed for energy-intensive commercial buildings.",
    tag: "30% Tariff Reduction",
  },
];

// 04 Service Level Guarantees & SLAs
export const serviceSlas: ServiceSla[] = [
  {
    icon: "verified",
    title: "CEB & LECO Grid Compliance",
    guarantee: "100% Interconnection Approval",
    description: "All installations strictly follow Sri Lankan CEB / LECO grid interconnection, net-metering, and net-accounting protocols.",
  },
  {
    icon: "shield",
    title: "25-Year Performance Warranty",
    guarantee: "Guaranteed Linear Yield",
    description: "Tier-1 component warranties backed by direct manufacturer partnerships and local engineering support.",
  },
  {
    icon: "support_agent",
    title: "Rapid SLA Response",
    guarantee: "< 24 Hours On-site Dispatch",
    description: "Dedicated local service dispatch teams and spare parts inventory ready for emergency system repairs.",
  },
];

// Alias for backward compatibility
export const services = servicesData;

