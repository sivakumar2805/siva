const Joi = require('joi');

const schema = Joi.object({
  a: Joi.number().required(),
});

const values = {
  b: '',
};

// try {
//   const data = schema.validateAsync(value);
//   console.log('data', data);
//   // value -> { "a" : 123 }
// } catch (err) {
//   console.log('Error', err);
// }

const data = schema.validate(values);
console.log('data', data.value);
