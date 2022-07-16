const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello, this is users");
});

module.exports = router;
