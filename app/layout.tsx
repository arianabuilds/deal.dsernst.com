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
        <div className="min-h-dvh p-8 pt-4 flex flex-col items-center text-center">
          <div className="my-auto flex w-full flex-col items-center gap-6">
            <SiteHeader />

            {/* Content */}
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
