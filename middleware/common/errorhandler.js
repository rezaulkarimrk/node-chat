const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// default error handler
function errorHandler(error, req, res, next) {
  res.status(500).render(res.locals.error, {
    title: "Error page",
  });
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
