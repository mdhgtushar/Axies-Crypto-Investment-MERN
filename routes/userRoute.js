const { checkAuth, Register, Login,Logout } = require("../controllers/userController");
const userRouter = require("express").Router();
const checkAuthMiddleware = require("../middlewares/checkAuth.js")
userRouter.route("/").get(checkAuth);
userRouter.route("/register").post(Register);
userRouter.route("/login").post(Login);
userRouter.route("/logout").get(checkAuthMiddleware, Logout);
userRouter.route("/profile_update");
userRouter.route("/delete_profile");



module.exports = userRouter;
