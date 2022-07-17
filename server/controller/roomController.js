const Room = require("../models/Rooms");
const Hotel = require("../models/Hotels");
const { createError } = require("../utils/error");

// Create Room
const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const saveRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: saveRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(saveRoom);
  } catch (err) {
    next(err);
  }
};

// Update Room Controller
const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: ture }
    );

    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete Room Controller
const deleteRoom = async (req, res) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Room has been delete");
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Single Room Controller
const singelRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    res.status(200).json(room);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All Room Controller
const allRoom = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { createRoom, updateRoom, deleteRoom, singelRoom, allRoom };
