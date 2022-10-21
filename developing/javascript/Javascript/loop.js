// if Statement

/**  const age = 15;

if (age > 18) {
  console.log("You can drive car");
} else {
  console.log("you cannot drive the car");
}*/

// Ternary Operator

// Condition ?  true : false
/*const result = age > 18 ? "you can drive car" : "you cannot drive the car"
console.log(result);*/

// Not Operator

let discountAllowed = true;

if (!discountAllowed) {
  console.log("No Discount");
} else {
  console.log("Discount Allowed");
}

// Else if Statement

const age = 51;

if (age < 18) {
  console.log("You are child");
} else if (age >= 18 && age < 50) {
  console.log("you are young");
} else {
  console.log("you are old");
}

// Switch Statement

const date = new Date();
console.log(date.getDay());

let day;
switch (date.getDay()) {
  case 0:
    day = "sunday";
    break;

  case 1:
    day = "monday";
    break;

  case 2:
    day = "tuesday";
    break;

  case 3:
    day = "wednesday";
    break;

  case 4:
    day = "thursday";
    break;

  case 5:
    day = "friday";
    break;

  case 6:
    day = "saturday";
    break;

  default:
    day = "none";
}

console.log(day);

// For Loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

/**const value1 = [
  {
    name: "siva",
  },
  {
    name: "akash",
  },
  {
    name: "kumar",
  },
];

const value2 = [
  {
    name: "siva",
  },
  {
    name: "akash",
  },
  {
    name: "kumar",
  },
];

const value3 = [...value1, ...value2];
console.log("value3", value3);*/

const numbers = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((element) => {
  console.log(element);
});
