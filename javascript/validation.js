const reqkeys = ['name'];
const constcheckArg = ({ value, reqkeys }) => {
  console.log(value, reqkeys);
  letvalid = true;
  letmessage = '';

  reqkeys.map((v) => {
    //console.log("ee",v);
    if (valid) {
      constkeyValid = Object.keys(value).includes(v);
      if (!keyValid) {
        console.log('NeedReqkeys');
        valid = false;
        message = 'NeedReqKeys';
      }
      if (keyValid) {
        consta = Object.entries(value).map((o) => {
          const [key, value = null] = o;
          if (key === v) {
            if (!value) {
              valid = false;
              message = 'Need Req Values From Args';
              console.log('Value Cannot be null');
            }
          }
        });
      }
    }
  });

  return !valid ? message : valid;
};

const validation = checkArg({ value: testObj, reqkeys });

console.log('validation', validation);
