const arr = [
  { id: 1, name: 'siva' },
  { id: 2, name: 'kumar' },
  { id: 3, name: 'akash' },
];

const removeFn = (param) => {
  const value = arr.filter((object) => {
    return object.name !== param;
  });
  return value;
};
console.log(removeFn('siva'));
