"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Award, ArrowRight } from "lucide-react";

export function SapOrlandoBadge({ variant = "floating" }: { variant?: "floating" | "topbar" | "card" }) {
  const { t } = useLanguage();

  if (variant === "topbar") {
    return (
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
    );
  }

  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white/90 backdrop-blur-md shadow-lg">
      <span className="w-2 h-2 rounded-full bg-[#E00E8B] animate-pulse" />
      <span>{t("SAP Business One Certified Solution", "Solución Certificada para SAP Business One")}</span>
    </div>
  );
}
