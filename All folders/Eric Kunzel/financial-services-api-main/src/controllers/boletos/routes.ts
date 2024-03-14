import { FastifyInstance } from 'fastify'
import { getToken } from './getToken'

export const boletoRoutes = async (app: FastifyInstance) => {
  app.get('/token/:scope', getToken)
}
