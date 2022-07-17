const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error");

// Verify Token
const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Your not authenticate"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Your Token is not valied"));
    }
    req.user = user;
    next();
  });
};

// Verifi User
const verifyUser = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) {
        return next(createError(403, "Your are not authorized"));
      }
    }
  });
};

// Verifi Admin
const verifyAdmin = async (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "Your are not authorized"));
    }
  });
};
module.exports = { verifyToken, verifyUser, verifyAdmin };
