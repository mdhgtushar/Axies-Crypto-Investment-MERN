const mongoose = require("mongoose");

const depositSchema = mongoose.Schema(
  {
    ammount: { type: Number, required: true },
    trns_id: { type: String, required: true, unique: true },
    user_id: { type: String, required: true },
    status: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Deposit = mongoose.model("deposit", depositSchema);

module.exports = Deposit;
