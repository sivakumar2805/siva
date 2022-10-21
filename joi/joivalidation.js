const Joi = require('joi');

const fractionDigitsArr = [0, 1, 2, 3];
const schema = Joi.object({
  minFraction: Joi.valid(...fractionDigitsArr)
    .required()
    .messages({
      'any.required': 'Minimum Fraction is required!!',
      'any.only': 'Minimum Fraction must be one of [1,2,3]',
    }),
  obj: Joi.object({
    name: Joi.string().required().messages({
      'any.required': 'obj  is required!!',
    }),
  }).messages({
    'object.base': 'Must Be Obj',
  }),
  id: Joi.string().allow(0),
});

const { error, value } = schema.validate({ minFraction: 1, obj: null });
console.log('Error', error);
console.log('value', value);

/**const data = schema.validate({ minFraction: 8 });
console.log('data', data);*/
