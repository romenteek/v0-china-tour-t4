import React from "react"
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Organetto Semi Ext - Brand heading font
const organetto = localFont({
  src: [
    {
      path: '../fonts/organetto-regular-semiext.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/organetto-bold-semiext.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
});

// Gilroy - Brand body font
const gilroy = localFont({
  src: [
    {
      path: '../fonts/gilroy-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy-semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/gilroy-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Replay Life',
  description: 'От императорской истории до футуристических мегаполисов — без спешки и суеты. Пекин → Гуанчжоу → Шанхай, 4–17 марта 2026',
  generator: 'v0.app',
  icons: {
    icon: '/favicon-96x96.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${gilroy.variable} ${organetto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
