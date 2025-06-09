import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.json({
        message: "Hello, World!"
    })
})

app.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${PORT} (Press CTRL+C to quit)`)
})
