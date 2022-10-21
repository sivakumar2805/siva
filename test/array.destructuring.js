function getScores() {
  return [10, 20, 30, 40, 50, 60];
}

const [a, b, ...args] = getScores();

console.log('a', a);
console.log('b', b);
console.log('args', args);
