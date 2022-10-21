const ErrorHandler = require("./ErrorHandler");

const validate = (schema) => (req, res, next) => {
  const body = req.body.data;

  console.log("INPUT", body);

  //console.log("schema", schema);

  if (body === {} || body === undefined) {
    return next(new ErrorHandler("Data Cannot be Empty or undefined!!", 400));
    // res.status(200).json({
    //   status: 400,
    //   data: error,
    // });
  }
  const { error } = schema.validate(body);

  // console.log("Error From Validator", input);

  if (error) {
    res.status(200).json({
      status: 400,
      data: error,
    });
  } else {
    next();
  }
};

module.exports = validate;
