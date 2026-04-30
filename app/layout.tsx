import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moush's Removals — Fixed-Price Furniture Removalists Melbourne",
  description:
    "Stress-free furniture removals across Melbourne and interstate. All-inclusive, fixed-price quotes. No deposit, no hidden fees. 5-star rated on Google, OneFlare and findamover.",
  icons: {
    icon: "/moush-logo.png",
    apple: "/moush-logo.png",
  },
  openGraph: {
    title: "Moush's Removals — Fixed-Price Furniture Removalists Melbourne",
    description: "Stress-free furniture removals. Fixed price. No hidden fees.",
    images: ["/moush-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#F7F0E4] text-[#2A1F1A]">{children}</body>
    </html>
  );
}