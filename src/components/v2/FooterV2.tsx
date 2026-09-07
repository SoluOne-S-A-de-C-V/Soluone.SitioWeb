import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, Database, ArrowUpRight } from "lucide-react";
import { industriesList } from "@/data/industries";

export function FooterV2() {
  return (
    <footer className="bg-[#08142C] text-slate-300 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/v2" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#133374] flex items-center justify-center">
                <Image
                  src="/images/ic_soluone.png"
                  alt="SoluOne"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                Solu<span className="text-[#E00E8B]">ONE</span>
              </span>
            </Link>

            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              Enterprise store operations, high-speed point-of-sale, and automated fiscal compliance engines engineered specifically for SAP Business One.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-white/10 text-white font-mono text-[11px] font-bold">
                SAP B1 Certified
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#E00E8B]/20 text-[#E00E8B] font-mono text-[11px] font-bold">
                SAT CFDI 4.0 Native
              </span>
            </div>
          </div>

          {/* Products Col */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-white uppercase tracking-wider font-bold text-xs">
              Products
            </p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/v2/products/retail-one" className="hover:text-white transition-colors">
                  Retail One POS
                </Link>
              </li>
              <li>
                <Link href="/v2/products/invoice-one" className="hover:text-white transition-colors">
                  Invoice One Portal
                </Link>
              </li>
              <li>
                <Link href="/v2#interactive-hud" className="hover:text-white transition-colors">
                  Live POS Sandbox
                </Link>
              </li>
              <li>
                <Link href="/v2/contact" className="hover:text-white transition-colors">
                  Architecture Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Verticals Col */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-white uppercase tracking-wider font-bold text-xs">
              Retail Verticals
            </p>
            <ul className="grid grid-cols-1 gap-1.5 text-slate-400">
              {industriesList.slice(0, 6).map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/v2/industries/${ind.slug}`} className="hover:text-white transition-colors truncate block">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-white uppercase tracking-wider font-bold text-xs">
              Corporate Headquarters
            </p>
            <div className="space-y-2.5 text-slate-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#29A1F2] shrink-0 mt-0.5" />
                <span>Calle 20 #235 x 7 y 15, Fracc. Altabrisa, C.P. 97130, Mérida, Yucatán, México.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#29A1F2] shrink-0" />
                <a href="tel:+529992420803" className="hover:text-white transition-colors font-mono">
                  +52 (999) 242 0803
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#29A1F2] shrink-0" />
                <a href="mailto:info@soluone.com.mx" className="hover:text-white transition-colors font-mono">
                  info@soluone.com.mx
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Trademark Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>
            © {new Date().getFullYear()} SoluOne México. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            SAP and SAP Business One are registered trademarks of SAP SE. SoluOne is an independent software vendor.
          </p>
        </div>
      </div>
    </footer>
  );
}
