import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [375, 1440, 1920],
  },
  experimental: {
    dynamicIO: true,
  },
}

export default nextConfig
