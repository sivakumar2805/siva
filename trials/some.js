const studentsList = [
  {
    name: 'siva',
    passed: true,
  },
  {
    name: 'kumar',
    passed: false,
  },
  {
    name: 'akash',
    passed: true,
  },
];

const every = studentsList.every((value) => value.passed);
console.log(every);

const some = studentsList.some((value) => value.passed);
console.log(some);

const a = [1, 2];
const b = [1, 2];
const intersection = a.filter((element) => b.includes(element));
if (JSON.stringify(a) === JSON.stringify(b)) {
  console.log('Array Matched');
  return;
}
console.log('Array Doesnot Matched');
// console.log('intersection', intersection);
