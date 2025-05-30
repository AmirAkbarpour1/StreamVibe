'use cache'

import { unstable_cacheLife as cacheLife } from 'next/cache'
import HeroSection from '@/components/home/HeroSection'
import Categories from '@/components/home/Categories'
import Devices from '@/components/home/Devices'
import FAQ from '@/components/home/FAQ'
import Pricing from '@/components/home/Pricing'
import CTA from '@/components/home/CTA'

export default async function Home() {
  cacheLife('hours')

  return (
    <main>
      <HeroSection />
      <Categories />
      <Devices />
      <FAQ />
      <Pricing />
      <CTA />
    </main>
  )
}
