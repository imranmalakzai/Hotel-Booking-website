import { Router } from "express";
import {
  checkAailabilityAPI,
  createBooking,
  getUserBooking,
  getHotelBookings,
} from "../models/booking.models.js";
import protectedRoute from "../middlewares/authMiddlewares.js";

const bookingRouter = Router();

bookingRouter.route("/check-availability").post(checkAailabilityAPI);
bookingRouter.route("/book").post(protectedRoute, createBooking);
bookingRouter.route("/user").get(protectedRoute, getUserBooking);
bookingRouter.route("/hotel").get(protectedRoute, getHotelBookings);

export default bookingRouter;
