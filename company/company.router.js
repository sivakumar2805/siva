const express = require('express');
const {
  new_company,
  getCompany_list,
  updateCompany,
  trimObject,
  methodChecking,
} = require('./company.controller');
const router = express.Router();
const schemavalidator = require('../schemaValidator');
const validator = require('./company.validator');

router.post(
  '/newcompany',
  express.json({ limit: '15kb' }),
  schemavalidator(validator.companyValidator),
  new_company
);
router.post(
  '/getcompany',
  express.json({ limit: '15kb' }),
  schemavalidator(validator.companyListValidator),
  getCompany_list
);
router.post(
  '/updatecompany',
  express.json({ limit: '15kb' }),
  schemavalidator(validator.updateValidator),
  updateCompany
);
router.post('/trim', trimObject);

router.get('/view', methodChecking);

// Request Params Example
router.get('/view/:offset', methodChecking);

module.exports = router;
