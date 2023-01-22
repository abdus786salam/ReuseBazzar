const express = require("express");
const MobileRouter = express.Router();

const { Mobilesmodel } = require("../models/mobile&Tablets.model");
const { converter } = require("../middlewares/Imageconverter");

MobileRouter.get("/", async (req, res) => {
  try {
    const mobile = await Mobilesmodel.find();
    res.send(mobile);
  } catch (error) {
    res.send(error);
  }
});

MobileRouter.post("/post", converter, async (req, res) => {
  const paylode = req.body;
  try {
    const new_bike = new Mobilesmodel(paylode);
    await new_bike.save();
    res.status(200).json({ msg: "uploaded mobile Data" });
  } catch (error) {
    res.send(error);
  }
});
MobileRouter.put("/update/:id", converter, async (req, res) => {
  const paylode = req.body;
  const update = req.params.id;
  const bike = await Mobilesmodel.findOne({ _id: update });
  const userId_in_data = bike.userID;
  const userId_in_req = req.body.userID;
  try {
    if (userId_in_req !== userId_in_data) {
      res.send({ msg: "Your not Authorized" });
    } else {
      const v = await Mobilesmodel.findByIdAndUpdate({ _id: update }, paylode);
      res.send(`updated the data of mobile id ${v}`);
    }
  } catch (error) {
    res.send(error);
  }
});

MobileRouter.delete("/delete/:id", async (req, res) => {
  const update = req.params.id;
  const bike = await Mobilesmodel.findOne({ _id: update });
  const userId_in_data = bike.userID;
  const userId_in_req = req.body.userID;
  try {
    if (userId_in_req !== userId_in_data) {
      res.send({ msg: "Your not Authorized" });
    } else {
      const v = await Mobilesmodel.findByIdAndDelete({ _id: update });
      res.send(`deleted the data of mobile id ${v}`);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  MobileRouter,
};
