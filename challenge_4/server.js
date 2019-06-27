const express = require('express');
const parse = require('body-parser');
const path = require('path');

const app = express();
const port = 8000;

app.use(parse.json());
app.use(parse.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => console.log(`App listening on port ${port}`));