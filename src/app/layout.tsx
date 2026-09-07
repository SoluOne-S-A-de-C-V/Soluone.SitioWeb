import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/LayoutShell";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soluone.com"),
  title: "SoluOne | Store Operation Platform for SAP Business One",
  description:
    "Retail One is a point-of-sale system with great adaptability and configuration capabilities to meet the needs of your business.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "300x300", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#133374]">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
