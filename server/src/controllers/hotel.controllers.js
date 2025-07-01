import { Hotel } from "../models/hotel.model.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

//** - - - - - - Hotel Registreation Controllers Section - - - - - - - -  */
export const registerHotel = asyncHandler(async (req, res) => {
  const { name, address, contact, city } = req.body;
  const owner = req.user._id;

  // 1. Check if user exists
  const user = await User.findById(owner);
  if (!user) throw new ApiError("User not found", 404);

  // 2. Check if hotel already registered by this user
  const existingHotel = await Hotel.findOne({ owner });
  if (existingHotel) {
    throw new ApiError("Hotel already registered", 403);
  }

  // 3. Create hotel and update user role
  await Hotel.create({ name, address, contact, city, owner });
  await User.findByIdAndUpdate(owner, { role: "hotelOwner" }, { new: true });

  res
    .status(200)
    .json({ success: true, message: "Hotel registered successfully" });
});
