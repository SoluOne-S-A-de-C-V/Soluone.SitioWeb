"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingCart,
  Receipt,
  PackageCheck,
  Boxes,
  Gift,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Database,
  ShieldCheck,
  Zap,
  Activity,
  Scan,
} from "lucide-react";

export function BentoGrid() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#133374] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
            Core Retail Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#133374]">
            Engineered for High-Volume Store Execution
          </h2>
          <p className="text-base text-[#54595F] leading-relaxed">
            Every module is tightly synchronized with SAP Business One tables, guaranteeing real-time stock visibility and zero transactional bottlenecks.
          </p>
        </div>

        {/* BENTO GRID (6 CELLS) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* CELL 1: CHAIN DASHBOARD (8 Cols) */}
          <div
            onMouseEnter={() => setHoveredCell("dashboard")}
            onMouseLeave={() => setHoveredCell(null)}
            className="md:col-span-8 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#133374] text-[#29A1F2] flex items-center justify-center font-bold">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#133374]">Chain Dashboard</h3>
                    <p className="text-xs text-slate-500">Executive multi-branch control HUD</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Live Telemetry
                </span>
              </div>

              <p className="text-sm text-[#54595F] leading-relaxed max-w-xl">
                Centralize your multi-branch operations in a single cloud dashboard. Track real-time sales KPIs, gross margins, cash register closures, and branch performance directly connected to SAP Business One.
              </p>

              {/* Live Metric Strip */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400 block">REAL-TIME KPIS</span>
                  <span className="text-sm font-bold text-[#133374]">Per-Store Metrics</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400 block">EXECUTIVE AUDITS</span>
                  <span className="text-sm font-bold text-[#133374]">Blind Cash Closes</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400 block">ANOMALY ENGINE</span>
                  <span className="text-sm font-bold text-[#E00E8B]">Automated Alerts</span>
                </div>
              </div>

              {/* Dashboard Preview Frame */}
              <div className="relative aspect-16/9 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white mt-4">
                <Image
                  src="/images/Screenshot_6.png"
                  alt="Chain Dashboard Telemetry"
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">SAP B1 Service Layer Native Sync</span>
              <Link
                href="/v2/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#133374] hover:text-[#E00E8B] group-hover:translate-x-1 transition-all"
              >
                Schedule demo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* CELL 2: SALES & POS (4 Cols) */}
          <div
            onMouseEnter={() => setHoveredCell("sales")}
            onMouseLeave={() => setHoveredCell(null)}
            className="md:col-span-4 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#133374] text-[#E00E8B] flex items-center justify-center font-bold">
                <Receipt className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#133374]">Sales & POS</h3>
                <p className="text-xs text-slate-500">High-velocity counter checkout</p>
              </div>

              <p className="text-xs text-[#54595F] leading-relaxed">
                Adapts from rapid express checkouts (groceries, cafes) to multi-stage consultative sales flows (quotes, advance payments, deliveries, reserve invoices).
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-2 text-[#133374]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E00E8B]" />
                  <span>Sub-second barcode scanning</span>
                </div>
                <div className="flex items-center gap-2 text-[#133374]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E00E8B]" />
                  <span>Integrated CFDI 4.0 invoicing</span>
                </div>
                <div className="flex items-center gap-2 text-[#133374]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E00E8B]" />
                  <span>Offline-first resilience</span>
                </div>
              </div>

              {/* POS Interface Preview */}
              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white mt-2">
                <Image
                  src="/images/Screenshot_4-1.png"
                  alt="Sales POS Terminal"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-600 font-bold">0% Data Loss Offline</span>
              <Link
                href="/v2/products/retail-one"
                className="text-xs font-bold text-[#133374] hover:text-[#E00E8B]"
              >
                Details &rarr;
              </Link>
            </div>
          </div>

          {/* CELL 3: OMNICHANNEL ORDER MANAGEMENT (4 Cols) */}
          <div
            onMouseEnter={() => setHoveredCell("orders")}
            onMouseLeave={() => setHoveredCell(null)}
            className="md:col-span-4 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#133374] text-[#29A1F2] flex items-center justify-center font-bold">
                <ShoppingCart className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#133374]">Order Management</h3>
                <p className="text-xs text-slate-500">Unified omnichannel intake</p>
              </div>

              <p className="text-xs text-[#54595F] leading-relaxed">
                Receive orders from web, WhatsApp, and B2B portals. Automatically route orders to the nearest store branch with real-time stock reservation in SAP.
              </p>

              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white mt-2">
                <Image
                  src="/images/Screenshot_5.png"
                  alt="Order Fulfillment Pipeline"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">Multi-Channel Routing</span>
              <Link href="/v2/contact" className="text-xs font-bold text-[#133374] hover:text-[#E00E8B]">
                Explore &rarr;
              </Link>
            </div>
          </div>

          {/* CELL 4: INVENTORY & RF MOBILE COUNTS (4 Cols) */}
          <div
            onMouseEnter={() => setHoveredCell("inventory")}
            onMouseLeave={() => setHoveredCell(null)}
            className="md:col-span-4 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#133374] text-white flex items-center justify-center font-bold">
                <Boxes className="w-5 h-5 text-[#29A1F2]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#133374]">Inventory & Mobile RF</h3>
                <p className="text-xs text-slate-500">Accurate stock & cycle counts</p>
              </div>

              <p className="text-xs text-[#54595F] leading-relaxed">
                Conduct cycle counts by aisle or zone using mobile handheld scanners while your store operates. Track serial numbers, batches, and expiration dates.
              </p>

              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 mt-2">
                <Image
                  src="/images/29853.jpg"
                  alt="Warehouse Stock Scanning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">Live Cross-Store Lookup</span>
              <Link href="/v2/contact" className="text-xs font-bold text-[#133374] hover:text-[#E00E8B]">
                Explore &rarr;
              </Link>
            </div>
          </div>

          {/* CELL 5: PURCHASING & SMART REPLENISHMENT (4 Cols) */}
          <div
            onMouseEnter={() => setHoveredCell("purchasing")}
            onMouseLeave={() => setHoveredCell(null)}
            className="md:col-span-4 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#133374] text-[#E00E8B] flex items-center justify-center font-bold">
                <PackageCheck className="w-5 h-5" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#133374]">Purchasing & Replenishment</h3>
                <p className="text-xs text-slate-500">Algorithmic R1 inventory restock</p>
              </div>

              <p className="text-xs text-[#54595F] leading-relaxed">
                Generate automated purchase orders based on sales velocity and distribute goods from central warehouses with strict freight and landed cost control.
              </p>

              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 mt-2">
                <Image
                  src="/images/148310.jpg"
                  alt="Store Purchasing & Receiving"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">Smart Suggestions (R1)</span>
              <Link href="/v2/contact" className="text-xs font-bold text-[#133374] hover:text-[#E00E8B]">
                Explore &rarr;
              </Link>
            </div>
          </div>

          {/* CELL 6: LOYALTY & REWARDS (12 Cols Full Width) */}
          <div
            onMouseEnter={() => setHoveredCell("loyalty")}
            onMouseLeave={() => setHoveredCell(null)}
            className="md:col-span-12 rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#133374] text-[#E00E8B] flex items-center justify-center font-bold">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#133374]">Loyalty, Points & Dynamic Promotions</h3>
                    <p className="text-xs text-slate-500">Turn occasional shoppers into recurring brand advocates</p>
                  </div>
                </div>

                <p className="text-sm text-[#54595F] leading-relaxed">
                  Design tiered promotions, digital wallets with point accumulation, branded gift cards, and automated bundle pricing. Segment customers and launch targeted retention campaigns with direct impact on repeat store visits.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-mono text-slate-400 block">DIGITAL WALLETS</span>
                    <span className="text-xs font-bold text-[#133374]">Point Redemption</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-mono text-slate-400 block">DYNAMIC RULES</span>
                    <span className="text-xs font-bold text-[#133374]">Time & Day BOGOs</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-mono text-slate-400 block">BUNDLES & COMBOS</span>
                    <span className="text-xs font-bold text-[#133374]">Automated Kits</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-mono text-slate-400 block">VIP TIERS</span>
                    <span className="text-xs font-bold text-[#E00E8B]">Tiered Discounts</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                  <Image
                    src="/images/2148672833.jpg"
                    alt="Customer Loyalty Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
