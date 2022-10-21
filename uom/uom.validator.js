const Joi = require('joi');

const newUomValidator = Joi.object({
  uomname: Joi.string()
    .min(3)
    .message('uomname must be minimum 3 characters')
    .max(50)
    .message('uomname name must be maximum 50 characters')
    .required()
    .messages({
      'any.required': 'uomname is required!!',
      'string.empty': 'uomname is not allowed to be empty',
      'string.trim': 'uomname must not have leading or trailing whitespace',
      'string.base': 'uomname must be a string',
      'string.pattern.base': 'uomname does not allow special characters',
    }),
});

const uomListValidator = Joi.object({
  offset: Joi.number().required().messages({
    'any.required': 'Offset is Required For List',
    'number.empty': `"offsetsize must be given"`,
    'number.base': `"offsetsize must be number"`,
  }),

  pagesize: Joi.number().required().messages({
    'any.required': 'PageSize is Required For List',
    'number.empty': `"PageSize must be given"`,
    'number.base': `"PageSize must be number"`,
  }),
});

module.exports = { newUomValidator, uomListValidator };
