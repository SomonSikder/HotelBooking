const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const { createError } = require("../utils/error");

// User Register
const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).json({ message: "user has been created", newUser });
  } catch (err) {
    next();
  }
};

// User Login
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "user not found"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong Password or Username!"));
    }
    res.status(200).json(user);
  } catch (err) {
    next();
  }
};
module.exports = { register, login };
