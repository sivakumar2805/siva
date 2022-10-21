/**let num = [5, 9, 12, 24, 67];

let sum = num.reduce(function (accumulator, curValue) {
  console.log('accumulator', accumulator);
  console.log('curValue', curValue);
  return accumulator + curValue;
}, 0);

console.log('Sum', sum);*/

let arrOfObj = {
  items: [
    {
      name: 'GST',
      rate: 10,
    },
    {
      name: 'CGST',
      rate: 20,
    },
  ],
};

let sum = arrOfObj.items.reduce((acc, cv) => {
  console.log('acc', acc);
  console.log('cv', cv);
  return acc + cv.name;
}, 0);

console.log('sum', sum);
