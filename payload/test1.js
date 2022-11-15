const payloadfn = ({ message = '', status }) => {
  // let badRequest;
  // let notFound;
  switch (status) {
    case 400:
      let badRequest = {
        status,
        payload: message ? message : 'Bad-Request',
      };

      return badRequest;

    case 404:
      let notFound = {
        status,
        payload: message ? message : 'Not Found',
      };

      return notFound;

    default:
      console.log('**************');
      break;
  }
  // return badRequest, notFound;
};

// console.log(payloadfn({ status: 404 }));
console.log(payloadfn);
