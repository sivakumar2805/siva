const arr1 = [
  { id: 1, name: 'narendar' },
  { id: 2, name: 'mohan' },
  { id: 3, name: 'siva' },
  { id: 4, name: 'ajith' },
];
const arr2 = [
  { id: 1, name: 'sandy' },
  { id: 2, name: 'praveen' },
  { id: 3, name: 'kamal' },
];

/**function getDifference(array1, array2) {
  return array1.filter((object1) => {
    console.log('object1', object1);
    return !array2.some((object2) => {
      //   console.log('object2', object2);
      return object1.id === object2.id;
    });
  });
}*/

// 👇️ [{id: 2, name: 'John'}]
// console.log(getDifference(arr1, arr2));

function isArray(value) {
  if (toString.call(value) === '[object Array]') {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}

// isArray(['siva']);

/**const myColor = ['Red', 'Green', 'White', 'Black'];
// console.log(myColor.toString());
// console.log(myColor.join());
console.log(myColor.splice(2, 0, 'Yellow'));
console.log(myColor.join('+'));*/

var str = 'SiVa';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for (var x = 0; x < str.length; x++) {
  // console.log('X', str.length);
  if (UPPER.indexOf(str[x]) !== -1) {
    // console.log('Str[x]', str[x]);
    result.push(str[x].toLowerCase());
  } else if (LOWER.indexOf(str[x]) !== -1) {
    // console.log('str[x]', LOWER.indexOf(str[x]) !== -1);
    result.push(str[x].toUpperCase());
  } else {
    result.push(str[x]);
  }
}
console.log('results', result);
console.log(result.join(''));
