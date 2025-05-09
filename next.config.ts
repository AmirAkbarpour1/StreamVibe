import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [375, 1440, 1920],
    remotePatterns: [new URL('https://image.tmdb.org/t/p/**')],
  },
  experimental: {
    dynamicIO: true,
    reactCompiler: true,
  },
}

export default nextConfig
