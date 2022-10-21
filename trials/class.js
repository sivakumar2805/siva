// class response {
//   constructor(status) {
//     console.log('Status', status);
//     this.status = status;
//   }
// }

// const value = new response(401);
// console.log('value', value);

const a = [1, 2, 3];
let total = 0;
let t = 0;

a.map((e) => (total += e));
console.log('Total', total);

a.map((e) => (t = t + e));
console.log('Total111', t);

const b = ['H', 'E', 'L', 'L', 'O'];

let val = '';
b.map((e) => (val = val + e));
console.log('Total', val);
