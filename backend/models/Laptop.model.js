const mongoose = require("mongoose");
const LaptopSchema = mongoose.Schema({
  Product_type: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  condition: {
    type: String,
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
  ad_title: {
    type: String,
    // required: false,
  },

  price: {
    type: Number,
    // required: true,
  },
});

const Laptopmodel = mongoose.model("laptop", LaptopSchema);

module.exports = { Laptopmodel };
