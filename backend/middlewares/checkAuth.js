const createError = require("../middlewares/createError");
const jwt = require("jsonwebtoken");
const checkAuthMiddleware = (req, res, next) => {
  try {
    if (req.cookies.token && jwt.verify(req.cookies.token, process.env.JWT)) {
      next();
    } else {
      res.json(createError(401, "Access Denied. Not Authorized."));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = checkAuthMiddleware;
