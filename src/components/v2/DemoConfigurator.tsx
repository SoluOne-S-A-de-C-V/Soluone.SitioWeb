"use client";

import { useState } from "react";
import {
  Server,
  Store,
  Target,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Calendar,
  Clock,
  ShieldCheck,
  Send,
} from "lucide-react";

export function DemoConfigurator() {
  const [erpVersion, setErpVersion] = useState("hana");
  const [storeCount, setStoreCount] = useState("6-20");
  const [primaryGoal, setPrimaryGoal] = useState("pos");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo-configurator" className="py-24 bg-white text-[#133374]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#133374] bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            Guided Architecture Configurator
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Configure Your SAP Solution Architecture
          </h2>
          <p className="text-base text-[#54595F] leading-relaxed">
            Select your parameters below to generate a tailored technical deployment blueprint and schedule a live demo with a certified SAP architect.
          </p>
        </div>

        {/* 2-Column Interface: Configurator on Left, Summary/Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: 3-STEP SELECTION */}
          <div className="lg:col-span-7 space-y-8 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            {/* STEP 1: ERP ENVIRONMENT */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#133374] flex items-center gap-1.5">
                <Server className="w-4 h-4 text-[#29A1F2]" /> Step 1: Select ERP Engine
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "hana", title: "SAP B1 (HANA)", desc: "In-memory database engine" },
                  { id: "sql", title: "SAP B1 (SQL)", desc: "Standard SQL Server architecture" },
                  { id: "eval", title: "Evaluating SAP", desc: "Planning ERP migration" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setErpVersion(item.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      erpVersion === item.id
                        ? "bg-[#133374] text-white border-[#133374] shadow-md"
                        : "bg-white text-[#133374] border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <p className="font-bold text-xs">{item.title}</p>
                    <p className={`text-[11px] mt-0.5 ${erpVersion === item.id ? "text-slate-200" : "text-slate-500"}`}>
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: STORE COUNT */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#133374] flex items-center gap-1.5">
                <Store className="w-4 h-4 text-[#29A1F2]" /> Step 2: Retail Scale & Branches
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "1-5", title: "1 – 5 Stores", desc: "Local / Growing retailer" },
                  { id: "6-20", title: "6 – 20 Stores", desc: "Regional store chain" },
                  { id: "20+", title: "20+ Stores", desc: "Enterprise national footprint" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStoreCount(item.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      storeCount === item.id
                        ? "bg-[#133374] text-white border-[#133374] shadow-md"
                        : "bg-white text-[#133374] border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <p className="font-bold text-xs">{item.title}</p>
                    <p className={`text-[11px] mt-0.5 ${storeCount === item.id ? "text-slate-200" : "text-slate-500"}`}>
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 3: PRIMARY OBJECTIVE */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#133374] flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#29A1F2]" /> Step 3: Priority Bottleneck to Solve
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: "pos", title: "High-Speed Counter POS", desc: "Eliminate cashier lines & downtime" },
                  { id: "inventory", title: "Mobile Stock Cycle Counts", desc: "Audit variances with Android RF" },
                  { id: "sat", title: "CFDI 4.0 & Web Self-Invoicing", desc: "Automate SAT PAC stamping" },
                  { id: "omni", title: "Omnichannel Order Routing", desc: "WhatsApp & e-commerce to store" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPrimaryGoal(item.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      primaryGoal === item.id
                        ? "bg-[#133374] text-white border-[#133374] shadow-md"
                        : "bg-white text-[#133374] border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <p className="font-bold text-xs">{item.title}</p>
                    <p className={`text-[11px] mt-0.5 ${primaryGoal === item.id ? "text-slate-200" : "text-slate-500"}`}>
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: LIVE BLUEPRINT & BOOKING FORM */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#08142C] text-white border border-white/15 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-[#29A1F2] uppercase font-bold">
                  Tailored Deployment Blueprint
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  SLA: &lt; 15 min response
                </span>
              </div>

              {/* Dynamic Blueprint Tags */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Stack:</span>
                  <span className="font-bold text-white uppercase">SAP {erpVersion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Topology:</span>
                  <span className="font-bold text-white">{storeCount} Edge Databases</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Module Priority:</span>
                  <span className="font-bold text-[#E00E8B] uppercase">{primaryGoal}</span>
                </div>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-base text-white">Blueprint Confirmed!</h4>
                  <p className="text-xs text-emerald-200">
                    A certified SAP Solution Architect has been assigned to your request. We will contact you within 15 minutes.
                  </p>
                  <div className="pt-2 text-xs font-mono text-white">
                    Direct Hotline: <strong>+52 999 242 0803</strong>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-[#E00E8B]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-[#E00E8B]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-[#E00E8B]"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-[#E00E8B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs bg-[#E00E8B] text-white hover:bg-[#C20977] shadow-lg shadow-[#E00E8B]/30 flex items-center justify-center gap-2 transition-all mt-2"
                  >
                    <span>Request Architecture Review & Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NDA Guaranteed
              </span>
              <span>Headquarters: Mérida, Yucatán</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
