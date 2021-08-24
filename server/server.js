const path = require('path');
const express = require('express');
const app = express();
const router = require('./router.js');
const PORT = 3000;



/**
 * handle parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
 /**
  * handle requests for static files
  */
 //app.use(express.static(path.resolve(__dirname, '../client'))); // look over this later
 app.use(express.static(path.join(__dirname, '../')));
 
 /**
  * define route handlers
  */
app.use('/api', router);
 

 
 // catch-all route handler for any requests to an unknown route
 app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


 

 //Error handling
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
 
 /**
  * start server
  */
 app.listen(PORT, () => {
   console.log(`Server listening on port: ${PORT}...`);
 });
 
 module.exports = app;