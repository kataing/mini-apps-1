const express = require('express');
const parse = require('body-parser');
const path = require('path');
// const db = require('../database/index.js');
// const models = require('../database/models.js');

const app = express();
const route = require('./router.js');
const port = 3333;

app.use(parse.json());
app.use(parse.urlencoded( { extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));

app.use('/route', route);

app.listen(port, () => console.log(`Checkout App listening on port ${port}.`));