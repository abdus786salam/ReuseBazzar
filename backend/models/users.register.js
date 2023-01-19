const mongoose = require("mongoose");
const registerSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  password: String,
});
const RegisterModel = mongoose.model("user", registerSchema);
module.exports = {
  RegisterModel,
};
