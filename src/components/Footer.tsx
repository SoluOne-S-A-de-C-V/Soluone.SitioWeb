import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B2252] text-slate-300 border-t border-white/10">
      {/* Top Banner / Callout */}
      <div className="border-b border-white/10 bg-white/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E00E8B]/20 text-[#FFC8E9] border border-[#E00E8B]/30 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Certified Add-On for SAP Business One
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Ready to streamline your store and retail operations?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Schedule an appointment and discover how Retail One coordinates branch operations in real time with your SAP Business One ERP.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] active:scale-98 shadow-md transition-all"
          >
            Request a demo
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-10 w-36">
              <Image
                src="/images/soluone-white.png"
                alt="SoluONE"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Retail One is a store operation platform and point-of-sale system built specifically for the ERP SAP Business One since 2009.
            </p>
            <div className="pt-2">
              <div className="relative h-12 w-28 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/Sap-Certified.png"
                  alt="SAP Certified"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#E00E8B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E00E8B] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#E00E8B] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/#customers" className="hover:text-[#E00E8B] transition-colors">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E00E8B] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industries/autoparts" className="hover:text-[#E00E8B] transition-colors">
                  Autoparts
                </Link>
              </li>
              <li>
                <Link href="/industries/pastry-shops-and-ice-cream-parlors" className="hover:text-[#E00E8B] transition-colors">
                  Pastry Shops & Ice Cream
                </Link>
              </li>
              <li>
                <Link href="/industries/hardware" className="hover:text-[#E00E8B] transition-colors">
                  Hardware & Building
                </Link>
              </li>
              <li>
                <Link href="/industries/wines-and-spirits" className="hover:text-[#E00E8B] transition-colors">
                  Wines & Spirits
                </Link>
              </li>
              <li>
                <Link href="/industries/fashion-and-footwear" className="hover:text-[#E00E8B] transition-colors">
                  Fashion & Footwear
                </Link>
              </li>
              <li>
                <Link href="/industries/restaurants" className="hover:text-[#E00E8B] transition-colors">
                  Restaurants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Offices
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E00E8B] shrink-0 mt-1" />
                <a
                  href={siteConfig.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.address}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E00E8B] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E00E8B] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SoluONE Software. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>SAP® and SAP Business One® are registered trademarks of SAP SE.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
