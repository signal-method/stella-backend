import mongoose from 'mongoose'

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("Database connection success")
    } catch (error) {
        console.log("Database connection failure")
        process.exit(1)
    }
}
