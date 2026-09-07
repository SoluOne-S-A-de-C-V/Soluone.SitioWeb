"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Sparkles,
  Layers,
  ArrowRight,
  Menu,
  X,
  Receipt,
  ShoppingCart,
  Database,
  ShieldCheck,
  PhoneCall,
  Activity,
  Boxes,
  Zap,
} from "lucide-react";
import { industriesList } from "@/data/industries";

export function HeaderV2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/90 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo & Live Engine Badge */}
          <div className="flex items-center gap-4">
            <Link href="/v2" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-[#133374] rounded-xl shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/images/ic_soluone.png"
                  alt="SoluOne"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-[#133374] flex items-center gap-1">
                  Solu<span className="text-[#E00E8B]">ONE</span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#133374]/10 text-[#133374] font-semibold ml-1">
                    v2.26
                  </span>
                </span>
                <span className="text-[10px] font-medium text-slate-500 tracking-tight">
                  Store Operations for SAP Business One
                </span>
              </div>
            </Link>

            {/* Live SAP Sync Telemetry Badge (Desktop only) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>SAP HANA 10.0 Live Sync</span>
              <span className="text-slate-400">•</span>
              <span className="text-[#29A1F2] font-semibold">12ms</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/v2"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-100 transition-colors"
            >
              Platform
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-100 transition-colors"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#E00E8B]" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="absolute left-0 top-full pt-2 w-[480px] transition-all">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 space-y-2">
                    <Link
                      href="/v2/products/retail-one"
                      className="group flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#133374] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <ShoppingCart className="w-5 h-5 text-[#29A1F2]" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[#133374] group-hover:text-[#E00E8B]">
                            Retail One
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#133374]/10 text-[#133374] font-bold">
                            Store OS & POS
                          </span>
                        </div>
                        <p className="text-xs text-[#54595F] leading-relaxed">
                          High-speed counter sales, offline-first local database, mobile inventory scanning, and native SAP Business One synchronization.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/v2/products/invoice-one"
                      className="group flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#08142C] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Receipt className="w-5 h-5 text-[#E00E8B]" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[#133374] group-hover:text-[#E00E8B]">
                            Invoice One
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E00E8B]/10 text-[#E00E8B] font-bold">
                            CFDI 4.0 SAT Engine
                          </span>
                        </div>
                        <p className="text-xs text-[#54595F] leading-relaxed">
                          Automated electronic invoicing, 24/7 web self-service billing portal, and mass XML dispatch directly connected to SAP.
                        </p>
                      </div>
                    </Link>

                    <div className="pt-2 px-3 pb-1 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Certified for SAP HANA & SQL</span>
                      <span className="text-emerald-600 font-semibold">99.99% Offline Tolerance</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-100 transition-colors"
                onClick={() => setIndustriesOpen(!industriesOpen)}
              >
                Industries
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    industriesOpen ? "rotate-180 text-[#E00E8B]" : ""
                  }`}
                />
              </button>

              {industriesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[680px] transition-all">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-5">
                    <div className="mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#133374]">
                        Tailored Retail Verticals for SAP B1
                      </span>
                      <Link
                        href="/industries"
                        className="text-xs font-bold text-[#E00E8B] hover:underline flex items-center gap-1"
                      >
                        Explore all sectors <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {industriesList.map((ind) => (
                        <Link
                          key={ind.slug}
                          href={`/v2/industries/${ind.slug}`}
                          className="group p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-3 border border-transparent hover:border-slate-200"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#133374]/10 group-hover:bg-[#133374] group-hover:text-white flex items-center justify-center text-[#133374] text-xs font-bold transition-colors">
                            {ind.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-[#133374] truncate group-hover:text-[#E00E8B]">
                              {ind.name}
                            </p>
                            <p className="text-[11px] text-slate-400 truncate">
                              SAP vertical workflows
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/v2/contact"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-100 transition-colors"
            >
              Consulting & SLA
            </Link>
          </nav>

          {/* Right Action Center */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/v2/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#133374] hover:text-[#E00E8B] transition-colors"
            >
              Direct Demo
            </Link>
            <Link
              href="/v2/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#E00E8B] text-white hover:bg-[#C20977] shadow-md shadow-[#E00E8B]/20 transition-all hover:scale-102"
            >
              <span>Schedule Architecture Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#133374] hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white p-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            <Link
              href="/v2"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-bold text-sm text-[#133374] hover:bg-slate-50"
            >
              Platform Overview
            </Link>
            <Link
              href="/v2/products/retail-one"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-bold text-sm text-[#133374] hover:bg-slate-50"
            >
              Retail One (Store POS)
            </Link>
            <Link
              href="/v2/products/invoice-one"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-bold text-sm text-[#133374] hover:bg-slate-50"
            >
              Invoice One (CFDI 4.0)
            </Link>
            <Link
              href="/v2/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-bold text-sm text-[#133374] hover:bg-slate-50"
            >
              Direct Consultation & Demo
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/v2/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-[#E00E8B] text-white shadow-md"
            >
              Schedule Architecture Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
