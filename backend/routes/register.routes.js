const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { RegisterModel } = require("../models/users.register");
const { converter } = require("../middlewares/Imageconverter");
require("dotenv").config();
const registerRouter = express.Router();
registerRouter.post("/register", converter, async (req, res) => {
  const { email, password, name, mobile } = req.body;
  const userPresent = await RegisterModel.findOne({ email });
  if (userPresent?.email) {
    res.send({ Msg: "user already Exist" });
  } else {
    try {
      bcrypt.hash(password, 3, async (err, hash) => {
        const newuser = new RegisterModel({
          email,
          password: hash,
          name,
          mobile,
          avatar,
        });
        await newuser.save();
        res.send({ msg: "Sign up Sucessful" });
      });
    } catch (error) {
      res.send(error);
      res.send({ msg: error });
    }
  }
});
registerRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginuser = await RegisterModel.find({ email });
    if (loginuser.length > 0) {
      bcrypt.compare(password, loginuser[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: loginuser[0]._id },
            process.env.token
          );
          res.send({ msg: "Login Sucessfully", token: token });
        } else {
          res.send({ msg: "Something went Wrong" });
        }
      });
    } else {
      res.send({ msg: "Login Field" });
    }
  } catch (error) {
    res.send({ msg: "Cridintial not match" });
  }
});
registerRouter.get("/logout", (req, res) => {
  //clear the token from the user
  req.session.token = null;
  //clear the user from the req object
  req.session.user = null;
  res.send({ msg: "Logged out successfully" });
});
module.exports = { registerRouter };
