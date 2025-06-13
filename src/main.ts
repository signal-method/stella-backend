import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { setupLogger } from './logger'
import { connectDB } from './database'
import { connectRedis } from './redis'
import { authRouter } from './routers/auth'

setupLogger()

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

app.use("/auth", authRouter)

;(async () => {
    await connectDB()
    await connectRedis()

    app.listen(port, () => {
        console.info(`Listening on http://127.0.0.1:${port} (Press CTRL+C to quit)`)
    })
})()
