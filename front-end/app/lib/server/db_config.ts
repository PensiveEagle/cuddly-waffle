import { config } from "dotenv";
import pg from "pg";

config();
const { Pool, Client } = pg

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: 5432,
    database: process.env.POSTGRES_DB
})

console.log(await pool.query('SELECT * FROM suggestions'))
await pool.end()