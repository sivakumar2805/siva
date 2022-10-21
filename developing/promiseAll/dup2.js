// var array = [
//   {
//     name: 'Steven Smith',
//     Country: 'England',
//     Age: 35,
//   },
//   {
//     name: 'Hannah Reed',
//     Country: 'Scottland',
//     Age: 23,
//   },
//   {
//     name: 'Steven Smith',
//     Country: 'England',
//     Age: 35,
//   },
//   {
//     name: 'Robert Landley',
//     Country: 'England',
//     Age: 84,
//   },
//   {
//     name: 'Steven Smith',
//     Country: 'England',
//     Age: 35,
//   },
//   {
//     name: 'Robert Landley',
//     Country: 'England',
//     Age: 84,
//   },
// ];

// const result = array.forEach(function (name, age) {
//   if (array.name == name || array.age == age) {
//     console.log('the', result);
//   }
// });

const arr = [
  { id: 10, name: 'someName1' },
  { id: 10, name: 'someName2' },
  { id: 11, name: 'someName3' },
  { id: 12, name: 'someName4' },
];

// const unique = arr
//   .map((e) => e['id'])
//   .map((e, i, final) => final.indexOf(e) === i && i)
//   .filter((obj) => arr[obj])
//   .map((e) => arr[e]);
const duplicate = arr.filter((obj) => dublicateIds.includes(obj.id));

console.log('unique', duplicate);
