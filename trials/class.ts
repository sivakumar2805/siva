// class Greeter {
//   readonly name: string = 'World';

//   constructor(othername?: string) {
//     if (othername !== undefined) {
//       this.name = othername;
//     }
//   }
// }

// class Point {
//   x: number;
//   y: number;
// }

// const pt = new Point();
// pt.x = 0;
// pt.y = 0;

class Point {
  x = 0;
  y = 0;
}

const pt = new Point();
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);
