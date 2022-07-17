const router = require("express").Router();
const {
  createHotel,
  updateHotel,
  deleteHotel,
  singelHotel,
  allHotel,
} = require("../controller/hotelController");
const { verifyAdmin } = require("../utils/verifyToken");

// Create
router.post("/", verifyAdmin, createHotel);

// Update
router.put("/:id", verifyAdmin, updateHotel);

// Delete
router.delete("/:id", verifyAdmin, deleteHotel);

// Get
router.get("/:id", singelHotel);

// Get All
router.get("/", allHotel);

module.exports = router;
