const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
