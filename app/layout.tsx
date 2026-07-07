import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextplaysolutions.ai"),
  title: "NextPlay Solutions — Enterprise AI Strategy. Small Business Price.",
  description:
    "Find out exactly where AI can save your business time and money. Scout conducts a guided assessment and delivers a prioritized roadmap you can implement immediately.",
  openGraph: {
    title: "NextPlay Solutions",
    description: "Enterprise AI strategy. Small business price.",
    url: "https://nextplaysolutions.ai",
    siteName: "NextPlay Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
