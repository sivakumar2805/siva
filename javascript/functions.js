const argValidations = ({ type = 'text', value = '', reqkeys = [] }) => {
  console.log('type', type);
  console.log('value', value);
  console.log('reqkeys', reqkeys);

  let isvalid = false;
  let unmatchedElements;

  switch (type) {
    case 'object':
      const actualkeys = Object.keys(value);
      console.log('Keyss', actualkeys);
      if (JSON.stringify(actualkeys) === JSON.stringify(keys)) {
        console.log('Array Matched');

        return (isvalid = true);
      }
      return { message: `Invalid Args Required Parms are ${keys}` };
    case 'string':
      if (typeof value === 'string') {
        return (isvalid = true);
      }
      return { message: `Invalid Args Required String Parms` };
    case 'number':
      if (typeof value === 'number') {
        return (isvalid = true);
      }
      return { message: `Invalid Args Required Number Parms` };
    default:
      break;
  }
};

const checkfn = (obj) => {
  const valid = argValidations({
    type: 'string',
    value: obj,
    keys: ['a', 'b'],
  });
  console.log('Arg Validations', valid);
  if (valid === true) {
    const { a, b } = obj;
    return;
  }

  throw new Error('Invalid Arg');
};
// checkfn({ a: 23123 });
let arr1 = [1, 2, 3];
let arr2 = [1, 2];
let allFounded = arr2.every((ai) => arr1.includes(ai));
console.log('allFounded', allFounded);

let str = 'JS indexOf';
let substr = 'js';

let index = str.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase());

console.log(index); // 0
