// Default Parameters

/** function Person(name, age, gender = "male") {
     this.name = name;
     this.age = age;
     this.gender = gender;
}

const siva = new Person("siva", 21);
const { name, age, gender } = siva;
console.log(name, age, gender);
*/

// Deleting Object key And Replacing New Key
/**const details = {
  names: "siva",
  age: 21,
  email: "siva@mail.com",
};

details["name"] = details["names"];
delete details["names"];
console.log(details);*/

// Rest Parameter

/**[a, b, c, d, e] = [10, 20, 30, 40, 50, 60];

[a, b, ...rest] = [10, 20, 30, 40, 50, 60];

// console.log(a, b, c, d, e);
console.log(a, b, rest);*/

// ES5
/**function addNumbers() {
  const numbers = Array.prototype.slice.call(arguments);
  //   console.log(arguments);
  //   console.log(numbers);

  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  console.log(sum);
}
addNumbers(1, 2, 3);*/

//ES6

/**function addNumbers(...numbers) {
  console.log(numbers);
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  console.log(sum);
}
addNumbers(1, 2, 3);*/

// Spread Operator

function sum(a, b, c) {
  return a + b + c;
}
const numbers = [10, 20, 30];

// ES5
/*const result = sum.apply(null, numbers);
console.log(result);*/

//ES6
const result2 = sum(...numbers);
console.log(result2);
