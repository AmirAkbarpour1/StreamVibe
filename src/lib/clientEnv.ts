import { createEnv } from '@t3-oss/env-core'
import * as v from 'valibot'

const clientEnv = createEnv({
  client: {
    VITE_TMDB_API_READ_TOKEN: v.pipe(v.string(), v.minLength(1)),
  },
  runtimeEnv: import.meta.env,
  clientPrefix: 'VITE_',
  emptyStringAsUndefined: true,
})

export default clientEnv
