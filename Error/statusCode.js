// const httpStatusCodes = {
//   OK: 200,
//   BAD_REQUEST: 400,
//   UNAUTHORIZED: 401,
//   NOT_FOUND: 404,
//   INTERNAL_SERVER: 500,
// };

// module.exports = httpStatusCodes;

/* const first = (p1, p2) => {
  if (p1 === 'User_Tax') {
  } else if (p2 === 'User_Tandc') {
  }
}; */

// const arr = [{ name: 'siva', name: 'kumar', name: 'siva' }];

// const find =

const fn = (arr) => {
  arr.find((e) => {
    console.log('e', e.name);
    return e.name == 'siva';
  });
};
const arr = [
  { name: 'siva', age: 10 },
  { name: 'kumar', age: 20 },
  { name: 'siva', age: 30 },
];
console.log('1', fn(arr));

/* let customers = [
  {
    name: 'ABC Inc',
    credit: 100,
  },
  {
    name: 'ACME Corp',
    credit: 200,
  },
  {
    name: 'IoT AG',
    credit: 300,
  },
];

console.log(customers.find((c) => c.credit > 100));
 */
