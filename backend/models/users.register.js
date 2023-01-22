const mongoose = require("mongoose");
const registerSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  password: String,
  userID: String,
  avatar:String
});
const RegisterModel = mongoose.model("user", registerSchema);
module.exports = {
  RegisterModel,
};
