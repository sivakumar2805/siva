const Joi = require('joi');

const taxValidator = Joi.object({
  taxname: Joi.string()
    .min(3)
    .message('taxname must be minimum 3 characters')
    .max(50)
    .message('taxname name must be maximum 50 characters')
    .required()
    .messages({
      'any.required': 'taxname is required!!',
      'string.empty': 'taxname is not allowed to be empty',
      'string.trim': 'taxname must not have leading or trailing whitespace',
      'string.base': 'taxname must be a string',
      'string.pattern.base': 'taxname does not allow special characters',
    }),

  rate: Joi.number()
    .min(0.0001)
    .message('Tax Rate must be minimum of 0.0001 characters')
    .max(9999999999999999999999.9)
    .message('Tax Rate must be maxinum of 9999999999999999999999.9 characters')
    .required()
    .messages({
      'any.required': 'Tax Rate is required!!',
      'number.empty': 'Tax Rate is not allowed to be empty!!',
      'number.trim': 'Tax Rate must not have leading or trailing whitespace',
      'number.base': 'Tax Rate must be a number',
    }),
});

const taxListValidator = Joi.object({
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

module.exports = { taxValidator, taxListValidator };
