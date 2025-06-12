import mongoose from 'mongoose'

export async function connectDatabase() {
    const URI = process.env.MONGODB_URI as string

    if (!URI) {
        console.error("Missing MONGODB_URI environment variable")
        process.exit(1)
    }

    try {
        await mongoose.connect(URI)
        console.info(`Successfully connected to database`)
    } catch (error) {
        console.error("Failed to connect to database")
        process.exit(1)
    }
}
