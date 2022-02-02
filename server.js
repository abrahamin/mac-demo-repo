const express = require('express');
const sequelize = require('./config/connection')

const exphbs = require('express-handlebars');

const logger = require('morgan');
const mongoose = require('mongoose');

const path = require('path');
const { middleware } = require('./middleware/middleware')
const db = require("./db");
const PORT = process.env.PORT || 3001;

app.use(middleware);

const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(logger('dev'));