# SoluONE Web Platform — Developer & AI Guide (Claude / Cursor)

This repository contains the official website for **SoluONE, S.A. de C.V.**, built with Next.js 15 (App Router), React 19, Tailwind CSS, and Framer Motion.

---

## 🛠️ Commands

- **Development server:** `npm run dev` (starts on `http://localhost:3000`)
- **Production build test:** `npm run build` (MUST pass with 0 errors before committing)
- **Production preview:** `npm start`

---

## 🌐 Bilingual Architecture (i18n)

The site defaults to **100% English** with instant dynamic switching to **Spanish** via client-side context (`localStorage` persistence).

### How to use translations in components:
```tsx
"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function MyComponent() {
  const { language, t } = useLanguage();

  return (
    <div>
      {/* Dynamic text: t(English, Spanish) */}
      <h1>{t("Retail Operating System", "Sistema Operativo Retail")}</h1>

      {/* Dynamic image: swap between EN and ES assets */}
      <img
        src={language === "en" ? "/images/features_orders_en.jpg" : "/images/features_orders_es.png"}
        alt={t("Orders Management", "Gestión de Pedidos")}
      />
    </div>
  );
}
```

> **CRITICAL RULE:** Any new component, copy, feature card, or section MUST be provided in both languages using `t(en, es)`. Never hardcode purely Spanish text into templates.

---

## 🏷️ Brand & Product Naming Rules

1. **Brand Names (Strict PascalCase):**
   - ✅ `SoluONE` (not Soluone or SOLUONE in titles)
   - ✅ `InvoiceOne` (not Invoice One or invoiceone)
   - ✅ `RetailOne` (not Retail One)
   - ✅ `Voi+` (not VOI or Voi Plus)

2. **Official Product Suite Order:**
   Across comparison cards, navigation, and landing sections, always maintain the unified hierarchy:
   1. **InvoiceOne**
   2. **RetailOne**
   3. **Voi+**

3. **Global Verified Metrics:**
   - Registers / Cajas: **8,000+**
   - Countries / Países: **15+**

---

## 📂 Key Project Directories & Files

- **`src/context/LanguageContext.tsx`**: Manages global language state (`'en' | 'es'`).
- **`src/data/siteConfig.ts`**: Global stats, official contact emails, phone numbers, and social media handles (LinkedIn, Instagram, YouTube, X).
- **`src/data/industries.ts`**: Industries catalog (Bakery, Fashion, Supermarkets, Electronics, etc.) with bilingual slugs and data.
- **`src/components/Header.tsx`**: Main navigation, mobile drawer, and `[ EN | ES ]` switcher.
- **`src/components/Footer.tsx`**: Global footer with compliance, products, legal, and social links.
- **`src/components/RegionalCompliance.tsx`**: Tax & fiscal compliance cards (SAT 🇲🇽, DGI 🇵🇦, DIAN 🇨🇴, Central America).
- **`src/components/IntegrationsCatalog.tsx`**: Integration ecosystem directory (SAP, Oracle, Banamex, Hey Banco, Global Payments).
- **`src/components/CaptchaWidget.tsx`**: Interactive math security challenge for lead capture and demo forms.
- **`src/components/ImageLightboxModal.tsx`**: Full-screen HD lightbox for architecture and solution diagrams.
- **`src/app/page.tsx`**: Main landing page (Hero with dynamic carousels, Features, Ecosystem, Compliance).
- **`src/app/ecosystem/page.tsx`**: Full solution diagram, architecture view, and enterprise demo booking.
- **`src/app/pageproductsdetail/`**: Individual product detail pages (`invoice-one`, `retail-one`).

---

## ⚠️ Pre-Commit Verification Checklist

Whenever you make any change using AI:
1. Always preserve the `t(en, es)` pattern for text.
2. If changing hero slides or feature images, verify both English and Spanish image paths exist in `public/images/`.
3. Run `npm run build` locally. If there are any TypeScript or lint errors, resolve them before committing.
