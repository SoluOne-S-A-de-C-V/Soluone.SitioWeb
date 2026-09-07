import Image from "next/image";
import { Quote, ShieldCheck, Award, CheckCircle2, Star } from "lucide-react";

export function SocialProofV2() {
  const testimonials = [
    {
      quote:
        "Most of our time used to be taken up by manual reconciliations and cashier audit bottlenecks. With Retail One directly updating our SAP Business One ledger, our store managers now focus entirely on customer experience.",
      author: "Mark Zellers",
      role: "CEO & Co-Founder, Multi-Store Retail Group",
    },
    {
      quote:
        "The fact that Retail One operates with zero downtime when our store internet drops has saved us thousands of dollars in lost holiday sales. When connectivity comes back, everything syncs to SAP automatically.",
      author: "Sarah Edrissi",
      role: "VP of Operations, Regional Supermarket Chain",
    },
    {
      quote:
        "Invoice One solved our SAT CFDI 4.0 compliance overnight. Our customers self-invoice through the web portal, eliminating cashier lines and saving our finance team over 40 hours of manual work every month.",
      author: "Natalia Larsson",
      role: "Chief Financial Officer, Wholesale & Retail Distributor",
    },
  ];

  return (
    <section className="py-24 bg-[#08142C] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Enterprise Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/10">
          <div className="space-y-1">
            <span className="text-3xl sm:text-5xl font-extrabold font-mono text-[#29A1F2]">15+</span>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Years on SAP B1</p>
            <p className="text-xs text-slate-300">Dedicated ERP R&D since 2009</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl sm:text-5xl font-extrabold font-mono text-white">5,000+</span>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Active Licenses</p>
            <p className="text-xs text-slate-300">Millions of monthly transactions</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl sm:text-5xl font-extrabold font-mono text-[#E00E8B]">12+</span>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Countries Deployed</p>
            <p className="text-xs text-slate-300">Americas, Africa & Middle East</p>
          </div>
          <div className="space-y-1">
            <span className="text-3xl sm:text-5xl font-extrabold font-mono text-emerald-400">99.99%</span>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Offline Tolerance</p>
            <p className="text-xs text-slate-300">Zero transactional downtime</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#29A1F2] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            Verified Enterprise Trust
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Trusted by Multi-Branch Retailers & SAP Partners
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            See how operations leaders eliminate discrepancies, streamline cashier audits, and automate SAT compliance.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-6 shadow-xl hover:border-white/25 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#E00E8B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-white/20" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-0.5">
                <p className="font-bold text-sm text-white">{t.author}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certified Hardware & Software Ecosystem Wall */}
        <div className="pt-8 border-t border-white/10 space-y-4 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Certified Hardware & Software Interoperability
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-mono text-slate-400 font-bold">
            <span className="hover:text-white transition-colors">SAP Business One</span>
            <span className="hover:text-white transition-colors">SAP HANA</span>
            <span className="hover:text-white transition-colors">SAT CFDI 4.0</span>
            <span className="hover:text-white transition-colors">Zebra RF Scanners</span>
            <span className="hover:text-white transition-colors">Honeywell Handhelds</span>
            <span className="hover:text-white transition-colors">Epson POS Printers</span>
            <span className="hover:text-white transition-colors">Truper Electronic EDI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
