"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FeaturesTabs } from "@/components/FeaturesTabs";
import { StatsCounter } from "@/components/StatsCounter";
import { industriesList } from "@/data/industries";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Globe,
  Layers,
  ArrowUpRight,
  Store,
  ChevronLeft,
  ChevronRight,
  Quote,
  Check,
  Banknote,
} from "lucide-react";

const heroSlides = [
  {
    image: "/images/Screenshot_6.png",
    title: "Web Reports & Executive Dashboard",
  },
  {
    image: "/images/Screenshot_5.png",
    title: "DeliveryOne & Retail Operations",
  },
  {
    image: "/images/Screenshot_4-1.png",
    title: "Sales & POS Terminal Flow",
  },
  {
    image: "/images/Voi-4.jpg",
    title: "Retail One SAP Interface",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="space-y-0 bg-white">
      {/* 1. HERO BANNER - Matching user's screenshot with Dashboard */}
      <section className="relative overflow-hidden bg-[#133374] text-white pt-10 pb-20 sm:pt-14 sm:pb-24">
        {/* Radial lighting glow centered behind title & mockup */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#29A1F2]/25 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            <span className="text-[#E00E8B]">Store Operation</span> Platform
            <br className="hidden sm:inline" />{" "}
            for SAP Business One
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-normal">
            Retail One is a point-of-sale system with great adaptability and configuration capabilities to meet the needs of your business.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-xl font-bold text-base bg-white text-[#133374] hover:text-[#E00E8B] shadow-xl hover:shadow-2xl active:scale-98 transition-all"
            >
              Request a demo
            </Link>
          </div>

          {/* Dashboard Preview Mockup (Image 1 from user) */}
          <div className="pt-8 max-w-5xl mx-auto relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white p-1">
              <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[540px]">
                <Image
                  src={heroSlides[currentSlide].image}
                  alt={heroSlides[currentSlide].title}
                  fill
                  className="object-contain object-top"
                  priority
                />
              </div>
            </div>

            {/* Slider arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel dots */}
            <div className="flex justify-center gap-2 mt-5">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentSlide ? "w-8 bg-[#E00E8B]" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <StatsCounter />

      {/* 3. MEET OUR PRODUCTS (Image 2 from user) */}
      <section id="products" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#133374] tracking-tight">
              Meet our <span className="text-[#E00E8B]">products</span>
            </h2>
            <p className="text-[#54595F] text-base sm:text-lg leading-relaxed">
              At SoluOne, we strive to create products that improve productivity and facilitate the user experience with SAP Business One.
            </p>
          </div>

          {/* 2 Side-by-side Product Cards Container */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Card 1: Retail One */}
            <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#133374]">
                    Retail One
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E00E8B]/15 text-[#E00E8B]">
                    Popular
                  </span>
                </div>

                <p className="text-sm text-[#54595F] leading-relaxed">
                  Retail One is a point of sale system designed and developed for the SAP Business One ERP, which gives us a perfect integration between both systems.
                </p>

                <div className="pt-2">
                  <Link
                    href="/pageproductsdetail/retail-one"
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-[#133374] transition-colors shadow-md text-center"
                  >
                    Schedule an Appointment
                  </Link>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#133374]">
                    Key features:
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#444]">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>Real-time tracking and notifications</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>Real-time analytics</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>Drag and drop templates</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>Project Management</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>24/7 email and chat support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/pageproductsdetail/retail-one"
                  className="text-xs font-bold text-[#133374] hover:text-[#E00E8B] flex items-center gap-1"
                >
                  Learn more about Retail One <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Invoice One */}
            <div className="p-8 sm:p-12 bg-slate-50 flex flex-col justify-between space-y-6 relative">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#133374]">
                  Invoice One
                </h3>

                <p className="text-sm text-[#54595F] leading-relaxed">
                  Invoice One is an electronic invoicing and accounting add-on that helps you comply with Mexican tax regulations. Let us handle your electronic invoicing and accounting.
                </p>

                <div className="pt-2 space-y-2">
                  <Link
                    href="/pageproductsdetail/invoice-one"
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-[#133374] transition-colors shadow-md text-center"
                  >
                    Schedule an Appointment
                  </Link>
                  <p className="text-center text-xs text-slate-500">
                    No credit card required
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#133374]">
                    Everything in Essentials, plus:
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#444]">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>CRM and Zapier integrations</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>Content reporting</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>Unlimited team workspaces</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>Approval workflows</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#E00E8B] shrink-0" />
                      <span>Salesforce integration*</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <Link
                  href="/pageproductsdetail/invoice-one"
                  className="text-xs font-bold text-[#133374] hover:text-[#E00E8B] flex items-center gap-1"
                >
                  Learn more about Invoice One <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Banknote className="w-8 h-8 text-slate-400 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES TABS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
              Main Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
              Designed to optimize every stage of your retail operations
            </h2>
            <p className="text-[#54595F] text-base leading-relaxed">
              Explore the modules of Retail One specifically tailored for seamless point-of-sale execution.
            </p>
          </div>

          <FeaturesTabs />
        </div>
      </section>

      {/* 5. WEB REPORTS & ANALYTICS SECTION */}
      <section className="py-20 bg-[#133374] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E00E8B]/20 text-[#FFC8E9] border border-[#E00E8B]/30">
                <BarChart3 className="w-3.5 h-3.5" />
                Reliable Architecture & Web Reports
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                We centralize your entire operation on a single platform
              </h2>

              <p className="text-slate-200 leading-relaxed text-base">
                With our web reports, you can manage your business with optimal reports and indicators. Can’t find the report you need? No problem, you can also create your own web reports and control access through user permissions and roles.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E00E8B] flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <span>Real-time visibility of sales, gross margins, and store register cuts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E00E8B] flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <span>Customizable web query generator governed by roles and permissions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E00E8B] flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <span>Direct live integration with SAP Business One SQL and HANA tables</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-md"
                >
                  Schedule an Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white p-2">
                <div className="relative w-full h-80 sm:h-96">
                  <Image
                    src="/images/Screenshot_6.png"
                    alt="SoluOne Web Reports Dashboard"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES GRID */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-[#E9F4FF] px-3.5 py-1.5 rounded-full">
                Industries
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
                Solutions Tailored to Your Industry
              </h2>
              <p className="text-[#54595F] text-base max-w-2xl">
                Discover how Retail One resolves checkout, inventory, and purchasing flows specific to your vertical.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#133374] hover:text-[#E00E8B] transition-colors"
            >
              View all industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((ind) => (
              <Link
                key={ind.slug}
                href={`/${ind.slug}`}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#133374] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={ind.heroImage}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs border border-white/20">
                    {ind.name}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-[#54595F] line-clamp-3 leading-relaxed">
                    {ind.industryDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#133374] group-hover:text-[#E00E8B]">
                    <span>Explore solution</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E00E8B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF & TESTIMONIALS (HOME ONLY) */}
      <section id="customers" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#133374] bg-white border border-slate-200 px-3.5 py-1.5 rounded-full">
              Customers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#133374] tracking-tight">
              Some clients feedbacks
            </h2>
            <p className="text-[#54595F] text-base">
              Leading businesses that coordinate their retail store operations with Retail One and SAP Business One.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm relative">
              <Quote className="w-8 h-8 text-[#E00E8B]/40" />
              <p className="text-sm text-[#444] leading-relaxed italic">
                “We’re looking for people who share our vision! Most of our time used to be taken up by administrative work, whereas now we can focus on building out to help our employees.”
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-[#133374]">Mark Zellers</p>
                <p className="text-xs text-[#54595F]">CEO, Co-Founder</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm relative">
              <Quote className="w-8 h-8 text-[#E00E8B]/40" />
              <p className="text-sm text-[#444] leading-relaxed italic">
                “This powerful tool eliminates the need to leave Salesforce or SAP to get things done as I can create a custom proposal with dynamic pricing tables and get approval fast.”
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-[#133374]">Natalia Larsson</p>
                <p className="text-xs text-[#54595F]">Director of Sales</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm relative">
              <Quote className="w-8 h-8 text-[#E00E8B]/40" />
              <p className="text-sm text-[#444] leading-relaxed italic">
                “We operate retail branches and the direct integration with SAP Business One without intermediate interfaces keeps our inventories and sales in sync.”
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-[#133374]">Sarah Edrissi</p>
                <p className="text-xs text-[#54595F]">Lead Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <section className="py-20 bg-[#133374] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Schedule an Appointment
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed">
            At SoluONE, we specialize in developing Add-On applications specifically designed for the SAP Business One ERP system.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-base bg-[#E00E8B] text-white hover:bg-white hover:text-[#E00E8B] transition-all shadow-xl"
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
