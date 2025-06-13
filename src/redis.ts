import { createClient, RedisClientType } from 'redis'

let redisClient: RedisClientType | null = null

export async function connectRedis() {
    if (!redisClient) {
        const connectionString = process.env.REDIS_URL as string

        if (!connectionString) {
            console.error("Missing REDIS_URL environment variable")
            process.exit(1)
        }

        redisClient = createClient({
            url: connectionString
        })

        redisClient.on("error", (err) => {
            console.error("Redis client error occured")
            process.exit(1)
        })

        await redisClient.connect()
    }
}

export { redisClient }
