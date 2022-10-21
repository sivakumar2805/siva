const convertToNumber_Pagination = (reqdata) => {
  let { offset = '0', pagesize = '5' } = reqdata;
  offset = parseFloat(offset);
  pagesize = parseFloat(pagesize);
  return {
    offset,
    pagesize,
  };
};

const a = (offset, pagesize) => {
  const reqdata = { offset, pagesize };
  const data = convertToNumber_Pagination(reqdata);
  console.log('data', data);
};

a('6', '7');
