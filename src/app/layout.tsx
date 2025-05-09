'use cache'

import type { Metadata } from 'next'
import '@/styles/variables.css'
import '@/styles/main.css'
import localFont from 'next/font/local'
import { cn } from '@/lib/cn'
import Header from '@/components/layout/Header/Header'

const manrope = localFont({
  src: [
    {
      path: '../assets/fonts/Manrope-Regular.ttf',
      weight: '400',
    },
    {
      path: '../assets/fonts/Manrope-Medium.ttf',
      weight: '500',
    },
    {
      path: '../assets/fonts/Manrope-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../assets/fonts/Manrope-Bold.ttf',
      weight: '700',
    },
  ],
  preload: true,
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Stream Vibe',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(manrope.variable)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
