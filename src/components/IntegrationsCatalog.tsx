"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type CategoryKey = "all" | "delivery" | "ecommerce" | "bancos-mx" | "internacional";

interface IntegrationItem {
  id: string;
  name: string;
  category: "delivery" | "ecommerce" | "bancos-mx" | "internacional";
  categoryLabel: string;
  categoryLabelEs: string;
  categoryBadgeClass: string;
  description: string;
  descriptionEs: string;
  statusBadge: string;
  statusBadgeEs: string;
  statusBadgeClass: string;
}

const integrations: IntegrationItem[] = [
  // Delivery
  {
    id: "uber-eats",
    name: "Uber Eats",
    category: "delivery",
    categoryLabel: "Delivery",
    categoryLabelEs: "Delivery",
    categoryBadgeClass: "bg-orange-100 text-orange-800 border-orange-200",
    description: "Orders routed directly to kitchen prep stations and recorded in SAP B1.",
    descriptionEs: "Pedidos enrutados directamente a cocina y registrados en SAP B1.",
    statusBadge: "Active Sync",
    statusBadgeEs: "Sincronización Activa",
    statusBadgeClass: "text-emerald-700 font-bold",
  },
  {
    id: "rappi",
    name: "Rappi",
    category: "delivery",
    categoryLabel: "Delivery",
    categoryLabelEs: "Delivery",
    categoryBadgeClass: "bg-orange-100 text-orange-800 border-orange-200",
    description: "Synchronized digital menus, store catalogs, and live warehouse stock.",
    descriptionEs: "Menús digitales sincronizados, catálogo de sucursales y stock en vivo.",
    statusBadge: "Active Sync",
    statusBadgeEs: "Sincronización Activa",
    statusBadgeClass: "text-emerald-700 font-bold",
  },
  {
    id: "pedidosya",
    name: "PedidosYa",
    category: "delivery",
    categoryLabel: "Delivery",
    categoryLabelEs: "Delivery",
    categoryBadgeClass: "bg-orange-100 text-orange-800 border-orange-200",
    description: "Regional multi-store delivery coverage across Latin America.",
    descriptionEs: "Cobertura de delivery multitienda regional en Latinoamérica.",
    statusBadge: "Active Sync",
    statusBadgeEs: "Sincronización Activa",
    statusBadgeClass: "text-emerald-700 font-bold",
  },
  {
    id: "didi-food",
    name: "DiDi Food",
    category: "delivery",
    categoryLabel: "Delivery",
    categoryLabelEs: "Delivery",
    categoryBadgeClass: "bg-orange-100 text-orange-800 border-orange-200",
    description: "Automated multichannel delivery dispatch and cashier ticket close.",
    descriptionEs: "Despacho automatizado multicanal y cierre de ticket en caja.",
    statusBadge: "Active Sync",
    statusBadgeEs: "Sincronización Activa",
    statusBadgeClass: "text-emerald-700 font-bold",
  },

  // E-commerce & AI
  {
    id: "shopify",
    name: "Shopify",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    categoryLabelEs: "Comercio Electrónico",
    categoryBadgeClass: "bg-purple-100 text-purple-800 border-purple-200",
    description: "Unified physical and digital stock with bi-directional item master sync.",
    descriptionEs: "Inventario físico y digital unificado con sincronización bidireccional.",
    statusBadge: "Active Sync",
    statusBadgeEs: "Sincronización Activa",
    statusBadgeClass: "text-emerald-700 font-bold",
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    categoryLabelEs: "Comercio Electrónico",
    categoryBadgeClass: "bg-purple-100 text-purple-800 border-purple-200",
    description: "Real-time online store order creation and stock decrement in SAP B1.",
    descriptionEs: "Creación de pedidos en tiempo real y descuento de stock en SAP B1.",
    statusBadge: "Active Sync",
    statusBadgeEs: "Sincronización Activa",
    statusBadgeClass: "text-emerald-700 font-bold",
  },
  {
    id: "guper-ai",
    name: "Guper.ai",
    category: "ecommerce",
    categoryLabel: "Retail AI",
    categoryLabelEs: "IA Retail",
    categoryBadgeClass: "bg-blue-100 text-blue-800 border-blue-200",
    description: "Predictive retail intelligence, automated stock replenishment, and analytics.",
    descriptionEs: "Inteligencia predictiva de retail, reabastecimiento y analítica.",
    statusBadge: "Official Partner",
    statusBadgeEs: "Partner Oficial",
    statusBadgeClass: "text-[#133374] font-bold",
  },
  {
    id: "voi-platform",
    name: "Voi+ Platform",
    category: "ecommerce",
    categoryLabel: "SoluOne Hub",
    categoryLabelEs: "Hub SoluOne",
    categoryBadgeClass: "bg-pink-100 text-[#E00E8B] border-pink-200",
    description: "Delivery hub, customer loyalty rewards, and own-driver logistics dispatch.",
    descriptionEs: "Hub de delivery, lealtad y despacho de logística con repartidores propios.",
    statusBadge: "Native Module",
    statusBadgeEs: "Módulo Nativo",
    statusBadgeClass: "text-[#E00E8B] font-bold",
  },

  // Banking Partners
  {
    id: "bbva",
    name: "BBVA Mexico",
    category: "bancos-mx",
    categoryLabel: "Banking MX",
    categoryLabelEs: "Banca México",
    categoryBadgeClass: "bg-blue-100 text-blue-900 border-blue-200",
    description: "Integrated pinpad terminals with instant cashier transaction reconciliation.",
    descriptionEs: "Terminales pinpad con conciliación instantánea en caja registradora.",
    statusBadge: "Direct Integration",
    statusBadgeEs: "Integración Directa",
    statusBadgeClass: "text-slate-700 font-medium",
  },
  {
    id: "santander",
    name: "Santander Mexico",
    category: "bancos-mx",
    categoryLabel: "Banking MX",
    categoryLabelEs: "Banca México",
    categoryBadgeClass: "bg-blue-100 text-blue-900 border-blue-200",
    description: "Card payment terminals, multi-terminal tenders, and automatic batch closures.",
    descriptionEs: "Terminales de cobro con tarjeta, multilíneas y cierres automáticos de lote.",
    statusBadge: "Direct Integration",
    statusBadgeEs: "Integración Directa",
    statusBadgeClass: "text-slate-700 font-medium",
  },
  {
    id: "banorte",
    name: "Banorte Mexico",
    category: "bancos-mx",
    categoryLabel: "Banking MX",
    categoryLabelEs: "Banca México",
    categoryBadgeClass: "bg-blue-100 text-blue-900 border-blue-200",
    description: "Secure payment terminal connectivity with automated credit/debit capture.",
    descriptionEs: "Conexión segura con terminales de cobro y captura automática de tarjetas.",
    statusBadge: "Direct Integration",
    statusBadgeEs: "Integración Directa",
    statusBadgeClass: "text-slate-700 font-medium",
  },
  {
    id: "hey-banco",
    name: "Hey Banco",
    category: "bancos-mx",
    categoryLabel: "Banking MX",
    categoryLabelEs: "Banca México",
    categoryBadgeClass: "bg-blue-100 text-blue-900 border-blue-200",
    description: "Digital banking and retail payment processing integrated into store checkout workflows.",
    descriptionEs: "Banca digital y procesamiento de cobros retail integrado en caja registradora.",
    statusBadge: "Direct Integration",
    statusBadgeEs: "Integración Directa",
    statusBadgeClass: "text-slate-700 font-medium",
  },
  {
    id: "mercadopago-fiserv",
    name: "Mercado Pago & Fiserv",
    category: "bancos-mx",
    categoryLabel: "Smart TPV",
    categoryLabelEs: "TPV Inteligente",
    categoryBadgeClass: "bg-sky-100 text-sky-900 border-sky-200",
    description: "Smart terminal connection and dynamic QR code payments directly on register.",
    descriptionEs: "Terminales inteligentes y pagos dinámicos con código QR directo en caja.",
    statusBadge: "Direct Integration",
    statusBadgeEs: "Integración Directa",
    statusBadgeClass: "text-slate-700 font-medium",
  },

  // Pasarelas Internacionales
  {
    id: "global-payments",
    name: "Global Payments",
    category: "internacional",
    categoryLabel: "International",
    categoryLabelEs: "Internacional",
    categoryBadgeClass: "bg-emerald-100 text-emerald-900 border-emerald-200",
    description: "Global omnichannel card and electronic payment processing for enterprise retailers.",
    descriptionEs: "Procesamiento global omnicanal de tarjetas y pagos para cadenas retail.",
    statusBadge: "Certified",
    statusBadgeEs: "Certificado",
    statusBadgeClass: "text-slate-700 font-medium",
  },
  {
    id: "bac-credomatic",
    name: "BAC Credomatic",
    category: "internacional",
    categoryLabel: "Central America",
    categoryLabelEs: "Centroamérica",
    categoryBadgeClass: "bg-emerald-100 text-emerald-900 border-emerald-200",
    description: "Certified payment processing across Guatemala, Costa Rica, Panama, and the region.",
    descriptionEs: "Procesamiento de pagos certificado en Guatemala, Costa Rica, Panamá y la región.",
    statusBadge: "Certified",
    statusBadgeEs: "Certificado",
    statusBadgeClass: "text-slate-700 font-medium",
  },
  {
    id: "transbank",
    name: "Transbank",
    category: "internacional",
    categoryLabel: "Chile",
    categoryLabelEs: "Chile",
    categoryBadgeClass: "bg-emerald-100 text-emerald-900 border-emerald-200",
    description: "Chile's leading card processing network seamlessly connected to POS registers.",
    descriptionEs: "La principal red de procesamiento de tarjetas en Chile conectada a RetailOne.",
    statusBadge: "Certified",
    statusBadgeEs: "Certificado",
    statusBadgeClass: "text-slate-700 font-medium",
  },
  {
    id: "stellar-payments",
    name: "Stellar Payments",
    category: "internacional",
    categoryLabel: "United States",
    categoryLabelEs: "Estados Unidos",
    categoryBadgeClass: "bg-emerald-100 text-emerald-900 border-emerald-200",
    description: "Fast, reliable retail card and pinpad processing for stores in the USA.",
    descriptionEs: "Procesamiento rápido y confiable de tarjetas y pinpads para tiendas en EE.UU.",
    statusBadge: "Certified",
    statusBadgeEs: "Certificado",
    statusBadgeClass: "text-slate-700 font-medium",
  },
  {
    id: "ebizcharge",
    name: "EBizCharge",
    category: "internacional",
    categoryLabel: "United States",
    categoryLabelEs: "Estados Unidos",
    categoryBadgeClass: "bg-emerald-100 text-emerald-900 border-emerald-200",
    description: "PCI-compliant B2B payment gateway directly synchronized with SAP B1.",
    descriptionEs: "Pasarela de pagos B2B con cumplimiento PCI sincronizada con SAP B1.",
    statusBadge: "Certified",
    statusBadgeEs: "Certificado",
    statusBadgeClass: "text-slate-700 font-medium",
  },
];

export function IntegrationsCatalog() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const categoryTabs: { key: CategoryKey; label: string }[] = [
    { key: "all", label: t("All Integrations", "Todas las Integraciones") },
    { key: "delivery", label: t("Delivery Apps", "Apps de Delivery") },
    { key: "ecommerce", label: t("E-commerce & AI", "E-commerce e IA") },
    { key: "bancos-mx", label: t("Banking & Terminals", "Bancos y Terminales") },
    { key: "internacional", label: t("International Gateways", "Pasarelas Internacionales") },
  ];

  const filteredIntegrations =
    activeCategory === "all"
      ? integrations
      : integrations.filter((item) => item.category === activeCategory);

  return (
    <section id="integrations" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E00E8B]/10 text-[#E00E8B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("Ecosystem of Connectors & Gateways", "Ecosistema de Conectores y Pasarelas")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133374] tracking-tight">
            {t("Integrations by Category", "Integraciones por Categoría")}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t(
              "Connect RetailOne and SAP Business One with leading delivery aggregators, e-commerce storefronts, pinpad terminals, and international payment networks.",
              "Conecta RetailOne y SAP Business One con agregadores de delivery líderes, tiendas en línea, terminales bancarias y pasarelas de pago internacionales."
            )}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#133374] text-white shadow-md scale-102"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Integration Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {filteredIntegrations.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-200 hover:border-[#133374]/40 hover:shadow-lg rounded-2xl p-6 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.categoryBadgeClass}`}
                  >
                    {language === "es" ? item.categoryLabelEs : item.categoryLabel}
                  </span>
                  <span className={`text-[11px] ${item.statusBadgeClass}`}>
                    {language === "es" ? item.statusBadgeEs : item.statusBadge}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#133374] transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === "es" ? item.descriptionEs : item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-[#133374]">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SAP B1 Ready</span>
                </span>
                <span className="text-[#E00E8B] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
