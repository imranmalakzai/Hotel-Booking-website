import mongoose from "mongoose";
import { DBNAME, MONGODB_URI } from "../configs/env.config.js";

const mongodb = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DBNAME}`);
    console.log(" - - - - database connected successfully!!! - - - - - ");
  } catch (error) {
    console.log("- - - - Database connection failed!! - - - - - - - -");
    process.exit(1);
  }
};

export default mongodb;
