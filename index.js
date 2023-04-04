require('dotenv').config()
const { initDatabase } = require('./src/database')

const fastify = require('fastify')({
    logger: true
})

// Declare a route
fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: 3000 }, async (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}

    await initDatabase()
})