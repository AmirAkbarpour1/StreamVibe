import { createEnv } from '@t3-oss/env-core'
import * as z from '@zod/mini'

const clientEnv = createEnv({
  client: {
    VITE_TMDB_API_READ_TOKEN: z.string().check(z.minLength(1)),
  },
  runtimeEnv: import.meta.env,
  clientPrefix: 'VITE_',
  emptyStringAsUndefined: true,
})

export default clientEnv
