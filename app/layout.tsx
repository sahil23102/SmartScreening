import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Candidate Screening",
  description:
    "Transparent and explainable candidate screening system"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}