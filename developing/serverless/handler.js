'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: {
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: `${this.bye.length}`,
    },
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.bye = async (event) => {
  // console.log('event', event);
  const { data2 } = event;
  console.log('data2', data2);
  return {
    statusCode: 200,
    body: JSON.parse(
      JSON.stringify({
        name: 'Siva Kumar',
        age: 21,
      })
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
