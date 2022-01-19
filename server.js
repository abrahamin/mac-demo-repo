const express = require('express');
const path = require('path');
const { middleware } = require('./middleware/middleware')
const db = require("./db");
const PORT = 3001;

app.use(middleware);

const app = express();