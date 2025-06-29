import { v2 as cloudinary } from "cloudinary";
import {
  CLUDINARY_API_KEY,
  CLUDINARY_API_SECRET,
  CLUDINARY_CLUDE_NAME,
} from "../configs/env.config.js";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: CLUDINARY_CLUDE_NAME,
    api_key: CLUDINARY_API_KEY,
    api_secret: CLUDINARY_API_SECRET,
  });
};

export default connectCloudinary;
