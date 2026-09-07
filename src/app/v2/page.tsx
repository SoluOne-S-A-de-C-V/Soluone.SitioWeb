import { HeroHUD } from "@/components/v2/HeroHUD";
import { ProductMatrix } from "@/components/v2/ProductMatrix";
import { BentoGrid } from "@/components/v2/BentoGrid";
import { IndustrySwitcher } from "@/components/v2/IndustrySwitcher";
import { SocialProofV2 } from "@/components/v2/SocialProofV2";
import { DemoConfigurator } from "@/components/v2/DemoConfigurator";

export default function V2HomePage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH INTERACTIVE POS SIMULATOR & TELEMETRY HUD */}
      <HeroHUD />

      {/* 2. DUAL-PILLAR PRODUCT MATRIX (RETAIL ONE VS INVOICE ONE) */}
      <ProductMatrix />

      {/* 3. 6-CELL ASYMMETRIC TACTILE OPERATIONS BENTO GRID */}
      <BentoGrid />

      {/* 4. SECTOR OS INTERACTIVE INDUSTRY SWITCHER (8 VERTICALS) */}
      <IndustrySwitcher />

      {/* 5. ENTERPRISE SOCIAL PROOF & VERIFIED CLIENT TRUST */}
      <SocialProofV2 />

      {/* 6. GUIDED ARCHITECTURE & 3-STEP DEMO CONFIGURATOR */}
      <DemoConfigurator />
    </div>
  );
}
