import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  // adjustFontFallback: false,
  display: 'block',
})

export const metadata: Metadata = {
  title: 'Hacker PlayPix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="h-screen w-full antialiased flex flex-col bg-primary">
        {children}
      </body>
    </html>
  )
}
