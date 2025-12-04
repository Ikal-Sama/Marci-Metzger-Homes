import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marci Metzger Homes",
  description:
    "Curated properties and personalized service for discerning clients seeking exceptional homes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
