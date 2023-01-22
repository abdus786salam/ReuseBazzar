const express = require("express");
const bikeRouter = express.Router();

const { Bikemodel } = require("../models/Bikes.model");
const { converter } = require("../middlewares/Imageconverter");

bikeRouter.get("/", async (req, res) => {
  try {
    const bikes = await Bikemodel.find();
    res.send(bikes);
  } catch (error) {
    res.send(error);
  }
});

bikeRouter.post("/post", converter, async (req, res) => {
  try {
    const new_bike = new Bikemodel({
      brand: req.body.brand,
      year: req.body.year,
      price: req.body.price,
      image: req.body.image,
      ad_title: req.body.title,
      model: req.body.model,
      kms_driven: req.body.kms_driven,
    });
    await new_bike.save();
    res.status(200).json({ msg: "uploaded Bike Data" });
  } catch (error) {
    res.send(error);
  }
});
bikeRouter.put("/update/:id", converter, async (req, res) => {
  const paylode = req.body;
  const update = req.params.id;
  const bike = await Bikemodel.findOne({ _id: update });
  const userId_in_data = bike.userID;
  const userId_in_req = req.body.userID;
  try {
    if (userId_in_req !== userId_in_data) {
      res.send({ msg: "Your not Authorized" });
    } else {
      const v = await Bikemodel.findByIdAndUpdate({ _id: update }, paylode);
      res.send(`updated the data of bike id ${v}`);
    }
  } catch (error) {
    res.send(error);
  }
});

bikeRouter.delete("/delete/:id", async (req, res) => {
  const update = req.params.id;
  const bike = await Bikemodel.findOne({ _id: update });
  const userId_in_data = bike.userID;
  const userId_in_req = req.body.userID;
  try {
    if (userId_in_req !== userId_in_data) {
      res.send({ msg: "Your not Authorized" });
    } else {
      const v = await Bikemodel.findByIdAndDelete({ _id: update });
      res.send(`deleted the data of bike id ${v}`);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  bikeRouter,
};
