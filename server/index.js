const express = require('express');
const dotenv = require('dotenv'); 
const db = require('./config/connection');
const routes = require('./routes');

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)


// comment when routes are created
//  app.get('/', async (req, res) => {
//    res.send('Hello World!')
//  })



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${PORT} running on port ${PORT}!`);
  });
});