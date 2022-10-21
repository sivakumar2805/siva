const Joi = require('joi');

const pattern = /.*hai hello$/;
const str = 'haiiiii hello';

// console.log('pattern', str.match(pattern));
console.log('pattern', pattern.test('hai hello'));
