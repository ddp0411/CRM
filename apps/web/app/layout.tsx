import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IndusFlow AI",
  description: "AI-native industrial CRM, ERP, HRMS, and operations platform."
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
