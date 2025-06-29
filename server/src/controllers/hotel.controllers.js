import { Hotel } from "../models/hotel.model.js";
import { User } from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

//** - - - - - - Hotel Registreation Controllers Section - - - - - - - -  */
export const registerHotel = asyncHandler(async (req, res) => {
  const { name, address, contact, city } = req.body;
  const owner = req.user._id; //we get the user id fromt he protect route middlewares

  const hotel = await User.findById(owner);
  if (hotel) throw new ApiError("hotel already registered", 403);

  await Hotel.create({ name, address, contact, city, owner });
  await User.findByIdAndUpdate(owner, { role: "hotelOwner" }, { new: true });

  res
    .status(200)
    .json({ success: true, message: "Hotel Registed successfully" });
});
