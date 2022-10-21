/* class Person {
  constructor(name: any) {
    console.log(`Constructor called with name=${name}`);
  }
}

const personInstance = new Person('Jane'); */

class Person {
  // name: string;
  // instantiatedAt: Date;

  constructor(name: string) {
    // this.name = name;
    console.log(name);
  }
}

const personInstance = new Person('Jane');
