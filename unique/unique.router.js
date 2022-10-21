const express = require('express');
const {
  createUnique,
  getUniqueWorksapce,
  wsByModule,
  latestDocs,
  usingLet,
  uomPermission,
  searchIndexFn,
} = require('./unique.controller');
const router = express.Router();

router.post('/unique/new', express.json({ limit: '15kb' }), createUnique);
router.post(
  '/unique/list',
  express.json({ limit: '15kb' }),
  getUniqueWorksapce
);
// router.post('/unique/view', express.json({ limit: '15kb' }), wsByModule);

router.post('/latest/docs', express.json({ limit: '15kb' }), latestDocs);
router.post('/using/let', express.json({ limit: '15kb' }), usingLet);
router.post('/uom/permission', express.json({ limit: '15kb' }), uomPermission);
router.post('/or/search', express.json({ limit: '15kb' }), searchIndexFn);
module.exports = router;
