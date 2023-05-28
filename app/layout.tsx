'use client'

import AppBar from './AppBar'
import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 Authentication</title>
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <AppBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
