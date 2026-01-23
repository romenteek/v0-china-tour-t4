import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
