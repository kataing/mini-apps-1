const express = require('express');
const parse = require('body-parser');
const path = require('path');

const app = express();
const port = 3333;

app.use(parse.json());
app.use(parse.urlencoded( { extended: true }));
app.use(express.static(path.join(__dirname, './client/dist/')));

// app.get()

app.listen((port) => console.log(`Checkout App listening on port ${port}.`));

