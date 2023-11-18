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
      <body className="h-screen max-w-lg antialiased flex flex-col m-auto bg-primary">
        {children}
      </body>
    </html>
  )
}
