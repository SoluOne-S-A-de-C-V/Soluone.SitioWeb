import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industriesData } from "@/data/industries";
import {
  CheckCircle2,
  ArrowRight,
  Store,
} from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export default async function IndustryDetailV2Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-white text-[#133374]">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-[#08142C] via-[#0E265C] to-[#133374] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#29A1F2]">
              <Store className="w-3.5 h-3.5" />
              <span>Specialized Retail Vertical for SAP B1</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Retail One for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29A1F2] to-[#E00E8B]">
                {industry.name}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {industry.industryDescription}
            </p>

            <div className="pt-2">
              <Link
                href="/v2/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs bg-[#E00E8B] text-white hover:bg-[#C20977] shadow-xl shadow-[#E00E8B]/30 transition-all"
              >
                <span>Schedule {industry.name} Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-72 sm:h-96 flex items-center justify-center p-2">
              <Image
                src="/images/soluone-pos.png"
                alt={`Retail One ${industry.name} POS Software`}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFIC VERTICAL CAPABILITIES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E00E8B]">
              01. Operational Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133374] tracking-tight">
              Configured for {industry.name}
            </h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              Eliminate standard POS limitations. Retail One delivers native data fields, specialized search engines, and multi-tier pricing tailored to this industry.
            </p>

            <div className="space-y-3 pt-2">
              {industry.specificModules.map((mod, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#133374] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100 group">
              <Image
                src={industry.featureImg1}
                alt={`${industry.name} Features`}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Store Characteristics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100 group">
              <Image
                src={industry.featureImg2}
                alt={`${industry.name} Characteristics`}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#29A1F2]">
              02. Enterprise Controls
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133374] tracking-tight">
              Auditing & Compliance Controls
            </h2>
            <p className="text-sm text-[#54595F] leading-relaxed">
              Maintain complete chain-wide governance. Track lost sales, audit cash drawers with blind closeouts, and monitor bank deposits across all franchise locations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#133374]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#29A1F2]" />
                <span>Cash drawer blind closes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#29A1F2]" />
                <span>Multi-currency exchange rates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#29A1F2]" />
                <span>Franchise royalty controls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#29A1F2]" />
                <span>Daily bank deposit audit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#133374] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          <h3 className="text-3xl font-extrabold">Ready to evaluate {industry.name} capabilities?</h3>
          <p className="text-sm text-slate-300">
            Schedule a live sandbox demo with actual {industry.name} sample catalog data.
          </p>
          <Link
            href="/v2/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs bg-[#E00E8B] text-white hover:bg-[#C20977] shadow-xl transition-all"
          >
            <span>Schedule Guided Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
