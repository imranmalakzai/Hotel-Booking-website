import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    roomType: {
      type: String,
      required: true,
    },
    pricePerNight: {
      type: Number,
      required: true,
    },
    amenities: {
      type: Array,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export const Room = mongoose.model("Room", roomSchema);
