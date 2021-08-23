require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();

const router = require('./router');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.resolve(__dirname, 'public')));
app.use(router);

app.listen(process.env.PORT);
