const validate = (schema) => (req, res, next) => {
  const input = req.body.data;

  // console.log('INPUT', input);

  //console.log("schema", schema);

  if (input === {} || input === undefined) {
    // return next(new ErrorHandler('Data Cannot be Empty or undefined!!', 400));
    return res.status(200).json({
      status: 400,
      data: 'Data Cannot be Empty or undefined!! ',
    });
  }
  const { error } = schema.validate(input);

  //   console.log('Error From Validator', input);

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
