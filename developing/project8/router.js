const express = require('express');
const { bucket, bucket2 } = require('./bucket');
const {
  insertdetails,
  findOne,
  insertNew,
  updating,
  aggregation,
  deleting,
  signUp,
  signIn,
  find,
  insert,
  findWithEmail,
} = require('./controller');
const {
  insertArray,
  getStudentsList,
  deleteone,
  getStudentById,
  updateone,
  findAll,
} = require('./controller2');
const { addItems, addItemsWithModel, createOrder } = require('./post');
const router = express.Router();

router.post(
  '/insert/customer/test',
  express.json({ limit: '15kb' }),
  insertdetails
);

router.post('/findone/customer/test', express.json({ limit: '15kb' }), findOne);

router.post('/insertnew/test', express.json({ limit: '15kb' }), insertNew);

router.post('/update/test', express.json({ limit: '15kb' }), updating);

router.post('/aggregate/test', express.json({ limit: '15kb' }), aggregation);

router.post('/delete/test', express.json({ limit: '15kb' }), deleting);

// ************************************ Student Details(Controller2) **************************************

router.post('/insert/student', express.json({ limit: '15kb' }), insertArray);

router.post('/students/list', express.json({ limit: '15kb' }), getStudentsList);

router.post('/delete/student', express.json({ limit: '15kb' }), deleteone);

router.post(
  '/stubyid/student',
  express.json({ limit: '15kb' }),
  getStudentById
);

router.post('/update/student', express.json({ limit: '15kb' }), updateone);

// ************************* Bucket ******************************
router.post('/bucket/student', express.json({ limit: '15kb' }), bucket);
router.post('/bucket2/student', express.json({ limit: '15kb' }), bucket2);

// ********************** SignUp and SignIn
router.post('/signUp', express.json({ limit: '15kb' }), signUp);
router.post('/signIn', express.json({ limit: '15kb' }), signIn);

router.post('/findall', express.json({ limit: '15kb' }), findAll);

///

router.post('/findmap', express.json({ limit: '15kb' }), findWithEmail);

// ************************************************

router.post('/insertitems', express.json({ limit: '15kb' }), createOrder);

module.exports = router;
