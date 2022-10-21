// ******************************* ********************
const express = require('express');
const app = express();

app.get('/new', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('app listened in', 3000);
});
