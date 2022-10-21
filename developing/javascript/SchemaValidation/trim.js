// function func(obj) {
//   //   const { key: value } = obj;
//   //   console.log(v);
//   const trim = obj.trim();
//   console.log('trim', trim);
//   return trim;
// }
// func('{  "name": "siva   "}');

function trimObject(obj) {
  var trimmed = JSON.stringify(obj, (key, value) => {
    if (typeof value === 'string') {
      return value.trim();
    }
    return value;
  });
  return JSON.parse(trimmed);
}

// var obj = {
//   data: {
//     address: { city: '\n \r     New York', country: '      USA     \n\n\r' },
//   },
// };

var obj = {
  data: {
    notax: false,
    allowtaxatbilling: true,
    countrycode: '     AF',
    tandc: [
      {
        tandc:
          '        The goods will be delivered within 30 working days.          ',
        tandcid: '      61cb00f5b5bfa1adf87ba4f0                 ',
      },
    ],
    title: '              PO Supply of Test sivaKKKKK                 ',
    items: [
      {
        itemid: '-1',
        itemname: 'cpu',
        uomname: 'Units',
        uomnameid: '61cb00f5b5bfa1adf87ba4e1',
        quantity: 2,
        price: 25000,
        itemtype: 5,
        itemtax: [
          {
            name: 'SGST',
            rate: 2.5,
            usertaxid: '61cb00f5b5bfa1adf87ba4e4',
          },
          {
            name: 'CGST',
            rate: 2.5,
            usertaxid: '61cb00f5b5bfa1adf87ba4e5',
          },
          {
            name: 'aaaa',
            rate: 1111111111111,
            usertaxid: '61cbf6c747898e055b3aa1b5',
          },
        ],
        itemprops: [
          {
            name: 'aaaaa',
            value: 'aaaaaaa',
          },
        ],
        itemdesc: '111111112222222222',
        total: 555555555608000,
      },
      {
        itemid: '-1',
        itemname: 'Desktop',
        uomname: 'Nos',
        uomnameid: '61cb00f5b5bfa1adf87ba4e1',
        quantity: 2,
        price: 25000,
        itemtype: 5,
        itemtax: [
          {
            name: 'SGST',
            rate: 2.5,
            usertaxid: '61cb00f5b5bfa1adf87ba4e4',
          },
          {
            name: 'CGST',
            rate: 2.5,
            usertaxid: '61cb00f5b5bfa1adf87ba4e5',
          },
          {
            name: 'aaaa',
            rate: 1111111111111,
            usertaxid: '61cbf6c747898e055b3aa1b5',
          },
        ],
        itemprops: [
          {
            name: 'aaaaa',
            value: 'aaaaaaa',
          },
        ],
        itemdesc: '111111112222222222',
        total: 555555555608000,
      },
    ],
    commontax: [
      {
        name: 'IGST',
        rate: 5,
        usertaxid: '62163a9d804691da2013b865',
      },
      {
        name: 'CGST',
        rate: 6,
        usertaxid: '62163a9d804691da2013b865',
      },
    ],
    currencycode: 'INR',
    valid: '2022-01-05T11:30:00.000Z',
    workspaceid: 10,
    cdate: '2021-12-29T05:47:06.901Z',
    buyeraddress: {
      company: 'stdhftd',
      address: 'Raja street',
      city: 'chrstdhstfh',
      state: 'TNrstdhdrtd',
      pincode: '7878787',
      taxid: '454GFFG',
      contactname: 'check',
      country: 'Afghanistan',
      id: '61cb00f5b5bfa1adf87ba4e4',
      email: 'apple@gaeprojects.com',
      phonenumber: '878787854',
    },
    selleraddress: {
      company: 'gaeprojects pvt ltd',
      address: '1, main road',
      city: 'delhi',
      state: 'india',
      pincode: '627841',
      taxid: '11111111111111111',
      contactname: 'kumar',
      country: '',
      id: '61cb00f5b5bfa1adf87ba4e4',
      email: 'kumar@gaeprojects.com',
      phonenumber: '9874512634',
    },
    itemcount: 1,
    totalitemvalue: 555555555608000,
    grandtotal: 616666666724880,
    description: 'testing',
    isautoref: false,
    refno: '1',
    sourcetype: 'new',
    locale: 'en',
    type: 'S',
  },
};
const a = trimObject(obj);
// console.log(a);

const testBoo = (isautoref) => {
  let refno;
  if (isautoref === false) {
    refno = '1';
  }
  return refno;
};

console.log(testBoo(false));

const testBoolean = (isautoref, refno) => {
  // let refno;
  if (isautoref === false) {
    // refno;
    return refno;
  } else {
    console.log('Prefix/');
  }
};

console.log(testBoolean(false, 1));
