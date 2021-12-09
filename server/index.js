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
  const { chore, points, createdBy, createdDate, completedBy, completedDate } = req.body;

  Chore.create({ chore, points, createdBy, createdDate, completedBy, completedDate })
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    })
});

app.listen(port, () => {
  console.log(`ChoreBank listening at http://localhost:${port}`)
});