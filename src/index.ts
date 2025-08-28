import express from "express";
import connectDB from "./configs/db.js";

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello from server" });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
