const mongoose = require("mongoose");
const RefrigeratorSchema = mongoose.Schema({
  door_style: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    // required: true,
  },
  defrosting_type: {
    type: Number,
    // required: true,
  },
  brand: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
  },
  ad_description: {
    type: String,
    // required: false,
  },
  capacity: {
    type: String,
    // required: true,
  },

  price: {
    type: String,
    // required: true,
  },
  ad_title: {
    type: String,
    // required: false,
  },
});

const Refrigeratorsmodel = mongoose.model("refrigerators", RefrigeratorSchema);

module.exports = { Refrigeratorsmodel };
