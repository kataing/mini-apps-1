import React from 'react';
import Piece from './piece.jsx';

const Row = (props) => {
  return (
    <tr>
      {props.row.map((piece, key) => {
        return (
          <Piece key={key} rowIndex={props.rowIndex} colIndex={key} piece={piece} handleOnClick={props.handleOnClick} determinePlayer={props.determinePlayer}/>
        )
      })}
    </tr>
  )
}

export default Row;