const express = require('express');
const path = require('path');
const currencyApi = require('./routes/currencyApi');
const userRouter = require('./routes/user');
const cors = require('cors');
const currencyController = require('./controllers/currencyController');
const dotenv = require('dotenv');
dotenv.config({path: path.resolve(__dirname, '../config.env' )})
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
var fs = require('fs')
const app = express();
const morgan = require('morgan');
app.use(cookieParser())

// app.use(morgan((':method :url :status :res[content-length] - :response-time ms')));
app.use(morgan('tiny'));
// morgan('combined', {
//   skip: function (req, res) { return res.statusCode < 400 }
// })

// // log only 4xx and 5xx responses to console
// app.use(morgan('dev', {
//   skip: function (req, res) { return res.statusCode < 400 }
// }))
 
// // log all requests to access.log
// app.use(morgan('common', {
//   stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// }))



app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //bodyParser deprecatd ML
app.use(express.static(path.join(__dirname, '../'))); //serves the index.html

app.use(cors());
// define route handlers
app.use('/currencyApi', currencyApi);
app.use('/user', userRouter);

app.post('/auth/google', currencyController.setCookie, (req, res) => {
  return res.status(200).json('success');
})

// oops did u think any of the buttons below worked lol
// app.get('/login', (req, res) => {
//   res.status(200).render(path.join(__dirname, '../client/Login.jsx'));
// });

// app.get('/signup', (req, res) => {
//   res.render('../client/Signup.jsx'); //ILLEGAL in react no?
// });

app.post('/addPort', currencyController.getCurrencyId, currencyController.addPortfolio, (req, res) => {
  return res.status(200).send('Added to portfolio!');
})

// app.post('/signup', databaseController.createUser, (req, res) => {
//   res.status(200).redirect('/'); //ILLEGAL in react no?
// });

app.get('/user/getPort', currencyController.getPortfolio, (req, res) => {
 return res.status(200).json(res.locals.portfolio);

})

app.post('/getAllRates', currencyController.getAllRates, (req,res) => {
  return res.status(200).json(res.locals.rates)
})
/**
 * 404 handler
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
// hardcoded into port 3000
app.listen(3000, () => {
  console.log(`Server listening on port: 3000`); // just to test
});

module.exports = app;
