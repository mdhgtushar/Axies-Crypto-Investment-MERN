//external imports
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("../middlewares/createError");
const User = require("../models/userModel");

const app = {};

app.checkAuth = async(req, res, next) => {
try{
  if(req.cookies.token){
    const verify = jwt.verify(req.cookies.token, process.env.JWT)
    if(verify){
      res.json(true)
    }else{
      res.json(false)
    }
  }else{
    res.json(false)
  }
}catch(err){
  res.json(false)
}
};
app.Logout = async(req, res, next) => {
  try{
    if(req.cookies.token){
    res.cookie("token", "false", {httpOnly: true});
    res.json(true);
  }else{
    res.json(false)
  }
  }catch(err){
    next(err);
  }
}
app.Login = async (req, res, next) => {
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
        res.cookie("token", token,{
      httpOnly: true,});
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
app.Register = async (req, res, next) => {
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
    res.send({success: true, message: "Successfully Created Account"});
  } catch (err) {
    next(err);
  }
};
app.EditProfile = (req, res, next) => {
  res.send("from controller");
};
app.ChangePassword = (req, res, next) => {
  res.send("from controller");
};
module.exports = app;
