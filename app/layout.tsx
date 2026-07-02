import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { tourConfig } from "@/lib/tour-config"

export const metadata: Metadata = {
  title: `${tourConfig.title} | Replay Life`,
  description: `${tourConfig.subtitle}. ${tourConfig.route.display}, ${tourConfig.dates.display}. Современный Китай, городская культура, кухня и вечерняя программа в комфортном темпе.`,
  generator: 'v0.app',
  openGraph: {
    title: `${tourConfig.title} | Replay Life`,
    description: `${tourConfig.route.display}, ${tourConfig.dates.display}. Групповое путешествие по современному Китаю в комфортном темпе.`,
    type: 'website',
    locale: 'ru_RU',
  },
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
