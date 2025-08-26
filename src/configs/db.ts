import mongoose from "mongoose";
import serverConfig from "./serverConfig.js";

async function connectDB() {
  try {
    await mongoose.connect(serverConfig.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.error("MongoDB connection failed:", error.message);
    }
    process.exit(1);
  }
}

export default connectDB;
