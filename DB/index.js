import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config()

// console.log("DATABASE_URL:", process.env.DATABASE_URL);
const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)
console.log("Connected to database")
export default sql