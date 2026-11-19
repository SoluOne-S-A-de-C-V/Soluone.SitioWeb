"use client";

import React from "react";
import { Globe, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function RegionalCompliance() {
  const { t } = useLanguage();

  const regions = [
    {
      flag: "🇲🇽",
      country: t("Mexico", "México"),
      badge: "CFDI 4.0 SAT",
      description: t(
        "Local CFDI 4.0 electronic invoicing, payment supplements, Carta Porte transit documentation, and electronic accounting integrated with SAP Business One.",
        "Facturación electrónica CFDI 4.0, complementos de pago, Carta Porte y contabilidad electrónica integrada directamente en SAP Business One."
      ),
      partners: "BBVA, Santander, Banorte, Fiserv",
    },
    {
      flag: "🇬🇹 🇨🇷 🇵🇦",
      country: t("Central America", "Centroamérica"),
      badge: "BAC Credomatic",
      description: t(
        "Fiscal compliance across Guatemala, Costa Rica, Panama, Honduras, and El Salvador. Integrated banking payment terminals.",
        "Cumplimiento fiscal en Guatemala, Costa Rica, Panamá, Honduras y El Salvador. Integración con terminales bancarias y puntos de cobro."
      ),
      partners: "BAC, Local Terminals",
    },
    {
      flag: "🇺🇸",
      country: t("United States", "Estados Unidos"),
      badge: "US Sales Tax & B2B",
      description: t(
        "Multi-state sales tax handling, PCI-DSS compliant credit card processing, and corporate B2B payment gateways.",
        "Gestión de Sales Tax multi-estado, procesamiento de tarjetas con cumplimiento PCI-DSS y pasarelas de pago B2B corporativas."
      ),
      partners: "Stellar Payments, EBizCharge",
    },
    {
      flag: "🇭🇹 🇩🇴 🇵🇷",
      country: t("Caribbean", "El Caribe"),
      badge: "DGII / NCF",
      description: t(
        "Certified operations for Dominican Republic (NCF tax receipts), Puerto Rico, Haiti, and regional Caribbean territories.",
        "Operaciones certificadas para República Dominicana (comprobantes NCF), Puerto Rico, Haití y territorios del Caribe."
      ),
      partners: "Island Regulations & Terminals",
    },
    {
      flag: "🇨🇱 🇧🇴 🇨🇴",
      country: t("South America", "Sudamérica"),
      badge: "DIAN, SII & Multi-Currency",
      description: t(
        "Electronic invoicing for Chile (Transbank), DIAN fiscal compliance for Colombia, tax localization for Bolivia, and multi-currency support for Andean expansion.",
        "Facturación electrónica para Chile (Transbank), cumplimiento fiscal DIAN para Colombia, localización tributaria para Bolivia y soporte multimoneda."
      ),
      partners: "Transbank, DIAN, Local Networks",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#E9F4FF]/70 via-white to-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#133374]/10 text-[#133374]">
            <Globe className="w-3.5 h-3.5" />
            <span>{t("International Presence & Fiscal Localization", "Presencia Internacional y Localización Fiscal")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133374] tracking-tight">
            {t("Regional Fiscal Compliance & Multi-Market Operations", "Cumplimiento Fiscal Regional y Operaciones Multi-Mercado")}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t(
              "RetailOne and SoluONE adapt to local tax legislation, electronic invoicing frameworks, and payment gateways in every market you operate in.",
              "RetailOne y SoluONE se adaptan a la legislación tributaria local, marcos de facturación electrónica y terminales de pago de cada país donde operas."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#133374]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{reg.flag}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-[#133374] px-2 py-0.5 rounded-md">
                    {reg.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  {reg.country}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {reg.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E00E8B] shrink-0" />
                <span className="truncate">{reg.partners}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
