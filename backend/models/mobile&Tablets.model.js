const mongoose = require("mongoose");
const MobileSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  Model: {
    type: String,
    required: true,
  },
  year_of_purchase: {
    type: Number,
    required: true,
  },
  price: {
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
  physical_condition: {
    type: String,
    required: true,
  },
  ad_title: {
    type: String,
    required: false,
  },
});

const Mobilesmodel = mongoose.model("mobile", MobileSchema);

module.exports = { Mobilesmodel };
