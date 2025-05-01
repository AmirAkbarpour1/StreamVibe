import { createEnv } from '@t3-oss/env-nextjs'
import * as v from 'valibot'

const env = createEnv({
  server: { TMDB_API_READ_TOKEN: v.pipe(v.string(), v.minLength(1)) },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: {},
})

export default env
