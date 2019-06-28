const express = require('express');
const parse = require('body-parser');
const path = require('path');

const app = express();
const port = 8000;

app.use(parse.json());
app.use(parse.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

let board;
let colTracker = {};

checkEndGame = (r, c) => {
  if(checkHorizontal(r)) {
    return true;
  }
  return false;
}

checkHorizontal = (r) => {
  let count = 0;
  for(let i = 0; i < r.length; i++) {
    if(this.state.board[r][i]) {
      count ++;
    } else {
      count = 0;
    }
    if(count === 4) {
      return true;
    }
  }
  return false;
}

updateBoard = (c, p) => {
  if(colTracker[c]) {
    colTracker[c] ++;
  } else {
    colTracker[c] = 1;
  }
  const r = 6 - colTracker[c];
  board[r][c] = Number(p);

  return r;
}

app.get('/api', (req, res) => {
  board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];
  res.status(200).send(board);
})

app.post('/api/:column', (req, res) => {
  const { column } = req.params;
  const { player } = req.query;
  const row = updateBoard(column, player);
  const endGame = checkEndGame(row, column);

  res.status(201).send({ board, endGame });
})

app.listen(port, () => console.log(`App listening on port ${port}`));