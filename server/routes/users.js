const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const CustomError = require("../models/custom-error");
const User = require("../models/UserSchema");
const jwtAuth = require("../middleware/jwtAuth");

const router = express.Router();

// @route       GET /api/users
// desc         show all users
router.get("/", jwtAuth, async (req, res, next) => {
  try {
    const users = await User.find();
    if (users.length != 0) res.json({ users });
    else throw new CustomError("No Users found!", 404);
  } catch (err) {
    return next(err);
  }
  console.log(req.user);
});

// @route       POST /api/users/register
// desc         Register new user
router.post("/register", async (req, res, next) => {
  let { email, name, phone, password } = req.body;

  try {
    // check if email already exits
    let user = await User.findOne({ email });
    if (user) throw new CustomError("Email is already taken!", 400);

    // Hash password
    const salt = await bcrypt.genSalt(16);
    password = await bcrypt.hash(password, salt);

    // Add the new user
    user = new User({ email, name, phone, password});
    await user.save();
   
    // JWT creation
    const userId = user.id;
    const payload = { userId, email, name }
    const jwtToken = jwt.sign(payload, "NODEISAWESOME");

    res.status(201).json({ message: "User created!", jwtToken });
  } catch (err) {
    return next(err);
  }
});


// @route     POST /api/users/login
// @desc      User Login route
router.post('/login', async (req, res, next) => {
  const {email, password} = req.body;
  try {

    // checking for an existing email
    const user = await User.findOne({email});
    if (!user) throw new CustomError("Invalid Email", 400);

    // checking for correct password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) throw new CustomError("Invalid Password", 400);

    // jwt creation
    const userId = user.id;
    const name = user.name;
    const payload = { userId, email, name };
    const jwtToken = jwt.sign(payload, "NODEISAWESOME");

    res.status(200).json({ message: "Login successfull", jwtToken });
  } catch (err) {
    return next(err);
  }
  
});

module.exports = router;
