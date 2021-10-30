const express = require('express');
const app = express();

require('./services/tweets-service')(app);

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(4000);
