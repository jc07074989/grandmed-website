import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrandMed | Healthcare Property & Clinical Partnerships",
  description: "GrandMed develops integrated healthcare precincts combining healthcare property, clinical partnerships and long-term platform value.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
