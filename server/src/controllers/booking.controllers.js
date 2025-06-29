import { Booking } from "../models/booking.models.js";
import { Hotel } from "../models/hotel.model.js";
import { Room } from "../models/room.models.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

//** function to check the availability of a room */
const checkAailability = async ({ checkInDate, checkOutDate, room }) => {
  const bookings = await Booking.find({
    room,
    chekInDate: { $lte: checkOutDate },
    chekOutDate: { $gte: checkInDate },
  });

  const isAvailable = bookings.length === 0;
  return isAvailable;
};

//** api to check the availability of a room  */
 const checkAailabilityAPI = asyncHandler(async (req, res) => {
  const { checkInDate, checkOutDate, room } = req.body;
  const isAvailable = await checkAailability(checkInDate, checkOutDate, room);
  res.status(200).json({ success: true, isAvailable });
});

//**api to create a new booking */
const createBooking = asyncHandler(async (req, res) => {
  const { checkInDate, checkOutDate, guests, room } = req.body;
  const user = req.user._id;

  //**Before checking availability */
  const isAvailable = await checkAailability(checkInDate, checkOutDate, room);
  if (!isAvailable) {
    throw new ApiError("Room is not available", 404);
  }
  const roomData = await Room.findById(room).populate("hotel");
  let totalPrice = roomData.pricePerNight;

  //calculate total price base on night
  const checkIn = new Date(checkInDate);
  const checkOUt = new Date(checkOutDate);

  const defTime = checkOUt.getTime() = checkIn.getTime()
  const nights = Math.ceil(defTime / (1000 * 60 * 60 * 24))
  totalPrice *= nights

  const booking = await Booking.create({
    user,
    room,
    hotel:roomData.hotel._id,
    guests: + guests,
    checkInDate,
    checkOutDate,
    totalPrice
  })

  res.status(201).json({message:"booking created successfully"})
});

//**api to get all booking for a user */
const getUserBooking = asyncHandler(async (req,res) => {
  const user = req.user._id;
  const bookings = await Booking.find({user}).populate("room hotel").sort({createdAt:-1})
  
  res.status(200).json({success:true,bookings})
}) 


//**get hotel bookings */
const getHotelBookings = asyncHandler (async (req,res) => {
  const hotel = await Hotel.findOne({owner:req.auth.userId})
  if(!hotel) throw new ApiError("No Hotel Found", 404)

  const bookings = await Booking.find({hotel:hotel_id}).populate("room hotel user").sort({createdAt : -1})

  //**Total bookings */
  const totalBookings = bookings.length;
  //**Total Revenue */
  const totalRevenue = bookings.reduce((acc,booking) => acc + booking.totalPrice,0)

  res.status(200).json({dashboardData : {totalBookings,totalRevenue,bookings},success:true})
})


export {
  checkAailability,checkAailabilityAPI,createBooking,getUserBooking,getHotelBookings
}