let initialValue = 0;

let obj = [{ n: 5 }, { n: 9 }, { n: 13 }, { n: 25 }, { n: 40 }];

let sum = obj.reduce(function (accumulator, curValue) {
  console.log('accumulator', accumulator);
  console.log('curValue', curValue.n);
  return accumulator + curValue.n;
}, initialValue);

console.log(sum);

// {
//   return (obj['total'] =
//     (obj.price * obj.quantity * obj.itemtax[0].rate) / 100);
// }, 0);

// const result2 = arr.reduce(function (acc, obj) {
//   return (obj['total'] = (obj.price * obj.quantity
// }, 0);
// console.log('result', result2);
// console.log('arr', arr);

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

// Common tax

// let commontaxrates = 0;
// itemsObj.commontax.map((d) => (commontaxrates += d.rate));
// console.log('commontaxrates', commontaxrates);
// commontaxtotal = Number((itemgrandtotal * commontaxrates) / 100).toFixed(2);
// itemsObj['commontaxtotal'] = Number(commontaxtotal);
