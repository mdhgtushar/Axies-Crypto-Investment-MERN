const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  full_name: {
    type: String,
  },
});

const AdminModel = mongoose.model("admin", AdminSchema);

module.exports = AdminModel;
