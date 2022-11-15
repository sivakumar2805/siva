// const boolean = true;

// const obj = {
//   cloud: 'aws',
// };

// const func = (val) => {
//   if (val) {
//     return true;
//   }

//   {
//   }
// };

// console.log(func(obj));

const getTransformedDate = ({ cdate, valid }) => {
  const rfqdate = cdate === true ? new Date() : new Date(cdate);
  let tempdate = new Date(rfqdate);
  console.log('getTransformedDate....BillDate ', rfqdate);
  console.log('getTransformedDate......Temp Date', tempdate);

  console.log('isNaN', isNaN(4));
  if (isNaN(Number(valid))) {
    return {
      status: 400,
      type: 'BAD_DATA',
      payload: 'Due Date Cannot be Date',
    };
  }

  const expirydate = new Date(
    tempdate.setDate(tempdate.getDate() + Number(valid))
  );
  console.log('getTransformedDate....Due Date ', expirydate);

  return { rfqdate, expirydate };
};

getTransformedDate({ cdate: '2022-01-01', valid: '7' });
