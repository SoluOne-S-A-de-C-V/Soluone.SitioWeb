import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  CheckCircle2,
  Database,
  ArrowRight,
  ShieldCheck,
  Server,
  Zap,
  Scan,
  Coins,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Retail One 2026 | Store Operation Platform for SAP Business One",
  description:
    "Offline-first point of sale, multi-terminal cashier management, and mobile handheld inventory tracking natively synchronized with SAP Business One.",
};

export default function RetailOneV2Page() {
  return (
    <div className="bg-white text-[#133374]">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#08142C] via-[#0E265C] to-[#133374] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#29A1F2]">
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Store Operations Engine for SAP B1</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Retail One POS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29A1F2] to-[#E00E8B]">
                High-Speed. Offline-Resilient.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Engineered for high-volume store execution. Retail One gives cashiers and floor managers a lightning-fast checkout experience while ensuring 100% data integrity with your SAP Business One corporate database.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/v2/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs bg-[#E00E8B] text-white hover:bg-[#C20977] shadow-xl shadow-[#E00E8B]/30 transition-all"
              >
                <span>Schedule Retail One Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/v2#interactive-hud"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>Try Live POS Sandbox</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-white p-2">
              <Image
                src="/images/img_retailone.jpg"
                alt="Retail One Point of Sale Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL PILLARS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Pillar 1: Offline Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="w-10 h-10 rounded-xl bg-[#133374] text-[#29A1F2] flex items-center justify-center font-bold">
              <Database className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#133374] tracking-tight">
              100% Offline-First Architecture
            </h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              Fiber optic and cellular connection drops must never stop retail checkout lanes. Retail One maintains an embedded, encrypted local SQL database in every store register.
            </p>
            <div className="space-y-3 text-xs text-[#133374]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                <span>Continuous sales processing during total network failure.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                <span>Automatic bi-directional queue replay when internet connection returns.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                <span>Zero manual cashier intervention or duplicate invoice entries.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between font-mono text-xs text-[#133374] border-b border-slate-200 pb-3">
                <span className="font-bold">FAILOVER TOPOLOGY</span>
                <span className="text-emerald-600 font-bold">Automatic Replay</span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                  <span>Register 01 (Cashier Lane)</span>
                  <span className="text-emerald-600 font-bold">Local SQL Active</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                  <span>Sync Queue Buffer</span>
                  <span className="text-[#29A1F2] font-bold">0 Pending Replays</span>
                </div>
                <div className="p-3 rounded-xl bg-[#133374] text-white flex justify-between items-center">
                  <span>Corporate SAP Business One</span>
                  <span className="text-emerald-400 font-bold">Connected (HANA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 2: Mobile Warehouse RF Scanning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-white p-2">
              <Image
                src="/images/img_retailone2.png"
                alt="Retail One Mobile Inventory Scanner"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="w-10 h-10 rounded-xl bg-[#133374] text-[#E00E8B] flex items-center justify-center font-bold">
              <Scan className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#133374] tracking-tight">
              Mobile Handheld RF Inventory
            </h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              Eliminate costly end-of-month stock discrepancies. Staff can scan barcodes directly on Android handheld devices (Zebra, Honeywell) while the store remains actively open.
            </p>
            <div className="space-y-3 text-xs text-[#133374]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                <span>Zone and aisle cycle counts without freezing store trading.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                <span>Immediate inventory adjustments registered in SAP item masters.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                <span>Instant serial number, batch, and expiration date tracking.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#133374] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl font-extrabold">Ready to modernise your retail checkout?</h3>
          <p className="text-sm text-slate-300">
            Book a 30-minute interactive demo with a certified SAP Business One solution architect.
          </p>
          <Link
            href="/v2/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-xs bg-[#E00E8B] text-white hover:bg-[#C20977] shadow-xl transition-all"
          >
            <span>Schedule Guided Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
