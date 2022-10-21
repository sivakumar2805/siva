// let speed = 10;
// let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

// console.log(message);

// let person = {
//   name: 'John',
//   age: 25,
// };

// function increaseAge(obj) {
//   obj.age += 1;
// }

// increaseAge(person);

// console.log(person);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

/**let countDown = function f(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    f(nextNumber);
  }
};*/

/**let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);

function say(message) {
  message = typeof message !== 'undefined' ? message : 'Hi';
  console.log(message);
}
say('bye'); // 'Hi'*/

/*let amount = +0,
  volume = -0;
console.log(Object.is(amount, volume));*/

/*let person1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person1.getFullName());*/

var personActions = {
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

function createPerson(firstName, lastName) {
  let person = Object.create(personActions);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());
