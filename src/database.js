const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect(`${process.env.DB_CONNECTION}`, {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
