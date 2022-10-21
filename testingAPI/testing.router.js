const express = require('express');
const middleware = require('./middleware');

const {
  function_SignUp,
  function_SignIn,
  function_ChangePassword,
  aggregation,
} = require('./testing.functions');
const router = express.Router();

router.post(
  '/signup',
  express.json({ limit: '15kb' }),
  middleware,
  function_SignUp
);

router.post(
  '/signin',
  express.json({ limit: '15kb' }),
  middleware,
  function_SignIn
);
// router.post(
//   '/changepassword',
//   express.json({ limit: '15kb' }),
//   function_ChangePassword
// );

router.post('/aggregate', express.json({ limit: '15kb' }), aggregation);
module.exports = router;
