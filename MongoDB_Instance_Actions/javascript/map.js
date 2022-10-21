/**function printString(a, b, str) {
  str += ' concated first';
  console.log('String ', str);
  return a(b, str);
}

function concatFirst(callback_only, str) {
  return callback_only(str);
}

function concatAgain(str) {
  str += ' contated again';
  console.log(str);
  return str;
}

const a = printString(concatFirst, concatAgain, 'anything');
console.log('Call Back', a);*/

let myMap = new Map();

// Adding key value pair with chaining
myMap.set(1, 'India');
myMap.set(2, 'England');
myMap.set(3, 'Canada');

console.log('MyMap1', myMap);
// Creating a Iterator object
const mapIterator = myMap.values();
console.log('iterator', mapIterator);
// Getting values with iterator
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);
