const _ = require('lodash');

const mergeQtyWithItemsByItemID = ({ items = [] }) => {
  const mappedItems = items.map((d) => d.poitemid);

  // console.log('mappedItems', mappedItems);
  const uniqueItems = _.uniq(mappedItems);
  // console.log('uniqueItems', uniqueItems);

  const mergedQtyItems = uniqueItems.reduce((acc, c) => {
    // console.log('acc', acc);

    // console.log('c', c);

    const filterdItems = items.filter((i) => i.poitemid === c);
    console.log('filterdItems', filterdItems);
    const s = filterdItems.reduce((a, c) => a + c.deliverquantity, 0);

    console.log('sss', s);
    // const curItem = items.find((it) => it.poitemid === c);
    // const result = { ...curItem, quantity: s, deliverquantity: s };
    // if (acc.length == 0) {
    //   acc = [result];
    //   return acc;
    // }

    // const res = [...acc, result];
    // return res;
  }, []);

  return mergedQtyItems;
};

console.log(
  mergeQtyWithItemsByItemID({
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
        poitemid: 'a3097da0-b02f-49c2-8dec-37306715f012',
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
        poitemid: '920eb14d-918b-4c83-8f0f-f0d90543c32b',
        deliverquantity: 7,
      },
    ],
  })
);
