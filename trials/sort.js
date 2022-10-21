// const modifyData = (param) => {
//   const data = JSON.parse(JSON.stringify(param));
//   console.log('data', data);
// };

// modifyData(`{ "name": "siva" }`);

function trimObj(obj) {
  if (obj === null && !Array.isArray(obj) && typeof obj != 'object') return obj;
  return Object.keys(obj).reduce(
    function (acc, key) {
      acc[key.trim()] =
        typeof obj[key] === 'string'
          ? obj[key].trim()
          : typeof obj[key] === 'object'
          ? trimObj(obj[key])
          : obj[key];
      return acc;
    },
    Array.isArray(obj) ? [] : {}
  );
}

console.log(trimObj(`{ "name": "siva" }`));
