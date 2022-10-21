//const Joi = require('joi');

const obj = {
  name: 'null',
};
/* 
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj)); */

const validation = ({ value, reqKeys }) => {
  const data = Object.entries(value);
  data.map((e) => {
    const [key, value] = e;

    if (!reqKeys.includes(key)) {
      console.log('Need req Keys');
    }

    if (reqKeys.includes(key) && !value) {
      console.log('Value in key cannot be null');
    }
  });
  return data;
};

console.log(validation({ value: obj, reqKeys: ['name'] }));
