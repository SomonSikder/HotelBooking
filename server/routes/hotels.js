const router = require("express").Router();
const {
  createHotel,
  updateHotel,
  deleteHotel,
  singelHotel,
  allHotel,
  countByCityHotel,
  countByTypeHotel,
} = require("../controller/hotelController");
const { verifyAdmin } = require("../utils/verifyToken");

// Create
router.post("/", verifyAdmin, createHotel);

// Update
router.put("/:id", verifyAdmin, updateHotel);

// Delete
router.delete("/:id", verifyAdmin, deleteHotel);

// Get
router.get("/find/:id", singelHotel);

// Get All
router.get("/", allHotel);

// Get Hotel Count by City
router.get("/countByCity", countByCityHotel);

// Get Hotel Count by Type
router.get("/countByType", countByTypeHotel);

module.exports = router;
