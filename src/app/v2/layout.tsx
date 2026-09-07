import { HeaderV2 } from "@/components/v2/HeaderV2";
import { FooterV2 } from "@/components/v2/FooterV2";
import { VersionSwitcherBanner } from "@/components/VersionSwitcherBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SoluOne 2026 | Store Operations Platform for SAP Business One",
  description:
    "Next-Gen 2026 retail architecture: offline-resilient point of sale, mobile handheld warehouse inventory, and automated SAT CFDI 4.0 invoicing certified for SAP Business One.",
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#133374] selection:bg-[#E00E8B] selection:text-white">
      <VersionSwitcherBanner currentVersion="v2" />
      <HeaderV2 />
      <main className="flex-1">{children}</main>
      <FooterV2 />
    </div>
  );
}
