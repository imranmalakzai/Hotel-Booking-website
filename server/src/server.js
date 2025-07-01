import { PORT } from "./configs/env.config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import connectDB from "./db/Mongodb.connections.js";
import errorHandlerMiddlewares from "./middlewares/errorHandler.middlewares.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebHooks.js";
import userRouter from "./routes/user.route.js";
import hotelRouter from "./routes/hotel.route.js";
import connectCloudinary from "./utils/cloudinary.js";
import helmet from "helmet";
import roomRouter from "./routes/room.route.js";
import bookingRouter from "./routes/booking.route.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(clerkMiddleware());

// Routes
app.use("/api/clerk", clerkWebHooks);
app.get("/", (req, res) => res.send("API is working fine"));
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

// 404 Handler
app.use("*", (req, res) =>
  res.status(404).json({ message: "Route not found" })
);

// Global Error Handler
app.use(errorHandlerMiddlewares);

// Connect to MongoDB
let isDbConnected = false;
const connectToDb = async () => {
  if (!isDbConnected) {
    try {
      await connectDB();
      isDbConnected = true;
      console.log("🟢 MongoDB connected");
    } catch (err) {
      console.error("🔴 MongoDB connection error:", err.message);
    }
  }
};
connectToDb();
app.listen(PORT, () => {
  console.log("server is running on https://localhost:" + PORT);
});

// Connect to Cloudinary
connectCloudinary();

// Export app for Vercel or other platforms
export default app;
