const mongoose = require("mongoose");
const CarSchema = mongoose.Schema({
  brand: {
    type: String,
    // required: true,
  },
  model: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  fule_type: {
    type: String,
    // required: true,
  },
  year_of_registration: {
    type: Number,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  image: {
    type: String,
  },
  ad_description: {
    type: String,
    // required: true,
  },
  condition: {
    type: String,
    // required: true,
  },
  kms_driven: {
    type: String,
    // required: true,
  },
  ad_title: {
    type: String,
    // required: false,
  },
});

const Carsmodel = mongoose.model("cars", CarSchema);

module.exports = { Carsmodel };
