const arr = [
  {
    quantity: 11,
    price: 3.3,
    itemtax: [
      {
        name: 'GST',
        rate: 1.5,
      },
    ],
  },

  //   {
  //     quantity: 2,
  //     price: 20,
  //     itemtax: [
  //       {
  //         name: 'GST',
  //         rate: 20,
  //       },
  //     ],
  //   },
  //   {
  //     quantity: 3,
  //     price: 30,
  //     itemtax: [
  //       {
  //         name: 'GST',
  //         rate: 30,
  //       },
  //     ],
  //   },
  //   {
  //     quantity: 4,
  //     price: 40,
  //     itemtax: [
  //       {
  //         name: 'GST',
  //         rate: 40,
  //       },
  //     ],
  //   },
  //   {
  //     quantity: 5,
  //     price: 50,
  //     itemtax: [
  //       {
  //         name: 'GST',
  //         rate: 50,
  //       },
  //     ],
  //   },
  //   {
  //     quantity: 6,
  //     price: 60,
  //     itemtax: [
  //       {
  //         name: 'GST',
  //         rate: 6,
  //       },
  //       {
  //         name: 'GST',
  //         rate: 12,
  //       },
  //     ],
  //   },
];

const commontax = [
  {
    name: 'CGST',
    rate: 2.5,
  },
];

let itemtotal;
let itemtaxtotal;
let commontaxtotal;
arr.reduce((acc, obj) => {
  console.log('obj', obj);
  itemtotal = Number(obj.price * obj.quantity).toFixed(2);
  obj['itemtotal'] = Number(itemtotal);

  let itemtaxrates = 0;
  obj.itemtax.map((d) => (itemtaxrates += d.rate));
  console.log('Rates', itemtaxrates);
  itemtaxtotal = Number((itemtotal * itemtaxrates) / 100).toFixed(2);
  obj['itemtaxtotal'] = Number(itemtaxtotal);

  console.log('ItemTax Total', Number(itemtaxtotal).toFixed(2));
  console.log('Item Total', Number(itemtotal).toFixed(2));

  let itemgrandtotal = Number(Number(itemtaxtotal) + Number(itemtotal)).toFixed(
    2
  );
  console.log('type', typeof itemgrandtotal);
  obj['itemgrandtotal'] = Number(itemgrandtotal);

  // Common tax

  let commontaxrates = 0;
  commontax.map((d) => (commontaxrates += d.rate));
  console.log('commontaxrates', commontaxrates);
  commontaxtotal = Number((itemgrandtotal * commontaxrates) / 100).toFixed(2);
  obj['commontaxtotal'] = Number(commontaxtotal);

  /**
   * ItemTotal   =>{Qty*Price}
   * ItemTaxTotal =>{ (ItemTotal*(Sum of ItemTax-rates))/100}
   * ItemGrandTotal => {ItemTotal+ItemTaxTotal }
   * CommonTaxTotal =>{ItemGrandTotal*(Sum of CommonTax-rates))/100}
   */

  //Required Parms

  //totalwithtax =>{ItemTaxTotal}
  //totalwithouttax=>{ItemTotal}
  //commontaxtotal=>{CommonTaxTotal}
  //grandtotal={CommonTaxTotal+ItemGrandTotal}
}, 0);

console.log('arr', arr);
