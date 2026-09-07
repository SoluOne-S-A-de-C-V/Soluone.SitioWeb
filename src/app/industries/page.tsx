import Link from "next/link";
import Image from "next/image";
import { industriesList } from "@/data/industries";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | SoluOne Retail One for SAP Business One",
  description:
    "Explore how Retail One adapts to every retail sector: Autoparts, Hardware, Pastry Shops, Wines & Spirits, Fashion, Groceries, Electronics, and Restaurants.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#133374] to-[#29A1F2] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            Vertical Retail Specialization
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Industries
          </h1>
          <p className="text-white/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            At SoluONE, we specialize in developing Add-On applications specifically designed for the SAP Business One ERP system across retail sectors.
          </p>
        </div>
      </section>

      {/* Grid of Industries */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((ind) => (
            <div
              key={ind.slug}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:border-[#133374] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={ind.heroImage}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-4 text-sm font-bold text-white px-3 py-1 rounded-lg bg-black/60 backdrop-blur-xs border border-white/20">
                    {ind.name}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-[#54595F] leading-relaxed">
                    {ind.industryDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-200 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#133374]">
                      Specific Modules:
                    </p>
                    {ind.specificModules.slice(0, 3).map((mod, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E00E8B] shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/${ind.slug}`}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold bg-white border border-slate-200 text-[#133374] group-hover:bg-[#E00E8B] group-hover:border-[#E00E8B] group-hover:text-white transition-all"
                >
                  <span>Explore Industry Features</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-[#133374] py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Schedule an Appointment
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Retail One is designed to coordinate administrative operations in an agile and modern way for SAP Business One.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-colors"
            >
              Request a demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
