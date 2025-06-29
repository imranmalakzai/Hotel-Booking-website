import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import { User } from "../models/user.model.js";

const protectedRoute = asyncHandler(async (req, _, next) => {
  const { userId } = req.auth;
  if (!userId) {
    throw new ApiError("not authenticated", 401);
  } else {
    const user = await User.findById(userId);
    req.user = user;
    next();
  }
});

export default protectedRoute;
