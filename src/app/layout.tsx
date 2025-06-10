import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vino Vibes AI",
  description: "SIP and vibe with Vino Vibes AI",
  generator: "v0.dev",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
