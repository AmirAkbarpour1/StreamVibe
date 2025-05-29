'use cache'

import '@/styles/variables.css'
import '@/styles/main.css'
import localFont from 'next/font/local'
import cn from '@/utils/cn'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/footer/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import { Suspense } from 'react'
import Loading from '@/components/common/Loading'

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

export const metadata = {
  title: {
    default: 'StreamVibe',
    template: '%s - StreamVibe',
  },
  description:
    'StreamVibe - Your ultimate destination for streaming movies, TV shows, and exclusive originals! Dive into a world of endless entertainment with our vast library of blockbuster hits, binge-worthy series, and curated playlists. Enjoy seamless streaming in HD, personalized recommendations, and offline viewing on any device. Join StreamVibe today and vibe with your favorite stories anytime, anywhere!',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
  },
}

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(manrope.variable)}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

export default RootLayout
