const mongoose = require("mongoose");
require("dotenv").config();
const connected = mongoose.connect(process.env.url);

module.exports = { connected };
