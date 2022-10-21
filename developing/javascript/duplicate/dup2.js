const items = [
  {
    itemid: '1',
    itemname: 'monitor',
    uomnameid: '61cb00f5b5bfa1adf87ba4e1',
  },
  {
    itemid: '2',
    itemname: 'cpu',
    uomnameid: '61cb00f5b5bfa1adf87ba4e2',
  },
  {
    itemid: '3',
    itemname: 'cpu',
    uomnameid: '61cb00f5b5bfa1adf87ba4e2',
  },
];

const key = 'uomnameid';

const uniqueArrayOfObject = [
  ...new Map(
    items.map((element) => {
      console.log('Element', element);
      console.log('@@@@@', [element[key], element]);
      return [element[key], element];
    })
  ).values(),
];

console.log('uniqueArrayOfObject', uniqueArrayOfObject);
