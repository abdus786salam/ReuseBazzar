const express = require("express");
const bikeRouter = express.Router();
const multer = require("multer");

const { Bikemodel } = require("../models/Bikes.model");

const storage = multer.memoryStorage();
const upload = multer({ storage });
bikeRouter.get("/", async (req, res) => {
  try {
    const bikes = await Bikemodel.find();
    res.send(bikes);
  } catch (error) {
    res.send({ msg: "Somethinf went wrong" });
  }
});
bikeRouter.post("/post", upload.single("image"), async (req, res) => {
  const new_bike = new Bikemodel({
    brand: req.body.brand,
    year: req.body.year,
    price: req.body.price,
    image: { data: req.file.buffer, contentType: req.file.mimetype },
  });
  await new_bike
    .save()
    .then((image) => {
      res.status(200).json({ msg: "uploaded Bike Data" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});
module.exports = {
  bikeRouter,
};
