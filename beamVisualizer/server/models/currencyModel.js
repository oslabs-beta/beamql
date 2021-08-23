const mongoose = require('mongoose');
const { Schema } = mongoose;

const MONGO_URI =
  'mongodb+srv://Exchange:exchangerate@cluster0.wirup.mongodb.net/exchangeDatabase?retryWrites=true&w=majority'; // fill in with db string after created

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'exchangeDatabase', //fill in with name of database
});

// const historySchema = new Schema({
//   date: String,
//   rate: Number,
// });

// const currencySchema = new Schema({
//   name: String,
//   history: [historySchema],
// });

// const userSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   currency: { type: currencySchema },
// });


const userSchema = new Schema({
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true},
      history: [{
        currency: String,
        date: String,
        rate: Number,
      }]
  
})





// first param is collection name in DB
const User = mongoose.model('User', userSchema);
// const Currency = mongoose.model('Currency', currencySchema);
// const History = mongoose.model('History', historySchema);

module.exports = User;
  // Currency,
  // History,

