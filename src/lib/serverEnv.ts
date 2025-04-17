import { createEnv } from '@t3-oss/env-core'
import process from 'node:process'

const serverEnv = createEnv({
  server: {},
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})

export default serverEnv
