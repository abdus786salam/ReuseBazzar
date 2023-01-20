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
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Bikemodel = mongoose.model("bike", BikeSchema);

module.exports = { Bikemodel };
