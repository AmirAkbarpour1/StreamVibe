import { defineConfig } from '@tanstack/react-start/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
    ],
  },
  server: {
    routeRules: {
      '/_build/assets/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=1800, immutable',
        },
      },
    },
    compressPublicAssets: true,
    preset: 'node-server',
  },
})
