function call(name) {
  const obj = {
    fn: function fn1() {
      return (this.name = name);
    },
  };
  return obj.fn();
}

console.log(call('siva'));

console.log({ key: call.name });

const array = [1, 2, 3, 4, 5, 6, 7];
function a(arr) {
  //   arr.pop();
  //   arr.shift();
  //   arr.unshift(0);
  //   arr.push(4);
  arr.splice(2, 2, 1000);
  arr.splice();
}
console.log(array);
a(array);
console.log(array);
