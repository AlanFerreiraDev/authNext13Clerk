import 'dotenv/config'

import fastify from 'fastify'
import { privateRoutes } from './private'

const app = fastify()

app.get('/public', () => {
  return {
    message:
      "Hello from a public endpoint! You don't need to be authenticated to see this.",
  }
})

app.register(privateRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server is runnning on port 3333!')
})
