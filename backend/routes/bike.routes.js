const express = require("express");
const bikeRouter = express.Router();
const multer = require("multer");
const { Bikemodel } = require("../models/Bikes.model");

// Middleware for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware for error handling
const handleError = (res, error) => {
  res.status(500).json({ error });
};

bikeRouter.get("/", async (req, res) => {
  try {
    const bikes = await Bikemodel.find();
    res.send(bikes);
  } catch (error) {
    handleError(res, error);
  }
});

bikeRouter.post("/post", upload.single("image"), async (req, res) => {
  try {
    const new_bike = new Bikemodel({
      brand: req.body.brand,
      year: req.body.year,
      price: req.body.price,
      image: { data: req.file.buffer, contentType: req.file.mimetype },
    });
    await new_bike.save();
    res.status(200).json({ msg: "uploaded Bike Data" });
  } catch (error) {
    handleError(res, error);
  }
});

module.exports = {
  bikeRouter,
};
