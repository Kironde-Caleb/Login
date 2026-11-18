import dotenv from "dotenv";
dotenv.config();

export const env = {
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbUser: process.env.DB_USER,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
};
