const express = require('express');
const app = express();
// const files1 = require('./files1')
app.use(express.json());

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

// const {
//   trim_all,
//   trim_body,
//   trim_params,
//   trim_util,
// } = require('request_trimmer');
// app.use(express.json());
// //trim request body and query.
// app.use(trim_all);

const router = require('./router');
app.use('/', router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `**********>>>>>>>> Server Started On Port ${PORT} <<<<<<<<**********`
  );
});

// let a = 0;
// if (a > 1) {
//   const files1 = require('./files1');
//   console.log('files1', files1);
// } else {
//   const files2 = require('./files2');
//   console.log('files2', files2);
// }
