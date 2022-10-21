class BaseError extends Error {
  constructor(message, statusCode) {
    console.log('Status', statusCode);
    super(message);
    // console.log('Description', description);
    // Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = BaseError;
