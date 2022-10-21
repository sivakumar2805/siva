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
        {
          name: 'GST',
          rate: 2.5,
        },
        {
          name: 'GST',
          rate: 2.5,
        },
      ],
    },
    {
      quantity: 2,
      price: 1.5,
      itemtax: [
        {
          name: 'GST',
          rate: 2.5,
        },
        {
          name: 'GST',
          rate: 2.5,
        },
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
let commontaxTotal;

const itemsFn = (itemsObj) => {
  itemsObj.items.reduce((acc, obj) => {
    console.log('ACCUMULATOR', acc);
    console.log('OBJECT', obj);
    itemtotal = Number(obj.price * obj.quantity).toFixed(2);
    obj['itemtotal'] = Number(itemtotal);

    let itemtaxrates = 0;
    obj.itemtax.map((d) => (itemtaxrates += d.rate));
    itemtaxtotal = Number((itemtotal * itemtaxrates) / 100).toFixed(2);
    obj['itemtaxtotal'] = Number(itemtaxtotal);

    let itemgrandtotal = Number(
      Number(itemtaxtotal) + Number(itemtotal)
    ).toFixed(2);
    obj['itemgrandtotal'] = Number(itemgrandtotal);
  }, 0);

  // totalwithtax

  let totalwithtax = 0;
  itemsObj.items.forEach((e) => {
    // console.log('eee', e);
    totalwithtax += e.itemgrandtotal;
    // console.log('sumOfItemGrandTotal', totalwithtax);
    itemsObj['totalwithtax'] = Number(totalwithtax);
  });

  // totalwithouttax
  let totalwithouttax = 0;
  itemsObj.items.forEach((e) => {
    totalwithouttax += e.itemtotal;
    // console.log('SumOfItemTotal', totalwithouttax);
    itemsObj['totalwithouttax'] = Number(totalwithouttax);
  });

  // CommonTaxTotal
  let commontaxrates = 0;
  itemsObj.commontax.forEach((el) => {
    // console.log('ELELE', el);
    commontaxrates += el.rate;
    commontaxTotal = Number((totalwithtax * commontaxrates) / 100).toFixed(2);
    // console.log('commontaxTotal@@@', commontaxTotal);
    itemsObj['commontaxtotal'] = Number(commontaxTotal);
  });

  //GrandTotal
  let grandtotal;
  itemsObj['grandtotal'] = grandtotal = Number(
    Number(commontaxTotal) + Number(totalwithtax)
  );
  return totalwithtax, totalwithouttax, commontaxTotal, grandtotal;
};

itemsFn(itemsObj);
console.log('itemsObj', itemsObj);
