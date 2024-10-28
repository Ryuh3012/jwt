import { config } from "dotenv";

config()

export const port = process.env.URL
export const dbMongose = process.env.DB_MONGOSE