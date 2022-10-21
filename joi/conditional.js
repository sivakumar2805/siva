const Joi = require('joi');

const itemsObj = Joi.object({
  item1: Joi.string(),
});

const schema = Joi.object({
  item: Joi.array().min(1).items(itemsObj).required().messages({
    'any.required': 'Item is required!',
    'array.length': 'Atleast One Item is required!',
  }),
});

const valid = schema.validateAsync({ item: [] });

valid
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.log('err', err);
  });

/* const validatorTst1 = {
  itemid: itemIDJoi,
  itemname: itemnameJoi,
  uomname: uomnameJoi,
  uomnameid: uomnameIDJoi,
  quantity: quantityJoi,
  price: priceJoi,
  itemprops: propsJoi,
  itemtax: itemtaxJoi,
  itemdesc: itemDescriptionJoi,
};

const valid2 = {
  itemtotal: itemTotalJoi,
  itemtaxtotal: itemTaxTotalJoi,
  itemgrandtotal: itemGrandTotalJoi,
};

const validatewithouttotal = Joi.object({ ...validatorTst1 });
const validatorwithtotal = Joi.object({
  ...validatorTst1,
  /** if item length > 0 */
