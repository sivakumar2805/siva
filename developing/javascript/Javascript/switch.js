const fn1 = async (path) => {
  switch (path) {
    case '/rfq/sent/new':
      {
        console.log('RFQ Sent New');
      }
      break;
    case '/rfq/sent/list':
      {
        console.log('RFQ Sent List');
      }
      break;
    case '/rfq/sent/byid':
      {
        console.log('RFQ Sent View');
      }
      break;
    default:
      console.log('Invalid Path');
      break;
  }
};

const fn2 = (path) => {
  switch (path) {
    case '/rfq/inbox/list':
      {
        console.log('RFQ inbox List');
      }
      break;
    case '/rfq/inbox/byid':
      {
        console.log('RFQ inbox View');
      }
      break;
    default:
      console.log('Invalid Path');
      break;
  }
};

const fn3 = (path) => {
  switch (path) {
    case '/rfq/sent/addendum/list':
      {
        console.log('sent addendum list');
      }
      break;
    case '/rfq/sent/addendum/byid':
      {
        console.log('sent addendum view');
      }
      break;
    case '/rfq/inbox/addendum/list':
      {
        console.log('inbox addendum list');
      }
      break;
    case '/rfq/inbox/addendum/byid':
      {
        console.log('Inbox addendum view');
      }
      break;
    default:
      break;
  }
  // console.log('Fn3');
};

const fn4 = () => {
  switch (path) {
    case '/rfq/sent/addendum/list':
      {
        console.log('sent addendum list');
      }
      break;
    case '/rfq/sent/addendum/byid':
      {
        console.log('sent addendum view');
      }
      break;
    case '/rfq/inbox/addendum/list':
      {
        console.log('inbox addendum list');
      }
      break;
    case '/rfq/inbox/addendum/byid':
      {
        console.log('Inbox addendum view');
      }
      break;
    default:
      break;
  }
};

module.exports = { fn1, fn2, fn3 };
