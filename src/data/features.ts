export interface FeatureTab {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  image: string;
}

export const coreFeatures: FeatureTab[] = [
  {
    id: "dashboard",
    title: "Chain Dashboard",
    shortDesc: "Executive Control Dashboard for Chains & Multi-Branches",
    description:
      "Centralize your entire retail operation on a single cloud platform. Monitor real-time sales KPIs, gross margins, cash register closures, and branch performance seamlessly connected to SAP Business One.",
    highlights: [
      "Real-time store KPIs & sales metrics",
      "Executive profitability and sales reports",
      "Cross-branch comparative visualization",
      "Automated anomaly and variance alerts",
    ],
    image: "/images/Screenshot_6.png",
  },
  {
    id: "orders",
    title: "Order Management",
    shortDesc: "Full Control Over Your Omnichannel Retail Operations",
    description:
      "Receive customer orders across multiple sales channels (counter checkout, e-commerce, WhatsApp, B2B portal) and process them through unified fulfillment workflows with instant SAP Business One synchronization.",
    highlights: [
      "Centralized order intake and routing",
      "Multi-branch fulfillment & store dispatch",
      "Instant reserved inventory synchronization",
      "End-to-end customer order status tracking",
    ],
    image: "/images/Screenshot_5.png",
  },
  {
    id: "sales",
    title: "Sales & POS",
    shortDesc: "High-Speed Counter Sales & Complex Commercial Workflows",
    description:
      "Retail One POS adapts to any sales environment: from high-traffic, express checkouts (groceries, cafes, bakeries) to consultative multi-step sales flows (quotes, down payments, sales orders, deliveries, and reserve invoices).",
    highlights: [
      "Express checkout or multi-stage commercial workflow",
      "Instant integrated electronic invoicing (CFDI 4.0)",
      "Combined split-payments and multi-currency support",
      "Guaranteed offline operation during internet outages",
    ],
    image: "/images/Screenshot_4-1.png",
  },
  {
    id: "purchasing",
    title: "Purchasing",
    shortDesc: "Smart Replenishment & Vendor Procurement Workflows",
    description:
      "Retail One covers your store's end-to-end operational needs. Generate automated purchase orders based on historical sales velocity and efficiently distribute merchandise from central warehouses to store branches.",
    highlights: [
      "Smart replenishment recommendations (R1)",
      "Mobile barcode scanning for goods receipt",
      "Agile inter-branch transfers & transit tracking",
      "Rigorous freight and vendor landed cost control",
    ],
    image: "/images/148310.jpg",
  },
  {
    id: "inventory",
    title: "Inventory",
    shortDesc: "Accurate Stock Control & Mobile Handheld Cycle Counts",
    description:
      "Eliminate inventory discrepancies. Conduct cycle counts by aisle or zone using mobile barcode scanners while your store continues active trading. Record shrinkages, adjustments, and receipts with immediate SAP impact.",
    highlights: [
      "Physical and cycle counts with mobile handhelds",
      "Serial numbers, batches, and expiration date tracking",
      "Audited and authorized inventory adjustments",
      "Live cross-branch stock lookups from any register",
    ],
    image: "/images/29853.jpg",
  },
  {
    id: "loyalty",
    title: "Loyalty & Rewards",
    shortDesc: "Customer Loyalty Programs, Points & Digital Wallets",
    description:
      "Turn occasional shoppers into recurring brand advocates. Design dynamic tiered promotions, digital wallets with point accumulation, gift cards, and exclusive VIP perks tailored to your customer base.",
    highlights: [
      "Digital wallet and prepaid gift card management",
      "Dynamic promotions by day, time, or sales volume",
      "Product bundles, combos, and staff discount rules",
      "Customer segmentation and targeted promotional campaigns",
    ],
    image: "/images/2148672833.jpg",
  },
];
