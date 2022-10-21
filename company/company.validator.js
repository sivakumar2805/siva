const Joi = require('joi');

const companyValidator = Joi.object({
  company: Joi.string()
    .min(3)
    .message('company name must be minimum 3 characters')
    .max(50)
    .message('company name must be maximum 50 characters')
    .required()
    .messages({
      'any.required': 'CompanyName is required!!',
      'string.empty': 'CompanyName is not allowed to be empty!!',
      'string.trim': 'CompanyName must not have leading or trailing whitespace',
      'string.base': 'CompanyName must be a string',
      'string.pattern.base': 'CompanyName does not allow special characters',
    }),

  contactname: Joi.string()
    .min(3)
    .message('contactname must be minimum 3 characters')
    .max(50)
    .message('contactname name must be maximum 50 characters')
    .required(),
  address: Joi.string()
    .max(200)
    .message('address must be maximum 200 characters')
    .allow(null),

  city: Joi.string()
    .max(50)
    .message('city must be maximum 50 characters')
    .allow(null),

  state: Joi.string()
    .max(50)
    .message('state must be maximum 50 characters')
    .allow(null),

  pincode: Joi.string()
    .max(200)
    .message('pincode must be maximum 200 characters')
    .allow(null),

  taxid: Joi.string()
    .max(200)
    .message('taxid must be maximum 200 characters')
    .required()
    .allow('')
    .allow(null),

  country: Joi.string()
    .max(100)
    .message('countryname must be maximum of 100 characters')
    .allow(null)
    .allow(''),

  emails: Joi.array().items(
    Joi.object({
      email: Joi.string()
        .trim(true)
        .min(8)
        .message('email must be minimum of 8 characters')
        .max(35)
        .message('email must be maximum of 35 characters'),
    })
  ),
  phonenumbers: Joi.array().items(
    Joi.object({
      phonenumber: Joi.string()
        .trim(true)
        .min(10)
        .message('phonenumber must be minimum of 10 characters')
        .max(13)
        .message('phonenumber must be maximum of 13 characters'),
    })
  ),
});

// const companyIdValidator = Joi.object({
//   profileid: Joi.string()
//     .strict()
//     .min(1)
//     .message('ObjectID must be min 1 characters')
//     .max(24)
//     .message('ObjectId must be maximum 24 characters')
//     .messages({
//       'string.empty': `ObjectID Cannot be Empty !!`,
//       'string.base': `ObjectID must be String !!`,
//       'any.required': 'ObjectID is required!!',
//       'string.trim': 'ObjectID must not have leading or trailing whitespace',
//     })
//     .required(),
// });

const companyListValidator = Joi.object({
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

const updateValidator = Joi.object({
  companyid: Joi.string()
    .strict()
    .min(1)
    .message('ObjectID must be min 1 characters')
    .max(24)
    .message('ObjectId must be maximum 24 characters')
    .messages({
      'string.empty': `ObjectID Cannot be Empty !!`,
      'string.base': `ObjectID must be String !!`,
      'any.required': 'ObjectID is required!!',
      'string.trim': 'ObjectID must not have leading or trailing whitespace',
    })
    .required(),

  company: Joi.string()
    .min(3)
    .message('company name must be minimum 3 characters')
    .max(50)
    .message('company name must be maximum 50 characters')
    .required()
    .messages({
      'any.required': 'CompanyName is required!!',
      'string.empty': 'CompanyName is not allowed to be empty!!',
      'string.trim': 'CompanyName must not have leading or trailing whitespace',
      'string.base': 'CompanyName must be a string',
      'string.pattern.base': 'CompanyName does not allow special characters',
    }),

  contactname: Joi.string()
    .min(3)
    .message('contactname must be minimum 3 characters')
    .max(50)
    .message('contactname name must be maximum 50 characters')
    .required(),
  address: Joi.string()
    .max(200)
    .message('address must be maximum 200 characters')
    .allow(null),

  city: Joi.string()
    .max(50)
    .message('city must be maximum 50 characters')
    .allow(null),

  state: Joi.string()
    .max(50)
    .message('state must be maximum 50 characters')
    .allow(null),

  pincode: Joi.string()
    .max(200)
    .message('pincode must be maximum 200 characters')
    .allow(null),

  taxid: Joi.string()
    .max(200)
    .message('taxid must be maximum 200 characters')
    .allow('')
    .allow(null),

  country: Joi.string()
    .max(100)
    .message('countryname must be maximum of 100 characters')
    .allow(null)
    .allow(''),

  emails: Joi.array().items(
    Joi.object({
      email: Joi.string()
        .trim(true)
        .min(8)
        .message('email must be minimum of 8 characters')
        .max(35)
        .message('email must be maximum of 35 characters'),
    })
  ),
  phonenumbers: Joi.array().items(
    Joi.object({
      phonenumber: Joi.string()
        .trim(true)
        .min(10)
        .message('phonenumber must be minimum of 10 characters')
        .max(13)
        .message('phonenumber must be maximum of 13 characters'),
    })
  ),
});

module.exports = { companyValidator, companyListValidator, updateValidator };
