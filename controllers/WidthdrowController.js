const Widthdrow = require("../models/widthdrowModel.js");
const jwt = require("jsonwebtoken");
const WidthdrowController = {};

WidthdrowController.get_widthdrow_by_user = async (req, res, next) => {
  try {
    const deposits = await Widthdrow.find({
      user_id: jwt.decode(req.cookies.token).id,
    });
    res.send(deposits);
  } catch (err) {
    next(err);
  }
};
WidthdrowController.add_widthdrow = async (req, res, next) => {
  try {
    const depoSave = new Widthdrow({
      user_id: jwt.decode(req.cookies.token).id,
      ammount: req.body.ammount,
      wallet_adress: req.body.wallet_adress,
    });
    const savedata = await depoSave.save();
    if (savedata) {
      res.send("saved");
    } else {
      res.send("error");
    }
  } catch (err) {
    next(err);
  }
};
WidthdrowController.cancel_widthdrow = async (req, res, next) => {
  res.send({ success: false });
};

WidthdrowController.delete_widthdrow = async (req, res, next) => {
  res.send({ success: false });
};

module.exports = WidthdrowController;
