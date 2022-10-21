/**(function names(param) {
  const name = param;
  console.log('Name', name);
})('siva');*/

// It's Also Working:

/**(names = (name) => {
  console.log(name);
})('siva');*/

// Requiring the lodash library
const _ = require('lodash');

// The source object
var obj = {
  Name: 'GeeksforGeeks',
  password: 'gfg@1234',
  username: 'your_geeks',
};

// Using the _.omit() method
// console.log(_.omit(obj, ['password', 'username']));

let count = 1;

const newPromise = new Promise((resolve, reject) => {
  if (count > 1) {
    resolve(`Greater Than 1`);
  } else {
    reject('Less Than 1');
  }
});

newPromise
  .then((e) => {
    console.log('Success', e);
  })
  .catch((err) => {
    console.log('Error', err);
  });
