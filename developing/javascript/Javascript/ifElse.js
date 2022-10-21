const Ajv = require('ajv');

const schema = {
  type: 'object',
  properties: {
    refno: {
      type: 'string',
      minLength: 2,
    },
    autoref: {
      type: 'boolean',
    },
  },
  if: {
    properties: {
      autoref: {
        enum: [false],
      },
    },
  },
  then: {
    required: ['refno'],
  },
  //   if: {
  //     properties: {
  //       autoref: false,
  //     },
  //   },
  //   then: { required: ['refno'] },

  //   required: ['refno', 'autoref'],
};

// const schemaAsObject = JSON.parse(schema);

const validObj = {
  autoref: false,
  //   refno: '1w',
};

const ajv = new Ajv({ allErrors: true });

console.log('Validation', ajv.validate(schema, validObj));
console.log('Errors', ajv.errors);
