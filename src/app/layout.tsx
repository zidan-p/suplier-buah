import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  title: "Supplier Buah Lokal dan Impor ",
  description: "Menyediakan berbagai buah lokal dan impor",
  
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
