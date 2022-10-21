const jsonObj = require('./json1.json');

const obj = {
  name: 'kumar',
  age: 22,
};

const data = JSON.parse(JSON.stringify(jsonObj.data));
// const data = JSON.parse(JSON.stringify(obj));
console.log('data', data);

const dataObj = {
  items: {
    itemname: 'Keyboard',
    itemprop: {
      name: 'Key',
      name2: {
        keyname: 'store',
      },
    },
  },
};

// const {
//   items: {
//     itemprop: {
//       name2: { keyname },
//     },
//   },
// } = dataObj;

// console.log('KeyName', keyname);

// const obj2 = {
//   ...dataObj.items,
// };

// console.log('Obj2', obj2);

/**const arr1 = [1, 2, 3, 4, 5];

const obj1 = {
  arr1: 'value',
};

obj1.arr1 = arr1;

console.log('obj1@@@', obj1);*/

const arrOfObj = [
  {
    items1: ['1,2,3'],
  },
  {
    items2: ['4,5,6'],
  },
  {
    items3: ['7,8,9'],
  },
];

const value = arrOfObj.forEach((e) => {
  console.log('element', e);
});
