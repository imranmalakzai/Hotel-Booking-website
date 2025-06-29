import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

//**Get the user data */
const getUserData = asyncHandler(async (req, res) => {
  const role = req.user.role;
  const recentSearchedCities = req.user.recentSearchedCities;
  return res.status(200).json({ success: true, role, recentSearchedCities });
});

//**store user recent searched cities */
const storeUserRecentSearchedCities = asyncHandler(async (req, res) => {
  const { resentSearchedCity } = req.body;
  const user = req.user;

  if (user.recentSearchedCities.length < 3) {
    user.recentSearchedCities.push(resentSearchedCity);
  } else {
    user.recentSearchedCities.shift();
    user.recentSearchedCities.push(resentSearchedCity);
  }

  await user.save();
  return res.status(200).json({ success: true, message: "city added" });
});

export { getUserData, storeUserRecentSearchedCities };
