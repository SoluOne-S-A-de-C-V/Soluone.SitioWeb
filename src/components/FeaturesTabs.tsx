"use client";

import { useState } from "react";
import Image from "next/image";
import { coreFeatures } from "@/data/features";
import {
  CheckCircle2,
  LayoutDashboard,
  ShoppingCart,
  Receipt,
  PackageCheck,
  Boxes,
  Gift,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const iconsMap: Record<string, React.ReactNode> = {
  dashboard: <LayoutDashboard className="w-5 h-5" />,
  orders: <ShoppingCart className="w-5 h-5" />,
  sales: <Receipt className="w-5 h-5" />,
  purchasing: <PackageCheck className="w-5 h-5" />,
  inventory: <Boxes className="w-5 h-5" />,
  loyalty: <Gift className="w-5 h-5" />,
};

export function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(coreFeatures[0].id);
  const current = coreFeatures.find((f) => f.id === activeTab) || coreFeatures[0];

  return (
    <div className="w-full">
      {/* Tabs list (Responsive grid: 6 cols on desktop, no clipping) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200">
        {coreFeatures.map((f) => {
          const isActive = f.id === activeTab;
          return (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id)}
              className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all text-center border ${
                isActive
                  ? "bg-[#133374] text-white border-[#133374] shadow-sm"
                  : "bg-white text-[#54595F] border-transparent hover:bg-slate-50 hover:text-[#133374]"
              }`}
            >
              <span className={isActive ? "text-[#E00E8B]" : "text-slate-400"}>
                {iconsMap[f.id]}
              </span>
              <span className="truncate">{f.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display (Modern subtle slate-50, no beige) */}
      <div className="mt-8 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text & highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E00E8B]/15 text-[#E00E8B] border border-[#E00E8B]/30">
              Retail One Module
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#133374] tracking-tight">
              {current.shortDesc}
            </h3>

            <p className="text-[#54595F] leading-relaxed text-base">
              {current.description}
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {current.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#E00E8B] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#133374]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#133374] hover:text-[#E00E8B] group"
              >
                Request a demo for this module
                <ArrowRight className="w-4 h-4 text-[#E00E8B] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Screenshot / Image Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white flex items-center justify-center">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={
                  current.image.endsWith(".png")
                    ? "object-contain p-2 hover:scale-102 transition-transform duration-300"
                    : "object-cover object-center hover:scale-102 transition-transform duration-300"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
