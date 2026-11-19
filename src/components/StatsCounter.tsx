"use client";

import { Award, Users, Globe2, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function StatsCounter() {
  const { t } = useLanguage();

  const stats = [
    {
      value: "Since 2009",
      valueEs: "Desde 2009",
      label: t("Retail Specialists for SAP B1", "Especialistas Retail para SAP B1"),
      icon: <Award className="w-6 h-6 text-[#E00E8B]" />,
    },
    {
      value: "+80",
      valueEs: "+80",
      label: t("Development & Support Specialists", "Especialistas en Desarrollo y Soporte"),
      icon: <Users className="w-6 h-6 text-[#E00E8B]" />,
    },
    {
      value: "+15",
      valueEs: "+15",
      label: t("Countries with Active Terminals", "Países con Terminales Activas"),
      icon: <Globe2 className="w-6 h-6 text-[#E00E8B]" />,
    },
    {
      value: "+8,000",
      valueEs: "+8,000",
      label: t("Active Registers & RetailOne POS Terminals", "Cajas y Terminales Punto de Venta Activas"),
      icon: <Layers className="w-6 h-6 text-[#E00E8B]" />,
    },
  ];

  return (
    <section className="bg-[#0B2252] py-14 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-1 border border-white/10">
                {item.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 max-w-[180px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
