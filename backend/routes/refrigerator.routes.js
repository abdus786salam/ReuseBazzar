const express = require("express");
const RefrigeratorRouter = express.Router();

const { Refrigeratorsmodel } = require("../models/Refrigerators.model");
const { converter } = require("../middlewares/Imageconverter");

RefrigeratorRouter.get("/", async (req, res) => {
  try {
    const ref = await Refrigeratorsmodel.find();
    res.send(ref);
  } catch (error) {
    res.send(error);
  }
});

RefrigeratorRouter.post("/post", converter, async (req, res) => {
  const paylode = req.body;
  try {
    const new_bike = new Refrigeratorsmodel(paylode);
    await new_bike.save();
    res.status(200).json({ msg: "uploaded refregerator Data" });
  } catch (error) {
    res.send(error);
  }
});
RefrigeratorRouter.put("/update/:id", converter, async (req, res) => {
  const paylode = req.body;
  const update = req.params.id;
  const bike = await Refrigeratorsmodel.findOne({ _id: update });
  const userId_in_data = bike.userID;
  const userId_in_req = req.body.userID;
  try {
    if (userId_in_req !== userId_in_data) {
      res.send({ msg: "Your not Authorized" });
    } else {
      const v = await Refrigeratorsmodel.findByIdAndUpdate(
        { _id: update },
        paylode
      );
      res.send(`updated the data of refgiratore id ${v}`);
    }
  } catch (error) {
    res.send(error);
  }
});

RefrigeratorRouter.delete("/delete/:id", async (req, res) => {
  const update = req.params.id;
  const bike = await Refrigeratorsmodel.findOne({ _id: update });
  const userId_in_data = bike.userID;
  const userId_in_req = req.body.userID;
  try {
    if (userId_in_req !== userId_in_data) {
      res.send({ msg: "Your not Authorized" });
    } else {
      const v = await Refrigeratorsmodel.findByIdAndDelete({ _id: update });
      res.send(`deleted the data of ref id ${v}`);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  RefrigeratorRouter,
};
