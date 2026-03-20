import mongoose from "mongoose";
import { setServers } from "node:dns/promises"; 

try {
  setServers(["1.1.1.1", "8.8.8.8"]);
  console.log("DNS set to 1.1.1.1 and 8.8.8.8");
} catch (error) {
  console.error("Failed to set DNS servers:", error);
}

let isConnected = false;

export const dbConnect = async() => {
  mongoose.set("strictQuery", true);

  if (isConnected) return;

  const MONGO_URI = process.env.MONGO_URI

  if (!MONGO_URI) throw new Error("Please define MONGO_URI")

  try {
    await mongoose.connect(MONGO_URI, {bufferCommands: false});

    isConnected = true;

    console.log("Connected")
  } catch (err) {
    console.log(err);
  }
}