import dotenv from "dotenv";
dotenv.config({ path: `.env.${"development" || "production"}.local` });

export const {
  PORT,
  MONGODB_URI,
  DBNAME,
  CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY,
  CLERK_WEBHOOK_SECRET,
  CLUDINARY_CLUDE_NAME,
  CLUDINARY_API_KEY,
  CLUDINARY_API_SECRET,
} = process.env;
