import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InvoiceOne | Electronic Invoicing & Accounting for SAP Business One",
  description:
    "InvoiceOne is an electronic invoicing and accounting Add-On for SAP Business One that complies with Mexican SAT regulations (CFDI 4.0) and international e-billing standards.",
};

export default function InvoiceOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
