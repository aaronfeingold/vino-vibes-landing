import type React from "react";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const TITLE = "Vino Vibes: the wine list, simplified";
const DESCRIPTION =
  "Snap the wine list, say what you're eating, and get one bottle from it, with a reason that's about you, before your server comes back.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vinovibes.ai"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "wine app",
    "AI sommelier",
    "wine pairing",
    "restaurant wine list",
    "wine near me",
    "best wine bars near me",
    "iPhone wine app",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://vinovibes.ai",
    siteName: "Vino Vibes",
    images: [
      {
        url: "/vv-down-the-drain-128x128.gif",
        width: 128,
        height: 128,
        alt: "Vino Vibes, the wine list simplified",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/vv-down-the-drain-128x128.gif"],
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "128x128",
      url: "/favicon.png",
    },
    {
      rel: "shortcut icon",
      url: "/favicon.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon.png",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0E080E",
  userScalable: true,
  // Prevent auto-zoom on input focus
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="bg-vv-page font-sans text-vv-text antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
