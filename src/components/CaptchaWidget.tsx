"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Loader2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CaptchaWidgetProps {
  verified: boolean;
  onVerify: (verified: boolean) => void;
  dark?: boolean;
}

export function CaptchaWidget({ verified, onVerify, dark = false }: CaptchaWidgetProps) {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleCheck = () => {
    if (verified || loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onVerify(true);
    }, 700);
  };

  return (
    <div
      className={`rounded-2xl border p-3.5 flex items-center justify-between transition-all select-none max-w-sm ${
        dark
          ? "bg-slate-900 border-slate-700 text-white"
          : "bg-slate-50 border-slate-200 text-slate-800"
      }`}
    >
      <div className="flex items-center gap-3.5">
        <button
          type="button"
          onClick={handleCheck}
          disabled={verified || loading}
          className={`w-7 h-7 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
            verified
              ? "bg-green-600 border-green-600 text-white"
              : dark
              ? "bg-slate-800 border-slate-600 hover:border-slate-400"
              : "bg-white border-slate-300 hover:border-slate-400"
          }`}
          aria-label={t("I'm not a robot", "No soy un robot")}
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin text-[#E00E8B]" />
          ) : verified ? (
            <Check className="w-5 h-5 stroke-[3]" />
          ) : null}
        </button>

        <span
          onClick={handleCheck}
          className="text-xs sm:text-sm font-medium cursor-pointer"
        >
          {t("I'm not a robot", "No soy un robot")}
        </span>
      </div>

      <div className="flex flex-col items-center justify-center pl-4 border-l border-slate-200/50 dark:border-slate-700/50 text-[10px] text-slate-400">
        <div className="w-6 h-6 relative mb-0.5 opacity-80">
          <svg viewBox="0 0 48 48" className="w-full h-full fill-[#4285F4]">
            <path d="M44 24c0 11.05-8.95 20-20 20S4 35.05 4 24 12.95 4 24 4s20 8.95 20 20z" fill="#E8F0FE"/>
            <path d="M24 8v16l12-8-12-8z" fill="#4285F4"/>
            <path d="M24 40V24l-12 8 12 8z" fill="#34A853"/>
            <path d="M8 24h16L12 12 8 24z" fill="#FBBC05"/>
            <path d="M40 24H24l12 12 4-12z" fill="#EA4335"/>
          </svg>
        </div>
        <span className="font-semibold text-[9px] leading-none text-slate-400 dark:text-slate-300">reCAPTCHA</span>
        <span className="text-[8px] text-slate-400">Privacy - Terms</span>
      </div>
    </div>
  );
}
