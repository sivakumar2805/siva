const _ = require('lodash');

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

const findDuplicateItem = ({ items = [] }) => {
  const map = items.map((e) => {
    // console.log('dq', e.deliverquantity);
    const omit = _.omit(e, ['deliverquantity']);
    // console.log('Omit', omit);
    return omit;
  });
  //   console.log('map', map);

  const item = getUniqueListBy(map, 'poitemid');
  //   console.log('value', value);
  let initialValue = 0;
  const total = items.reduce((acc, cv) => {
    // console.log('acc', acc);
    // console.log('cv', cv);
    return acc + cv.deliverquantity;
  }, initialValue);

  console.log('total', total);
  return {
    uniqueitemlist: item,
    totaldeliverquantity: total,
  };
};
findDuplicateItem({
  items: [
    {
      itemid: '-1',
      itemname:
        'Culpa veniam consectetur officia occaecat aliquip eu in. Duis duis esse dolore Lorem laboris consectetur magna et quis officia ut aute veniam non cupidatat. Reprehenderit consequat culpa ullamco est sunt cupidatat quis deserunt occaecat est aliqua consectetur ut et. Lorem quis esse elit nisi nulla aliquip eiusmod fugiat tempor ex. Sint tempor minim esse et exercitation nulla voluptate adipisicing aliquip duis reprehenderit nulla consequat.',
      uomname: 'Nos',
      uomnameid: '07c041f7-d7f2-4e38-aa1d-a9661b3adb9c',
      hsncode: '2435',
      itemprops: [],
      itemdesc: 'Fugiat elit qui commodo nisi reprehenderit magna.',
      itemtax: [],
      orderquantity: 30,
      price: 10,
      itemtotal: 60,
      itemtaxtotal: 0,
      itemgrandtotal: 60,
      poitemid: '99d6f69d-af97-4e43-b628-6160ed0004a1',
      deliverquantity: 6,
    },
    {
      itemid: '-1',
      itemname: 'Qui in duis consequat consequat labore irure culpa ea.',
      uomname: 'Units',
      uomnameid: '07c041f7-d7f2-4e38-aa1d-a9661b3adb9c',
      hsncode: '2435',
      itemprops: [],
      itemdesc:
        'Ullamco quis sint non do anim id ullamco velit eiusmod ad ullamco eiusmod tempor excepteur elit dolore aliquip occaecat tempor.',
      itemtax: [],
      orderquantity: 40,
      price: 10,
      itemtotal: 70,
      itemtaxtotal: 0,
      itemgrandtotal: 70,
      poitemid: '46320286-e94c-4db3-a4fa-db9a5a95e9a0',
      deliverquantity: 7,
    },
    {
      itemid: '-1',
      itemname:
        'Culpa veniam consectetur officia occaecat aliquip eu in. Duis duis esse dolore Lorem laboris consectetur magna et quis officia ut aute veniam non cupidatat. Reprehenderit consequat culpa ullamco est sunt cupidatat quis deserunt occaecat est aliqua consectetur ut et. Lorem quis esse elit nisi nulla aliquip eiusmod fugiat tempor ex. Sint tempor minim esse et exercitation nulla voluptate adipisicing aliquip duis reprehenderit nulla consequat.',
      uomname: 'Nos',
      uomnameid: '07c041f7-d7f2-4e38-aa1d-a9661b3adb9c',
      hsncode: '2435',
      itemprops: [],
      itemdesc: 'Fugiat elit qui commodo nisi reprehenderit magna.',
      itemtax: [],
      orderquantity: 30,
      price: 10,
      itemtotal: 60,
      itemtaxtotal: 0,
      itemgrandtotal: 60,
      poitemid: '99d6f69d-af97-4e43-b628-6160ed0004a1',
      deliverquantity: 7,
    },
    {
      itemid: '-1',
      itemname: 'Qui in duis consequat consequat labore irure culpa ea.',
      uomname: 'Units',
      uomnameid: '07c041f7-d7f2-4e38-aa1d-a9661b3adb9c',
      hsncode: '2435',
      itemprops: [],
      itemdesc:
        'Ullamco quis sint non do anim id ullamco velit eiusmod ad ullamco eiusmod tempor excepteur elit dolore aliquip occaecat tempor.',
      itemtax: [],
      orderquantity: 40,
      price: 10,
      itemtotal: 70,
      itemtaxtotal: 0,
      itemgrandtotal: 70,
      poitemid: '46320286-e94c-4db3-a4fa-db9a5a95e9a0',
      deliverquantity: 8,
    },
  ],
});
