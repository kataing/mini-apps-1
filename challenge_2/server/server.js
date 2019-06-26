const express = require('express');
const path = require('path');
const parse = require('body-parser');
const fs = require('fs');
const flattenObj = require('./flattenObj.js');

const app = express();
const port = 2000;

app.use(parse.json());
app.use(parse.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

const filename = 'test.csv';
const filepath = path.join(__dirname, `./export/${filename}`);

// sends data to the client
app.get('/api', (req, res) => {
  const contents = fs.readFileSync(filepath);
  res.status(200).send(contents);
});

// posts data from the client
app.post('/api', (req, res) => {
  const { body } = req;
  let csvStr = flattenObj(body);
  fs.writeFileSync(filepath, csvStr);
  res.status(201).send(csvStr);
});

app.listen(port, () => { console.log(`Listening on port ${port}.`) })

module.exports = app;