"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, ShieldCheck, Users, Headphones, BookOpen, RefreshCw, MessageSquare } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B2252] text-slate-300 border-t border-white/10">
      {/* 4 Guarantees Strip */}
      <div className="bg-[#071738] border-b border-white/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 text-[#E00E8B] flex items-center justify-center font-bold shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold text-xs sm:text-sm">
                {t("Consultancy & Deployment", "Consultoría e Implementación")}
              </h5>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {t("Expert enterprise support from start to finish.", "Acompañamiento experto de inicio a fin.")}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 text-[#E00E8B] flex items-center justify-center font-bold shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold text-xs sm:text-sm">
                {t("Continuous Support", "Soporte Continuo")}
              </h5>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {t("Dedicated help desk for your retail stores.", "Mesa de ayuda dedicada para sus tiendas.")}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 text-[#E00E8B] flex items-center justify-center font-bold shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold text-xs sm:text-sm">
                {t("Docs & Certification", "Documentación y Certificación")}
              </h5>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {t("Manuals, training, and certified SAP best practices.", "Manuales, capacitación y mejores prácticas SAP.")}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 text-[#E00E8B] flex items-center justify-center font-bold shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-white font-bold text-xs sm:text-sm">
                {t("Ongoing Updates", "Actualizaciones Continuas")}
              </h5>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {t("Software continuously kept up to date with SAT & SAP.", "Software actualizado con el SAT y SAP.")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-10 w-36">
              <Image
                src="/images/soluone-white.png"
                alt="SoluONE"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {t(
                "RetailOne is an enterprise store operation platform and point-of-sale system built specifically for the ERP SAP Business One since 2009.",
                "RetailOne es una plataforma de operación de tiendas y punto de venta empresarial desarrollada específicamente para el ERP SAP Business One desde 2009."
              )}
            </p>
            <div className="pt-2 flex items-center gap-4">
              <div className="relative h-12 w-32 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/Sap-Certified.png"
                  alt="SAP Certified"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              {t("Navigation", "Navegación")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#E00E8B] transition-colors">
                  {t("Home", "Inicio")}
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="hover:text-[#E00E8B] transition-colors text-pink-300 font-semibold">
                  {t("RetailOne Ecosystem ↗", "Ecosistema RetailOne ↗")}
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-[#E00E8B] transition-colors">
                  {t("Products (InvoiceOne, R1, Voi+)", "Productos (InvoiceOne, R1, Voi+)")}
                </Link>
              </li>
              <li>
                <Link href="/#integrations" className="hover:text-[#E00E8B] transition-colors">
                  {t("Integrations", "Integraciones")}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#E00E8B] transition-colors">
                  {t("Industries", "Industrias")}
                </Link>
              </li>
              <li>
                <Link href="/#customers" className="hover:text-[#E00E8B] transition-colors">
                  {t("Customers", "Clientes")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E00E8B] transition-colors">
                  {t("About", "Nosotros")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E00E8B] transition-colors">
                  {t("Contact", "Contacto")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              {t("Industries", "Industrias")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industries/autoparts" className="hover:text-[#E00E8B] transition-colors">
                  {t("Autoparts", "Autopartes")}
                </Link>
              </li>
              <li>
                <Link href="/industries/pastry-shops-and-ice-cream-parlors" className="hover:text-[#E00E8B] transition-colors">
                  {t("Pastry Shops & Gelato", "Pastelerías y Heladerías")}
                </Link>
              </li>
              <li>
                <Link href="/industries/hardware" className="hover:text-[#E00E8B] transition-colors">
                  {t("Hardware & Building", "Ferreterías y Materiales")}
                </Link>
              </li>
              <li>
                <Link href="/industries/wines-and-spirits" className="hover:text-[#E00E8B] transition-colors">
                  {t("Wines & Spirits", "Vinos y Licores")}
                </Link>
              </li>
              <li>
                <Link href="/industries/fashion-and-footwear" className="hover:text-[#E00E8B] transition-colors">
                  {t("Fashion & Footwear", "Moda y Calzado")}
                </Link>
              </li>
              <li>
                <Link href="/industries/restaurants" className="hover:text-[#E00E8B] transition-colors">
                  {t("Restaurants", "Restaurantes")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              {t("Contact & News", "Contacto")}
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E00E8B] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-white transition-colors font-semibold"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E00E8B] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>
                  WhatsApp: <strong className="text-white">{siteConfig.contact.whatsappChannel}</strong>
                </span>
              </div>

              {/* Official Social Channels */}
              <div className="pt-2">
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                  {t("Follow SoluONE:", "Síguenos en SoluONE:")}
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E00E8B] flex items-center justify-center text-xs font-bold text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E00E8B] flex items-center justify-center text-xs font-bold text-white transition-colors"
                    aria-label="Facebook"
                  >
                    fb
                  </a>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E00E8B] flex items-center justify-center text-xs font-bold text-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    𝕏
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E00E8B] flex items-center justify-center text-xs font-bold text-white transition-colors"
                    aria-label="Instagram"
                  >
                    ig
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E00E8B] flex items-center justify-center text-xs font-bold text-white transition-colors"
                    aria-label="YouTube"
                  >
                    yt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SoluONE S.A. de C.V. {t("All rights reserved.", "Todos los derechos reservados.")}</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              {t("About Us", "Nosotros")}
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              {t("Support Desk", "Mesa de Ayuda")}
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              {t("Request Live Demo", "Solicitar Demo")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
