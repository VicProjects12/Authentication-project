const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


router.get("/test", (req, res) => {
  res.json({ message: "Router is working" });
});

//-------- SIGN UP ----------------//
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Make sure all fields are filled in
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    // Check if email is already taken
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash the password before saving
    const hashed = await bcrypt.hash(password, 10);

    // Save the new user
    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    // Create token — consistent key name "userId"
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(201).json({
      message: "Account created!",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });

  } catch (err) {
    console.error("Register error:", err.message);
    res.status(500).json({ message: "Server error, please try again" });
  }
});

//-------- LOG IN ----------------//
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Wrong email or password" });
    }

    // Create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });

  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error, please try again" });
  }
});

module.exports = router;