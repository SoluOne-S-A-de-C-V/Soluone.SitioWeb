"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VersionSwitcherBanner } from "@/components/VersionSwitcherBanner";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isV2 = pathname?.startsWith("/v2");

  if (isV2) {
    // Option 2 handles its own HeaderV2, FooterV2 and VersionSwitcherBanner in src/app/v2/layout.tsx
    return <>{children}</>;
  }

  return (
    <>
      <VersionSwitcherBanner currentVersion="v1" />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
