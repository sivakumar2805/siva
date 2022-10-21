let arr = [
  { id: 1, name: 'sravan ganji' },
  { id: 2, name: 'pinky' },
  { id: 4, name: 'mammu' },
  { id: 3, name: 'avy' },
  { id: 3, name: 'rashni' },
  { id: 3, name: 'siva' },
];

// console.log(
//   Object.values(
//     arr.reduce((acc, cur) => Object.assign(acc, { [cur.id]: cur }), {})
//   )
// );

const filteredArr = arr.reduce((acc, current) => {
  const x = acc.find((item) => item.id === current.id);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);
