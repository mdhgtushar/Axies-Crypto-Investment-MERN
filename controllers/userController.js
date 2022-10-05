//external imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("../middlewares/createError");
const User = require("../models/userModel");

const UserController = {};

UserController.checkAuth = async (req, res, next) => {
  try {
    if (req.cookies.token && jwt.verify(req.cookies.token, process.env.JWT)) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (err) {
    res.json(false);
  }
};
UserController.Logout = async (req, res, next) => {
  try {
    if (req.cookies.token) {
      res.cookie("token", "false", { httpOnly: true });
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (err) {
    next(err);
  }
};
UserController.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      next(createError(401, "Fildes must not be empty!"));
    }
    const user = await User.findOne({ username });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        const token = jwt.sign({ id: user._id }, process.env.JWT);
        res.cookie("token", token, {
          httpOnly: true,
        });
        res.send({
          success: true,
          message: "Successfully Login",
          token: token,
        });
      } else {
        next(createError(401, "Username or Password Incorrect"));
      }
    } else {
      next(createError(401, "Username or Password Incorrect"));
    }
  } catch (err) {
    next(err);
  }
};
UserController.Register = async (req, res, next) => {
  try {
    const { full_name, username, email, phone, gender, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    if (!full_name || !username || !email || !phone || !gender || !password) {
      next(createError(401, "Fildes must not be empty!"));
    }

    const userSave = new User({
      full_name,
      username,
      email,
      phone,
      gender,
      password: hashPassword,
    });
    await userSave.save();
    res.send({ success: true, message: "Successfully Created Account" });
  } catch (err) {
    next(err);
  }
};
UserController.EditProfile = (req, res, next) => {
  res.send("from controller");
};
UserController.ChangePassword = (req, res, next) => {
  res.send("from controller");
};
module.exports = UserController;
