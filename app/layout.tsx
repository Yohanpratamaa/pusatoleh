import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import ToastProvider from "@/components/ui/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toko Oleh-Oleh - Souvenir Tradisional Nusantara",
  description:
    "Toko oleh-oleh terpercaya dengan berbagai produk khas Indonesia. Keripik, dodol, kopi, batik, dan kerajinan tradisional berkualitas dengan harga terjangkau.",
  keywords:
    "oleh-oleh, souvenir, keripik, dodol, kopi, batik, kerajinan, indonesia, tradisional",
  authors: [{ name: "Toko Oleh-Oleh" }],
  openGraph: {
    title: "Toko Oleh-Oleh - Souvenir Tradisional Nusantara",
    description:
      "Toko oleh-oleh terpercaya dengan berbagai produk khas Indonesia",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <CartDrawer />
        <ToastProvider />
      </body>
    </html>
  );
}
