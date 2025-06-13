import { Router } from 'express'

const authRouter = Router()

authRouter.post("/login", (req, res) => {
    // TODO
})

authRouter.post("/login/renew", (req, res) => {
    // TODO
})

authRouter.post("/register", (req, res) => {
    // TODO
})

authRouter.post("/verify", (req, res) => {
    // TODO
})

authRouter.post("/logout", (req, res) => {
    // TODO
})

export { authRouter }
