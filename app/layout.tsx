import React from "react"
import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Using Oswald as a fallback for Organetto Semi Ext (extended, condensed display font)
const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Using Inter as a fallback for Gilroy (clean, modern sans-serif)
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Replay Life',
  description: 'От императорской истории до футуристических мегаполисов — без спешки и суеты. Пекин → Гуанчжоу → Шанхай, 4–17 марта 2026',
  generator: 'v0.app',
  icons: {
    icon: '/images/replay-life-logo-vert-transp.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
