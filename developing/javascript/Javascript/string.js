const a = ["A", "B", "C"];
const b = [
  {
    value1: "AAA",
    value2: "BBB",
  },
  {
    value1: "CCC",
    value2: "DDD",
  },
  {
    value1: "GGG",
    value2: "RRR",
  },
];

// const obj1 = {
//   value2: "111",
//   value3: "222",
// };

b.forEach((data, index) => {
  data["value3"] = a;
});

// console.log("Data in Array", b[0].value3);
// console.log("Object Value", obj1.value4);

console.log("After Array Each", b);

// String
const language = "     java script";
//indexOf
console.log(language.indexOf("ript"));

// Search
console.log(language.search("script"));

//Slice
console.log(language.slice(5, 11));

//Replace
console.log(language.replace(" ", "_"));

//Trim
console.log(language.trim());
console.log(language);

// New Line
console.log("This is \nsiva kumar");

// Type Conversion

let age = 45;

age = Number(age);
age = String(age);
console.log(typeof age);

// Type Coercion

let num1 = "10";
let num2 = 20;

let result = num1 + num2;
console.log(result);
console.log(typeof result);

//Date

let date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMilliseconds());

//Assignment Operator

let num = 5;
num += 500; // num = num + 500
console.log(num);
