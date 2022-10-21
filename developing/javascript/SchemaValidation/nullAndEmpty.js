const Ajv = require('ajv');

const schema = `{
  "type": "object",
  "properties": {
    "name": {
      "type": ["string","null"]
    },
    "married": {
      "type": "boolean"
    },
    "title": {
        "type": "string",
        "minLength": 2
    }
  },
  "required": [
    "name",
    "married",
    "title"
  ]
}`;

const schemaAsObject = JSON.parse(schema);

const validObj = {
  name: '',
  married: true,
  title: 'agfgd',
};

// const invalidObj = {
//   age: '20',
//   married: true,
// };

const ajv = new Ajv({ allErrors: true });

console.log('Validation', ajv.validate(schemaAsObject, validObj));
console.log('Errors', ajv.errors);
