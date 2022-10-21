const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajvErrors = require('ajv-errors');

const schema = {
  type: 'object',
  required: ['foo', 'bar'],
  allOf: [
    {
      properties: {
        foo: { type: 'integer', minimum: 2 },
        bar: { type: 'string', minLength: 2 },
      },
      additionalProperties: true,
    },
  ],
  errorMessage: {
    type: 'data should be an object',
    properties: {
      foo: 'data.foo should be integer >= 2',
      bar: 'data.bar should be string with length >= 2',
    },
    // _: 'data should have properties "foo" and "bar" only',
  },
};

const validObj = {
  bar: 'si',
};

const ajv = new Ajv({ allErrors: true, $data: true });
addFormats(ajv);
ajvErrors(ajv);
console.log('Validation', ajv.validate(schema, validObj));
console.log('Error', ajv.errors);
console.log('Error Message:', ajv.errors[0].message);
// console.log('Error Message2:', ajv.errors[0].params.errors[0]);
