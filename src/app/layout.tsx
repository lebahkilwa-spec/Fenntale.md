import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FENNTEL | Luxury Store",
  description: "Coffee, Music, and Books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-black">{children}</body>
    </html>
  );
}

