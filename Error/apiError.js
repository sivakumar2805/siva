const httpStatusCodes = require('./statusCode');
const BaseError = require('./baseError');

class Api404Error extends BaseError {
  constructor(
    message,
    statusCode = httpStatusCodes.BAD_REQUEST
    // description = 'Not Found'
  ) {
    // super(message, statusCode, description);
    super(message, statusCode);
  }
}

module.exports = Api404Error;
