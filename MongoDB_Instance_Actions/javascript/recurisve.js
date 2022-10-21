let num = 0;
const function2 = (a) => {
  console.log('A Value=', (num += 1), a);
  if (a === 1) {
    a = 2;
    function2(a);
  } else {
    console.log('Matched', a);
  }
};

function2(1);
