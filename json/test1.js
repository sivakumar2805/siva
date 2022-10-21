const data = require('./test1.json');

const convert = JSON.parse(JSON.stringify(data));
console.log(convert);
