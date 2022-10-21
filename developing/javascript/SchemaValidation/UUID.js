const Ajv = require('ajv');

const schema = `{
    "type": "object",
    "properties": {
            "id": {
              "type": "string",
              "pattern": "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}",
              "maximum" :36
            },
      "name" :{
          "type" : "string"
      }
    },
    "required": [
      "id"
    ]
  }`;

const schemaAsObject = JSON.parse(schema);

const validObj = {
  id: 'ed6f12d2-d1cb-11ec-9d64-0242ac120c1f',
};

const ajv = new Ajv({ allErrors: true });

console.log('Validation', ajv.validate(schemaAsObject, validObj));
console.log('Errors', ajv.errors);
