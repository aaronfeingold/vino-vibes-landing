import type React from "react";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Vino Vibes AI",
  description: "Sip with Vino Vibes AI",
  openGraph: {
    title: "Vino Vibes AI",
    description: "Sip with Vino Vibes AI",
    url: "https://vinovibes.ai",
    siteName: "Vino Vibes AI",
    images: [
      {
        url: "/vv-down-the-drain-128x128.gif",
        width: 128,
        height: 128,
        alt: "Vino Vibes AI - Your Sommelier in Pocket",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vino Vibes AI",
    description: "Sip with Vino Vibes AI",
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${poppins.className}`}>
        {" "}
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
