const ApiError = require("./api-error");

function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      code: err.statusCode,
      message: err.message,
      details: err.errors || null,
    });
  }

  //  Malformed JSON body
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      code: 400,
      message: "Invalid JSON in request body.",
      details: null,
    });
  }

  //  Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      code: 400,
      message: "Validation failed.",
      details: messages,
    });
  }

  //  Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      code: 400,
      message: "Invalid input format.",
      details: `Field '${err.path}' received invalid value: ${err.value}`,
    });
  }

  //  Generic Mongo server error
  if (err.name === "MongoServerError") {
    return res.status(500).json({
      success: false,
      code: 500,
      message: "Database operation failed.",
      details: process.env.NODE_ENV === "development" ? err.message : null,
    });
  }

  return res.status(500).json({
    success: false,
    code: 500,
    message: "Internal server error.",
    details: process.env.NODE_ENV === "development" ? err.message : null,
  });
}

module.exports = errorHandler;
