const Joi = require("joi");

const insertValidation = Joi.object({
  customername: Joi.string().required(),
  age: Joi.number().required(),

  address: Joi.string().required(),
  city: Joi.string().required(),

  orderedproducts: Joi.array().required(),

  orderdetails: Joi.array().required(),

  shipname: Joi.string().required(),

  shipcountry: Joi.string().required(),
});

module.exports = {
  insertValidation,
};

// const customername = Joi.string().required();
// const age = Joi.number().required();

// const address = Joi.string().required();
// const city = Joi.string().required();

// const orderedproducts = Joi.string().required();

// const orderdetails = Joi.string().required();

// const shipname = Joi.string().required();

// const shipcountry = Joi.string().required();
