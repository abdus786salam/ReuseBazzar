const mongoose = require("mongoose");
const BikeSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  kms_driven: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  ad_title: {
    type: String,
    required: false,
  },
});

const Bikemodel = mongoose.model("bike", BikeSchema);

module.exports = { Bikemodel };
