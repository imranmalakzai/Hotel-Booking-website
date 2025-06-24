import dotenv from "dotenv";
dotenv.config({ path: `.env.${"development" || "production"}.local` });

export const {
  PORT,
  MONGODB_URI,
  DBNAME,
  CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY,
  CLERK_WEBHOOK_SECRET,
} = process.env;
