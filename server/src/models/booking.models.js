import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
    chekInDate: {
      type: Date,
      required: true,
    },
    chekOutDate: {
      type: Date,
      required: true,
    },
    totalPrice: { type: Number, required: true },
    guests: { type: Number, required: true },
    paymentMethod: {
      type: String,
      required: true,
      default: "Pay At Hotel",
    },
    isPaid: { type: Boolean, default: false },
    status: {
      type: Number,
      enum: ["pending", "paid", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
