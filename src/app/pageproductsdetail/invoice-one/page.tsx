import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, FileSpreadsheet, Receipt, Building2, Send } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice One | Electronic Invoicing & Accounting for SAP Business One",
  description:
    "Invoice One is an electronic invoicing and accounting add-on for SAP Business One that complies with Mexican SAT regulations and international e-billing standards.",
};

const invoiceFeatures = [
  "XML reading for automatic field population and vendor invoice validation",
  "Payment supplements (Complemento de pago) for domestic and international clients",
  "Bulk stamping and issuance of pending CFDI documents",
  "Automatic email delivery of XML and PDF invoices",
  "Import customs declarations management (Pedimentos de importación)",
  "IEPS tax handling in XML and PDF receipts",
  "Full electronic accounting compliance directly synchronized with SAP",
  "Direct cancellation of invoices from SAP without entering the SAT tax portal",
  "Financial factoring and Carta Porte bill of lading stamping",
];

export default function InvoiceOneProductPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-[#133374] to-[#29A1F2] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              Tax Compliance & E-Invoicing
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Invoice One
            </h1>

            <p className="text-lg sm:text-xl text-white/90 font-medium">
              A steady growth for your business
            </p>

            <p className="text-base text-white/80 leading-relaxed max-w-2xl">
              Invoice One is an electronic invoicing and accounting Add-On specifically developed for SAP Business One that helps you comply with Mexican tax regulations (CFDI 4.0, SAT) and international electronic invoicing. Let us handle your electronic invoicing, validation, and accounting.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-xl"
              >
                Schedule an Appointment
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                View Functionalities
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-4 bg-white/10 backdrop-blur-xs rounded-3xl border border-white/20 shadow-2xl">
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src="/images/img_invoice2.png"
                  alt="Invoice One Interface"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FUNCTIONALITIES */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border border-slate-200 p-3 bg-slate-50">
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src="/images/img_invoice-2.jpg"
                  alt="Invoice One Document Processing"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
              Full Fiscal Automation
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
              Powerful Invoicing and Electronic Accounting Add-On
            </h2>

            <p className="text-[#54595F] leading-relaxed text-base">
              Invoice One automates the end-to-end stamping, reception, validation, and cancellation of tax invoices directly inside SAP Business One without requiring third-party portal logins or manual file conversions.
            </p>

            <div className="space-y-3 pt-2">
              {invoiceFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E00E8B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-[#133374]">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#133374] text-white hover:bg-[#E00E8B] transition-colors shadow-md"
              >
                Schedule an Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY BENEFITS FOR SAP USERS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full">
              Security & Peace of Mind
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#133374]">
              Designed to Keep Your Company 100% Tax Compliant
            </h2>
            <p className="text-[#54595F] text-base">
              Eliminate tax penalties and streamline your accounts payable and accounts receivable directly in SAP Business One.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F4FF] flex items-center justify-center text-[#133374]">
                <Receipt className="w-6 h-6 text-[#133374]" />
              </div>
              <h3 className="text-xl font-bold text-[#133374]">Mass Stamping & Dispatch</h3>
              <p className="text-sm text-[#54595F] leading-relaxed">
                Issue hundreds of daily CFDIs with a single click and automatically distribute XML and PDF files to your customers via email.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F4FF] flex items-center justify-center text-[#133374]">
                <FileSpreadsheet className="w-6 h-6 text-[#133374]" />
              </div>
              <h3 className="text-xl font-bold text-[#133374]">SAT Direct Validation</h3>
              <p className="text-sm text-[#54595F] leading-relaxed">
                Cancel invoices and validate provider invoices directly through the PAC and SAT web services without logging into the government portal.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F4FF] flex items-center justify-center text-[#133374]">
                <Building2 className="w-6 h-6 text-[#133374]" />
              </div>
              <h3 className="text-xl font-bold text-[#133374]">Electronic Accounting</h3>
              <p className="text-sm text-[#54595F] leading-relaxed">
                Generate the account chart, trial balance, journal entries, and auxiliary accounts in the XML format mandated by the tax authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 bg-[#133374] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold">Schedule an Appointment</h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team in Mérida, Mexico, to see a live demonstration of Invoice One and how it connects to your SAP Business One environment.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-base bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-xl"
            >
              Schedule an Appointment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
