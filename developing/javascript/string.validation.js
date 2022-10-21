const Joi = require('joi');
const testObj = {
  name: '1',
};
const requiredMsgTypes = {
  field: 'Name',
  base: true,
  guid: true,
  required: true,
  trim: true,
  empty: true,
  pattern: true,
  email: true,
  minlength: { min: true, length: 0 },
  maxlength: { max: true, length: 0 },
};

const getStringMessages = ({
  field = 'Name' /**asdjaksdjaklsjd */,
  base = false,
  guid = false,
  required = false,
  trim = false,
  empty = false,
  pattern = false,
  email = false,
  minlength = { min: true, length: 0 },
  maxlength = { max: true, length: 0 },
} = requiredMsgTypes) => {
  const baseMessage = base
    ? { [`string.base`]: `${field} must be a string` }
    : null;
  const requiredMessage = required
    ? { [`any.required`]: `${field} is required` }
    : null;
  const emptyMessage = empty
    ? { [`string.empty`]: `${field} is not allowed to be empty` }
    : null;
  const trimMessage = trim
    ? {
        [`string.trim`]: `${field} must not have leading or trailing whitespace`,
      }
    : null;
  const patternMessage = pattern
    ? { [`string.pattern.base`]: `${field} does not allow special characters` }
    : null;

  const guidMessage = guid
    ? { [`string.guid`]: `${field} must be valid UUID` }
    : null;

  const minlengthMessage = minlength.min
    ? { [`string.min`]: `${field} must be min ${minlength.length} characters` }
    : null;

  const maxlengthMessage = maxlength.max
    ? { [`string.max`]: `${field} must be max ${maxlength.length} characters` }
    : null;

  const emailMessage = email
    ? {
        [`string.email`]: `${field} must be a Valid Email`,
      }
    : null;

  const messages = {
    ...requiredMessage,
    ...emptyMessage,
    ...trimMessage,
    ...baseMessage,
    ...patternMessage,
    ...guidMessage,
    ...maxlengthMessage,
    ...minlengthMessage,
    ...emailMessage,
  };

  return messages;
};

const nameJoi = Joi.string().min(5).guid().email();

const testSchema = Joi.object({
  name: nameJoi.messages(
    getStringMessages({
      field: 'Name',
      base: true,
      guid: true,
      minlength: { min: true, length: 5 },
      email: true,
    })
  ),
});

const { error } = testSchema.validate(testObj, { abortEarly: false });
console.log('Error', error);

module.exports = { getStringMessages };
