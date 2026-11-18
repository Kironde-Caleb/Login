import db from "mysql2/promise";
import { env } from "./env.js";

const pool = db.createPool({
  database: env.dbName,
  password: env.dbPassword,
  host: env.dbHost,
  user: env.dbUser,
  port: env.dbPort,
});

export default pool;
