const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/choreBank', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('db connection successful!');
});

const choreSchema = new mongoose.Schema({
  chore: String,
  points: Number,
  createdBy: String,
  createdDate: Date,
  completedBy: { type: String, index: true },
  completedDate: Date
});

const accountSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  totalPoints: Number
});

const Chore = mongoose.model('Chore', choreSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = { Chore, Account };

