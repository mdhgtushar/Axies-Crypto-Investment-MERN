const createError = (status, message) => {
  const err = new Error();
  err.success = false;
  err.status = status || 404;
  err.message = message || "Something error..";
  return err;
};

module.exports = createError;
