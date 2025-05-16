'use cache'

import { unstable_cacheLife as cacheLife } from 'next/cache'
import VideoTrailer from '@/components/movies-sows/VideoTrailer'

async function page() {
  cacheLife('hours')

  return (
    <main>
      <VideoTrailer />
    </main>
  )
}

export default page
