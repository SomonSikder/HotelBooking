const Hotel = require("../models/Hotels");

// Create Hotel Controller
const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (err) {
    next(err);
  }
};

// Update Hotel Controller
const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: ture }
    );

    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete Hotel Controller
const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json("Hotel has been delete");
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Single Hotel Controller
const singelHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All Hotel Controller
const allHotel = async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  singelHotel,
  allHotel,
};
