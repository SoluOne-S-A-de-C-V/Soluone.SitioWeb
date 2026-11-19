"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ImageLightboxModal } from "@/components/ImageLightboxModal";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  Receipt,
  Building2,
  Maximize2,
  ZoomIn,
} from "lucide-react";

const invoiceFeaturesEn = [
  "XML reading for automatic field population and vendor invoice validation",
  "Payment supplements and receipt validation for domestic and international clients",
  "Bulk stamping and issuance of pending CFDI 4.0 documents",
  "Automatic email delivery of signed XML and PDF invoices",
  "Import customs declarations management (Customs Pedimentos)",
  "IEPS tax handling in XML and PDF receipts",
  "Full electronic accounting compliance directly synchronized with SAP",
  "Direct cancellation of invoices from SAP without entering the SAT tax portal",
  "Financial factoring and Carta Porte bill of lading stamping",
];

const invoiceFeaturesEs = [
  "Lectura de XML para llenado automático y validación de facturas de proveedores",
  "Complementos de pago y validación de recibos para clientes nacionales e internacionales",
  "Timbrado y emisión masiva de documentos CFDI 4.0 pendientes",
  "Envío automático por correo electrónico de facturas firmadas en XML y PDF",
  "Gestión de pedimentos de importación y aduanas",
  "Desglose de IEPS en recibos XML y representaciones impresas PDF",
  "Cumplimiento total de contabilidad electrónica sincronizado con SAP Business One",
  "Cancelación directa de facturas desde SAP sin ingresar al portal del SAT",
  "Factoraje financiero y timbrado de Carta Porte para traslados",
];

export default function InvoiceOneProductPage() {
  const { language, t } = useLanguage();
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    src: "",
    title: "",
    caption: "",
  });

  const openLightbox = (src: string, title: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      src,
      title,
      caption,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const features = language === "es" ? invoiceFeaturesEs : invoiceFeaturesEn;

  return (
    <div className="bg-white">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-[#133374] via-[#102d66] to-[#29A1F2] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              {t("Tax Compliance & E-Invoicing CFDI 4.0", "Cumplimiento Fiscal y Facturación Electrónica CFDI 4.0")}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="relative h-12 w-44">
                <Image
                  src="/images/logo_invoice_one.png"
                  alt="InvoiceOne"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  priority
                />
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-white font-semibold">
              {t("A steady growth for your business", "Un crecimiento constante para su empresa")}
            </p>

            <p className="text-base text-white/90 leading-relaxed max-w-2xl font-normal">
              {t(
                "InvoiceOne is an electronic invoicing and accounting Add-On specifically developed for SAP Business One that helps you comply with Mexican tax regulations (CFDI 4.0, SAT) and international electronic invoicing. Let us handle your electronic invoicing, validation, and accounting directly inside SAP.",
                "InvoiceOne es un Add-On de facturación y contabilidad electrónica desarrollado específicamente para SAP Business One que le ayuda a cumplir con las normativas fiscales mexicanas (CFDI 4.0, SAT) y estándares internacionales. Delegue en nosotros la emisión, timbrado y contabilidad directamente en SAP."
              )}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-xl"
              >
                {t("Schedule an Appointment", "Agendar Cita")}
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                {t("View Functionalities", "Ver Funcionalidades")}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() =>
                openLightbox(
                  "/images/img_invoice2.png",
                  "InvoiceOne SAP Business One Workspace",
                  "Native SAP Business One interface showing InvoiceOne digital stamping, document registers, and accounting reconciliation."
                )
              }
              className="relative w-full max-w-lg p-3 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl cursor-pointer group transition-all hover:scale-102"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/90 flex items-center justify-center p-2">
                <Image
                  src="/images/img_invoice2.png"
                  alt="InvoiceOne Interface"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                  <span className="bg-white/90 text-[#133374] font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#E00E8B]" />
                    {t("Click to enlarge", "Clic para ampliar")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FUNCTIONALITIES & DEDICATED FULL-RESOLUTION INTERFACE BANNER */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
            {t("Full Fiscal Automation", "Automatización Fiscal Total")}
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
            {t("Powerful Invoicing and Electronic Accounting Add-On", "Potente Add-On de Facturación y Contabilidad Electrónica")}
          </h2>

          <p className="text-[#54595F] leading-relaxed text-base">
            {t(
              "InvoiceOne automates the end-to-end stamping, reception, validation, and cancellation of tax invoices directly inside SAP Business One without requiring third-party portal logins or manual file conversions.",
              "InvoiceOne automatiza el ciclo completo de timbrado, recepción, validación y cancelación de comprobantes fiscales dentro de SAP Business One sin ingresar a portales externos ni conversiones manuales."
            )}
          </p>
        </div>

        {/* FULL INTERFACE RIBBON SHOWCASE (Resolves observation: La foto de Invoice no se ve completa) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span className="flex items-center gap-2 text-[#133374] font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              {t("InvoiceOne Document Processing Ribbon & Multi-Document Workbench", "Bandeja de Procesamiento de Documentos InvoiceOne en SAP")}
            </span>
            <button
              onClick={() =>
                openLightbox(
                  "/images/img_invoice-2.jpg",
                  "InvoiceOne Document Processing Workbench",
                  "High-resolution view of the InvoiceOne multi-document stamping, validation, and cancellation ribbon in SAP Business One."
                )
              }
              className="text-[#E00E8B] hover:underline flex items-center gap-1 font-bold cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              {t("Expand High Resolution ↗", "Ver en Alta Resolución ↗")}
            </button>
          </div>

          <div
            onClick={() =>
              openLightbox(
                "/images/img_invoice-2.jpg",
                "InvoiceOne Document Processing Workbench",
                "High-resolution view of the InvoiceOne multi-document stamping, validation, and cancellation ribbon in SAP Business One."
              )
            }
            className="group relative rounded-3xl overflow-hidden border-2 border-slate-200 bg-slate-900 shadow-xl cursor-pointer hover:border-[#133374] transition-all"
          >
            {/* Natural aspect ratio container: 1920/440 ~ 4.36:1 */}
            <div className="relative w-full aspect-[1920/440] min-h-[180px] sm:min-h-[260px] bg-white">
              <Image
                src="/images/img_invoice-2.jpg"
                alt="InvoiceOne Document Processing Ribbon"
                fill
                className="object-contain object-center group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
              <span className="bg-white text-[#133374] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-2xl">
                <ZoomIn className="w-4 h-4 text-[#E00E8B]" />
                {t("Click to inspect full document processing table in HD", "Clic para inspeccionar la tabla completa en HD")}
              </span>
            </div>
          </div>
        </div>

        {/* Feature bullets grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-[#E00E8B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-[#133374]">
                {feat}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#133374] text-white hover:bg-[#E00E8B] transition-colors shadow-md"
          >
            {t("Schedule an Appointment", "Agendar Cita")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. KEY BENEFITS FOR SAP USERS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full">
              {t("Security & Peace of Mind", "Seguridad y Tranquilidad")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#133374]">
              {t("Designed to Keep Your Company 100% Tax Compliant", "Diseñado para Mantener su Empresa 100% en Cumplimiento Fiscal")}
            </h2>
            <p className="text-[#54595F] text-base">
              {t(
                "Eliminate tax penalties and streamline your accounts payable and accounts receivable directly in SAP Business One.",
                "Elimine multas fiscales y agilice sus cuentas por pagar y por cobrar directamente en SAP Business One."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F4FF] flex items-center justify-center text-[#133374]">
                <Receipt className="w-6 h-6 text-[#133374]" />
              </div>
              <h3 className="text-xl font-bold text-[#133374]">
                {t("Mass Stamping & Dispatch", "Timbrado y Emisión Masiva")}
              </h3>
              <p className="text-sm text-[#54595F] leading-relaxed">
                {t(
                  "Issue hundreds of daily CFDIs with a single click and automatically distribute XML and PDF files to your customers via email.",
                  "Emita cientos de CFDIs diarios con un solo clic y distribuya automáticamente archivos XML y PDF a sus clientes por correo electrónico."
                )}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F4FF] flex items-center justify-center text-[#133374]">
                <FileSpreadsheet className="w-6 h-6 text-[#133374]" />
              </div>
              <h3 className="text-xl font-bold text-[#133374]">
                {t("SAT Direct Validation", "Validación Directa ante el SAT")}
              </h3>
              <p className="text-sm text-[#54595F] leading-relaxed">
                {t(
                  "Cancel invoices and validate provider invoices directly through the PAC and SAT web services without logging into the government portal.",
                  "Cancele facturas y valide comprobantes de proveedores directamente mediante servicios web de PAC y SAT sin ingresar al portal oficial."
                )}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9F4FF] flex items-center justify-center text-[#133374]">
                <Building2 className="w-6 h-6 text-[#133374]" />
              </div>
              <h3 className="text-xl font-bold text-[#133374]">
                {t("Electronic Accounting", "Contabilidad Electrónica")}
              </h3>
              <p className="text-sm text-[#54595F] leading-relaxed">
                {t(
                  "Generate the account chart, trial balance, journal entries, and auxiliary accounts in the XML format mandated by the tax authority.",
                  "Genere catálogo de cuentas, balanza de comprobación, pólizas y auxiliares en los formatos XML oficiales requeridos por la autoridad."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 bg-[#133374] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {t("Schedule an Appointment", "Agendar Cita")}
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              "Get in touch with our enterprise consulting team to see a live demonstration of InvoiceOne and how it connects to your SAP Business One environment.",
              "Comuníquese con nuestro equipo de consultoría empresarial para ver una demostración en vivo de InvoiceOne y cómo se conecta a su entorno de SAP Business One."
            )}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-base bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-xl"
            >
              {t("Schedule an Appointment", "Agendar Cita")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        title={lightboxState.title}
        caption={lightboxState.caption}
        onClose={closeLightbox}
      />
    </div>
  );
}
