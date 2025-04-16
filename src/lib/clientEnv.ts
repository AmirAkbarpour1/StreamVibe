import * as z from '@zod/mini'

const clientEnvSchema = z.object({})

const clientEnvParsed = clientEnvSchema.safeParse(import.meta.env)

if (!clientEnvParsed.success) {
  console.error('❌ Invalid environment variables:', z.prettifyError(clientEnvParsed.error))
  throw new Error('⚠️ Invalid environment variables')
}

const clientEnv = clientEnvParsed.data

export default clientEnv
