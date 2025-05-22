import type { NextConfig } from 'next'
import withPlaiceholder from '@plaiceholder/next'

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [375, 768, 1440, 1920],
    remotePatterns: [new URL('https://image.tmdb.org/t/p/**')],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeDimensions',
                    active: true,
                  },
                ],
              },
            },
          },
        ],
        as: '*.js',
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeDimensions',
                  active: true,
                },
              ],
            },
          },
        },
      ],
    })

    return config
  },
  experimental: {
    dynamicIO: true,
    reactCompiler: true,
    optimizePackageImports: [
      '@heroicons/react/24/solid',
      '@heroicons/react/24/outline',
    ],
  },
}

export default withPlaiceholder(nextConfig)
