import type { Metadata } from "next";
import "./globals.css";
import { trap } from "@/public/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | QuikHyr",
    default: "QuikHyr",
  },
  keywords: "QuikHyr, Jobs, Local, Workers, Skilled, Labour, Hire",
  description: "Hiring local skilled labour quickly.",
  creator: "QuikHyr Team",
  openGraph: {
    title: "QuikHyr",
    description: "Hiring local skilled labour quickly.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/quikhyr-icon.svg" />
      </head>

      <body className={`${trap.variable} antialiased`}>{children}</body>
    </html>
  );
}
