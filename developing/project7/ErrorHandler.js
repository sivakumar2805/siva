class ErrorHandler extends Error {
  constructor(message, statusCode) {
    console.log(message);
    console.log("Error Handler @@@", statusCode);
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
