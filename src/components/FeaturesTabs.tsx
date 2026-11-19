"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  CheckCircle2,
  LayoutDashboard,
  ShoppingCart,
  Receipt,
  PackageCheck,
  Boxes,
  Gift,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface FeatureItem {
  id: string;
  titleEn: string;
  titleEs: string;
  shortDescEn: string;
  shortDescEs: string;
  descriptionEn: string;
  descriptionEs: string;
  highlightsEn: string[];
  highlightsEs: string[];
  imageEn: string;
  imageEs: string;
}

const featuresData: FeatureItem[] = [
  {
    id: "dashboard",
    titleEn: "Chain Dashboard",
    titleEs: "Tablero de Control",
    shortDescEn: "Executive Control Dashboard for Chains & Multi-Branches",
    shortDescEs: "Tablero de Control Ejecutivo para Cadenas y Multitiendas",
    descriptionEn:
      "Centralize your entire retail operation on a single cloud platform. Monitor real-time sales KPIs, gross margins, cash register closures, and branch performance seamlessly connected to SAP Business One.",
    descriptionEs:
      "Centralice toda su operación retail en una sola plataforma en la nube. Monitoree KPIs de ventas en tiempo real, márgenes brutos, cortes de caja y desempeño de sucursales conectado a SAP Business One.",
    highlightsEn: [
      "Real-time store KPIs & sales metrics",
      "Executive profitability and sales reports",
      "Cross-branch comparative visualization",
      "Automated anomaly and variance alerts",
    ],
    highlightsEs: [
      "KPIs de tiendas y métricas de venta en tiempo real",
      "Informes ejecutivos de rentabilidad y ventas",
      "Visualización comparativa entre sucursales",
      "Alertas automáticas de anomalías y desviaciones",
    ],
    imageEn: "/images/Screenshot_6.png",
    imageEs: "/images/features_dashboard_es.png",
  },
  {
    id: "orders",
    titleEn: "Order Management",
    titleEs: "Gestión de Pedidos",
    shortDescEn: "Full Control Over Your Omnichannel Retail Operations",
    shortDescEs: "Control Total Sobre sus Operaciones Retail Omnicanal",
    descriptionEn:
      "Receive customer orders across multiple sales channels (counter checkout, e-commerce, WhatsApp, B2B portal) and process them through unified fulfillment workflows with instant SAP Business One synchronization.",
    descriptionEs:
      "Reciba pedidos a través de múltiples canales de venta (mostrador, e-commerce, WhatsApp, portal B2B) y procéselos mediante flujos de cumplimiento unificados con sincronización instantánea con SAP Business One.",
    highlightsEn: [
      "Centralized order intake and routing",
      "Multi-branch fulfillment & store dispatch",
      "Instant reserved inventory synchronization",
      "End-to-end customer order status tracking",
    ],
    highlightsEs: [
      "Recepción y enrutamiento centralizado de pedidos",
      "Surtido multitienda y despacho en sucursal",
      "Sincronización instantánea de inventario reservado",
      "Seguimiento de estatus de pedidos de punta a punta",
    ],
    imageEn: "/images/features_orders_en.jpg",
    imageEs: "/images/features_orders_es.png",
  },
  {
    id: "sales",
    titleEn: "Sales & POS",
    titleEs: "Ventas y POS",
    shortDescEn: "High-Speed Counter Sales & Complex Commercial Workflows",
    shortDescEs: "Ventas de Mostrador de Alta Velocidad y Flujos Comerciales",
    descriptionEn:
      "RetailOne POS adapts to any sales environment: from high-traffic, express checkouts (groceries, cafes, bakeries) to consultative multi-step sales flows (quotes, down payments, sales orders, deliveries, and reserve invoices).",
    descriptionEs:
      "RetailOne POS se adapta a cualquier entorno de venta: desde cajas de cobro express de alto flujo (abarrotes, cafés, panaderías) hasta flujos de venta consultivos (cotizaciones, anticipos, pedidos, entregas y facturas de reserva).",
    highlightsEn: [
      "Express checkout or multi-stage commercial workflow",
      "Instant integrated electronic invoicing (CFDI 4.0)",
      "Combined split-payments and multi-currency support",
      "Guaranteed offline operation during internet outages",
    ],
    highlightsEs: [
      "Cobro exprés o flujo comercial multietapa",
      "Facturación electrónica integrada (CFDI 4.0)",
      "Pagos combinados y multimoneda",
      "Operación offline garantizada sin internet",
    ],
    imageEn: "/images/features_sales_en.png",
    imageEs: "/images/features_sales_es.png",
  },
  {
    id: "purchasing",
    titleEn: "Purchasing",
    titleEs: "Compras y Abasto",
    shortDescEn: "Smart Replenishment & Vendor Procurement Workflows",
    shortDescEs: "Flujos de Abasto Inteligente y Compras a Proveedores",
    descriptionEn:
      "RetailOne covers your store's end-to-end operational needs. Generate automated purchase orders based on historical sales velocity and efficiently distribute merchandise from central warehouses to store branches.",
    descriptionEs:
      "RetailOne cubre las necesidades operativas integrales de su tienda. Genere órdenes de compra automatizadas según velocidad de ventas y distribuya mercancía desde almacenes centrales a sucursales eficientemente.",
    highlightsEn: [
      "Smart replenishment recommendations (R1)",
      "Mobile barcode scanning for goods receipt",
      "Agile inter-branch transfers & transit tracking",
      "Rigorous freight and vendor landed cost control",
    ],
    highlightsEs: [
      "Sugerencias inteligentes de reabastecimiento (R1)",
      "Recepción de mercancía con lector de código de barras",
      "Traspasos ágiles entre sucursales y rastreo en tránsito",
      "Control riguroso de fletes y costos de importación",
    ],
    imageEn: "/images/features_purchasing_en.png",
    imageEs: "/images/features_purchasing_es.png",
  },
  {
    id: "inventory",
    titleEn: "Inventory",
    titleEs: "Inventarios",
    shortDescEn: "Accurate Stock Control & Mobile Handheld Cycle Counts",
    shortDescEs: "Control Preciso de Existencias y Conteos Cíclicos",
    descriptionEn:
      "Eliminate inventory discrepancies. Conduct cycle counts by aisle or zone using mobile barcode scanners while your store continues active trading. Record shrinkages, adjustments, and receipts with immediate SAP impact.",
    descriptionEs:
      "Elimine discrepancias de stock. Realice conteos cíclicos por pasillo o zona con terminales móviles mientras la tienda sigue operando. Registre mermas, ajustes y entradas con afectación inmediata en SAP.",
    highlightsEn: [
      "Physical and cycle counts with mobile handhelds",
      "Serial numbers, batches, and expiration date tracking",
      "Audited and authorized inventory adjustments",
      "Live cross-branch stock lookups from any register",
    ],
    highlightsEs: [
      "Conteos físicos y cíclicos con terminales portátiles",
      "Control de series, lotes y fechas de caducidad",
      "Ajustes de inventario auditados y autorizados",
      "Consulta de stock en tiempo real entre sucursales",
    ],
    imageEn: "/images/29853.jpg",
    imageEs: "/images/29853.jpg",
  },
  {
    id: "loyalty",
    titleEn: "Loyalty & Rewards",
    titleEs: "Lealtad y Clientes",
    shortDescEn: "Customer Loyalty Programs, Points & Digital Wallets",
    shortDescEs: "Programas de Lealtad, Puntos y Monedero Electrónico",
    descriptionEn:
      "Turn occasional shoppers into recurring brand advocates. Design dynamic tiered promotions, digital wallets with point accumulation, gift cards, and exclusive VIP perks tailored to your customer base.",
    descriptionEs:
      "Convierta compradores ocasionales en clientes recurrentes. Diseñe promociones dinámicas escalonadas, monederos electrónicos con acumulación de puntos, tarjetas de regalo y beneficios VIP.",
    highlightsEn: [
      "Digital wallet and prepaid gift card management",
      "Dynamic promotions by day, time, or sales volume",
      "Product bundles, combos, and staff discount rules",
      "Customer segmentation and targeted promotional campaigns",
    ],
    highlightsEs: [
      "Gestión de monedero electrónico y tarjetas de regalo",
      "Promociones dinámicas por día, hora o volumen",
      "Paquetes, combos y reglas de descuento a empleados",
      "Segmentación de clientes y campañas promocionales",
    ],
    imageEn: "/images/2148672833.jpg",
    imageEs: "/images/2148672833.jpg",
  },
];

const iconsMap: Record<string, React.ReactNode> = {
  dashboard: <LayoutDashboard className="w-5 h-5" />,
  orders: <ShoppingCart className="w-5 h-5" />,
  sales: <Receipt className="w-5 h-5" />,
  purchasing: <PackageCheck className="w-5 h-5" />,
  inventory: <Boxes className="w-5 h-5" />,
  loyalty: <Gift className="w-5 h-5" />,
};

export function FeaturesTabs() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(featuresData[0].id);
  const current = featuresData.find((f) => f.id === activeTab) || featuresData[0];

  const currentTitle = language === "es" ? current.titleEs : current.titleEn;
  const currentShortDesc = language === "es" ? current.shortDescEs : current.shortDescEn;
  const currentDesc = language === "es" ? current.descriptionEs : current.descriptionEn;
  const currentHighlights = language === "es" ? current.highlightsEs : current.highlightsEn;
  const currentImage = language === "es" ? current.imageEs : current.imageEn;

  return (
    <div className="w-full">
      {/* Tabs list (Responsive grid: 6 cols on desktop, no clipping) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200">
        {featuresData.map((f) => {
          const isActive = f.id === activeTab;
          const tabLabel = language === "es" ? f.titleEs : f.titleEn;
          return (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id)}
              className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all text-center border ${
                isActive
                  ? "bg-[#133374] text-white border-[#133374] shadow-sm"
                  : "bg-white text-[#54595F] border-transparent hover:bg-slate-50 hover:text-[#133374]"
              }`}
            >
              <span className={isActive ? "text-[#E00E8B]" : "text-slate-400"}>
                {iconsMap[f.id]}
              </span>
              <span className="truncate">{tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="mt-8 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text & highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E00E8B]/15 text-[#E00E8B] border border-[#E00E8B]/30">
              {t("RetailOne Core Module", "Módulo Core RetailOne")}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#133374] tracking-tight">
              {currentShortDesc}
            </h3>

            <p className="text-[#54595F] leading-relaxed text-base">
              {currentDesc}
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#E00E8B] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#133374]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#133374] hover:text-[#E00E8B] group"
              >
                {t("Request a demo for this module", "Solicitar una demo de este módulo")}
                <ArrowRight className="w-4 h-4 text-[#E00E8B] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Screenshot / Image Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white flex items-center justify-center">
              <Image
                key={currentImage} // Forces transition when language toggles image
                src={currentImage}
                alt={currentTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={
                  currentImage.endsWith(".png")
                    ? "object-contain p-2 hover:scale-102 transition-transform duration-300"
                    : "object-cover object-center hover:scale-102 transition-transform duration-300"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
