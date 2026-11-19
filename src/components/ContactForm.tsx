"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Building, User, AtSign, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { CaptchaWidget } from "@/components/CaptchaWidget";

export function ContactForm({ defaultIndustry }: { defaultIndustry?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: defaultIndustry || "general",
    message: "",
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      setStatus("error");
      setErrorMessage("Please complete the Captcha verification before submitting.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
      {status === "success" ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-[#FFE3F4] text-[#E00E8B] rounded-full flex items-center justify-center mx-auto border border-[#E00E8B]/40">
            <CheckCircle2 className="w-8 h-8 text-[#E00E8B]" />
          </div>
          <h3 className="text-2xl font-bold text-[#133374]">Request Received!</h3>
          <p className="text-[#54595F] max-w-md mx-auto text-sm leading-relaxed">
            Thank you for your interest in <strong>Retail One</strong>. A senior SAP Business One consultant from our enterprise team will reach out to you shortly.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  industry: "general",
                  message: "",
                });
              }}
              className="text-sm font-bold text-[#133374] hover:text-[#E00E8B] underline"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-[#133374]">
              Request a demo
            </h3>
            <p className="text-sm text-[#54595F] mt-1">
              Fill out the form and we will demonstrate how Retail One connects natively in real-time with SAP Business One.
            </p>
          </div>

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-[#133374] uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Smith"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#133374] focus:bg-white transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-bold text-[#133374] uppercase tracking-wider mb-2">
                Company *
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Retail Corp"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#133374] focus:bg-white transition-all text-slate-900"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-[#133374] uppercase tracking-wider mb-2">
                Work Email *
              </label>
              <div className="relative">
                <AtSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#133374] focus:bg-white transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-[#133374] uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#133374] focus:bg-white transition-all text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* Industry Select */}
          <div>
            <label className="block text-xs font-bold text-[#133374] uppercase tracking-wider mb-2">
              Industry Sector
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#133374] focus:bg-white transition-all text-slate-900"
            >
              <option value="general">Select an industry</option>
              <option value="autoparts">Autoparts</option>
              <option value="pastry-shops-and-ice-cream-parlors">Pastry Shops and Ice Cream Parlors</option>
              <option value="hardware">Hardware and Building Materials</option>
              <option value="wines-and-spirits">Wines and Spirits</option>
              <option value="fashion-and-footwear">Fashion and Footwear</option>
              <option value="groceries">Groceries</option>
              <option value="electronics">Electronics</option>
              <option value="restaurants">Restaurants</option>
              <option value="other">Other retail sector</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-[#133374] uppercase tracking-wider mb-2">
              Message or Requirements
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about how many branches you operate or your SAP Business One setup..."
                className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#133374] focus:bg-white transition-all text-slate-900"
              ></textarea>
            </div>
          </div>

          {/* Captcha Verification */}
          <div className="pt-1">
            <CaptchaWidget
              verified={captchaVerified}
              onVerify={setCaptchaVerified}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm bg-[#E00E8B] text-white hover:bg-[#133374] active:scale-99 transition-all shadow-md cursor-pointer disabled:opacity-50"
          >
            {status === "submitting" ? (
              "Submitting..."
            ) : (
              <>
                <Send className="w-4 h-4" />
                Request a demo
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
