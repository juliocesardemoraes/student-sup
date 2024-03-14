import fastify from 'fastify'
import { env } from './env'
import { boletoRoutes } from './controllers/boletos/routes'
import { ZodError } from 'zod'
import fs from 'node:fs'

export const server = fastify({
  https: {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
  },
})

// ROUTES
server.register(boletoRoutes)

// ERROR HANDLER
server.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({ error: error.message })
  }

  return reply
    .status(500)
    .send({ message: 'Internal error', error: error.message })
})

server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server listening on ${env.PORT}`)
  })
