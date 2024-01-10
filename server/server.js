const path = require('path');
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const http = require('http');

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3001;
const base = process.env.BASE || '/';
const db = require('./config/connection');

// Create http server
const app = express()

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


if (isProduction) {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
  })

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Backend server listening on: http://localhost:' + PORT));
});
