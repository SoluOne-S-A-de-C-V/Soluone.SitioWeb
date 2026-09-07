"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, ArrowRight, X, Layers } from "lucide-react";

export function VersionSwitcherBanner({ currentVersion }: { currentVersion?: "v1" | "v2" }) {
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  const isV2 = currentVersion ? currentVersion === "v2" : pathname?.startsWith("/v2");

  if (dismissed) return null;

  return (
    <aside aria-label="Version preview switcher" className="bg-[#08142C] border-b border-white/10 text-white text-xs py-2 px-4 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-[#E00E8B]/20 text-[#E00E8B] border border-[#E00E8B]/40">
            <Sparkles className="w-3 h-3 animate-pulse" />
            Client Presentation Mode
          </span>
          <span className="text-slate-300 hidden sm:inline">
            {isV2 ? (
              <>
                Viewing <strong className="text-white">Option 2 (2026 Next-Gen UX/UI Redesign)</strong>
              </>
            ) : (
              <>
                Viewing <strong className="text-white">Option 1 (Classic Elementor Replica)</strong>
              </>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {isV2 ? (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold text-[11px] bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <Layers className="w-3 h-3 text-slate-300" />
              <span>Switch to Option 1 (Classic)</span>
            </Link>
          ) : (
            <Link
              href="/v2"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold text-[11px] bg-[#E00E8B] hover:bg-[#C20977] text-white shadow-sm transition-all"
            >
              <Sparkles className="w-3 h-3" />
              <span>Switch to Option 2 (2026 Edition)</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}

          <button
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
            title="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
