import express from "express";
import connectDB from "./configs/db";

const app = express();

connectDB();

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
