"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ChevronDown, ArrowRight, Sparkles, ExternalLink, Globe } from "lucide-react";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
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
      {/* Top Notification Bar: SAP Certified Solution + Direct Contact */}
      <div className="bg-[#0A1224] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-white font-medium text-center sm:text-left">
            <span className="bg-[#E00E8B] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shrink-0">
              SAP Certified
            </span>
            <span className="text-xs">
              {t(
                "Validated Solution for SAP Business One — Certified Enterprise Add-On",
                "Solución Validada para SAP Business One — Add-On Empresarial Certificado"
              )}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+529992681435"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <span className="text-[#E00E8B]">📞</span> +52 999 268 1435
            </a>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <a
              href="mailto:contacto@soluone.com"
              className="text-slate-300 hover:text-white transition-colors hidden sm:inline"
            >
              contacto@soluone.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
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
              {t("Home", "Inicio")}
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
                {t("Products", "Productos")}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#E00E8B]" : ""
                  }`}
                />
              </Link>

              {productsOpen && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {t("Our Products", "Nuestros Productos")}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {siteConfig.navLinks[1].dropdown?.map((item) =>
                        item.href.startsWith("http") ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setProductsOpen(false)}
                            className="px-3 py-2.5 rounded-xl text-xs font-semibold text-[#133374] hover:bg-[#FFE3F4] hover:text-[#E00E8B] flex flex-col transition-colors group"
                          >
                            <span className="flex items-center justify-between font-bold">
                              {item.name}
                              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </span>
                            <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                              {item.desc}
                            </span>
                          </a>
                        ) : (
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
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dedicated Ecosystem Page */}
            <Link
              href="/ecosystem"
              className="hover:text-[#E00E8B] transition-colors py-2"
            >
              {t("Ecosystem", "Ecosistema")}
            </Link>

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
                {t("Industries", "Industrias")}
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
                        {t("Industries & Sectors", "Industrias y Sectores")}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-0.5 max-h-96 overflow-y-auto">
                      {siteConfig.navLinks[3].dropdown?.map((item) => (
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
                        {t("View all industries →", "Ver todas las industrias →")}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#customers" className="hover:text-[#E00E8B] transition-colors py-2">
              {t("Customers", "Clientes")}
            </Link>

            <Link href="/about" className="hover:text-[#E00E8B] transition-colors py-2">
              {t("About", "Nosotros")}
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200 text-xs font-bold shrink-0">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === "en"
                    ? "bg-[#133374] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#133374]"
                }`}
                title="Switch to English"
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === "es"
                    ? "bg-[#133374] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#133374]"
                }`}
                title="Cambiar a Español"
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>

            <Link
              href="/contact"
              className="text-sm font-semibold text-[#133374] hover:text-[#E00E8B] transition-colors"
            >
              {t("Request a demo", "Solicitar demo")}
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-bold text-[#133374] border-2 border-[#133374] rounded-xl hover:bg-[#133374] hover:text-white transition-all shadow-xs shrink-0"
            >
              {t("Schedule an Appointment", "Agendar Cita")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 rounded transition-all ${
                  language === "en" ? "bg-[#133374] text-white" : "text-slate-600"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-1.5 py-0.5 rounded transition-all ${
                  language === "es" ? "bg-[#133374] text-white" : "text-slate-600"
                }`}
              >
                ES
              </button>
            </div>

            <Link
              href="/contact"
              className="px-2.5 py-1 text-xs font-bold bg-[#E00E8B] text-white rounded-lg"
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
              {t("Home", "Inicio")}
            </Link>

            <Link
              href="/ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-50"
            >
              {t("Ecosystem", "Ecosistema")}
            </Link>

            {/* Products */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-50"
              >
                <span>{t("Products", "Productos")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {productsOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {siteConfig.navLinks[1].dropdown?.map((item) =>
                    item.href.startsWith("http") ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-[#E00E8B]"
                      >
                        <span>{item.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-[#E00E8B]"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Industries */}
            <div>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-50"
              >
                <span>{t("Industries", "Industrias")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    industriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {industriesOpen && (
                <div className="pl-4 space-y-1 mt-1 max-h-60 overflow-y-auto">
                  {siteConfig.navLinks[3].dropdown?.map((item) => (
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
              {t("Customers", "Clientes")}
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#133374] hover:bg-slate-50"
            >
              {t("About", "Nosotros")}
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-bold bg-[#E00E8B] text-white rounded-xl shadow-xs"
              >
                {t("Schedule an Appointment", "Agendar Cita")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
