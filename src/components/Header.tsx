"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const productsTimer = useRef<NodeJS.Timeout | null>(null);
  const industriesTimer = useRef<NodeJS.Timeout | null>(null);

  const handleProductsEnter = () => {
    if (productsTimer.current) clearTimeout(productsTimer.current);
    if (industriesTimer.current) clearTimeout(industriesTimer.current);
    setIndustriesOpen(false);
    setProductsOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimer.current = setTimeout(() => {
      setProductsOpen(false);
    }, 200);
  };

  const handleIndustriesEnter = () => {
    if (industriesTimer.current) clearTimeout(industriesTimer.current);
    if (productsTimer.current) clearTimeout(productsTimer.current);
    setProductsOpen(false);
    setIndustriesOpen(true);
  };

  const handleIndustriesLeave = () => {
    industriesTimer.current = setTimeout(() => {
      setIndustriesOpen(false);
    }, 200);
  };

  return (
    <div className="w-full relative z-50 bg-[#133374]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2">
        <header className="bg-white rounded-2xl shadow-lg px-6 py-3.5 flex items-center justify-between border border-white/20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-9 w-32">
              <Image
                src="/images/ic_soluone.png"
                alt="SoluONE"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#133374]">
            <Link href="/" className="hover:text-[#E00E8B] transition-colors py-2">
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              <Link
                href="/#products"
                className="flex items-center gap-1 hover:text-[#E00E8B] transition-colors"
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#E00E8B]" : ""
                  }`}
                />
              </Link>

              {productsOpen && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Our Products
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {siteConfig.navLinks[1].dropdown?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setProductsOpen(false)}
                          className="px-3 py-2.5 rounded-xl text-xs font-semibold text-[#133374] hover:bg-[#FFE3F4] hover:text-[#E00E8B] flex flex-col transition-colors group"
                        >
                          <span className="flex items-center justify-between font-bold">
                            {item.name}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </span>
                          <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={handleIndustriesEnter}
              onMouseLeave={handleIndustriesLeave}
            >
              <Link
                href="/industries"
                className="flex items-center gap-1 hover:text-[#E00E8B] transition-colors"
              >
                Industries
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    industriesOpen ? "rotate-180 text-[#E00E8B]" : ""
                  }`}
                />
              </Link>

              {industriesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Industries & Sectors
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-0.5 max-h-96 overflow-y-auto">
                      {siteConfig.navLinks[2].dropdown?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIndustriesOpen(false)}
                          className="px-3 py-2 rounded-xl text-xs font-semibold text-[#133374] hover:bg-[#FFE3F4] hover:text-[#E00E8B] flex items-center justify-between transition-colors"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-1 pt-2 border-t border-slate-100 text-center">
                      <Link
                        href="/industries"
                        onClick={() => setIndustriesOpen(false)}
                        className="text-xs font-bold text-[#E00E8B] hover:underline"
                      >
                        View all industries →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#customers" className="hover:text-[#E00E8B] transition-colors py-2">
              Customers
            </Link>

            <Link href="/about" className="hover:text-[#E00E8B] transition-colors py-2">
              About
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-semibold text-[#133374] hover:text-[#E00E8B] transition-colors"
            >
              Request a demo
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-bold text-[#133374] border-2 border-[#133374] rounded-xl hover:bg-[#133374] hover:text-white transition-all shadow-xs"
            >
              Schedule an Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-bold bg-[#E00E8B] text-white rounded-lg"
            >
              Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#133374] hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl p-4 space-y-3 border border-slate-100">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-50"
            >
              Home
            </Link>

            {/* Products */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-50"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {productsOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {siteConfig.navLinks[1].dropdown?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-[#E00E8B]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries */}
            <div>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-50"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    industriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {industriesOpen && (
                <div className="pl-4 space-y-1 mt-1 max-h-60 overflow-y-auto">
                  {siteConfig.navLinks[2].dropdown?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-[#E00E8B]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#customers"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-50"
            >
              Customers
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-50"
            >
              About
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-bold bg-[#E00E8B] text-white rounded-xl shadow-xs"
              >
                Schedule an Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
