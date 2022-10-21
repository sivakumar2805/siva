const Joi = require('joi');

const schema = Joi.object({
  items: Joi.array().length(1).required(),
  password: Joi.string().when('_id', {
    is: Joi.exist(),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
});
const validation = schema.validateAsync({ a: [{ bbb: 11 }], b: 22 });

validation
  .then((res) => {
    console.log('Response', res);
  })
  .catch((err) => {
    console.log('Error', err);
  });
