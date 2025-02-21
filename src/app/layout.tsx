import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  viewport: { width: "device-width", initialScale: 1 },
  title: "Supplier Buah Lokal dan Impor ",
  description: "Menyediakan berbagai buah lokal dan impor",
  openGraph: {
    type: "website",
    title: "Supplier Buah Lokal dan Impor ",
    description: "supplier buah lokal dan impor",
  },
  keywords: [
    "buah", "lokal", "impor", "banyuwangi", "local", "indonesia", "terpercaya"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
