import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetaBrain – Powered by Aramco.AI",
  description: "Explore Aramco Knowledge and World Knowledge with MetaBrain",
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
