import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SourceCapture from "@/components/SourceCapture";
import { ORGANIZATION_JSONLD } from "@/lib/offer";

const archivo = Archivo({
  variable: "--np-font",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--np-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextplaysolutions.ai"),
  title: {
    default: "NextPlay Solutions — Your unfair AI advantage",
    template: "%s — NextPlay Solutions",
  },
  description:
    "An AI readiness assessment for small and mid-sized businesses. Seven areas of your business reviewed in 25 minutes, and a report naming the tools, the real costs, and the order to do them in.",
  openGraph: {
    title: "NextPlay Solutions — Your unfair AI advantage",
    description:
      "Seven areas of your business reviewed in 25 minutes. A report naming the tools, the real costs, and the order to do them in.",
    url: "https://nextplaysolutions.ai",
    siteName: "NextPlay Solutions",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {/* Machine-readable description of the organization. Kept in sync with
            /lib/offer.ts so agents, crawlers and humans read the same offer. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSONLD),
          }}
        />
        {/* Records ?src= from tracked outreach links. Renders nothing. */}
        <SourceCapture />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Chat appears only once ANTHROPIC_API_KEY is set in Vercel — same
            pattern as testimonials: nothing renders until it actually works. */}
        {process.env.ANTHROPIC_API_KEY ? <ChatWidget /> : null}
      </body>
    </html>
  );
}
