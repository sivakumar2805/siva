const arr1 = [
  {
    name: 'siva',
    age: 21,
    isPassedOut: true,
  },
  {
    name: 'krishna',
    age: 21,
    isPassedOut: true,
  },
  {
    name: 'kumar',
    age: 23,
    isPassedOut: false,
  },
];

// Adding an element in an array
// Push,Unshift,splice
/**const unshift = arr1.unshift({ name: 'vicky', age: 24, isPassedOut: false });

const splice = arr1.splice(3, 0, { name: 'vicky', age: 25, isPassedOut: true });

console.log(arr1);*/

// Finding an element in an array

/**const find = arr1.find(function (arr) {
  return arr.age === 21;
});
console.log('find', find);*/

// For-Each

/**const forEach = arr1.forEach(function (arr, index) {
  console.log(index, arr.age);
});*/

/**const fullName = 'Siva Kumar';
const name = fullName.split(' ');
console.log(name);

const firstName = name[0];
const lastName = name[1];
console.log(`My FirstName is ${firstName} and LastName is ${lastName}`);*/

const postTitle = 'this is my post';

const postSlug = postTitle.split(' ');

const finalSlug = postSlug.join('_');
console.log(finalSlug);
