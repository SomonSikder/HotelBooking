const router = require("express").Router();
const {
  createRoom,
  updateRoom,
  deleteRoom,
  singelRoom,
  allRoom,
} = require("../controller/roomController");
const { verifyAdmin } = require("../utils/verifyToken");

// Create
router.post("/:hotelid", verifyAdmin, createRoom);

// Update
router.put("/:id", verifyAdmin, updateRoom);

// Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// Get
router.get("/:id", singelRoom);

// Get All
router.get("/", allRoom);

module.exports = router;
