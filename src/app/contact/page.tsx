import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Demo | SoluOne Retail One",
  description:
    "Schedule an appointment for Retail One on SAP Business One. Reach out to our consultants in Mérida, Yucatán.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FFE3F4] text-[#E00E8B] border border-[#E00E8B]/30">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Consultation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#133374] tracking-tight">
            Schedule an Appointment
          </h1>
          <p className="text-[#54595F] text-base leading-relaxed">
            At SoluONE, we specialize in developing Add-On applications specifically designed for the SAP Business One ERP system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#133374]">
                Direct Contacts
              </h2>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE3F4] flex items-center justify-center text-[#E00E8B] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Phone</p>
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="font-bold text-[#133374] hover:text-[#E00E8B] transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">Monday to Friday 9:00 - 18:00 hrs</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE3F4] flex items-center justify-center text-[#E00E8B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Email</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-bold text-[#133374] hover:text-[#E00E8B] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">Prompt response</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE3F4] flex items-center justify-center text-[#E00E8B] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Headquarters</p>
                    <p className="font-semibold text-slate-800 text-xs leading-relaxed">
                      {siteConfig.contact.address}
                    </p>
                    <a
                      href={siteConfig.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E00E8B] hover:underline mt-2"
                    >
                      View on Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* SAP Seal */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#133374]" />
                <div>
                  <p className="text-xs font-bold text-[#133374]">Certified SAP Add-On</p>
                  <p className="text-[11px] text-slate-500">
                    Full compatibility with SAP Business One SQL & HANA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
