"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EcosystemPillarsFlow } from "@/components/EcosystemPillarsFlow";
import { IntegrationsCatalog } from "@/components/IntegrationsCatalog";
import { VideoTestimonialsModal } from "@/components/VideoTestimonialsModal";
import { RegionalCompliance } from "@/components/RegionalCompliance";
import { ImageLightboxModal } from "@/components/ImageLightboxModal";
import { CaptchaWidget } from "@/components/CaptchaWidget";
import { industriesList } from "@/data/industries";
import {
  Layers,
  ArrowRight,
  ArrowUpRight,
  Download,
  Maximize2,
  CheckCircle2,
  Store,
  Database,
  ShoppingBag,
  Monitor,
  Smartphone,
  BarChart3,
  Globe2,
  Calendar,
  Send,
} from "lucide-react";

export default function EcosystemPage() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    src: "",
    title: "",
    caption: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    solution: "Complete Ecosystem (Retail One + Voi+)",
    message: "",
  });

  const openLightbox = (src: string, title: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      src,
      title,
      caption,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION: ECOSYSTEM & OFFICIAL ARCHITECTURE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1224] via-[#133374] to-slate-900 text-white py-16 sm:py-24">
        {/* Glow and grid effects */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E00E8B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E00E8B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                An end-to-end platform for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-[#FFC8E9] to-[#E00E8B]">
                  limitless retail
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                Unify all your physical and digital sales channels, automate in-store retail operations with <strong>SAP Business One ERP</strong>, and scale without technical bottlenecks or manual re-entries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <button
                  onClick={() =>
                    openLightbox(
                      "/images/architecture_diagram_en.jpg",
                      "Full Solution Diagram",
                      "Comprehensive architecture diagram, operational store flows, peripheral hardware, and SAP B1 synchronization."
                    )
                  }
                  className="bg-[#E00E8B] hover:bg-pink-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Full Solution Diagram</span>
                </button>

                <a
                  href="#schedule-demo"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/20 transition-all text-center backdrop-blur-xs flex items-center justify-center"
                >
                  Request Live Demo
                </a>
              </div>

              {/* Key Credentials Row */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10">
                <div>
                  <div className="text-3xl font-extrabold text-white">17+</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Years Innovating (2009)</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-pink-400">80+</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Certified Specialists</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">8,000+</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Active Store Registers</div>
                </div>
              </div>
            </div>

            {/* Right Column: SAP Certified Badge & Diagram Preview Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl space-y-6 text-center">
                <div className="inline-block p-4 bg-white rounded-2xl shadow-lg">
                  <div className="relative h-20 w-48 mx-auto">
                    <Image
                      src="/images/Sap-Certified.png"
                      alt="SAP Certified Solution"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    RetailOne for SAP Business One
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Enterprise retail store platform with global presence, certified and validated for SAP Business One standards.
                  </p>
                </div>

                {/* Architecture Thumbnail Trigger */}
                <div
                  onClick={() =>
                    openLightbox(
                      "/images/architecture_diagram_en.jpg",
                      "Full Solution Diagram",
                      "Comprehensive architecture diagram, operational store flows, peripheral hardware, and SAP B1 synchronization."
                    )
                  }
                  className="p-3.5 bg-[#E00E8B]/20 border border-[#E00E8B]/30 hover:border-[#E00E8B] rounded-2xl flex items-center justify-between text-xs cursor-pointer group transition-all"
                >
                  <span className="font-medium text-pink-200 text-left">
                    Want to inspect the Full Solution Diagram in high resolution?
                  </span>
                  <span className="bg-[#E00E8B] text-white font-bold px-3 py-1.5 rounded-lg group-hover:bg-pink-600 transition text-[11px] shrink-0 ml-2">
                    Inspect ↗
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 1: ARCHITECTURE BREAKDOWN - THE SAP BUSINESS ONE CORE */}
      <section id="architecture" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E00E8B] bg-[#FFE3F4] px-3.5 py-1.5 rounded-full">
              Integration Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133374] tracking-tight">
              SAP Business One ERP: The Operational Core
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Retail One communicates bidirectionally in real-time with SAP B1. If a store loses internet connectivity, it continues operating 100% offline with zero downtime and automatically reconciles when reconnected.
            </p>
          </div>

          {/* 3 Pillars Flow Component */}
          <EcosystemPillarsFlow />
        </div>
      </section>

      {/* 3. SECTION 2: POINT OF SALE & MOBILE HARDWARE */}
      <section id="point-of-sale" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Showcase A: In-Store Touch POS with Modifiers */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5" />
                Store Operations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                High-speed, reliable Touch POS with modifier buttons
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Engineered for high-throughput retail checkout lines. Enables instant item selection, item customization and modifiers, multi-register management, and complete offline autonomy.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[#E00E8B] font-bold text-base mb-1">✓ Promotions</div>
                  <p className="text-xs text-slate-500">BOGO, combos, tiered discounts, and loyalty perks.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[#133374] font-bold text-base mb-1">✓ Offline Mode</div>
                  <p className="text-xs text-slate-500">Uninterrupted checkout with automated batch synchronization.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[#133374] font-bold text-base mb-1">✓ Modifiers</div>
                  <p className="text-xs text-slate-500">Custom orders for cafes, food service, and specialty retail.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-[#E00E8B] font-bold text-base mb-1">✓ Inventory</div>
                  <p className="text-xs text-slate-500">Live stock decrements synchronized directly with SAP B1.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openLightbox(
                    "/images/pos_modificadores.png",
                    "Retail One POS with Modifier Buttons",
                    "High-speed checkout interface with touch-friendly categories, families, and customizable product modifiers."
                  )
                }
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#133374] to-[#E00E8B] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-white p-3 rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
                  <div className="relative w-full h-[360px] sm:h-[460px]">
                    <Image
                      src="/images/pos_modificadores.png"
                      alt="Point of Sale with Modifiers"
                      fill
                      className="object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-5 right-5 bg-slate-900/90 text-white text-xs px-3.5 py-2 rounded-xl flex items-center gap-2 backdrop-blur-md shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-[#E00E8B]" />
                    <span className="font-semibold">Click to enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Showcase B: Retail One Mobile (Android) */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div
                className="relative max-w-sm cursor-pointer group w-full"
                onClick={() =>
                  openLightbox(
                    "/images/mobile_android.png",
                    "Retail One for Android Mobile Devices",
                    "Mobile application for rugged handheld terminals, cycle counts, floor auditing, and table ordering."
                  )
                }
              >
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#E00E8B]/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition" />
                <div className="relative bg-white p-4 rounded-3xl border border-slate-200 shadow-2xl">
                  <div className="relative w-full h-[480px]">
                    <Image
                      src="/images/mobile_android.png"
                      alt="Retail One Android App"
                      fill
                      className="object-contain rounded-2xl"
                    />
                  </div>
                  <div className="absolute bottom-6 right-6 bg-slate-900/90 text-white text-xs px-3.5 py-2 rounded-xl flex items-center gap-2 backdrop-blur-md shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-[#E00E8B]" />
                    <span className="font-semibold">View mobile interface</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E00E8B] bg-[#FFE3F4] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                Total Mobility
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Retail One for mobile devices: Operations on the move
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Take store operational power anywhere. Built for Android mobile handhelds with integrated laser scanners, table ordering in food service, floor pre-sales, and warehouse audits.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="p-2 bg-blue-100 text-[#133374] rounded-xl font-bold text-xs shrink-0">
                    01
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Pre-Sales & Assisted Floor Selling
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Assist shoppers directly in the aisle or at their table without register lines, routing orders directly to cashiers or kitchen displays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="p-2 bg-pink-100 text-[#E00E8B] rounded-xl font-bold text-xs shrink-0">
                    02
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Stock Transfers & Cycle Counts
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Scan barcodes or QR codes for cyclic auditing and stock intake in seconds with instant SAP B1 validation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="p-2 bg-blue-100 text-[#133374] rounded-xl font-bold text-xs shrink-0">
                    03
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Purchase Order Receipts & Verification
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Physically verify deliveries against SAP Business One purchase orders in real time to eliminate stock discrepancies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: WEB REPORTS & LIVE DASHBOARDS */}
      <section id="reports" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5" />
              Business Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133374] tracking-tight">
              Web Reports: Real-time intelligence for smarter decisions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Supervise performance across all branch locations, pending orders, hourly sales volume, and receivables from any secure web browser.
            </p>
          </div>

          {/* Imagen Dashboard */}
          <div
            className="relative max-w-5xl mx-auto cursor-pointer group"
            onClick={() =>
              openLightbox(
                "/images/dashboard_web.jpg",
                "Executive Web Reports Dashboard",
                "Real-time management metrics: sales by store, top products, margin breakdown, and cash register closures."
              )
            }
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-[#E00E8B] rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition" />
            <div className="relative bg-slate-900 p-2 sm:p-4 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-3 px-3 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-slate-300 font-mono text-[11px]">
                    soluone.com/reports/dashboard
                  </span>
                </div>
                <span className="text-pink-400 font-medium">Synchronized with SAP B1 ✓</span>
              </div>
              <div className="relative w-full h-[320px] sm:h-[480px] mt-2">
                <Image
                  src="/images/dashboard_web.jpg"
                  alt="Web Reports Dashboard"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* 4 Key Features of Reports */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#133374] flex items-center justify-center font-bold mb-4 text-lg">
                📊
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Standard & Custom Reports</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filter by date, store location, sales rep, SKU, or business unit without overloading your SAP production server.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#E00E8B] flex items-center justify-center font-bold mb-4 text-lg">
                📈
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Executive Dashboards</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aging charts, top balance accounts, open inventory transfers, and month-over-month comparative analysis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#133374] flex items-center justify-center font-bold mb-4 text-lg">
                📥
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Instant Export</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Export audit-ready data into Excel, CSV, and executive PDF formats with a single click.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#E00E8B] flex items-center justify-center font-bold mb-4 text-lg">
                🔒
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Secure Web Access</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Granular role-based permissions per store location, robust authentication, and SSL encrypted connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: PRODUCT FAMILY (RETAIL ONE + INVOICE ONE + VOI+) */}
      <section id="products" className="py-20 lg:py-28 bg-[#0A1224] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E00E8B] bg-white/10 px-3.5 py-1.5 rounded-full">
              Enterprise Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Explore our product suite for SAP Business One
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Specialized tools with native SAP integration, engineered to empower every commercial touchpoint.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* PRODUCT 1: INVOICEONE */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-500 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold bg-[#E00E8B]/20 text-pink-300 px-3 py-1 rounded-full">
                    Fiscal Invoicing CFDI 4.0
                  </span>
                  <span className="text-slate-400 text-xs">For SAP B1</span>
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="relative h-10 w-36">
                    <Image
                      src="/images/logo_invoice_one.png"
                      alt="Logo InvoiceOne"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                <p className="text-slate-400 text-xs mb-6">
                  Automated electronic invoicing, compliance validation, and fiscal document lifecycle connected to SAT directly in SAP Business One.
                </p>

                <div className="border-t border-slate-700 pt-4 space-y-2.5 text-xs text-slate-300">
                  <div className="font-bold text-white uppercase text-[11px] tracking-wider mb-2">
                    Key Features:
                  </div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B]">✓</span> Automated XML parsing and fiscal structure validation</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B]">✓</span> Bulk invoicing and instantaneous PAC digital stamping</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B]">✓</span> Payment supplements & reception control</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B]">✓</span> Automatic delivery of signed PDF and XML invoices to clients</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B]">✓</span> Fiscal cancellations with statutory cancellation codes</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B]">✓</span> Foreign trade documents & import customs declarations</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B]">✓</span> Electronic accounting XML files and retail Addendas</div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-700">
                <Link
                  href="/pageproductsdetail/invoice-one"
                  className="block text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-3.5 rounded-xl text-xs transition"
                >
                  Explore InvoiceOne
                </Link>
              </div>
            </div>

            {/* PRODUCT 2: RETAILONE */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-400 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    Point of Sale
                  </span>
                  <span className="text-slate-400 text-xs">For SAP B1</span>
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="relative h-10 w-36">
                    <Image
                      src="/images/logo_retail_one.png"
                      alt="Logo RetailOne"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                <p className="text-slate-400 text-xs mb-6">
                  The most comprehensive and adaptable POS platform for retail enterprises.
                </p>

                <div className="border-t border-slate-700 pt-4 space-y-2.5 text-xs text-slate-300">
                  <div className="font-bold text-white uppercase text-[11px] tracking-wider mb-2">
                    Key Features:
                  </div>
                  <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> Control dashboards and end-of-day register closures</div>
                  <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> Customer layaways, pre-orders, and down payments</div>
                  <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> Omnichannel POS (Touch terminal & Android mobile)</div>
                  <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> Real-time purchasing, stock replenishment & transfers</div>
                  <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> Customer loyalty, reward points & advanced promotions</div>
                  <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> Banking terminal reconciliation & payment gateways</div>
                  <div className="flex items-center gap-2"><span className="text-blue-400">✓</span> Specialized vertical modules for 8+ retail industries</div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-700">
                <Link
                  href="/pageproductsdetail/retail-one"
                  className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl text-xs transition"
                >
                  Request RetailOne Demo
                </Link>
              </div>
            </div>

            {/* PRODUCT 3: VOI+ (NEW HIGHLIGHTED RELEASE) */}
            <div id="voi" className="bg-gradient-to-b from-[#E00E8B]/25 to-slate-800 border-2 border-[#E00E8B] rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative">
              <span className="absolute -top-3.5 right-6 bg-[#E00E8B] text-white font-bold text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg">
                New Solution
              </span>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold bg-[#E00E8B] text-white px-3 py-1 rounded-full">
                    Omnichannel & Delivery
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <div className="relative h-10 w-28">
                    <Image
                      src="/images/logo_voi.png"
                      alt="Logo Voi+"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                <p className="text-pink-200 text-xs mb-6">
                  Beyond delivery: connect all your digital ordering platforms directly with SAP B1.
                </p>

                <div className="border-t border-pink-500/30 pt-4 space-y-2.5 text-xs text-slate-200">
                  <div className="font-bold text-pink-300 uppercase text-[11px] tracking-wider mb-2">
                    Key Features:
                  </div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B] font-bold">✓</span> Delivery App Aggregation: UberEats, Rappi, PedidosYa, DiDi Food</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B] font-bold">✓</span> Branded Online Storefront (Shopify & WooCommerce)</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B] font-bold">✓</span> Unified cross-channel order & kitchen analytics</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B] font-bold">✓</span> Tailored discount codes, vouchers & promotional campaigns</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B] font-bold">✓</span> Customer loyalty rewards, digital stamp cards & cashback</div>
                  <div className="flex items-center gap-2"><span className="text-[#E00E8B] font-bold">✓</span> Voi Drivers: Dedicated driver mobile app & real-time GPS routing</div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-pink-500/30">
                <a
                  href="https://voi.plus/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#E00E8B] hover:bg-pink-600 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-pink-600/40 transition"
                >
                  Visit Voi+ Platform (voi.plus) ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 5: INTEGRATIONS CATALOG */}
      <IntegrationsCatalog />

      {/* 7. SECTION 6: VIDEO CASE STUDIES */}
      <VideoTestimonialsModal />

      {/* 8. SECTION 7: REGIONAL FISCAL COMPLIANCE */}
      <RegionalCompliance />

      {/* 9. SECTION 7.5: INDUSTRIES GRID */}
      <section id="industries" className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
                Industries
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
                Solutions Tailored to Your Industry
              </h2>
              <p className="text-[#54595F] text-base max-w-2xl">
                Discover how Retail One resolves checkout, inventory, and purchasing flows specific to your vertical.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#133374] hover:text-[#E00E8B] transition-colors"
            >
              View all industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((ind) => (
              <div
                key={ind.slug}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#133374] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
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

                  <div className="p-5 space-y-4">
                    <p className="text-xs text-[#54595F] line-clamp-3 leading-relaxed">
                      {ind.industryDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-2">
                  <Link
                    href={`/${ind.slug}`}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold bg-white border border-slate-200 text-[#133374] group-hover:bg-[#E00E8B] group-hover:border-[#E00E8B] group-hover:text-white transition-all shadow-2xs"
                  >
                    <span>Explore solution</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E00E8B] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  {ind.brochureUrl && (
                    <a
                      href={ind.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-500 hover:text-[#E00E8B] hover:bg-[#FFE3F4]/50 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-[#E00E8B]" />
                      <span>Download Brochure (PDF) ↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SECTION 8: PERSONALIZED DEMO BOOKING FORM */}
      <section id="schedule-demo" className="py-20 lg:py-28 bg-[#0A1224] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E00E8B] bg-white/10 px-3.5 py-1.5 rounded-full">
              Personalized Demonstration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Schedule a demonstration of the Platform
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Share your details and a certified retail consultant will show you live how to synchronize your stores with SAP Business One.
            </p>
          </div>

          <div className="bg-slate-800/80 p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Request Received Successfully!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for your interest in SoluOne. An enterprise SAP Business One retail specialist will contact you shortly to coordinate your demo.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white transition"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Smith"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E00E8B] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E00E8B] transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E00E8B] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Solution of Interest
                    </label>
                    <select
                      value={formData.solution}
                      onChange={(e) =>
                        setFormData({ ...formData, solution: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-[#E00E8B] transition"
                    >
                      <option>Complete Ecosystem (Retail One + Voi+)</option>
                      <option>Retail One (Touch POS & Android Handhelds)</option>
                      <option>Voi+ (Delivery & E-commerce Hub)</option>
                      <option>Invoice One (SAT CFDI 4.0 Fiscal Invoicing)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Details or Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us how many store locations you manage, what version of SAP Business One you run, or your key objectives..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E00E8B] transition"
                  />
                </div>

                {/* Captcha Verification */}
                <div className="pt-1">
                  <CaptchaWidget
                    verified={captchaVerified}
                    onVerify={(v) => {
                      setCaptchaVerified(v);
                      if (v) setCaptchaError(false);
                    }}
                    dark={true}
                  />
                  {captchaError && (
                    <p className="text-xs text-pink-400 mt-1 font-medium">
                      Please verify that you are not a robot before submitting.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E00E8B] hover:bg-pink-600 text-white font-bold py-4 rounded-xl text-sm shadow-xl shadow-pink-600/30 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Personalized Demonstration</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL FOR HIGH-RES IMAGES */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        title={lightboxState.title}
        caption={lightboxState.caption}
        onClose={closeLightbox}
      />
    </div>
  );
}
