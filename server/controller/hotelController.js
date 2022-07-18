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

// Get Count By Hotel Controller
const countByCityHotel = async (req, res) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );

    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Count By Type Hotel Controller
const countByTypeHotel = async (req, res) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });
    const resortCount = await Hotel.countDocuments({ type: "Resort" });
    const villaCount = await Hotel.countDocuments({ type: "Villa" });
    const cabinCount = await Hotel.countDocuments({ type: "Cabin" });

    console.log(apartmentCount);
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
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
  countByCityHotel,
  countByTypeHotel,
};
