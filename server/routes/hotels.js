const router = require("express").Router();
const {
  createHotel,
  updateHotel,
  deleteHotel,
  singelHotel,
  allHotel,
} = require("../controller/hotelController");

// Create
router.post("/", createHotel);

// Update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id", deleteHotel);

// Get
router.get("/:id", singelHotel);

// Get All
router.get("/", allHotel);

module.exports = router;
