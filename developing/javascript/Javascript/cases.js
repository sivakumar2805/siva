const { fn1, fn2, fn3 } = require('./switch');

// const fn = async (path) => {
//   if (path.startsWith('/rfq/sent')) {
//     console.log('RFQ Sent');
//     const one = fn1(path);
//   } else if (path.startsWith('/rfq/inbox')) {
//     console.log('RFQ Inbox');
//     const second = await fn2(path);
//   } else if (path.startsWith('/rfq/draft')) {
//     console.log('RFQ Draft');
//     const third = await fn3(path);
//   } else {
//     console.log('Invalid path');
//   }
// };

// fn('/rfq/sent');

const rfqfn = async (path) => {
  if (path.includes('/rfq/sent/')) {
    console.log('RFQ Sent');
    const one = await fn1(path);
  } else if (path.includes('/rfq/inbox/')) {
    console.log('RFQ Inbox');
    const second = await fn2(path);
  } else if (path.includes('/rfq/sent/addendum/')) {
    console.log('RFQ Draft');
    const third = await fn3(path);
  } else {
    console.log('Invalid path');
  }
};

// rfqfn('/rfq/sent/addendum/list');

const rfqfn2 = async (path) => {
  if (path.includes('/addendum/')) {
    console.log('RFQ Addendum');
    const one = await fn3(path);
  } else if (path.includes('/rfq/inbox/')) {
    console.log('RFQ Inbox');
    const second = await fn2(path);
  } else if (path.includes('/rfq/sent/')) {
    console.log('RFQ sent');
    const third = await fn1(path);
  } else if (path.includes('/conversation')) {
    const fourth = await fn4(path);
  } else {
    console.log('Invalid path');
  }
};

rfqfn2('/rfq/inbox/addendum/list');

//else if(path.includes('/conversation')){
// const fourth = await fn4(path)
// }
