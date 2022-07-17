const User = require("../models/Users");

// Update User Controller
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: ture }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete User Controller
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("User has been delete");
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get Single User Controller
const singelUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All User Controller
const allUser = async (req, res) => {
  try {
    const Users = await User.find();

    res.status(200).json(Users);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  updateUser,
  deleteUser,
  singelUser,
  allUser,
};
