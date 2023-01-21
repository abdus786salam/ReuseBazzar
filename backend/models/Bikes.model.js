const mongoose = require("mongoose");
const BikeSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  year: {
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
  ad_title: {
    type: String,
    required: false,
  },
});

const Bikemodel = mongoose.model("bike", BikeSchema);

module.exports = { Bikemodel };
