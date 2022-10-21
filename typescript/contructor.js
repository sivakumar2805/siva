/* class Person {
  constructor(name: any) {
    console.log(`Constructor called with name=${name}`);
  }
}

const personInstance = new Person('Jane'); */
var Person = /** @class */ (function () {
    // name: string;
    // instantiatedAt: Date;
    function Person(name) {
        // this.name = name;
        console.log(name);
    }
    return Person;
}());
var personInstance = new Person('Jane');
