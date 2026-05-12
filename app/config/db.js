import pg from "pg";
import { DATABASE_URL } from "./config.js";

const { Pool } = pg;

console.log("DATABASE_URL:", DATABASE_URL);

const pool = new Pool({
  connectionString: DATABASE_URL,
});

export default pool;
