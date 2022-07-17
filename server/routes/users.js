const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  singelUser,
  allUser,
} = require("../controller/userController");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

// // Check Token
// router.get("/checkauthentication", verifyToken, (req, res) => {
//   res.send("Hello User your are authenticated");
// });

// // Check User
// router.get("/checkuser/:id", verifyUser, (req, res) => {
//   res.send("Hello User your are Login and You can delete your account");
// });

// // Check Admin
// router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
//   res.send("Hello Admin, your are Login and You can delete all account");
// });

// Update
router.put("/:id", verifyUser, updateUser);

// Delete
router.delete("/:id", verifyUser, deleteUser);

// Get
router.get("/:id", singelUser);

// Get All
router.get("/", verifyAdmin, allUser);

module.exports = router;
