import express from 'express'
import dotenv from 'dotenv'
import router from './routes'
import { connect } from './database'

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())
app.use('', router)

;(async () => {
    await connect()

    app.listen(PORT, () => {
        console.log(`Listening on http://127.0.0.1:${PORT} (Press CTRL+C to quit)`)
    })
})()
