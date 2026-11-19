import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import {
  FileText,
  Monitor,
  Cpu,
  Package,
  ShieldCheck,
  Layers,
  Briefcase,
  Boxes,
  Download,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) {
    return { title: "Industry not found | SoluOne" };
  }

  return {
    title: `${industry.name} | SoluOne Retail One for SAP Business One`,
    description: industry.subtitle,
    openGraph: {
      title: `Retail One ${industry.name} | SoluOne`,
      description: industry.subtitle,
      images: [{ url: industry.featureImg1 }],
    },
  };
}

const benefitsList = [
  {
    title: "Point of Sale",
    desc: "Certified by SAP B1",
    icon: <FileText className="w-8 h-8 text-[#133374]" />,
  },
  {
    title: "Modern Display",
    desc: "User-friendly and intuitive interface",
    icon: <Monitor className="w-8 h-8 text-[#133374]" />,
  },
  {
    title: "Compatibility",
    desc: "Compatibility with POS hardware",
    icon: <Cpu className="w-8 h-8 text-[#133374]" />,
  },
  {
    title: "Inventory",
    desc: "Complete control of your inventory",
    icon: <Package className="w-8 h-8 text-[#133374]" />,
  },
  {
    title: "Data Integrity",
    desc: "Keep your information secure and accurate",
    icon: <ShieldCheck className="w-8 h-8 text-[#133374]" />,
  },
  {
    title: "Modular Operation",
    desc: "Multiple modules for all operational flows",
    icon: <Layers className="w-8 h-8 text-[#133374]" />,
  },
  {
    title: "Business Management",
    desc: "Specific features to manage your business",
    icon: <Briefcase className="w-8 h-8 text-[#133374]" />,
  },
  {
    title: "Inventory",
    desc: "Control your inventory",
    icon: <Boxes className="w-8 h-8 text-[#133374]" />,
  },
];

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* 1. TOP HERO BANNER (2-column layout on linear gradient #133374 to #29A1F2) */}
      <section className="bg-gradient-to-b from-[#133374] to-[#29A1F2] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-white/90 uppercase">
              ERP SAP Business One
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Retail One {industry.name}
            </h1>

            <p className="text-base sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              At SoluONE, we specialize in developing Add-On applications specifically designed for the SAP Business One ERP system.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-xl"
              >
                Schedule an Appointment
              </Link>
              {industry.brochureUrl && (
                <a
                  href={industry.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white text-white hover:text-[#133374] border border-white/20 backdrop-blur-xs transition-all shadow-lg group"
                >
                  <Download className="w-4 h-4 text-[#E00E8B] group-hover:scale-110 transition-transform" />
                  <span>Download Brochure</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: POS Graphic (Contain without cropping) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md h-72 sm:h-96 flex items-center justify-center p-2">
              <Image
                src="/images/soluone-pos.png"
                alt={`Retail One ${industry.name} POS Software`}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO CONTAINER WITH SHOWCASE BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#133374] tracking-tight leading-snug">
            Retail ONE is designed to coordinate administrative operations in an agile and modern way.
          </h2>
          <p className="text-base sm:text-lg text-[#54595F] leading-relaxed max-w-3xl mx-auto">
            {industry.industryDescription}
          </p>
        </div>

        {/* Big Showcase Image (Preserving aspect ratio without cutting) */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
          <div className="relative w-full h-[280px] sm:h-[460px] lg:h-[520px]">
            <Image
              src={industry.heroBannerImg}
              alt={`Retail One ${industry.name} Operation`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* 3. BENEFITS CONTAINER (linear gradient #2996F2 to #133374) */}
      <section className="bg-gradient-to-b from-[#2996F2] to-[#133374] py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-14 tracking-tight">
            Benefits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefitsList.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center text-[#133374] shadow-xl hover:scale-105 transition-transform duration-200 flex flex-col items-center justify-center min-h-[220px]"
              >
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-[#133374]">
                  {b.icon}
                </div>
                <h3 className="font-bold text-lg text-[#133374] m-0">
                  {b.title}
                </h3>
                <p className="text-xs text-[#54595F] mt-1 opacity-80">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-xl"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* 4. NUMBERED SECTIONS (BACKGROUND #F8FAFC - NO BEIGE, NO GREEN) */}
      <section className="bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* 01. Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-lg font-bold text-[#133374] block">01.</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight pb-3">
                Features
              </h2>

              <ul className="lista-check space-y-2.5 pt-2 text-sm text-[#444]">
                <li>Advanced <strong>Promotions</strong></li>
                <li>Gift card management</li>
                <li><strong>Loyalty</strong> Programs (Point cards)</li>
                <li><strong>Purchasing</strong> management</li>
                <li>Materials requisition</li>
                <li>Inventory transfers between branches</li>
                <li>Direct <strong>Bank</strong> integration</li>
                <li>Mobile airtime sales and bill payments</li>
                <li>Advanced <strong>Inventory</strong> administration</li>
                <li><strong>Multi-currency</strong> support</li>
                <li>Scales integration</li>
                <li>Integrated E-Invoicing (Electronic Billing)</li>
                <li>Inventory counting with <strong>mobile devices</strong></li>
              </ul>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md h-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <Image
                  src={industry.featureImg1}
                  alt={`${industry.name} Features`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-slate-200" />

          {/* 02. Characteristics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-md h-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <Image
                  src={industry.featureImg2}
                  alt={`${industry.name} Characteristics`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3 order-1 lg:order-2">
              <span className="text-lg font-bold text-[#133374] block">02.</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight pb-3">
                Characteristics
              </h2>

              <ul className="lista-check space-y-2.5 pt-2 text-sm text-[#444]">
                <li>Control your <strong>franchises</strong></li>
                <li>Control your income and expenses</li>
                <li>Monitor bank deposits from daily sales</li>
                <li>Audit your cashiers with cash counts</li>
                <li>Prevent cashier overcharging with blind closeouts</li>
                <li>Keep a log of user authorizations</li>
                <li>Track your lost sales</li>
                <li>Consolidate general public sales into a single invoice</li>
                <li>Control your <strong>inventory</strong></li>
                <li>Perform inventory counts by section</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-slate-200" />

          {/* 03. More Characteristics & Specific Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-lg font-bold text-[#133374] block">03.</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight pb-3">
                More Characteristics
              </h2>

              <ul className="lista-check space-y-2.5 pt-2 text-sm text-[#444]">
                <li>Request and transfer <strong>inventory</strong> between branches and SAP</li>
                <li>R1 can suggest purchase quantities based on your sales history</li>
                <li>Run promotions on specific days and times</li>
                <li>Create sales kits, combo offers, and various promotions</li>
                <li>Volume-based pricing</li>
                <li>Offer special discounts to your employees</li>
                <li>Generate discount vouchers</li>
                <li>Reward your customers with points through membership programs</li>
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <span className="text-lg font-bold text-[#133374] block">&nbsp;</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight pb-3">
                Specific modules
              </h2>

              <ul className="lista-check space-y-2.5 pt-2 text-sm text-[#444]">
                {industry.specificModules.map((mod, idx) => (
                  <li key={idx}>{mod}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER (NO TESTIMONIALS PER USER INSTRUCTION) */}
      <section className="bg-[#133374] py-20 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Schedule an Appointment
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto">
            At SoluONE, we specialize in developing Add-On applications specifically designed for the SAP Business One ERP system.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-xl"
            >
              Schedule an Appointment
            </Link>
            {industry.brochureUrl && (
              <a
                href={industry.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white text-white hover:text-[#133374] border border-white/20 backdrop-blur-xs transition-all shadow-lg group"
              >
                <Download className="w-4 h-4 text-[#E00E8B] group-hover:scale-110 transition-transform" />
                <span>Download Brochure</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
