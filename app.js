//requires
const express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(1111, () => {
  console.log('up on 1111');
});
