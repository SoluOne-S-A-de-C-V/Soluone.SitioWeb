import Image from "next/image";
import Link from "next/link";
import {
  Receipt,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  Server,
  Zap,
  Globe,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Invoice One 2026 | CFDI 4.0 SAT Compliance Engine for SAP B1",
  description:
    "Automated Mexican fiscal compliance: CFDI 4.0 PAC stamping, 24/7 web self-service invoicing portal, and direct SAP Business One ledger integration.",
};

export default function InvoiceOneV2Page() {
  return (
    <div className="bg-white text-[#133374]">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#08142C] via-[#0E265C] to-[#133374] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#E00E8B]">
              <Receipt className="w-3.5 h-3.5" />
              <span>SAT CFDI 4.0 Fiscal Engine for SAP B1</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Invoice One. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E00E8B] via-white to-[#29A1F2]">
                Automated SAT Compliance.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Eliminate manual PAC billing errors, reduce cashier checkout wait times, and guarantee 100% Mexican SAT compliance directly inside your SAP Business One ERP.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/v2/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs bg-[#E00E8B] text-white hover:bg-[#C20977] shadow-xl shadow-[#E00E8B]/30 transition-all"
              >
                <span>Schedule Invoice One Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/v2#interactive-hud"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>Try Invoicing Simulation</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-white p-2">
              <Image
                src="/images/img_invoice-2.jpg"
                alt="Invoice One Portal"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FISCAL MODULES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Module 1: 24/7 Self-Service Web Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="w-10 h-10 rounded-xl bg-[#08142C] text-[#E00E8B] flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#133374] tracking-tight">
              24/7 Customer Self-Invoicing Portal
            </h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              Why should cashiers type lengthy tax IDs and corporate names while customers wait in line? Shoppers scan their ticket barcode and generate their official CFDI 4.0 invoice from any browser.
            </p>
            <div className="space-y-3 text-xs text-[#133374]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                <span>Ticket barcode QR scanning for instant ticket lookup.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                <span>Automated RFC validation and tax regime lookup directly against SAT lists.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                <span>Instant dispatch of validated XML and PDF files to customer email inboxes.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-white p-2">
              <Image
                src="/images/img_invoice2.png"
                alt="Invoice One Portal Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Module 2: Automated SAP Accounting Injection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center justify-between font-mono text-xs text-[#133374] border-b border-slate-200 pb-3">
              <span className="font-bold">NATIVE SAP INJECTION</span>
              <span className="text-emerald-600 font-bold">Zero SAT Portal Logins</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                <span>PAC Timbrado Engine</span>
                <span className="text-emerald-600 font-bold">CFDI 4.0 Stamped (&lt; 2s)</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                <span>SAP DI-API Service Layer</span>
                <span className="text-[#29A1F2] font-bold">A/R Invoice Created</span>
              </div>
              <div className="p-3 rounded-xl bg-[#133374] text-white flex justify-between items-center">
                <span>General Public Summary</span>
                <span className="text-emerald-400 font-bold">Consolidated Daily</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="w-10 h-10 rounded-xl bg-[#08142C] text-[#29A1F2] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#133374] tracking-tight">
              Full Mexican SAT Fiscal Regulatory Compliance
            </h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              Stay compliant without changing your core ERP accounting rules. Invoice One is continuously updated with every SAT fiscal reform and validation rule.
            </p>
            <div className="space-y-3 text-xs text-[#133374]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                <span>CFDI 4.0, Complementos de Pago 2.0, and Carta Porte 3.1.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                <span>Batch cancellation workflows with mandatory SAT cancellation reasons.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                <span>Automatic general public global invoice generation at end-of-day.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#08142C] text-white py-16 px-4 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl font-extrabold">Eliminate manual fiscal stamping bottlenecks</h3>
          <p className="text-sm text-slate-300">
            Speak directly with our fiscal compliance engineers and schedule a demonstration.
          </p>
          <Link
            href="/v2/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-xs bg-[#E00E8B] text-white hover:bg-[#C20977] shadow-xl transition-all"
          >
            <span>Schedule Invoice One Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
