const express = require('express');
const parse = require('body-parser');
const path = require('path');

const app = express();
const port = 8000;

app.use(parse.json());
app.use(parse.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

// sends client a new board
app.get('/api', (req, res) => {
  const board = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  res.status(200).send(board);
})

app.listen(port, () => console.log(`App listening on port ${port}`));