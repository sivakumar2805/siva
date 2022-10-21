const str = 'Bearer 131365456413122645';
const token = str.replace('Bearer ', '');
// console.log(typeof token);
if (token == null) {
  console.log('No Null');
}
console.log('str', str);
console.log('token', token);
