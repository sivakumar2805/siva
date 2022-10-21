const fun1 = () => {
  console.log('Hello');
};

const commonFn = ({ param, param2, param3 }) => {
  return {
    key: param,
    key2: param2,
    a() {
      const a = { key3: param3 };
      return a.key3;
    },
  };
};
// console.log(commonFn({ param: 'value1', param2: 'value2', param3: 'value3' }));

const convertToNumber = (reqdata) => {
  let { offset, pagesize } = reqdata;
  // console.log('offset1', typeof offset);
  // console.log('pagesize1', typeof pagesize);
  offset = parseFloat(offset);
  pagesize = parseFloat(pagesize);
  // console.log('offset2', typeof offset);
  // console.log('pagesize2', typeof pagesize);
  return {
    offset,
    pagesize,
  };
};

convertToNumber({ offset: '0', pagesize: '5' });

module.exports = { convertToNumber };
