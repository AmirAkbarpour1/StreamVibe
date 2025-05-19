'use cache'

import { unstable_cacheLife as cacheLife } from 'next/cache'
import VideoTrailer from '@/components/movies-sows/VideoTrailer'

export const metadata = {
  title: 'Movies & Shows',
  description:
    'Discover a world of entertainment with StreamVibe\'s Movies & Shows! Stream blockbuster films, binge-worthy series, and exclusive originals in HD. Find your next favorite story today!',
}

async function page() {
  cacheLife('hours')

  return (
    <main>
      <VideoTrailer />
    </main>
  )
}

export default page
