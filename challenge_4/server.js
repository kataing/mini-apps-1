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

checkEndGame = (r, c, p) => {
  if (checkHorizontal(r, p)) {
    return true;
  } else if (checkVertical(c, p)) {
    return true;
  } else if (checkMajorDiagonal(r, c, p)) {
    return true;
  } else if (checkMinorDiagonal(r, c, p)) {
    return true;
  }
  return false;
}

checkHorizontal = (r, p) => {
  let count = 0;
  for (let i = 0; i < board[r].length; i++) {
    if (board[r][i] === Number(p)) {
      count++;
    } else {
      count = 0;
    }
    if (count === 4) {
      return true;
    }
  }
  return false;
}

checkVertical = (c, p) => {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i][c] === Number(p)) {
      count++;
    } else {
      count = 0;
    }
    if (count === 4) {
      return true;
    }
  }
  return false;
}

checkMajorDiagonal = (r, c, p) => {
  let count = 0;
  let diagonal = r - c;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i - j === diagonal) {
        if(board[i][j] === Number(p)) {
        count++;
        } else {
          count = 0;
        }
        if(count === 4) {
          return true;
        }
      }
    }
  }
  return false;
}

checkMinorDiagonal = (r, c, p) => {
  let count = 0;
  let diagonal = r + c;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j === diagonal) {
        if(board[i][j] === Number(p)) {
        count++;
        } else {
          count = 0;
        }
        if(count === 4) {
          return true;
        }
      }
    }
  }
  return false;
}

updateBoard = (c, p) => {
  if (colTracker[c]) {
    colTracker[c]++;
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
  const row = updateBoard(Number(column), player);
  const endGame = checkEndGame(row, Number(column), player);

  res.status(201).send({ board, endGame });
})

app.listen(port, () => console.log(`App listening on port ${port}`));