const express = require("express");
const { Bikemodel } = require("../models/Bikes.model");
const { Carsmodel } = require("../models/Cars.model");
const { Laptopmodel } = require("../models/Laptop.model");
const { Mobilesmodel } = require("../models/mobile&Tablets.model");
const { Refrigeratorsmodel } = require("../models/Refrigerators.model");
const allRouter = express.Router();

allRouter.get("/alldata", async (req, res) => {
  try {
    // Build the query object
    const query = {};
    if (req.query.brand) query.brand = req.query.brand;
    if (req.query.model) query.model = req.query.model;
    if (req.query.city) query.model = req.query.city;

    // Pagination
    const limit = req.query.limit || 10;
    const skip = req.query.skip || 0;

    // Sorting
    const sort = req.query.sort || { price: -1 };

    // Validate the query parameters
    if (limit < 0 || skip < 0) {
      res.status(400).send({ message: "Invalid limit or skip value" });
      return;
    }

    // Find and return the filtered data
    const bikes = await Bikemodel.find(query)
      .limit(limit)
      .skip(skip)
      .sort(sort);
    const cars = await Carsmodel.find(query).limit(limit).skip(skip).sort(sort);
    const laptop = await Laptopmodel.find(query)
      .limit(limit)
      .skip(skip)
      .sort(sort);
    const mobile = await Mobilesmodel.find(query)
      .limit(limit)
      .skip(skip)
      .sort(sort);
    const refrigerator = await Refrigeratorsmodel.find(query)
      .limit(limit)
      .skip(skip)
      .sort(sort);
    res.send({ bikes, cars, laptop, mobile, refrigerator });
  } catch (error) {
    res.send(error);
  }
});

allRouter.get("/specificdata", async (req, res) => {
  const update = req.params.id;
  const bike = await Bikemodel.findOne({ _id: update });
  const car = await Carsmodel.findOne({ _id: update });
  const laptop = await Laptopmodel.findOne({ _id: update });
  const mobile = await Mobilesmodel.findOne({ _id: update });
  const refrigerator = await Refrigeratorsmodel.findOne({ _id: update });
  const userId_in_data =
    bike.userID ||
    car.userID ||
    laptop.userID ||
    mobile.userID ||
    refrigerator.userID;
  const userId_in_req = req.body.userID;
  try {
    if (userId_in_req !== userId_in_data) {
      res.send({ msg: "Your not Authorized" });
    } else {
      const v = await Bikemodel.find({ _id: update });
      const m = await Mobilesmodel.find({ _id: update });
      const l = await Laptopmodel.find({ _id: update });
      const c = await Carsmodel.find({ _id: update });
      const r = await Refrigeratorsmodel.find({ _id: update });
      res.send({ v, m, l, c, r });
    }
  } catch (error) {
    res.send(error);
  }
});
module.exports = { allRouter };
