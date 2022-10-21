// program to count down numbers to 1
/**function countDown(number) {
  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);*/

//function that adds two numbers
function sum(a, b) {
  return a + b;
}

// calling sum() function
var result = sum.call(this, 5, 10);

console.log(result);

//Output:
// 15
