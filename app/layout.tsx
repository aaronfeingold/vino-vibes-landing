import type { Metadata } from 'next'
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Vino Vibes - Wine Experience Landing",
  description: "Discover amazing wine experiences with Vino Vibes",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
