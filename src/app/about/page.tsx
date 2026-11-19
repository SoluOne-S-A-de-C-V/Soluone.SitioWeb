import Image from "next/image";
import Link from "next/link";
import { StatsCounter } from "@/components/StatsCounter";
import { Sparkles, CheckCircle2, Target, Eye, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SoluOne - History, Mission & Vision",
  description:
    "Learn about SoluOne and Retail One: Dedicated since 2009 to developing certified point-of-sale solutions specifically designed for SAP Business One.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#133374] to-[#29A1F2] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            Specialists in Retail for SAP Business One
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            About SoluONE
          </h1>
          <p className="text-white/90 text-lg leading-relaxed">
            Over 15 years dedicated exclusively to optimizing store operations and retail branches for companies that trust SAP Business One.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
              A Bit of History
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
              SoluONE was born from identifying a significant need in the market
            </h2>

            <p className="text-[#54595F] leading-relaxed text-base">
              SoluONE was born from identifying a significant need in the market among companies that had implemented the ERP SAP Business One and operated retail stores requiring a point-of-sale solution truly designed for SAP Business One.
            </p>

            <p className="text-[#54595F] leading-relaxed text-sm">
              At that time, the available solutions had not been specifically built for this ERP, meaning their data structures (customer catalog, items, pricing, taxes, etc.) differed from those of SAP Business One, leading to the need for an intermediate data interface.
            </p>

            {/* Analogy Quote */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#E00E8B] space-y-2">
              <p className="text-sm italic text-[#444] leading-relaxed">
                “A data interface is like having a German translating between an Asian and a Latin person. Every time the Asian wants to communicate a new word to the Latin person, the German must first understand it before passing it along—and vice versa. In other words, every time the ERP is modified, the interface must also be modified; and the same applies whenever the point-of-sale system is changed. With Retail One, there is no interface: the communication is direct and native.”
              </p>
            </div>

            <p className="text-[#54595F] leading-relaxed text-sm">
              In <strong>2009</strong>, our Retail One journey began, and since then, thanks to the trust and support of our clients, we have successfully served various retail industries, expanding into several countries across the Americas, Africa, and the Middle East.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <Image
                src="/images/2148056259.jpg"
                alt="SoluOne team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#133374] flex items-center justify-center text-[#E00E8B]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#133374]">Mission</h3>
              <p className="text-[#54595F] text-sm leading-relaxed">
                We are a team of professionals capable of delivering reliable solutions for the Retail industry that address business needs and help our clients achieve well-founded and sustainable growth.
              </p>
              <ul className="space-y-2 text-xs text-[#444] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E00E8B]" />
                  <span>Execution of implementation projects on time and effectively</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E00E8B]" />
                  <span>Continuous incorporation of best practices in software development</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#133374] flex items-center justify-center text-[#E00E8B]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#133374]">Vision</h3>
              <p className="text-[#54595F] text-sm leading-relaxed">
                To become a global company with the highest standards of quality and sustainable growth, leading the Retail industry for the SAP Business One ERP system.
              </p>
              <ul className="space-y-2 text-xs text-[#444] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E00E8B]" />
                  <span>Distributors in different countries across Latin America</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E00E8B]" />
                  <span>Innovation and adoption of new technologies as core strength</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#133374] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Schedule an Appointment</h2>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            At SoluONE, we specialize in developing Add-On applications specifically designed for the SAP Business One ERP system.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all"
            >
              Request a demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
