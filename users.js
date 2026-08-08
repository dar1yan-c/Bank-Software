const express = require("express");
const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  const newUser = { name, email, password };
  users.push(newUser);

  res.json({ message: "User created successfully", user: newUser });
});

module.exports = router;
