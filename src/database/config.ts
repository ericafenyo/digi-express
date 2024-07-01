import mongoose from "mongoose";
import Logger from "@packages/logger";

export const connect = async (callback: () => void) => {
  try {
    const uri = process.env.MONGODB_URI || "";
    await mongoose.connect(uri);
    Logger.debug("Connected to database");
    callback();
  } catch (error) {
    Logger.error("Error connecting to database", error);
    throw new Error("Error connecting to database");
  }
};
