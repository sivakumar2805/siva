const itemsObj = {
  items: [
    {
      quantity: 2,
      price: 1.5,
      itemtax: [
        {
          name: 'GST',
          rate: 2.5,
        },
      ],
    },
  ],
  commontax: [
    {
      name: 'CGST',
      rate: 3.5,
    },
    {
      name: 'CGST',
      rate: 3.5,
    },
  ],
};

let itemtotal;
let itemtaxtotal;
let commontaxtotal;

itemsObj.items.reduce((acc, obj) => {
  console.log('obj', obj);
  itemtotal = Number(obj.price * obj.quantity).toFixed(2);
  obj['itemtotal'] = Number(itemtotal);

  let itemtaxrates = 0;
  obj.itemtax.map((d) => (itemtaxrates += d.rate));
  console.log('Rates', itemtaxrates);
  itemtaxtotal = Number((itemtotal * itemtaxrates) / 100).toFixed(2);
  obj['itemtaxtotal'] = Number(itemtaxtotal);

  let itemgrandtotal = Number(Number(itemtaxtotal) + Number(itemtotal)).toFixed(
    2
  );
  console.log('type', typeof itemgrandtotal);
  obj['itemgrandtotal'] = Number(itemgrandtotal);

  // Common tax

  let commontaxrates = 0;
  itemsObj.commontax.map((d) => (commontaxrates += d.rate));
  console.log('commontaxrates', commontaxrates);
  commontaxtotal = Number((itemgrandtotal * commontaxrates) / 100).toFixed(2);
  itemsObj['commontaxtotal'] = Number(commontaxtotal);

  /**
   * ItemTotal   =>{Qty*Price}
   * ItemTaxTotal =>{ (ItemTotal*(Sum of ItemTax-rates))/100}
   * ItemGrandTotal => {ItemTotal+ItemTaxTotal }
   */

  //Required Parms

  //totalwithtax =>{(Sum of ItemGrandTotal)}
  //totalwithouttax=>{(Sum of ItemTotal)}
  //commontaxtotal=>{totalwithtax*(Sum of CommonTax-rates))/100}
  //grandtotal={commontaxtotal+totalwithtax}
}, 0);

console.log('itemsObj', itemsObj);
