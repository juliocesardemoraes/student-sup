import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'prod']).default('dev'),
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
  BANK_URL: z.string(),
  CLIENT_ID: z.string(),
  CLIENT_SECRET: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables: ', _env.error.format())
  throw new Error('Invalid environment variables.')
}

export const env = _env.data
