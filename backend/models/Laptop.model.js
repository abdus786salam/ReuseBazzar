const mongoose = require("mongoose");
const RefrigeratorSchema = mongoose.Schema({
  Product_type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },

  brand: {
    type: Number,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  ad_description: {
    type: String,
    required: false,
  },
  ad_title: {
    type: String,
    required: false,
  },

  price: {
    type: Number,
    required: true,
  },
});

const Refrigeratorsmodel = mongoose.model("refrigerators", RefrigeratorSchema);

module.exports = { Refrigeratorsmodel };
