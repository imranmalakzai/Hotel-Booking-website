import asyncHandler from "../utils/asyncHandler.js";
import { v2 as cloudinary } from "cloudinary";
import ApiError from "../utils/apiError.js";
import { Room } from "../models/room.models.js";
import { Hotel } from "../models/hotel.model.js";

//** - - - - - - - - - create a new room route for a hotel - - - - - - - - - - -*/
export const createRoom = asyncHandler(async (req, res) => {
  const { roomType, pricePerNight, amenities } = req.body;

  const hotel = await Hotel.findOne({ owner: req.auth.userId });
  if (!hotel) throw new ApiError("No Hotel found", 404);

  //**upload the images to the cloudinary */
  const uploadImages = req.files.map(async (file) => {
    const response = await cloudinary.uploader.upload(file.path);
    return response.secure_url;
  });
  // wait for all images to upload
  const images = await Promise.all(uploadImages);

  await Room.create({
    hotel: hotel._id,
    roomType,
    pricePerNight: +pricePerNight,
    amenities: JSON.parse(amenities),
    images,
  });

  res.status(200).json({ message: "Room created successfully" });
});

//** - - - - - - - - - Api to get all rooms  - - - - - - - - - - - -  - - - - - - */
export const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find({ isAvailable: true })
    .populate({
      path: "Hotel",
      populate: {
        path: "owner",
        select: "image",
      },
    })
    .sort({ createdAt: -1 });

  res.status(200).json({ success: true, rooms });
});

//** - - - - - api to get all  rooms of a  hotel - - - - - - - - - - - -  - - - - -  */
export const getOwnerRooms = asyncHandler(async (req, res) => {
  const hotelData = await Hotel({ owner: req.auth.userId });
  const rooms = await Room.find({ hotel: hotelData._id.toString() }).populate(
    "hotel"
  );

  return res.status(200).json({ success: true, rooms });
});

//** - - - - - - api to togle the rooms availability - - - - - - - - - - - - - - - - */
export const toggleRoomAvailabality = asyncHandler(async (req, res) => {
  const { roomId } = req.body;
  const roomData = await Room.findById(roomId);
  roomData.isAvailable = !roomData.isAvailable;
  await Room.save();

  res.status(200).json({ success: true, message: "room availibility updated" });
});
