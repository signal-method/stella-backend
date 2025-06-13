import { createClient, RedisClientType } from 'redis'

let redis: RedisClientType | null = null

export async function connectRedis() {
    if (!redis) {
        const connectionString = process.env.REDIS_URL as string

        if (!connectionString) {
            console.error("Missing REDIS_URL environment variable")
            process.exit(1)
        }

        redis = createClient({
            url: connectionString
        })

        redis.on("error", (err) => {
            console.error("Redis client error occured")
            process.exit(1)
        })

        await redis.connect()
    }
}

export function getRedis() {
    if (!redis) {
        throw new Error("Redis not initialized yet")
    }

    return redis
}
