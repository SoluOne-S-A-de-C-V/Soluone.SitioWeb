"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Receipt,
  ArrowRight,
  CheckCircle2,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  Globe,
  FileCheck,
  Server,
} from "lucide-react";

export function ProductMatrix() {
  const [activeTab, setActiveTab] = useState<"overview" | "workflows" | "architecture">("overview");

  return (
    <section className="py-24 bg-white text-[#133374]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E00E8B] bg-[#E00E8B]/10 px-3 py-1 rounded-full">
              Enterprise Ecosystem
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#133374]">
              Two Purpose-Built Engines. <br className="hidden sm:inline" />
              One Unified SAP Infrastructure.
            </h2>
          </div>

          {/* Interactive Matrix Tab Controls */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === "overview"
                  ? "bg-[#133374] text-white shadow-sm"
                  : "text-[#54595F] hover:text-[#133374]"
              }`}
            >
              Executive Overview
            </button>
            <button
              onClick={() => setActiveTab("workflows")}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === "workflows"
                  ? "bg-[#133374] text-white shadow-sm"
                  : "text-[#54595F] hover:text-[#133374]"
              }`}
            >
              Workflow Comparison
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === "architecture"
                  ? "bg-[#133374] text-white shadow-sm"
                  : "text-[#54595F] hover:text-[#133374]"
              }`}
            >
              SAP Integration Tech
            </button>
          </div>
        </div>

        {/* OVERVIEW TAB: SIDE BY SIDE CARDS */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* RETAIL ONE CARD */}
            <div className="rounded-3xl border-2 border-[#133374] p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#29A1F2]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#133374] text-white flex items-center justify-center shadow-lg shadow-[#133374]/20 group-hover:scale-105 transition-transform">
                    <ShoppingCart className="w-7 h-7 text-[#29A1F2]" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#133374] text-white">
                    Retail Operations OS
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-[#133374] tracking-tight">
                    Retail One
                  </h3>
                  <p className="text-sm text-[#54595F] leading-relaxed">
                    A mission-critical store operation system with high adaptability and offline resilience, engineered specifically for multi-branch retail chains powered by SAP Business One.
                  </p>
                </div>

                {/* Screenshot Preview */}
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-white">
                  <Image
                    src="/images/img_retailone.jpg"
                    alt="Retail One POS Interface"
                    fill
                    className="object-cover object-top hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Bullet List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs text-[#133374]">
                    <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                    <span><strong>100% Offline-Proof:</strong> Independent local database permits nonstop cashier sales during internet drops.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#133374]">
                    <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                    <span><strong>Multi-Terminal Architecture:</strong> Synchronized registers with blind cash drawer closeouts and manager overrides.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#133374]">
                    <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                    <span><strong>Mobile Warehouse Scanning:</strong> Perform live stock cycle counts, receipts, and inter-branch transfers from Android handhelds.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  href="/v2/products/retail-one"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm bg-[#133374] text-white hover:bg-[#E00E8B] shadow-md transition-all"
                >
                  <span>Explore Retail One Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* INVOICE ONE CARD */}
            <div className="rounded-3xl border border-slate-300 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E00E8B]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#08142C] text-white flex items-center justify-center shadow-lg shadow-[#08142C]/20 group-hover:scale-105 transition-transform">
                    <Receipt className="w-7 h-7 text-[#E00E8B]" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#E00E8B] text-white">
                    SAT Compliance Engine
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-[#133374] tracking-tight">
                    Invoice One
                  </h3>
                  <p className="text-sm text-[#54595F] leading-relaxed">
                    A cloud-native fiscal invoicing and self-service web portal that automates CFDI 4.0 XML generation, PAC stamping, and client delivery directly inside SAP Business One.
                  </p>
                </div>

                {/* Screenshot Preview */}
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-white">
                  <Image
                    src="/images/img_invoice-2.jpg"
                    alt="Invoice One Portal"
                    fill
                    className="object-cover object-top hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Bullet List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs text-[#133374]">
                    <CheckCircle2 className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                    <span><strong>100% SAT Mexican Compliance:</strong> Native support for CFDI 4.0, Complementos de Pago, and Carta Porte 3.1.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#133374]">
                    <CheckCircle2 className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                    <span><strong>24/7 Self-Service Web Portal:</strong> Shoppers self-invoice via ticket barcode, drastically reducing store cashier delays.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-[#133374]">
                    <CheckCircle2 className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                    <span><strong>Automated Bulk Distribution:</strong> Instant dispatch of stamped XML and PDF documents to customer inboxes and SAP accounting tables.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  href="/v2/products/invoice-one"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-[#E00E8B] shadow-md transition-all"
                >
                  <span>Explore Invoice One Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* WORKFLOWS TAB: COMPARATIVE MATRIX */}
        {activeTab === "workflows" && (
          <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="grid grid-cols-12 bg-[#133374] text-white p-4 font-mono text-xs uppercase tracking-wider font-bold">
              <div className="col-span-4">Operational Workflow</div>
              <div className="col-span-4">Retail One Engine</div>
              <div className="col-span-4">Invoice One Engine</div>
            </div>
            <div className="divide-y divide-slate-200 text-xs text-[#133374]">
              <div className="grid grid-cols-12 p-4 items-center hover:bg-slate-50">
                <div className="col-span-4 font-bold">Primary Operational Target</div>
                <div className="col-span-4 font-semibold text-slate-700">Cashiers, Store Managers, Warehouse Logistics</div>
                <div className="col-span-4 font-semibold text-slate-700">CFO, Financial Controllers, Accounts Receivable</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center hover:bg-slate-50">
                <div className="col-span-4 font-bold">Checkout & POS Execution</div>
                <div className="col-span-4 font-mono text-emerald-600 font-bold">Sub-second barcode scan, multi-tender split</div>
                <div className="col-span-4 text-slate-400">N/A (Specialized in fiscal stamping)</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center hover:bg-slate-50">
                <div className="col-span-4 font-bold">SAT CFDI 4.0 Stamping</div>
                <div className="col-span-4 text-slate-700">Instant counter invoice generation</div>
                <div className="col-span-4 font-mono text-[#E00E8B] font-bold">Mass batch XML & self-service web billing portal</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center hover:bg-slate-50">
                <div className="col-span-4 font-bold">Offline Connectivity Drop</div>
                <div className="col-span-4 font-mono text-emerald-600 font-bold">Continuous sales stored in local SQL cache</div>
                <div className="col-span-4 text-slate-700">Queued in buffer until PAC connection is restored</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center hover:bg-slate-50">
                <div className="col-span-4 font-bold">Inventory & Replenishment</div>
                <div className="col-span-4 font-mono text-[#29A1F2] font-bold">Mobile cycle counts, serials, batches & R1 orders</div>
                <div className="col-span-4 text-slate-400">Synchronizes directly from SAP item master tables</div>
              </div>
            </div>
          </div>
        )}

        {/* ARCHITECTURE TAB */}
        {activeTab === "architecture" && (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#08142C] text-white border border-white/15 shadow-2xl space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono text-[#29A1F2] uppercase tracking-widest font-bold">
                Zero Interface Fragility
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Direct Native Integration with SAP Business One
              </h3>
              <p className="text-xs text-slate-300">
                Unlike third-party generic connectors that break on every ERP update, SoluOne writes directly to native SAP HANA / SQL tables via DI-API and Service Layer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#29A1F2]">
                  <Database className="w-5 h-5" />
                  <span className="font-bold text-sm">Store Edge Layer</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Embedded local database per store branch. Ensures registers never stop operating even when fiber optic or cellular links fail.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#E00E8B]">
                  <Server className="w-5 h-5" />
                  <span className="font-bold text-sm">Real-Time Sync Engine</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bi-directional queue manager pushes sales, cash counts, and inventory adjustments to SAP Business One in under 20ms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-bold text-sm">Corporate SAP Ledger</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All transactions automatically generate native Journal Entries, Inventory Revaluations, and A/R Invoices in SAP Business One.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
