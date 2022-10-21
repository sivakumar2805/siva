const function1 = (a) => (req, res, next) => {
  console.log('A Value', a);
  console.log('B Value', req);
};

const function2 = (a) => {
  console.log('A Value', a);
  return function function3(b) {
    console.log('B Value', b);
  };
};

function1('Object1');
