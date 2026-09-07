"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { industriesData, Industry } from "@/data/industries";
import { CheckCircle2, ArrowRight, Sparkles, Store } from "lucide-react";

export function IndustrySwitcher() {
  const industries = Object.values(industriesData);
  const [activeSlug, setActiveSlug] = useState<string>(industries[0].slug);
  const activeIndustry = industriesData[activeSlug] || industries[0];

  return (
    <section className="py-24 bg-white text-[#133374]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E00E8B] bg-[#E00E8B]/10 px-3.5 py-1.5 rounded-full">
            Vertical Retail Specialization
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#133374]">
            Tailored Industry Workflows for SAP
          </h2>
          <p className="text-base text-[#54595F] leading-relaxed">
            One size does not fit all. Select your retail vertical below to see the exact SAP Business One modules engineered for your operational flow.
          </p>
        </div>

        {/* Horizontal Industry Selector */}
        <div className="flex overflow-x-auto gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 scrollbar-none">
          {industries.map((ind) => {
            const isActive = ind.slug === activeSlug;
            return (
              <button
                key={ind.slug}
                onClick={() => setActiveSlug(ind.slug)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-[#133374] text-white border-[#133374] shadow-md"
                    : "bg-white text-[#54595F] border-transparent hover:bg-slate-50 hover:text-[#133374]"
                }`}
              >
                <Store className={`w-4 h-4 ${isActive ? "text-[#E00E8B]" : "text-slate-400"}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel for Active Industry */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 shadow-sm transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#133374]/10 text-[#133374]">
                  SAP Business One Add-On
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-[#133374] tracking-tight">
                  {activeIndustry.name}
                </h3>
                <p className="text-sm text-[#54595F] leading-relaxed">
                  {activeIndustry.industryDescription}
                </p>
              </div>

              {/* Specific Modules Matrix */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#133374]">
                  Key Vertical Modules Included:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeIndustry.specificModules.slice(0, 6).map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#133374] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#E00E8B] shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href={`/v2/industries/${activeIndustry.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs bg-[#133374] text-white hover:bg-[#E00E8B] shadow-md transition-all"
                >
                  <span>Explore Full {activeIndustry.name} Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/v2/contact"
                  className="text-xs font-bold text-[#133374] hover:text-[#E00E8B] underline underline-offset-4"
                >
                  Request vertical demo
                </Link>
              </div>
            </div>

            {/* Right Photo Frame (Clean full-bleed, no letterbox) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100 group">
                <Image
                  src={activeIndustry.featureImg1}
                  alt={activeIndustry.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-lg bg-black/60 backdrop-blur-xs border border-white/20">
                    Live Case Study Ready
                  </span>
                  <span className="text-xs font-mono text-slate-200">
                    Mérida & Cancún Deployed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
