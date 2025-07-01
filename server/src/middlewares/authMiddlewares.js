import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { getAuth } from "@clerk/express";

const protectedRoute = asyncHandler(async (req, _, next) => {
  const { userId } = getAuth(req);
  if (!userId) {
    throw new ApiError("not authenticated", 401);
  } else {
    const user = await User.findById(userId);
    req.user = user;
    next();
  }
});

export default protectedRoute;
