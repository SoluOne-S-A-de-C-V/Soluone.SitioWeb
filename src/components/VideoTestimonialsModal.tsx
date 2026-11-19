"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Play, X, ArrowUpRight, Quote } from "lucide-react";

interface TestimonialCase {
  id: string;
  client: string;
  industry: string;
  initials: string;
  initialsColor: string;
  badgeColor: string;
  quote: string;
  videoUrl: string;
}

const testimonials: TestimonialCase[] = [
  {
    id: "ecohome",
    client: "Ecohome",
    industry: "Home & Construction",
    initials: "EH",
    initialsColor: "bg-blue-500/15 text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    quote:
      "Multi-warehouse control and agile counter billing directly connected in real time to our SAP Business One server.",
    videoUrl: "https://player.vimeo.com/video/1119124624?h=2b37c4d7fc&autoplay=1",
  },
  {
    id: "paulette",
    client: "Paulette Bakery",
    industry: "Pastry Shops & Gelato",
    initials: "PL",
    initialsColor: "bg-pink-500/15 text-[#E00E8B]",
    badgeColor: "bg-pink-100 text-[#E00E8B]",
    quote:
      "High-speed counter order entry, precise cashier register cuts, and custom product modifier buttons for retail pastry sales.",
    videoUrl: "https://player.vimeo.com/video/1118922438?h=8252470919&autoplay=1",
  },
  {
    id: "la-esmeralda",
    client: "La Esmeralda",
    industry: "Jewelry & Luxury Retail",
    initials: "LE",
    initialsColor: "bg-amber-500/15 text-amber-800",
    badgeColor: "bg-amber-100 text-amber-900",
    quote:
      "Exact piece traceability via high-precision barcode scanning, secure cashier tenders, and strict chain-wide auditing.",
    videoUrl: "https://player.vimeo.com/video/872585457?autoplay=1",
  },
  {
    id: "mania-jeans",
    client: "Mania Jeans",
    industry: "Fashion & Apparel",
    initials: "MJ",
    initialsColor: "bg-purple-500/15 text-purple-800",
    badgeColor: "bg-purple-100 text-purple-900",
    quote:
      "Matrix grid management for sizes and colors with seasonal multi-store promotions seamlessly synchronized across branches.",
    videoUrl: "https://player.vimeo.com/video/1127470205?h=f9ebe6489c&autoplay=1",
  },
];

export function VideoTestimonialsModal() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };
    if (activeVideo) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideo]);

  return (
    <section id="customers" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-2xs">
            {t("Client Success Stories", "Casos de Éxito")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#133374] tracking-tight">
            {t("Companies that scale their retail with", "Empresas que escalan su retail con")}{" "}
            <span className="text-[#E00E8B]">SoluONE</span>
          </h2>
          <p className="text-[#54595F] text-base sm:text-lg leading-relaxed">
            {t(
              "Discover how leading retail businesses have unified their point-of-sale operations, inventory counts, and fiscal compliance with SAP Business One.",
              "Descubra cómo empresas líderes unificaron sus operaciones en punto de venta, inventarios y cumplimiento fiscal con SAP Business One."
            )}
          </p>
        </div>

        {/* 4 Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between hover:border-[#133374]/30 hover:shadow-xl transition-all duration-300 group relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.initialsColor} flex items-center justify-center font-bold text-base tracking-wider`}
                  >
                    {item.initials}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.badgeColor}`}
                  >
                    {item.industry}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#133374] group-hover:text-[#E00E8B] transition-colors">
                    {item.client}
                  </h3>
                </div>

                <Quote className="w-5 h-5 text-slate-300" />

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() =>
                    setActiveVideo({
                      url: item.videoUrl,
                      title: `Success Story: ${item.client}`,
                    })
                  }
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-[#133374]/5 hover:bg-[#E00E8B] text-[#133374] hover:text-white flex items-center justify-center gap-2 transition-all duration-200 shadow-2xs cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{t("Watch Testimonial", "Ver Testimonio")}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Official YouTube Channel Strip */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">
                Explore more customer case studies on our official channel
              </p>
              <p className="text-[11px] text-slate-500">
                Live demonstrations, store tours, and SAP Business One customer interviews.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@soluonesadecv6918"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E00E8B] hover:text-[#133374] hover:underline"
          >
            <span>@soluonesadecv6918 on YouTube</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* On-Demand Vimeo Video Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Play className="w-4 h-4 text-[#E00E8B] fill-current" />
                <span>{activeVideo.title}</span>
              </h4>
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Video Container */}
            <div className="relative w-full aspect-16/9 bg-black">
              <iframe
                src={activeVideo.url}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={activeVideo.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
