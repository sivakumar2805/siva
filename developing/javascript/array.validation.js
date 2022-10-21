const Joi = require('joi');
const { getStringMessages } = require('./string.validation');

// const requiredMsgTypes = {
//   field: 'name',
//   base: true,
//   guid: true,
//   required: true,
//   trim: true,
//   empty: true,
//   pattern: true,
//   email: true,
//   minlength: { min: true, length: 0 },
//   maxlength: { max: true, length: 0 },
// };

// const getStringMessages = ({
//   field = 'name' /**asdjaksdjaklsjd */,
//   base = false,
//   guid = false,
//   required = false,
//   trim = false,
//   empty = false,
//   pattern = false,
//   email = false,
//   minlength = { min: true, length: 0 },
//   maxlength = { max: true, length: 0 },
// } = requiredMsgTypes) => {
//   const baseMessage = base
//     ? { [`string.base`]: `${field} must be a string` }
//     : null;
//   const requiredMessage = required
//     ? { [`any.required`]: `${field} is required` }
//     : null;
//   const emptyMessage = empty
//     ? { [`string.empty`]: `${field} is not allowed to be empty` }
//     : null;
//   const trimMessage = trim
//     ? {
//         [`string.trim`]: `${field} must not have leading or trailing whitespace`,
//       }
//     : null;
//   const patternMessage = pattern
//     ? { [`string.pattern.base`]: `${field} does not allow special characters` }
//     : null;

//   const guidMessage = guid
//     ? { [`string.guid`]: `${field} must be valid UUID` }
//     : null;

//   const minlengthMessage = minlength.min
//     ? { [`string.min`]: `${field} must be min ${minlength.length} characters` }
//     : null;

//   const maxlengthMessage = maxlength.max
//     ? { [`string.max`]: `${field} must be max ${maxlength.length} characters` }
//     : null;

//   const emailMessage = email
//     ? {
//         [`string.email`]: `${field} must be a Valid Email`,
//       }
//     : null;

//   const messages = {
//     ...requiredMessage,
//     ...emptyMessage,
//     ...trimMessage,
//     ...baseMessage,
//     ...patternMessage,
//     ...guidMessage,
//     ...maxlengthMessage,
//     ...minlengthMessage,
//     ...emailMessage,
//   };

//   return messages;
// };

const getArrMessages = ({
  required = false,
  minlength = { min: false, length: 0 },
  field = 'Array',
  base = false,
}) => {
  const baseMessage = base ? { [`array.base`]: `${field} is required` } : null;
  const requiredMessage = required
    ? { [`any.required`]: `${field} is required` }
    : null;
  const minMessage = minlength.min
    ? { [`array.min`]: `${field} must be min ${minlength.length}` }
    : null;

  const messages = {
    ...requiredMessage,
    ...minMessage,
    ...baseMessage,
  };
  return messages;
};

const testArr = Joi.object({
  emails: Joi.array()
    .items(
      Joi.object({
        email: Joi.string()
          .min(2)
          .required()
          .messages(
            getStringMessages({
              field: 'Email in Emails',
              minlength: { min: true, length: 2 },
              required: true,
              base: true,
            })
          ),
      })
    )
    .min(1)
    .required()
    .messages(
      getArrMessages({
        field: 'Email Array',
        minlength: { min: true, length: 2 },
        required: true,
        base: true,
      })
    ),
});
const testObj = {
  emails: [],
};

const { error } = testArr.validate(testObj, { abortEarly: false });
console.log('Error in Array', error);
