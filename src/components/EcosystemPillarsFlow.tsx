"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeftRight, Check, Database, Store, ShoppingBag, ArrowRight } from "lucide-react";

export function EcosystemPillarsFlow() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* 3 Columns Flow Cards */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch relative">
        
        {/* Connector indicator for desktop */}
        <div className="hidden md:flex absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 text-[#133374]">
          <ArrowLeftRight className="w-5 h-5 animate-pulse" />
        </div>
        <div className="hidden md:flex absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 text-[#E00E8B]">
          <ArrowLeftRight className="w-5 h-5 animate-pulse" />
        </div>

        {/* PILLAR 1: SAP BUSINESS ONE */}
        <div className="bg-white border-2 border-slate-200 hover:border-[#133374]/40 rounded-3xl p-8 transition-all flex flex-col justify-between shadow-md relative group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                {t("Central ERP", "ERP Central")}
              </span>
              <span className="text-slate-400 text-xs font-semibold">{t("Master Data", "Datos Maestros")}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#133374] mb-3">
              SAP Business One
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {t(
                "The enterprise core that centralizes and governs all corporate business rules:",
                "El núcleo empresarial que centraliza y gobierna las reglas de negocio corporativas:"
              )}
            </p>

            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#133374] shrink-0" />
                <span>{t("Consolidated product catalogs and barcode management", "Catálogo unificado de artículos y códigos de barras")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#133374] shrink-0" />
                <span>{t("Multi-warehouse inventory & batch/serial tracking", "Control multialmacén, lotes y números de serie")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#133374] shrink-0" />
                <span>{t("Dynamic price lists by customer tier and currency", "Listas de precios dinámicas por segmento y moneda")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#133374] shrink-0" />
                <span>{t("Customer accounts, credit limits and receivables", "Cuentas de clientes, límites de crédito y cobranza")}</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-[#133374] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              {t("Continuous Synchronization", "Sincronización Continua")}
            </span>
            <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded">HANA / SQL</span>
          </div>
        </div>

        {/* PILLAR 2: RETAILONE PLATFORM */}
        <div className="bg-gradient-to-b from-[#133374] via-[#0B2252] to-[#0A1224] text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between border-2 border-[#E00E8B]">
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#E00E8B]/25 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold bg-[#E00E8B] text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <Store className="w-3.5 h-3.5" />
                {t("Retail Platform", "Plataforma Retail")}
              </span>
              <span className="text-pink-300 text-xs font-semibold">{t("Omnichannel Store Operations", "Operaciones en Tienda")}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-3">
              RetailOne Platform
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {t(
                "The operational engine built for speed in physical stores and warehouses:",
                "El motor operativo de alta velocidad para tiendas físicas y almacenes:"
              )}
            </p>

            <ul className="space-y-3 text-sm text-slate-200 font-medium">
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#E00E8B] shrink-0" />
                <span>{t("High-speed Touch POS with modifier buttons", "POS táctil de alta velocidad con botones modificadores")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#E00E8B] shrink-0" />
                <span>{t("Android mobile app for stock counts, inventory & mobile orders", "App móvil Android para conteos, inventarios y pedidos móviles")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#E00E8B] shrink-0" />
                <span>{t("Promotions engine, BOGO, product combos & customer loyalty", "Motor de promociones, combos de artículos y lealtad")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#E00E8B] shrink-0" />
                <span>{t("100% Offline Autonomous: never stops selling", "100% Autónomo Offline: nunca se detiene la venta")}</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs font-medium">
            <span className="text-pink-300">{t("Connect. Integrate. Grow.", "Conectar. Integrar. Crecer.")}</span>
            <span className="bg-[#E00E8B]/30 border border-[#E00E8B]/50 text-white px-2.5 py-1 rounded-full font-bold text-[11px] flex items-center gap-1">
              <span>⚡ {t("Live Sync", "Sincronización en Vivo")}</span>
            </span>
          </div>
        </div>

        {/* PILLAR 3: VOI+ (DELIVERY & E-COMMERCE) */}
        <div className="bg-white border-2 border-slate-200 hover:border-[#E00E8B]/40 rounded-3xl p-8 transition-all flex flex-col justify-between shadow-md relative group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold bg-[#FFE3F4] text-[#E00E8B] px-3 py-1 rounded-full flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5" />
                {t("Delivery & E-commerce", "Delivery y E-commerce")}
              </span>
              <span className="text-slate-400 text-xs font-semibold">{t("Digital Channels", "Canales Digitales")}</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="relative h-8 w-24">
                <Image
                  src="/images/logo_voi.png"
                  alt="Voi+"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[11px] bg-[#E00E8B]/10 text-[#E00E8B] font-bold px-2 py-0.5 rounded-full">
                {t("New Solution", "Nueva Solución")}
              </span>
            </div>

            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {t(
                "Beyond delivery: seamlessly sync all online ordering platforms directly to SAP B1:",
                "Más allá del delivery: sincronice pedidos en línea directo a SAP B1:"
              )}
            </p>

            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#E00E8B] shrink-0" />
                <span>{t("Centralized UberEats, Rappi, PedidosYa & DiDi Food", "Centralización de UberEats, Rappi, PedidosYa y DiDi Food")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#E00E8B] shrink-0" />
                <span>{t("Branded online store with WooCommerce & Shopify", "Tienda online propia con WooCommerce y Shopify")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#E00E8B] shrink-0" />
                <span>{t("Voi Drivers: proprietary fleet dispatch & GPS tracking", "Voi Drivers: despacho de repartidores y rastreo GPS")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#E00E8B] shrink-0" />
                <span>{t("Omnichannel loyalty program (stamps & cashback rewards)", "Lealtad omnicanal (tarjetas de sellos y cashback)")}</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="text-slate-700 font-semibold">{t("Direct Dispatch to ERP", "Inyección Directa al ERP")}</span>
            <a
              href="https://voi.plus/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E00E8B] hover:text-[#133374] font-bold flex items-center gap-1 text-[11px]"
            >
              {t("Explore Voi+", "Explorar Voi+")} <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
