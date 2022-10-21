const a = async () => {
  console.log('a');
  console.log('Return Value From A', await b());
};
const b = async () => {
  console.log('b');
  return await c();
};

const c = async () => {
  console.log('c');
  return await d();
};
const d = async () => {
  return 123;
};

a();
