import express from 'express'
import dotenv from 'dotenv'
import { setupLogger } from './logger'
import { connectDatabase } from './database'
import authRouter from './routers/auth'

setupLogger()
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(authRouter)

;(async () => {
    await connectDatabase()

    app.listen(PORT, () => {
        console.info(`Server running on port ${PORT} (Press CTRL+C to quit)`)
    })
})()
