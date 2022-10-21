const sentto = [
  {
    email: 'praveen.dhanasekar@gaeprojects.com',
  },
  {
    email: `abc@gaeprojects.com`,
  },
  {
    email: `abc1@gaeprojects.com`,
  },
];

const f = Math.floor(1000);
const r = Math.random();
const a = Math.floor(Math.random() * 3);
const data = sentto[a];
console.log('data', data);

console.log('Floor', f);
console.log('Random', r);
console.log('Index', a);

[...Array(2)].map((e) => {
  console.log('e', e);
});
