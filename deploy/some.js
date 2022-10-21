const { convertToNumber } = require('./index');
const reqdata = {
  offset: '0',
  pagesize: '5',
};
const { offset, pagesize } = convertToNumber(reqdata);
console.log('offset2', offset);
console.log('pagesize2', pagesize);
