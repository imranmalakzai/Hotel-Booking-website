import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    city: { type: String, required: true },
  },
  { timestamps: true }
);

export const Hotel = mongoose.model("Hotel", hotelSchema);
