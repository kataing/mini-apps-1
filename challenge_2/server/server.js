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

// sends data to the client
app.get('/api', (req, res) => {
  const filename = 'test.csv';
  const filepath = path.join(__dirname, `./export/${filename}`);
  const contents = fs.readFileSync(filepath);
  res.status(200).send(contents);
});

// posts data from the client
app.post('/api', (req, res) => {
  const { body } = req;
  const filename = 'test.csv';
  const filepath = path.join(__dirname, `./export/${filename}`);
  let csv = flattenObj(body);
  fs.writeFileSync(filepath, csv);
  res.status(201).send('Your information has been sent');
});

app.listen(port, () => { console.log(`Listening on port ${port}.`) })

module.exports = app;