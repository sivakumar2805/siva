const Joi = require('joi');

const requiredMsgTypes = {
  field: 'isactive',
  required: true,
  base: true,
};

const getBooleanMessages = ({
  field = 'isactive',
  required = false,
  base = false,
} = requiredMsgTypes) => {
  const requiredMessage = required
    ? { [`any.required`]: `${field} is required` }
    : null;

  const baseMessage = base
    ? { [`boolean.base`]: `${field} must be a true or false` }
    : null;

  const messages = {
    ...requiredMessage,
    ...baseMessage,
  };

  return messages;
};

const testSchema = Joi.object({
  isactive: Joi.boolean()
    .required()
    .messages(
      getBooleanMessages({
        field: 'isactive',
        base: true,
        required: true,
      })
    ),
});

const testObj = {
  //   isactive: 'abdgd',
};
const { error } = testSchema.validate(testObj, { abortEarly: false });
console.log('Error', error);
