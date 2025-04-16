import * as z from '@zod/mini'
import process from 'node:process'

const serverEnvSchema = z.object({
  TMDB_API_READ_TOKEN: z.string().check(z.minLength(1, 'TMDB Read Access Token (TMDB_API_READ_TOKEN) is required')),
})

const serverEnvParsed = serverEnvSchema.safeParse(process.env)

if (!serverEnvParsed.success) {
  console.error('❌ Invalid environment variables:', z.prettifyError(serverEnvParsed.error))
  throw new Error('⚠️ Invalid environment variables')
}

const serverEnv = serverEnvParsed.data

export default serverEnv
