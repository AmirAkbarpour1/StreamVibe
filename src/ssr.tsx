import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server'
import { getRouterManifest } from '@tanstack/react-start/router-manifest'

import { createRouter } from '@/router'

const StartHandler = createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler)

export default StartHandler
