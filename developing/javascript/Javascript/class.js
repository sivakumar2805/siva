// class Car {
//   constructor(brand) {
//     this.carName = brand;
//   }
// }
// const myCar = new Car('Ford');
// console.log('****', myCar);

/**
 * 
 * Use the "extends" keyword to inherit all methods from another class.
   Use the "super" method to call the parent's constructor function.
   */

class Car {
  constructor(brand) {
    // console.log('Brand', brand);
    this.carname = brand;
    console.log('I have a ' + this.carname);
  }
}
// const mycar = new Car('Ford');
// console.log('***', mycar);

class Model extends Car {
  constructor(brand, mod) {
    console.log('Brand!!!', brand);
    console.log('mod!!!', mod);
    super(brand);
    this.model = mod;
    console.log('it is a ' + this.model);
  }
}

const cars = new Model('Swift', 'Dzire');
console.log('Cars', cars);
