// const array = [
//   {
//     name: "siva",
//     age: 21,
//   },
//   {
//     name: "abcd",
//     age: 21,
//   },
//   {
//     name: "abcd",
//     age: 21,
//   },
//   {
//     name: "abcd",
//     age: 21,
//   },
// ];

// const value = array.filter((e) => {
//   return e.name === "abcd";
// });

// console.log(value);

// const arrObj = [
//   {
//     name: "siva",
//     age: 21,
//   },
//   {
//     name: "abcd",
//     age: 21,
//   },
// ];

// const arrObj2 = [
//   {
//     name: "siva",
//     age: 21,
//   },
//   {
//     name: "abcd",
//     age: 21,
//   },
// ];

// const total = arrObj(...arrObj2);

// const total = [...arrObj, ...arrObj2];

// console.log("****", total);

/**const myPromise = new Promise((resolve, reject) => {
  function numbers(num) {
    resolve();
    return num > 0;
  }
  numbers();
});

myPromise
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("Failure");
  });*/

// function siva(name) {
//   return { data: name };
// }

// console.log(siva('siva'));

const a = async (name) => {
  return await b(name);
  // console.log(`my name is ${name}`);
};
const b = async (name) => {
  return await c(name);
  // console.log(`my name is ${name}`);
};
const c = async (name) => {
  return 123;
  // console.log(`my name is ${name}`);
};
