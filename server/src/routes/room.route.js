import { Router } from "express";
import upload from "../middlewares/multer.js";
import protectedRoute from "../middlewares/authMiddlewares.js";
import {
  createRoom,
  getOwnerRooms,
  getRooms,
  toggleRoomAvailabality,
} from "../controllers/room.controllers.js";

const roomRouter = Router();

roomRouter
  .route("/")
  .post(upload.array("images", 4), protectedRoute, createRoom);

roomRouter.route("/").get(getRooms);
roomRouter.route("/owner").get(protectedRoute, getOwnerRooms);
roomRouter
  .route("/toggle-room-availability")
  .patch(protectedRoute, toggleRoomAvailabality);

export default roomRouter;
