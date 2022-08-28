const userTransactionRouter = require("express").Router();

const checkAuthMiddleware = require("../middlewares/checkAuth.js")

const {Dashboard,AddDeposit,getDeposits,getWidthdrow,AddWidthdrow} = require("../controllers/transactionController.js")
///transactions
userTransactionRouter.route("/dashboard").get(checkAuthMiddleware, Dashboard);
userTransactionRouter.route("/deposits/add").post(checkAuthMiddleware, AddDeposit);
userTransactionRouter.route("/deposits").get(checkAuthMiddleware, getDeposits);
userTransactionRouter.route("/widthdrows").get(checkAuthMiddleware, getWidthdrow);
userTransactionRouter.route("/widthdrows/add").post(checkAuthMiddleware, AddWidthdrow);

module.exports = userTransactionRouter;
