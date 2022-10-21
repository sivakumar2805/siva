const express = require('express');
const {
  new_uom,
  get_uom,
  savePermission,
  addPermission,
  user_Middleware,
  function_Add,
  updateFn,
  searchFn,
} = require('./uom.controller');
const schemavalidator = require('../schemaValidator');
const validator = require('./uom.validator');
const router = express.Router();

router.post(
  '/newuom',
  express.json({ limit: '15kb' }),
  // user_Middleware('UOM:CREATE'),
  // schemavalidator(validator.newUomValidator),
  new_uom
);

router.post(
  '/getuomlist',
  express.json({ limit: '15kb' }),
  // schemavalidator(validator.uomListValidator),
  get_uom
);

router.post('/savepermission', express.json({ limit: '15kb' }), savePermission);
router.post('/addpermission', express.json({ limit: '15kb' }), addPermission);

router.post(
  '/newuom',
  express.json({ limit: '15kb' }),
  user_Middleware('UOM:CREATE'),
  // schemavalidator(validator.newUomValidator),
  function_Add
);

router.post('/update/uom', express.json({ limit: '15kb' }), updateFn);
router.post('/search', express.json({ limit: '15kb' }), searchFn);
module.exports = router;
