// const done = true;

// const promise = (done) => {
//   return new Promise((resolve, reject) => {
//     if (done) {
//       resolve('Stuff Worked');
//     }
//   });
// };

// promise.then((result) => {
//   console.log('result', result);
// });

const done = true;
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = 'Still working on something else';
    reject(why);
  }
});

const checkIfItsDone = () => {
  isItDoneYet
    .then((ok) => {
      console.log(ok);
    })
    .catch((notok) => {
      console.log(notok);
    });
};

checkIfItsDone();

// **********************************************************************

// let promise = new Promise((resolve, reject) => {
//   let a = 1 + 4;
//   if (a === 2) {
//     resolve('Success');
//   } else {
//     reject('Failure');
//   }
// });

// promise
//   .then((msg) => {
//     console.log('This is in the then ' + msg);
//   })
//   .catch((msg) => {
//     console.log('This is in the catch ' + msg);
//   });

// function tutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'user left',
//         msg: ' :(',
//       });
//     }
//   });
// }

const fn1 = async (name) => {
  console.log('siva ' + name);
};

const fn2 = async (name2) => {
  console.log('akash ' + name2);
};

const values = async (name, name2) => {
  await Promise.all([fn1(name), fn2(name2)]);
};

// console.log(values('kumar', 'hari'));
const log = values('kumar', 'hari');
console.log('log', log);
