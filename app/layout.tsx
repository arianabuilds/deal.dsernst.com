import type { Metadata } from 'next'

import './globals.css'
import { description, title } from './constants'
import { SiteHeader } from './SiteHeader'

export const metadata: Metadata = { description, title }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="en">
      <body className="antialiased">
        <div
          className="min-h-screen p-8 pt-4 flex flex-col items-center justify-center text-center"
          style={{ minHeight: '100dvh' }} // ignore iOS bottom bar
        >
          <SiteHeader />

          {/* Content */}
          {children}
        </div>
      </body>
    </html>
  )
}
