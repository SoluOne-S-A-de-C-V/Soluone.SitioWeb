"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  Scan,
  CreditCard,
  Receipt,
  Database,
  Layers,
  Activity,
  Boxes,
  Store,
  RefreshCw,
  Plus,
  Trash2,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface POSItem {
  id: string;
  sku: string;
  name: string;
  price: number;
  qty: number;
  category: string;
}

const sampleCatalog = [
  { id: "1", sku: "TRP-8842", name: "Truper Pro Cordless Drill 20V", price: 1850.0, category: "Hardware" },
  { id: "2", sku: "GEL-4401", name: "Artisanal Gelato Tub 1L (Vanilla)", price: 210.0, category: "Pastry" },
  { id: "3", sku: "BSH-9022", name: "Bosch Synthetic Oil Filter X4", price: 340.0, category: "Autoparts" },
  { id: "4", sku: "WIN-1180", name: "Reserva Tinto Malbec 750ml", price: 420.0, category: "Beverages" },
];

export function HeroHUD() {
  const [activeHUDTab, setActiveHUDTab] = useState<"pos" | "executive" | "omnichannel">("pos");

  // Interactive POS State
  const [cart, setCart] = useState<POSItem[]>([
    { id: "1", sku: "TRP-8842", name: "Truper Pro Cordless Drill 20V", price: 1850.0, qty: 1, category: "Hardware" },
    { id: "2", sku: "GEL-4401", name: "Artisanal Gelato Tub 1L (Vanilla)", price: 210.0, qty: 2, category: "Pastry" },
  ]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncCompleted, setSyncCompleted] = useState(false);

  const addItemToCart = (item: typeof sampleCatalog[0]) => {
    setSyncCompleted(false);
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setSyncCompleted(false);
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.16; // IVA 16%
  const total = subtotal + tax;

  const triggerSAPSync = () => {
    setIsSyncing(true);
    setSyncCompleted(false);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncCompleted(true);
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08142C] via-[#0D2254] to-[#133374] text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Subtle Geometric Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#29A1F2]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header & Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white/90 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E00E8B] animate-pulse" />
            <span>CERTIFIED ADD-ON FOR SAP BUSINESS ONE (SQL & HANA)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
            The Store Operation Platform{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29A1F2] via-white to-[#E00E8B]">
              Engineered for Retail Chains.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            High-velocity point of sale, mobile handheld inventory counts, and automated CFDI 4.0 invoicing — operating synchronously with your SAP Business One ERP even during total internet outages.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/v2/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-[#C20977] shadow-xl shadow-[#E00E8B]/30 hover:scale-102 transition-all"
            >
              <span>Schedule Architecture Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#interactive-hud"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-md transition-all"
            >
              <Scan className="w-4 h-4 text-[#29A1F2]" />
              <span>Explore Interactive POS HUD</span>
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#29A1F2]" />
              <span>5,000+ Active Registers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#29A1F2]" />
              <span>12+ Operating Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#29A1F2]" />
              <span>99.99% Offline Tolerance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#29A1F2]" />
              <span>SAT CFDI 4.0 Native Engine</span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CONSOLE / POS SIMULATION HUD */}
        <div id="interactive-hud" className="max-w-5xl mx-auto rounded-3xl bg-[#08142C]/90 border border-white/15 p-3 sm:p-5 shadow-2xl backdrop-blur-xl space-y-4">
          {/* Top Bar of the HUD with Mode Switchers */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-[11px] font-mono text-white">
                <Store className="w-3.5 h-3.5 text-[#29A1F2]" />
                <span>Store #04 — Mérida Flagship</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Terminal Active
              </span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold">
              <button
                onClick={() => setActiveHUDTab("pos")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeHUDTab === "pos"
                    ? "bg-[#133374] text-white border border-[#29A1F2]/40 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Scan className="w-3.5 h-3.5" />
                <span>1. Cashier POS Simulation</span>
              </button>

              <button
                onClick={() => setActiveHUDTab("executive")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeHUDTab === "executive"
                    ? "bg-[#133374] text-white border border-[#29A1F2]/40 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>2. Executive KPIs HUD</span>
              </button>

              <button
                onClick={() => setActiveHUDTab("omnichannel")}
                className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeHUDTab === "omnichannel"
                    ? "bg-[#133374] text-white border border-[#29A1F2]/40 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Boxes className="w-3.5 h-3.5" />
                <span>3. Omnichannel Stream</span>
              </button>
            </div>
          </div>

          {/* TAB 1: CASHIER POS TERMINAL */}
          {activeHUDTab === "pos" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-2 sm:p-4">
              {/* Left Column: Interactive Quick-Keys & Catalog */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>TOUCH QUICK-KEYS / BARCODE LOOKUP</span>
                  <span className="text-slate-400">Click product to simulate register scan</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {sampleCatalog.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => addItemToCart(item)}
                      className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#29A1F2]/50 transition-all flex flex-col justify-between group h-24"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#29A1F2]">
                          {item.sku}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                          {item.category}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white line-clamp-1 group-hover:text-[#29A1F2]">
                          {item.name}
                        </p>
                        <p className="text-xs font-mono font-bold text-emerald-400">
                          ${item.price.toFixed(2)} MXN
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Offline Resilient Status Bar */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#29A1F2]" />
                    <span>Embedded Local SQL Cache: <strong>Operational</strong></span>
                  </div>
                  <span className="text-emerald-400 font-bold">Offline Ready (0% Data Loss)</span>
                </div>
              </div>

              {/* Right Column: Active Ticket & SAP Settlement */}
              <div className="lg:col-span-5 bg-white text-[#133374] rounded-2xl p-5 flex flex-col justify-between shadow-xl space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div>
                      <h4 className="font-extrabold text-sm uppercase tracking-wide">
                        Active Ticket #2904
                      </h4>
                      <p className="text-[11px] text-slate-500 font-mono">Cashier: Diego S. | Terminal 01</p>
                    </div>
                    <span className="text-xs font-mono font-bold bg-[#E00E8B]/10 text-[#E00E8B] px-2 py-0.5 rounded">
                      CFDI 4.0
                    </span>
                  </div>

                  {/* Cart Item List */}
                  <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                    {cart.length === 0 ? (
                      <p className="text-xs text-slate-400 italic py-4 text-center">
                        Scan or select an item on the left to start checkout.
                      </p>
                    ) : (
                      cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between text-xs py-1 border-b border-slate-100"
                        >
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="font-semibold text-[#133374] truncate">{item.name}</p>
                            <p className="text-[10px] text-slate-500 font-mono">
                              {item.qty} x ${item.price.toFixed(2)}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-[#133374]">
                              ${(item.price * item.qty).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-slate-400 hover:text-red-500"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Totals & Sync Button */}
                <div className="pt-2 border-t border-slate-200 space-y-3">
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-slate-500">
                      <span>Subtotal:</span>
                      <span className="font-mono">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>IVA (16%):</span>
                      <span className="font-mono">${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-[#133374] pt-1 border-t border-slate-200">
                      <span>Total:</span>
                      <span className="font-mono text-lg text-[#E00E8B]">${total.toFixed(2)} MXN</span>
                    </div>
                  </div>

                  {syncCompleted ? (
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono space-y-1">
                      <div className="flex items-center gap-1.5 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>SAT Stamped & SAP Synced!</span>
                      </div>
                      <p className="text-[10px] text-emerald-700">
                        UUID: 9E41-884B • Injected into SAP Journal Entry #9042 in 18ms.
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={triggerSAPSync}
                      disabled={cart.length === 0 || isSyncing}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs bg-[#133374] text-white hover:bg-[#E00E8B] transition-colors disabled:opacity-50"
                    >
                      {isSyncing ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Syncing to SAP Business One...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4" />
                          <span>Authorize & Sync to SAP HANA Ledger</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EXECUTIVE ANALYTICS HUD */}
          {activeHUDTab === "executive" && (
            <div className="p-4 space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400">DAILY REVENUE</span>
                  <p className="text-2xl font-bold font-mono text-white">$148,920.50</p>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +14.2% vs yesterday
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400">GROSS MARGIN</span>
                  <p className="text-2xl font-bold font-mono text-[#29A1F2]">34.8%</p>
                  <span className="text-[11px] font-mono text-slate-300">Live SAP COGS tracking</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400">ONLINE REGISTERS</span>
                  <p className="text-2xl font-bold font-mono text-emerald-400">48 / 48</p>
                  <span className="text-[11px] font-mono text-emerald-400">100% network health</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400">AVG TICKET TIME</span>
                  <p className="text-2xl font-bold font-mono text-[#E00E8B]">18.4s</p>
                  <span className="text-[11px] font-mono text-slate-300">High-speed lane throughput</span>
                </div>
              </div>

              {/* Multi-Branch Status Table */}
              <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden text-xs">
                <div className="grid grid-cols-12 p-3 font-mono text-slate-400 border-b border-white/10 text-[11px]">
                  <span className="col-span-4">BRANCH STORE</span>
                  <span className="col-span-3">DAILY TRANSACTIONS</span>
                  <span className="col-span-3">SAP SYNC STATUS</span>
                  <span className="col-span-2 text-right">TOTAL VOLUME</span>
                </div>
                <div className="divide-y divide-white/5">
                  <div className="grid grid-cols-12 p-3 items-center">
                    <span className="col-span-4 font-bold text-white">01. Mérida Norte (Flagship)</span>
                    <span className="col-span-3 font-mono text-slate-300">412 tickets</span>
                    <span className="col-span-3 text-emerald-400 font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Live Sync (8ms)
                    </span>
                    <span className="col-span-2 text-right font-mono font-bold text-white">$64,120.00</span>
                  </div>
                  <div className="grid grid-cols-12 p-3 items-center">
                    <span className="col-span-4 font-bold text-white">02. Cancún Hotel Zone</span>
                    <span className="col-span-3 font-mono text-slate-300">329 tickets</span>
                    <span className="col-span-3 text-emerald-400 font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Live Sync (14ms)
                    </span>
                    <span className="col-span-2 text-right font-mono font-bold text-white">$51,800.50</span>
                  </div>
                  <div className="grid grid-cols-12 p-3 items-center">
                    <span className="col-span-4 font-bold text-white">03. CDMX Santa Fe</span>
                    <span className="col-span-3 font-mono text-slate-300">210 tickets</span>
                    <span className="col-span-3 text-emerald-400 font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Live Sync (22ms)
                    </span>
                    <span className="col-span-2 text-right font-mono font-bold text-white">$33,000.00</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: OMNICHANNEL ORDER ROUTING STREAM */}
          {activeHUDTab === "omnichannel" && (
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <span>REAL-TIME OMNICHANNEL PIPELINE</span>
                <span className="text-emerald-400">Auto-Routing to Nearest Warehouse</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                      WhatsApp Commerce
                    </span>
                    <span className="text-[10px] text-slate-400">2m ago</span>
                  </div>
                  <p className="text-sm font-bold text-white">Order #WA-9921</p>
                  <p className="text-xs text-slate-300">Customer: Carlos Méndez • $1,420 MXN</p>
                  <div className="text-[11px] font-mono text-[#29A1F2] pt-2 border-t border-white/10">
                    &rarr; Reserved in Store 01 (Mérida)
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#29A1F2]/20 text-[#29A1F2]">
                      B2B Web Portal
                    </span>
                    <span className="text-[10px] text-slate-400">5m ago</span>
                  </div>
                  <p className="text-sm font-bold text-white">Order #B2B-4081</p>
                  <p className="text-xs text-slate-300">Grupo Hotelero Caribe • $48,200 MXN</p>
                  <div className="text-[11px] font-mono text-[#29A1F2] pt-2 border-t border-white/10">
                    &rarr; Dispatched to Central Distribution Hub
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E00E8B]/20 text-[#E00E8B]">
                      E-Commerce Store
                    </span>
                    <span className="text-[10px] text-slate-400">9m ago</span>
                  </div>
                  <p className="text-sm font-bold text-white">Order #EC-1892</p>
                  <p className="text-xs text-slate-300">Ship-from-Store (Same Day) • $890 MXN</p>
                  <div className="text-[11px] font-mono text-[#29A1F2] pt-2 border-t border-white/10">
                    &rarr; Packing Slip Printed at Cancún Register
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
