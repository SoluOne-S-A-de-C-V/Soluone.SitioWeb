import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Smartphone, Layers, Boxes, RefreshCw } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail One | Store Operation Platform for SAP Business One",
  description:
    "Retail One is a point-of-sale system with great adaptability and configuration capabilities to meet the needs of your retail business.",
};

const featuresList = [
  "Point of Sale certified by SAP Business One",
  "Real-time online and resilient offline operation",
  "Multi-branch and franchise centralized control",
  "Android Mobile App for inventory counting and reception",
  "Real-time alerts, user authorizations, and cashier blind closeouts",
  "Integrated electronic billing and payment supplements",
  "Multi-currency support and direct bank terminal integration",
  "Loyalty programs, point cards, gift cards, and advanced promotions",
];

export default function RetailOneProductPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-[#133374] to-[#29A1F2] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              Store Operation Platform
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="relative h-12 w-44">
                <Image
                  src="/images/logo_retail_one.png"
                  alt="RetailOne"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  priority
                />
              </div>
            </div>

            <p className="text-lg sm:text-xl text-white/90 font-medium">
              A steady growth for your business
            </p>

            <p className="text-base text-white/80 leading-relaxed max-w-2xl">
              Retail One is a point-of-sale system with great adaptability and configuration capabilities to cover the needs of your business, achieving versatile operations in each of your stores through its comprehensive functionalities. Installed across Latin America, the United States, and Africa, with the capability to adapt to local fiscal requirements.
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
                View Features
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-4 bg-white/10 backdrop-blur-xs rounded-3xl border border-white/20 shadow-2xl">
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src="/images/img_retailone2.png"
                  alt="Retail One Software Interface"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SHOWCASE */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border border-slate-200 p-2 bg-slate-50">
              <div className="relative w-full h-80 sm:h-96">
                <Image
                  src="/images/soluone-pos.png"
                  alt="Retail One POS Architecture"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
              Full SAP Integration
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
              Capable of supporting small businesses up to large retail store chains
            </h2>

            <p className="text-[#54595F] leading-relaxed text-base">
              Unlike third-party POS applications that rely on complex, fragile interfaces, Retail One uses the native data structures of SAP Business One. Item catalogs, price lists, business partners, taxes, and warehouse inventory are synchronized directly in real time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {featuresList.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
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

      {/* 3. MOBILE AND HARDWARE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full">
              Advanced Mobility
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#133374]">
              Mobile Apps & POS Peripherals
            </h2>
            <p className="text-[#54595F] text-base">
              Equip your staff with modern mobile tools for physical inventory counting, merchandise reception, and barcode scanning on the sales floor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F4FF] flex items-center justify-center text-[#133374]">
                <Smartphone className="w-6 h-6 text-[#133374]" />
              </div>
              <h3 className="text-xl font-bold text-[#133374]">Android App for Stores</h3>
              <p className="text-sm text-[#54595F] leading-relaxed">
                Execute cyclic counts by aisle, manage inventory receptions, and check stock levels across branches directly from mobile handheld terminals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F4FF] flex items-center justify-center text-[#133374]">
                <Layers className="w-6 h-6 text-[#133374]" />
              </div>
              <h3 className="text-xl font-bold text-[#133374]">POS Hardware Compatibility</h3>
              <p className="text-sm text-[#54595F] leading-relaxed">
                Direct integration with ticket printers, electronic barcode scanners, certified scales, cash drawers, and bank card payment terminals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F4FF] flex items-center justify-center text-[#133374]">
                <RefreshCw className="w-6 h-6 text-[#133374]" />
              </div>
              <h3 className="text-xl font-bold text-[#133374]">Offline Resilience</h3>
              <p className="text-sm text-[#54595F] leading-relaxed">
                Continue billing and issuing sales receipts even if your internet connection drops. Transactions sync automatically once reconnected.
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
            Get in touch with our SAP Business One enterprise specialists and experience a live demonstration of Retail One tailored to your company.
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
