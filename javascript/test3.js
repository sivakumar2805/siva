let string1 = 'CODE';

let paddedString = string1.padStart(10, '*');

// console.log(paddedString);

/**
 * fromCharCode
 */

let string2 = String.fromCharCode(72, 69, 76, 76, 79);
// console.log(string2);

const uuid = require('uuid');
const inboxObj = { title: 'Hai' };
let rfqinboxid = uuid.v4();
inboxObj.rfqinboxid = rfqinboxid;
// console.log(inboxObj);
