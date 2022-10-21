const { validate_NewUom } = require('@rfqinc/v2lib/uom');

validate_NewUom({ data: {} })
  .then((res) => {
    console.log('Res', res);
  })
  .catch((err) => {
    console.log('Error', err);
  });
