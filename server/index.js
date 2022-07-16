const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 4000;

// Router Import
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const roomRouter = require("./routes/rooms");
const hotelRouter = require("./routes/hotels");

const connet = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to DB");
  } catch (error) {
    throw error;
  }
};

// Middleware
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/hotels", hotelRouter);

app.listen(4000, () => {
  connet();
  console.log(`Server is running on PORT ${port}`);
});
