const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/dev");
const { check, validationResult } = require("express-validator");

const User = require("../models/user");

// router.post("/register", User.register);
// router.post("/auth", User.authenticate);

// @route   POST api/user
// @desc    Registers a new user if the email is unique, and returns the user's token
// @access  Public
router.post(
  "/",
  // Validate input data
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be 6 or more characters").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        email,
        password
      });

      // Encrypt password with bcrypt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(user.password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id //abstraction in mongoose means this doesn't need _id
        }
      };

      jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: 36000 }, // temporary, change to 1 hour later
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
