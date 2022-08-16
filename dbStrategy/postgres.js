import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const databaseConfig = {
    connectionString: process.env.CONNECTIONSTRING,
    ssl:{
        rejectUnauthorized: false
    }
}

const connection = new Pool(databaseConfig);

export default connection;