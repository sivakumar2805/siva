// function greet(name, callback) {
//   console.log('Hi' + ' ' + name);
//   callback();
// }

// function callme() {
//   console.log('I am CallBack Function');
// }

// greet('Siva', callme);

// ******************* ********************

const [arr] = [
  {
    name: 'siva',
  },
  {
    name: 'akash',
  },
  {
    name: 'kumar',
  },
];
// console.log('arr', arr);

// const [name] = arr;
// console.log('name', name);

const nested = [['GAE']];

const [ab] = nested;
// console.log(ab);

const regex = new RegExp(/SBWO:Create/);
console.log('regex', regex);
const id = regex.source;
console.log('id', id);

const obj = [
  {
    name: 'siva',
    age: 21,
  },
];

console.table('obj', obj);
