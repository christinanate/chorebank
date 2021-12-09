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

app.get('/getPendingChores', (req, res) => {
  Chore.find({ completedBy: '' }).exec()
    .then(result => {
      // console.log('resulllt: ', result);
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get('/getBankInfo', (req, res) => {
  Account.find().exec()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.post('/completedBy', (req, res) => {
  const { completedBy, points } = req.body;
  Account.findOneAndUpdate({ name: completedBy }, { $inc: { totalPoints: points } }, {
    new: true,
    upsert: true
  })
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      console.log('err from completedBy: ', err);
      res.status(400).send(err);
    });
});

app.put('/updateCompletedByField', (req, res) => {
  const { task, completedBy } = req.body;
  Chore.findOneAndUpdate({ chore: task }, { completedBy })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`ChoreBank listening at http://localhost:${port}`)
});