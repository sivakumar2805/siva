// const express = require('express');
// const {
//   getSelfProfile,
//   getSelfProfileByid,
//   updateSelfProfile,
//   deleteSelfProfile,
//   paginationWithAgg,
//   newSelfProfile,
//   serachOption,
//   fn1,
// } = require('./self.controller');
// const schemaValidator = require('../schemaValidator');
// const validator = require('./self.validator');
// const { postTrimmer } = require('../trim.middleware');
// const router = express.Router();

// router.post(
//   '/createselfprofile',
//   express.json({ limit: '15kb' }),
//   // schemaValidator(validator.newselfProfileValidator),
//   postTrimmer,
//   newSelfProfile
// );

// router.post('/getselfprofile', express.json({ limit: '15kb' }), getSelfProfile);

// // router.post(
// //   '/getselfprofilebyid',
// //   express.json({ limit: '15kb' }),
// //   schemaValidator(validator.profileIdValidator),
// //   getSelfProfileByid
// // );

// router.post(
//   '/updateselfprofile',
//   express.json({ limit: '15kb' }),
//   schemaValidator(validator.updateselfProfileValidator),
//   updateSelfProfile
// );

// router.post(
//   '/deleteselfprofile',
//   express.json({ limit: '15kb' }),
//   // schemaValidator(validator.profileIdValidator),
//   deleteSelfProfile
// );

// router.post('/pagination', express.json({ limit: '15kb' }), paginationWithAgg);
// router.post('/search', express.json({ limit: '15kb' }), serachOption);
// router.post('/aaaa', express.json({ limit: '15kb' }), fn1);
// module.exports = router;
