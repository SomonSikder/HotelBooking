const { Error } = require("mongoose");

const createError = (sta, mes) => {
  const err = new Error();
  err.message = mes;
  err.status = sta;
  return err;
};
module.exports = { createError };
