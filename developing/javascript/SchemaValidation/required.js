const Ajv = require('ajv');

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'integer',
    },
  },
  required: ['name', 'age'],
  // optional: ['name', 'age'],
};

const validObj = {
  // name: 'siva',
  // age: 21,
};

const ajv = new Ajv({ allErrors: true });
console.log('ajv', ajv);

console.log('Validation', ajv.validate(schema, validObj));
console.log('Errors', ajv.errors);
