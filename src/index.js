const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// body-parser
app.use(express.urlencoded({extended: true})); // <form />
app.use(express.json()); // XMLHttpRequest, fetch, axios, ajax...

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Initial Routes
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
