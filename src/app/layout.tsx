import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/data/site";

import { JsonLd, getLocalBusinessSchema } from "@/lib/seo/jsonld";
import Navbar from "@/components/ui/Navbar";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${grotesk.variable}`}>
      <head>
        <JsonLd data={getLocalBusinessSchema()} />
      </head>
      <body className="bg-white font-sans text-neutral-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
