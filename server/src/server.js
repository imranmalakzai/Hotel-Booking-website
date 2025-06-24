import { PORT } from "./configs/env.confg.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import mongodb from "./db/Mongodb.connections.js";
import errorHandlerMiddlewares from "./middlewares/errorHandler.middlewares.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebHooks.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Don't apply clerkMiddleware globally unless needed
// app.use(clerkMiddleware());

app.use("/api/clerk", clerkWebHooks);
app.get("/", (req, res) => res.send("API is working fine"));
app.use("*", (req, res) =>
  res.status(404).json({ message: "Route not found" })
);
app.use(errorHandlerMiddlewares);

// ✅ MongoDB connection
let isDbConnected = false;
const connectToDb = async () => {
  if (!isDbConnected) {
    try {
      await mongodb();
      isDbConnected = true;
      console.log("🟢 MongoDB connected");
    } catch (err) {
      console.error("🔴 MongoDB connection error:", err.message);
    }
  }
};
connectToDb();

// ✅ Export app for Vercel serverless handler
export default app;
