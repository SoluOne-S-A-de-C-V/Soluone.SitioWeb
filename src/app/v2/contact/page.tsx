import { DemoConfigurator } from "@/components/v2/DemoConfigurator";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Consulting & Demo | SoluOne 2026 SAP Architecture",
  description:
    "Schedule a technical architecture review and live demo with a certified SAP Business One solution architect.",
};

export default function ContactV2Page() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#08142C] via-[#0E265C] to-[#133374] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#29A1F2] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            Direct Solution Architect Access
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Schedule Architecture Review
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect directly with certified SAP Business One engineers to evaluate POS, mobile inventory, and CFDI 4.0 stamping topologies.
          </p>
        </div>
      </section>

      {/* Direct Communication Channels Strip */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#133374] text-[#29A1F2] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs text-slate-500 uppercase font-bold">Executive Direct Line</p>
                <a href="tel:+529992420803" className="text-base font-bold text-[#133374] hover:text-[#E00E8B] font-mono">
                  +52 (999) 242 0803
                </a>
                <p className="text-[11px] text-slate-400">Monday–Friday 9:00am – 7:00pm CST</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#133374] text-[#E00E8B] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs text-slate-500 uppercase font-bold">Technical Inquiries</p>
                <a href="mailto:info@soluone.com.mx" className="text-base font-bold text-[#133374] hover:text-[#E00E8B] font-mono">
                  info@soluone.com.mx
                </a>
                <p className="text-[11px] text-slate-400">Average response time: 14 minutes</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#133374] text-emerald-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs text-slate-500 uppercase font-bold">Headquarters</p>
                <p className="text-xs font-bold text-[#133374] leading-snug">
                  Calle 20 #235 x 7 y 15, Fracc. Altabrisa, Mérida, Yucatán.
                </p>
                <p className="text-[11px] text-slate-400">Serving Mexico, LATAM & USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided Configurator */}
      <DemoConfigurator />
    </div>
  );
}
