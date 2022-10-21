const Ajv = require('ajv');

const schema = {
  type: 'object',
  properties: {
    DOB: {
      type: 'string',
      // required: true,
      pattern:
        '/^(([1-9]|0[1-9]|1[0-9]|2[1-9]|3[0-1])[-](JAN|FEB|MAR|APR|MAY|JUN|JULY|AUG|SEP|OCT|NOV|DEC)[-](d{4}))$/i',
      message: {
        required: 'Date of Birth is Required Property',
        pattern: 'Correct format of Date Of Birth is dd-mmm-yyyy',
      },
    },
  },
};

// const schemaAsObject = JSON.parse(schema);

const validObj = {
  DOB: 'ed6f12d2-d1cb-11ec-9d64-0242ac120',
};

const ajv = new Ajv({ allErrors: true });

console.log('Validation', ajv.validate(schema, validObj));
console.log('Errors', ajv.errors);
