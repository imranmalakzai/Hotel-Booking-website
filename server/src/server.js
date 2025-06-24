import { PORT } from "./configs/env.confg.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import mongodb from "./db/Mongodb.connections.js";
import errorHandlerMiddlewares from "./middlewares/errorHandler.middlewares.js";
import clerkWebHooks from "./controllers/clerkWebHooks.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/clerk", clerkWebHooks); // public webhook route
app.get("/", (req, res) => res.send("API is working fine"));
app.use("*", (req, res) =>
  res.status(404).json({ message: "Route not found" })
);

// Custom Error Handler
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

// ✅ Export app for serverless environments like Vercel
export default app;

// ✅ Start server only in development (node src/server.js)
if (process.env.NODE_ENV !== "production") {
  const port = PORT || 5000;
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}
