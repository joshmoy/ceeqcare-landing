import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareSight AI | Operational Risk Intelligence for Domiciliary Care",
  description:
    "CareSight AI helps domiciliary care agencies reduce missed visits, detect workforce risk early, and prepare for CQC inspections with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
