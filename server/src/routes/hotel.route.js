import { Router } from "express";
import protectedRoute from "../middlewares/authMiddlewares.js";
import { registerHotel } from "../controllers/hotel.controllers.js";

const hotelRouter = Router();

hotelRouter.route("/").post(protectedRoute, registerHotel);

export default hotelRouter;
