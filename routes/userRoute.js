const userRouter = require("express").Router();
const UserController = require("../controllers/UserController");
const DepositController = require("../controllers/DepositController.js");
const WidthdrowController = require("../controllers/WidthdrowController.js");
const checkAuthMiddleware = require("../middlewares/checkAuth.js");
userRouter.route("/auth/").get(UserController.checkAuth);
userRouter.route("/auth/register").post(UserController.Register);
userRouter.route("/auth/login").post(UserController.Login);
userRouter
  .route("/auth/logout")
  .get(checkAuthMiddleware, UserController.Logout);
userRouter.route("/auth/profile_update");
userRouter.route("/auth/delete_profile");

///transactions
userRouter.route("/dashboard").get(checkAuthMiddleware, (req, res, next) => {
  try {
    res.json({
      avilable_balance: 200,
      total_deposits: 600,
      total_withdrows: 300,
    });
  } catch (err) {
    next(err);
  }
});
//deposit Routes
userRouter
  .route("/deposits/add")
  .post(checkAuthMiddleware, DepositController.add_deposit);
userRouter
  .route("/deposits")
  .get(checkAuthMiddleware, DepositController.get_deposits_by_user);
//widthdrows Routes
userRouter
  .route("/widthdrows")
  .get(checkAuthMiddleware, WidthdrowController.get_widthdrow_by_user);
userRouter
  .route("/widthdrows/add")
  .post(checkAuthMiddleware, WidthdrowController.add_widthdrow);

module.exports = userRouter;
