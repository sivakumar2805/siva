// (async (a) => {
//   console.log(a);
//   return a;
// })('1');

// const a =
//   'rfqAppdevrfqApirfqaddendumrfqinboxbyidGETApiPermissionrfqAppdevParentStackrfqAppdevrfqStackrfqAppdevrfqApiStackrfqAppdevrfqApi019A6F44GETrfqaddendumrfqinboxbyid561F3B84';

// console.log(a.length);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((pv, cv) => pv + cv, initialValue);

console.log(sumWithInitial);
// expected output: 10
