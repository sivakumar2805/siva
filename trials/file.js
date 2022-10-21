// const path = `/sb/save/`;

// if (path.includes(`/sb/save`)) {
//   console.log('done');
// }

/**const arr = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log('Sum', sum);*/

const fn = (arr) => {
  // const b = arr.forEach((e) => {
  //   if (e.name.includes('siv')) {
  //     return e.name;
  //   }
  // });
  const b = arr.filter((e) => {
    return e.name.includes('si');
  });
  console.log('bbb', b);
};

fn([
  {
    name: 'siva',
  },
  {
    name: 'kumar',
  },
  {
    name: 'siva',
  },
]);
