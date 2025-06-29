import { Router } from "express";
import protectedRoute from "../middlewares/authMiddlewares.js";
import {
  getUserData,
  storeUserRecentSearchedCities,
} from "../controllers/user.controllers.js";

const userRouter = Router();

//** Get the user rotue */
userRouter.route("/").get(protectedRoute, getUserData);

//**store recent searched city */
userRouter
  .route("/store-recent-search")
  .post(protectedRoute, storeUserRecentSearchedCities);

export default userRouter;
