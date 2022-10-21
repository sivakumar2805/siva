const express = require('express');
const router = express.Router();
const app = express();

router.get('/app', function (req, res) {
  res.setHeader();
});

app.use('/', router);
app.listen(3000, () => {
  console.log('Started on PORT 3000');
});
