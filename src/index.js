require('dotenv').config();

const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const app = express();

const router = require('./router');

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.resolve(__dirname, 'public')));
app.use(router);

app.listen(process.env.PORT);
