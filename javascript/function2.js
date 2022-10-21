const argValidations = ({ type, value, reqkeys }) => {
  console.log('type', type);
  console.log('value', value);
  console.log('reqkeys', reqkeys);

  let isvalid = false;
  let unmatchedElements;
  switch (type) {
    case 'object':
      const actualkeys = Object.keys(value);
      console.log('actualkeys', actualkeys);

      const actualValues = Object.values(value);
      console.log('actualValues', actualValues);

      //   console.log('Array Matched');
      const exists = reqkeys.every((d) => actualkeys.includes(d));

      if (exists) {
        return (isvalid = true);
      }
      unmatchedElements = reqkeys.filter((i) => {
        return actualkeys.indexOf(i) === -1;
      });

      console.log('unmatchedElements', unmatchedElements);
      return {
        message: `Invalid Args..Please Check Passes Args`,
      };

    case 'string':
      if (typeof value === 'string') {
        return (isvalid = true);
      }
      //   unmatchedElements = reqkeys.filter((i) => {
      //     return actualkeys.indexOf(i) === -1;
      //   });

      //   console.log('unmatchedElements1', unmatchedElements);
      return { message: `Invalid Args Required String Parms` };
    case 'number':
      if (typeof value === 'number') {
        return (isvalid = true);
      }
      //   unmatchedElements = reqkeys.filter((i) => {
      //     return actualkeys.indexOf(i) === -1;
      //   });

      //   console.log('unmatchedElements2', unmatchedElements);
      return { message: `Invalid Args Required Number Parms ` };
    default:
      break;
  }
};

const valid = argValidations({
  type: 'object',
  value: { key1: 'value1', key2: 'value2' },
  reqkeys: ['key1', 'key2'],
});
console.log('valid', valid);

const object = {
  title: 'SB For billtype',
  description: 'description For IsRead',
  billtype: 'Global',
};

// console.log(Object.values(object));
