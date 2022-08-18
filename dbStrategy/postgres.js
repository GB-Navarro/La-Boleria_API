import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const user = process.env.DBUSER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.DBPORT;
const database = process.env.DATABASE;

const databaseConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
      rejectUnauthorized: false
  }
}

const connection = new Pool(databaseConfig);

export default connection;