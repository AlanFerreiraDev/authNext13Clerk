import { clerkClient, clerkPlugin, getAuth } from '@clerk/fastify'
import { FastifyInstance } from 'fastify'

export async function privateRoutes(app: FastifyInstance) {
  await app.register(clerkPlugin)

  app.get('/private', async (request, reply) => {
    const { userId } = getAuth(request)

    if (!userId) {
      return reply.code(403).send({
        error: 'You must be logged in to see this.',
      })
    }

    const user = await clerkClient.users.getUser(userId)

    return user
  })
}
