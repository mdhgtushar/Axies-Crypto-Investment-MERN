const Deposit = require("../models/depositModel.js");
const jwt = require("jsonwebtoken");
const DepositController = {};

DepositController.get_deposits_by_user = async (req, res, next) => {
  try {
    const deposits = await Deposit.find({
      user_id: jwt.decode(req.cookies.token).id,
    });
    res.send(deposits);
  } catch (err) {
    next(err);
  }
};

DepositController.cancel_deposit = async (req, res, next) => {
  res.send({ success: false });
};

DepositController.delete_deposit = async (req, res, next) => {
  res.send({ success: false });
};

DepositController.add_deposit = async (req, res, next) => {
  try {
    const depoSave = new Deposit({
      user_id: jwt.decode(req.cookies.token).id,
      ammount: req.body.ammount,
      trns_id: req.body.trns_id,
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

module.exports = DepositController;
