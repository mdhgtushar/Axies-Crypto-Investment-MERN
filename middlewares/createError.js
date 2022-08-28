const createError = (status, message) => {
  const err = new Error();
  err.status = status || 404;
  err.message = message || "Something error..";
  return err;
};

module.exports = createError;
