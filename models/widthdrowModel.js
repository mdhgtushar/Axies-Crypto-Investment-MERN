const mongoose = require("mongoose");

const witdhdrowSchema = mongoose.Schema(
  {
    ammount: { type: Number, required: true },
    wallet_adress: { type: String, required: true },
    user_id: { type: String, required: true },
    status: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Widthdrow = mongoose.model("widthdrow", witdhdrowSchema);

module.exports = Widthdrow;
