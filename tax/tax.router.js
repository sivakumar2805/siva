const express = require('express');
const { new_tax, get_taxList } = require('./tax.controller');
const schemavalidator = require('../schemaValidator');
const validator = require('./tax.validator');
const router = express.Router();

router.post(
  '/newtax',
  express.json({ limit: '15kb' }),
  schemavalidator(validator.taxValidator),
  new_tax
);
router.post(
  '/gettaxlist',
  express.json({ limit: '15kb' }),
  schemavalidator(validator.taxListValidator),
  get_taxList
);

module.exports = router;
