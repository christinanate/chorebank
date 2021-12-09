const express = require('express');
const { Chore, Account } = require('../database/index.js');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/addChore', (req, res) => {
  console.log('req.body: ', req.body);
  const { chore, points, createdBy, createdDate } = req.body;
  res.end();
});

app.listen(port, () => {
  console.log(`ChoreBank listening at http://localhost:${port}`)
});