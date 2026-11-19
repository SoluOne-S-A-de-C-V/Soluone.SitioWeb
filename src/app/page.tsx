"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FeaturesTabs } from "@/components/FeaturesTabs";
import { StatsCounter } from "@/components/StatsCounter";
import { IntegrationsCatalog } from "@/components/IntegrationsCatalog";
import { VideoTestimonialsModal } from "@/components/VideoTestimonialsModal";
import { SapOrlandoBadge } from "@/components/SapOrlandoBadge";
import { EcosystemPillarsFlow } from "@/components/EcosystemPillarsFlow";
import { RegionalCompliance } from "@/components/RegionalCompliance";
import { ImageLightboxModal } from "@/components/ImageLightboxModal";
import { industriesList } from "@/data/industries";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Globe,
  Layers,
  ArrowUpRight,
  Store,
  ChevronLeft,
  ChevronRight,
  Check,
  Banknote,
  Bike,
  Maximize2,
} from "lucide-react";

// English carousel slides (100% English interface screenshots)
const heroSlidesEn = [
  {
    image: "/images/Screenshot_6.png",
    title: "Web Reports & Executive Store Sales",
  },
  {
    image: "/images/Screenshot_5.png",
    title: "Pending Document Authorizations Workflow",
  },
  {
    image: "/images/Screenshot_4-1.png",
    title: "Executive Dashboard & BI Metrics",
  },
  {
    image: "/images/Voi-4.jpg",
    title: "Omnichannel Delivery & Store Orders",
  },
];

// Spanish carousel slides (from client homepage folder)
const heroSlidesEs = [
  {
    image: "/images/carousel_1.png",
    title: "Reportes Web y Consulta de Ventas por Tienda",
  },
  {
    image: "/images/carousel_2.png",
    title: "Flujo de Autorizaciones Pendientes",
  },
  {
    image: "/images/carousel_3.png",
    title: "Tablero Ejecutivo y Métricas en Tiempo Real",
  },
  {
    image: "/images/carousel_4.png",
    title: "Monitoreo Omnicanal y Despacho de Pedidos",
  },
];

export default function HomePage() {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);

  const heroSlides = language === "es" ? heroSlidesEs : heroSlidesEn;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="space-y-0 bg-white">
      {/* 1. HERO BANNER WITH SAP CERTIFIED BADGE */}
      <section className="relative overflow-hidden bg-[#133374] text-white pt-10 pb-20 sm:pt-14 sm:pb-24">
        {/* Radial lighting glow centered behind title & mockup */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#29A1F2]/25 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
          {/* SAP Certified Authority Badge */}
          <div className="flex justify-center">
            <SapOrlandoBadge variant="floating" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            <span className="text-[#E00E8B]">{t("Store Operation", "Plataforma de Operación")}</span>{" "}
            {t("Platform for SAP Business One", "de Tiendas para SAP Business One")}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-normal">
            {t(
              "RetailOne is a point-of-sale system with great adaptability and configuration capabilities to meet the needs of your business.",
              "RetailOne es un sistema de punto de venta con gran adaptabilidad y capacidad de configuración para cubrir las necesidades de su negocio."
            )}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-xl font-bold text-base bg-white text-[#133374] hover:text-[#E00E8B] shadow-xl hover:shadow-2xl active:scale-98 transition-all"
            >
              {t("Request a demo", "Solicitar demo")}
            </Link>
            <Link
              href="/ecosystem"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xs transition-all gap-2"
            >
              <span>{t("Explore Platform Ecosystem", "Explorar Ecosistema de la Plataforma")}</span>
              <ArrowRight className="w-4 h-4 text-[#E00E8B]" />
            </Link>
          </div>

          {/* Dashboard Preview Mockup */}
          <div className="pt-8 max-w-5xl mx-auto relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white p-1">
              <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[540px]">
                <Image
                  key={heroSlides[currentSlide].image}
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  fill
                  className="object-contain object-top"
                  priority
                />
              </div>
            </div>

            {/* Slider arrows */}
            <button
              onClick={prevSlide}
              aria-label={t("Previous slide", "Diapositiva anterior")}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label={t("Next slide", "Diapositiva siguiente")}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel dots */}
            <div className="flex justify-center gap-2 mt-5">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentSlide ? "w-8 bg-[#E00E8B]" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <StatsCounter />

      {/* 2.5 ECOSYSTEM ARCHITECTURE: SAP BUSINESS ONE CORE */}
      <section id="ecosystem" className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E00E8B] bg-[#FFE3F4] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              {t("Architecture & Integration", "Arquitectura e Integración")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133374] tracking-tight">
              {t("SAP Business One ERP:", "ERP SAP Business One:")}{" "}
              <span className="text-[#E00E8B]">{t("The Core", "El Núcleo")}</span>{" "}
              {t("of Your Retail Operations", "de sus Operaciones Retail")}
            </h2>
            <p className="text-[#54595F] text-base sm:text-lg leading-relaxed">
              {t(
                "RetailOne communicates bidirectionally and in real-time with SAP B1. If a store loses internet connectivity, it continues operating 100% offline with zero downtime and automatically reconciles when reconnected.",
                "RetailOne se comunica de forma bidireccional y en tiempo real con SAP B1. Si una tienda pierde conexión a internet, continúa operando 100% offline sin interrupciones y se sincroniza automáticamente al reconectarse."
              )}
            </p>
          </div>

          {/* 3 Pillars Flow Component */}
          <EcosystemPillarsFlow />

          {/* CTAs for full diagram & dedicated page */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#133374] text-white hover:bg-[#E00E8B] transition-all shadow-md active:scale-98"
            >
              <span>{t("Explore Full Platform & Modules", "Explorar Plataforma y Módulos")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsDiagramOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-100 text-[#133374] border border-slate-300 transition-all shadow-xs cursor-pointer active:scale-98"
            >
              <Maximize2 className="w-4 h-4 text-[#E00E8B]" />
              <span>Full Solution Diagram</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. MEET OUR PRODUCTS (ORDER: 1. INVOICEONE, 2. RETAILONE, 3. VOI+) */}
      <section id="products" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
              {t("Integrated Product Family", "Familia de Productos Integrada")}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#133374] tracking-tight">
              {t("Meet our", "Conozca nuestros")}{" "}
              <span className="text-[#E00E8B]">{t("products", "productos")}</span>
            </h2>
            <p className="text-[#54595F] text-base sm:text-lg leading-relaxed">
              {t(
                "At SoluONE, we build specialized tools with native SAP Business One integration, engineered to facilitate high-speed execution across every department.",
                "En SoluONE construimos herramientas especializadas con integración nativa a SAP Business One, diseñadas para agilizar la operación en cada área."
              )}
            </p>
          </div>

          {/* 3-Column Product Cards Grid (Order: 1. InvoiceOne, 2. RetailOne, 3. Voi+) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* CARD 1: InvoiceOne */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 shadow-lg p-8 flex flex-col justify-between space-y-6 hover:border-slate-300 hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="relative h-10 w-36">
                    <Image
                      src="/images/logo_invoice_one.png"
                      alt="InvoiceOne"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E00E8B]/10 text-[#E00E8B]">
                    CFDI 4.0 SAT
                  </span>
                </div>

                <p className="text-sm text-[#54595F] leading-relaxed">
                  {t(
                    "InvoiceOne is an automated electronic invoicing and tax compliance Add-On that guarantees 100% Mexican SAT regulatory compliance directly inside SAP Business One.",
                    "InvoiceOne es un Add-On de facturación electrónica y cumplimiento fiscal que garantiza el 100% de cumplimiento con las normativas del SAT directamente dentro de SAP Business One."
                  )}
                </p>

                <div className="pt-2">
                  <Link
                    href="/pageproductsdetail/invoice-one"
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm bg-[#133374] text-white hover:bg-[#E00E8B] transition-colors shadow-md text-center"
                  >
                    {t("Schedule an Appointment", "Agendar Cita")}
                  </Link>
                </div>

                <div className="pt-6 border-t border-slate-200 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#133374]">
                    {t("Key features:", "Funcionalidades clave:")}
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#444]">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("24/7 Web self-service customer invoicing portal", "Portal web de autofacturación para clientes 24/7")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("Mass PAC XML stamping & PDF generation", "Timbrado masivo de XML con PAC y generación de PDF")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("Automatic cancellation with SAT fiscal motives", "Cancelación automática con motivos fiscales del SAT")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("Payment supplements & Carta Porte transport documents", "Complementos de pago y Carta Porte para traslados")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("Direct creation of accounts receivable in SAP", "Afectación contable directa en cuentas por cobrar de SAP")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href="/pageproductsdetail/invoice-one"
                  className="text-xs font-bold text-[#133374] hover:text-[#E00E8B] flex items-center gap-1"
                >
                  {t("Learn more about InvoiceOne", "Conozca más sobre InvoiceOne")} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Banknote className="w-6 h-6 text-slate-400" />
              </div>
            </div>

            {/* CARD 2: RetailOne */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 flex flex-col justify-between space-y-6 hover:border-[#133374]/30 hover:shadow-xl transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="relative h-10 w-36">
                    <Image
                      src="/images/logo_retail_one.png"
                      alt="RetailOne"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#133374]/10 text-[#133374]">
                    {t("Point of Sale", "Punto de Venta")}
                  </span>
                </div>

                <p className="text-sm text-[#54595F] leading-relaxed">
                  {t(
                    "RetailOne is an enterprise point of sale system designed specifically for SAP Business One, delivering seamless native integration between counter registers and your ERP.",
                    "RetailOne es un sistema de punto de venta empresarial diseñado específicamente para SAP Business One, con integración nativa entre cajas y su ERP."
                  )}
                </p>

                <div className="pt-2">
                  <Link
                    href="/pageproductsdetail/retail-one"
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm bg-[#133374] text-white hover:bg-[#E00E8B] transition-colors shadow-md text-center"
                  >
                    {t("Schedule an Appointment", "Agendar Cita")}
                  </Link>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#133374]">
                    {t("Key features:", "Funcionalidades clave:")}
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#444]">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("Touchscreen & keyboard-optimized sales registers", "Cajas de cobro para pantalla táctil y teclado rápido")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("100% Offline-first local database continuity", "Operación 100% offline con base de datos local")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("Mobile handheld scanning for warehouse & floor", "Terminales móviles para inventario y almacén")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("Real-time multi-branch inventory tracking", "Existencias y traspasos multitienda en tiempo real")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>{t("Advanced promotions, combos, and customer loyalty", "Promociones avanzadas, combos y lealtad de clientes")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/pageproductsdetail/retail-one"
                  className="text-xs font-bold text-[#133374] hover:text-[#E00E8B] flex items-center gap-1"
                >
                  {t("Learn more about RetailOne", "Conozca más sobre RetailOne")} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* CARD 3: VOI+ (NEW RELEASE - HIGHLIGHTED) */}
            <div className="bg-gradient-to-b from-[#FFEAF6] via-white to-slate-50 rounded-3xl border-2 border-[#E00E8B] shadow-xl p-8 flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all relative">
              <span className="absolute -top-3.5 right-6 bg-[#E00E8B] text-white font-bold text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
                {t("New Solution", "Nueva Solución")}
              </span>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="relative h-10 w-28">
                    <Image
                      src="/images/logo_voi.png"
                      alt="Voi+"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E00E8B]/15 text-[#E00E8B]">
                    {t("Delivery Hub", "Hub de Delivery")}
                  </span>
                </div>

                <p className="text-sm text-[#54595F] leading-relaxed">
                  {t(
                    "Beyond delivery: connect all digital ordering platforms directly to your SAP Business One ERP, eliminating manual re-entries and dispatching your own fleet.",
                    "Más allá del delivery: conecte plataformas digitales de pedidos directamente a SAP Business One, eliminando recapturas y despachando flota propia."
                  )}
                </p>

                <div className="pt-2">
                  <a
                    href="https://voi.plus/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-[#133374] transition-colors shadow-md text-center"
                  >
                    {t("Visit Voi+ Platform ↗", "Visitar Plataforma Voi+ ↗")}
                  </a>
                </div>

                <div className="pt-6 border-t border-pink-200/60 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#133374]">
                    {t("Voi+ Core Capabilities:", "Capacidades Clave de Voi+:")}
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#444]">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0 font-bold" />
                      <span>{t("Delivery Aggregation: UberEats, Rappi, PedidosYa, DiDi Food", "Agrupador de delivery: UberEats, Rappi, PedidosYa, DiDi Food")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0 font-bold" />
                      <span>{t("Branded Online Storefront (Shopify & WooCommerce)", "Tienda en línea con marca propia (Shopify y WooCommerce)")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0 font-bold" />
                      <span>{t("Unified Digital Order & In-Store Counter Analytics", "Analítica unificada de pedidos digitales y mostrador")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0 font-bold" />
                      <span>{t("Voi Drivers: Proprietary Fleet Dispatch & GPS Tracking", "Voi Drivers: Despacho de repartidores y rastreo GPS")}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0 font-bold" />
                      <span>{t("Omnichannel Loyalty Program, Reward Points & Cashback", "Programa de lealtad omnicanal, puntos y cashback")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-pink-200/60 flex items-center justify-between">
                <a
                  href="https://voi.plus/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#E00E8B] hover:text-[#133374] flex items-center gap-1"
                >
                  {t("Explore Voi+ Platform", "Explorar Plataforma Voi+")} <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Bike className="w-6 h-6 text-[#E00E8B]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES TABS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
              {t("Main Features", "Módulos Principales")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
              {t("Designed to optimize every stage of your retail operations", "Diseñado para optimizar cada etapa de su operación retail")}
            </h2>
            <p className="text-[#54595F] text-base leading-relaxed">
              {t(
                "Explore the modules of RetailOne specifically tailored for seamless point-of-sale execution.",
                "Explore los módulos de RetailOne diseñados específicamente para una operación en punto de venta fluida."
              )}
            </p>
          </div>

          <FeaturesTabs />
        </div>
      </section>

      {/* 5. WEB REPORTS & ANALYTICS SECTION */}
      <section className="py-20 bg-[#133374] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E00E8B]/20 text-[#FFC8E9] border border-[#E00E8B]/30">
                <BarChart3 className="w-3.5 h-3.5" />
                {t("Reliable Architecture & Web Reports", "Arquitectura Confiable y Reportes Web")}
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {t(
                  "We centralize your entire operation on a single platform",
                  "Centralizamos toda su operación en una sola plataforma"
                )}
              </h2>

              <p className="text-slate-200 leading-relaxed text-base">
                {t(
                  "With our web reports, you can manage your business with optimal reports and indicators. Can’t find the report you need? No problem, you can also create your own web reports and control access through user permissions and roles.",
                  "Con nuestros reportes web, administre su negocio con indicadores clave. ¿No encuentra el reporte exacto? Cree sus propios reportes web gobernados por perfiles y roles de usuario."
                )}
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E00E8B] flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <span>{t("Real-time visibility of sales, gross margins, and store register cuts", "Visibilidad en tiempo real de ventas, márgenes brutos y cortes de caja")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E00E8B] flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <span>{t("Customizable web query generator governed by roles and permissions", "Generador de consultas web personalizadas por roles y permisos")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E00E8B] flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <span>{t("Direct live integration with SAP Business One SQL and HANA tables", "Integración directa con tablas SQL y HANA de SAP Business One")}</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-md"
                >
                  {t("Schedule an Appointment", "Agendar Cita")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/ecosystem#reports"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  {t("View BI Dashboards", "Ver Tableros de BI")}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white p-2">
                <div className="relative w-full h-80 sm:h-96">
                  <Image
                    key={language}
                    src={language === "es" ? "/images/carousel_1.png" : "/images/Screenshot_6.png"}
                    alt={t("Web Reports Dashboard", "Tablero de Reportes Web")}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTEGRATIONS CATALOG BY CATEGORY */}
      <IntegrationsCatalog />

      {/* 7. INDUSTRIES GRID */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
                {t("Industries", "Industrias")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
                {t("Solutions Tailored to Your Industry", "Soluciones a la Medida de su Industria")}
              </h2>
              <p className="text-[#54595F] text-base max-w-2xl">
                {t(
                  "Discover how RetailOne resolves checkout, inventory, and purchasing flows specific to your vertical.",
                  "Descubra cómo RetailOne resuelve los flujos de cobro, inventario y abasto propios de su sector comercial."
                )}
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#133374] hover:text-[#E00E8B] transition-colors"
            >
              {t("View all industries", "Ver todas las industrias")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((ind) => (
              <Link
                key={ind.slug}
                href={`/${ind.slug}`}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#133374] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={ind.heroImage}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs border border-white/20">
                    {ind.name}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-[#54595F] line-clamp-3 leading-relaxed">
                    {ind.industryDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#133374] group-hover:text-[#E00E8B]">
                    <span>{t("Explore solution", "Explorar solución")}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E00E8B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CASOS REALES EN VIDEO CON MODAL ON-DEMAND */}
      <VideoTestimonialsModal />

      {/* 8.5 LOCALIZACIÓN REGIONAL & FISCAL */}
      <RegionalCompliance />

      {/* 9. BOTTOM CTA */}
      <section className="py-20 bg-[#133374] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {t("Schedule an Appointment", "Agendar una Cita")}
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              "At SoluONE, we specialize in developing Add-On applications specifically designed for the SAP Business One ERP system.",
              "En SoluONE nos especializamos en desarrollar aplicaciones Add-On diseñadas específicamente para el sistema ERP SAP Business One."
            )}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-base bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-xl"
            >
              {t("Request a demo", "Solicitar demo")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL FOR FULL ARCHITECTURE DIAGRAM */}
      <ImageLightboxModal
        isOpen={isDiagramOpen}
        src="/images/architecture_diagram_en.jpg"
        title="Full Solution Diagram"
        caption="Comprehensive architecture diagram, operational store flows, peripheral hardware, and continuous synchronization with SAP Business One."
        onClose={() => setIsDiagramOpen(false)}
      />
    </div>
  );
}
