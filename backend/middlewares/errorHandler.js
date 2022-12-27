const errorHandler = (err, req, res, next) => {
  res.json({
    success: false,
    status: err.status || 404,
    message: err.message || "something error....",
  });
};

module.exports = errorHandler;
