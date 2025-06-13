import mongoose from 'mongoose'

export async function connectDB() {
    const connectionString = process.env.DB_URL as string

    if (!connectionString) {
        console.error("Missing DB_URL environment variable")
        process.exit(1)
    }

    try {
        await mongoose.connect(connectionString)
    } catch (error) {
        console.error("Failed to connect to database")
        process.exit(1)
    }
}
