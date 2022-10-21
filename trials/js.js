/**const array1 = [[1, 2, 3, 4, 5]];

const map = array1.map((e) => e.map((a) => console.log('a', a)));

const foreach = array1.forEach((e) => e.forEach((a) => console.log('aaa', a)));

const arr2 = [
  {
    name: 'kamal',
  },
];

const find = arr2.find((e) => e.name === 'kamal');
console.log('find', find);
*/

const array = [
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
  { num: 6 },
  { num: 7 },
  { num: 8 },
  { num: 9 },
  { num: 10 },
  { num: 11 },
  { num: 12 },
];

const map = array.map((e) => {
  // console.log('Element', e);
});

const foreach = array.forEach((e) => {
  // console.log('Element', e);
});

const filter = array.filter((e) => {
  e.num === 1;
  // console.log(e.num === 1);
});
