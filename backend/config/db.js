const mongoose = require("mongoose");
require("dotenv").config();
const connected = mongoose.connect(process.env.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { connected };
