// const init = () => {
//   const name = 'siva';
//   const display = () => {
//     console.log(name);
//   };
//   display();
// };

// init();

const first = () => {
  const name = 'siva';
  const second = () => {
    console.log(name);
    const third = () => {
      console.log(name);
    };
    third();
  };
  second();
};

first();
