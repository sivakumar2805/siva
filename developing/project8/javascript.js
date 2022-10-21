// const value = JSON.parse(JSON.stringify(data));
// console.log(value);

async function a() {
  // console.log('a');
}
async function b() {
  await a();
  // console.log('b');
}
async function c() {
  await b();
  // console.log('c');
}
async function d() {
  await c();
  // console.log('d');
}

const data = async () => {
  await d();
};
// console.log('data', data);
data();
